const Login = () => import(/* webpackChunkName: "login" */ "../views/login");
const Layout = () => import(/* webpackChunkName: "layout" */ "../views/layout");
const Home = () => import(/* webpackChunkName: "home" */ "../views/home");

const NotFound = () =>
    import(/* webpackChunkName: "NotFound" */ "../views/ErrorPage/404.vue");

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
            {
                name: "lll",
                path: "login",
                component: Login,
            },
            {
                path: ":afterUser(.*)",
                component: NotFound,
            },
        ],
    },
    {
        path: "/:pathMatch(.*)",
        component: NotFound,
    },
];

export default constantRouterMap;
