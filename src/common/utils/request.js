import axios from "axios";
import qs from "qs";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { Message } from "element-ui";
import store from "@/store";
import router from "@/router";

axios.defaults.withCredentials = true; //开启跨域

// axios.defaults.headers.get['Content-Type'] = 'text/plain;charset=UTF-8';
// axios.defaults.headers.post['Content-Type'] = 'text/plain;charset=UTF-8';

// create an axios instance
const service = axios.create({
    baseURL: process.env.BASE_URL, // api 的 base_url
    withCredentials: true, // 跨域请求时发送 cookies
    timeout: 1000 * 30, // request timeout
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        // 'Accept': 'application/json',
    },
});

// request interceptor  添加一个请求拦截器
service.interceptors.request.use(
    (config) => {
        NProgress.start(); // start progress bar
        if (config.data) config.data = qs.stringify(config.data);
        console.log("config=>", config);
        return config;
    },
    (error) => {
        NProgress.done(); // finish progress bar
        // Do something with request error
        console.log("request err: ", error); // for debug
        Promise.reject(error);
    }
);

// response interceptor 添加一个响应拦截器
service.interceptors.response.use(
    /**
     * If you want to get information such as headers or status
     * Please return  response => response
     */
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
     */
    (response) => {
        NProgress.done(); // finish progress bar
        //  0 请求成功 1 请求失败 2 请求超时 10 参数为空 11 参数无法解析 12 请求格式错误
        //  13 参数格式错误 14 缺少必要参数 15 方法使用错误 90 未登录或者登录超时 92 权限不足 99 系统错误
        const res = response.data;
        if (res.code !== 0) {
            // 90 未登录或者登录超时
            if (res.code === 90) {
                store.dispatch("user/logout").then(() => {
                    // Message.warning("未登录或登录超时，请重新登录。");
                    router.replace("/login");
                });
            } else if (res.code === 92) {
                Message.warning(res.msg || "权限不足");
            } else {
                Message({
                    message: res.msg,
                    type: "error",
                    duration: 3 * 1000,
                });
            }
            return Promise.reject(res);
        } else {
            return res;
        }
    },
    (error) => {
        NProgress.done(); // finish progress bar
        console.log("err: " + error); // for debug
        Message({
            message: error.msg || "网络错误",
            type: "error",
            duration: 3 * 1000,
        });
        return Promise.reject(error);
    }
);

export default service;
