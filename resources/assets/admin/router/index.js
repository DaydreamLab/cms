import Vue from "vue";
import VueRouter from "vue-router";
import constantRoutes from "router/routes";
import { formatRoutes, Storage } from "utils/";
import i18n from "lang/";

import store from "store/";

const user_routes = Storage.get("user_routes") || [];

Vue.use(VueRouter);

const router = new VueRouter({
    base: "/dashboard",
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes.concat(formatRoutes(user_routes)),
    linkActiveClass: "active"
});

const route_whiteList = ["/login"];

router.beforeEach((to, from, next) => {
    if (store.state.user.user_token) {
        if (to.path === "/login") {
            next({ path: "/" });
        } else {
            next();
        }
    } else {
        if (route_whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next({ path: "/login" });
        }
    }
});

router.afterEach((to, from) => {
    if (to.name) {
        document.title = i18n.t(to.name) + " - " + store.state.global.site_name;

        if (window.innerWidth <= 1024) {
            store.commit("left_menu", "close");
        }
    }
});

export default router;
