import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"

const routes: RouteRecordRaw[] = [
    {path: "/", redirect: "/shelf"},
    {path: "/shelf", component: () => import("../views/shelf/AShelf.vue")},
    {path: "/cart", component: () => import("../views/cart/ACart.vue")},
]

export default createRouter({
    routes: routes,
    history: createWebHashHistory(),
})
