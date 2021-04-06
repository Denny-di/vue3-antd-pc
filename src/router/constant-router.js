const Login = () => import(/* webpackChunkName: "login" */ "../views/login");
const Layout = () => import(/* webpackChunkName: "layout" */ "../views/layout");
const Home = () => import(/* webpackChunkName: "home" */ "../views/home");

// const NotFound = () =>
//     import(/* webpackChunkName: "NotFound" */ "../views/ErrorPage/404.vue");

const constantRouterMap = [
    { path: "/", redirect: "/login" },
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            title: "登录",
        },
    },
    {
        name: "",
        path: "/home",
        component: Layout,
        meta: {},
        children: [
            {
                name: "home",
                path: "",
                meta: {
                    keepAlive: true,
                    title: "工作台",
                },
                component: Home,
            },
            // {
            //     path: "/:pathMatch(.*)",
            //     name: "NotFound",
            //     component: NotFound,
            // },
            // {
            //     name: "404",
            //     path: "/home/404",
            //     component: NotFound,
            //     meta: {
            //         title: "404",
            //     },
            // },
            // { path: "/:pathMatch(.*)", redirect: "/error/404" },
            // { path: "/home/:pathMatch(.*)", redirect: "/home/404" },
        ],
    },
    // {
    //     path: "/404",
    //     name: "404",
    //     component: NotFound,
    // },
    // {
    //     path: "/:pathMatch(.*)",
    //     redirect: "/404",
    // },
];

export default constantRouterMap;
