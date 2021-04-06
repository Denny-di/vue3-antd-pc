import { createRouter, createWebHistory } from "vue-router";

import constantRouter from "./constant-router";

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes: constantRouter,
});

export default router;
