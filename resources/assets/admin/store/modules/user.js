import * as types from "../mutation-types";
import Storage from "utils/storage";

const defaults = {
    user_token: Storage.get("user_token") || "",
    user_info: Storage.get("user_info") || {},

    // 登入成功後，使用者可走訪的路由
    user_routes: Storage.get("user_routes") || [],
    user_apis: Storage.get("user_apis") || {},

    remember: {
        remember_flag: Storage.get("remember_flag") ? true : false,
        remember_login_info: Storage.get("remember_login_info") || {
            email: "",
            token: ""
        }
    }
};

const state = defaults;

const actions = {
    update_userinfo: ({ commit }, user_info) => {
        return new Promise((resolve, reject) => {
            commit(types.UPDATE_USERINFO, user_info);
            commit(types.UPDATE_USERTOKEN, user_info.token);
            resolve();
        });
    },
    remove_userinfo({ commit }) {
        commit(types.REMOVE_USERINFO);
        commit(types.REMOVE_USERTOKEN);
        commit(types.REMOVE_USER_ROUTES);
        commit(types.REMOVE_USER_APIS);
    },
    update_remember({ commit }, { remember_flag, remember_login_info }) {
        commit(types.UPDATE_REMEMBER, {
            remember_flag,
            remember_login_info
        });
    },
    remove_remember({ commit }) {
        commit(types.REMOVE_REMEMBER);
    },
    update_user_routes: ({ commit }, { routes, redirect }) => {
        return new Promise(resolve => {
            commit(types.UPDATE_USER_ROUTES, { routes, redirect });
            resolve();
        });
    },
    update_user_apis({ commit }, apis) {
        commit(types.UPDATE_USER_APIS, apis);
    }
};

const mutations = {
    [types.UPDATE_USERTOKEN](state, user_token) {
        state.user_token = user_token;
        Storage.set("user_token", state.user_token);
    },
    [types.REMOVE_USERTOKEN](state) {
        Storage.remove("user_token");
        state.user_token = "";
    },
    /**
     * 更新用户信息
     * @param state
     * @param user_info	用户信息
     */
    [types.UPDATE_USERINFO](state, user_info) {
        state.user_info = user_info;
        Storage.set("user_info", state.user_info);
    },
    /**
     * 移除用户信息
     * @param state
     */
    [types.REMOVE_USERINFO](state) {
        Storage.remove("user_info");
        state.user_info = {};
    },
    /**
     * 更新是否记住密码
     * @param state
     * @param user_info 用户信息
     */
    [types.UPDATE_REMEMBER](state, user_info) {
        state.remember.remember_flag = user_info.remember_flag;
        state.remember.remember_login_info = user_info.remember_login_info;

        Storage.set("remember_flag", state.remember.remember_flag);
        Storage.set("remember_login_info", state.remember.remember_login_info);
    },
    /**
     * 移除记住密码功能
     * @param state
     */
    [types.REMOVE_REMEMBER](state) {
        Storage.remove("remember_flag");
        Storage.remove("remember_login_info");

        state.remember.remember_flag = false;
        state.remember.remember_login_info = {
            email: "",
            token: ""
        };
    },
    /**
     * 更新用户拥有的路由信息
     * @param state
     * @param user_routes	用户拥有的路由信息
     */
    [types.UPDATE_USER_ROUTES](state, { routes, redirect }) {
        const include_index = routes.filter(route => route.path === "/");
        // fix user doesn't have dashboard asset
        if (include_index.length === 0) {
            routes.push({
                path: "/",
                redirect: redirect,
                enabled: 1,
                showNav: false
            });
        }
        // ensure error page would be the last one
        routes.push({
            path: "*",
            redirect: "/error/404",
            enabled: 1,
            showNav: false
        });
        state.user_routes = routes;
        Storage.set("user_routes", routes);
    },
    /**
     * 移除用户拥有的路由信息
     * @param state
     * @param user_routes	用户拥有的路由信息
     */
    [types.REMOVE_USER_ROUTES](state) {
        state.user_routes = [];
        Storage.remove("user_routes");
    },
    [types.UPDATE_USER_APIS](state, apis) {
        state.user_apis = apis;
        Storage.set("user_apis", apis);
    },
    [types.REMOVE_USER_APIS](state) {
        state.user_apis = {};
        Storage.remove("user_apis");
    }
};
export default {
    state,
    actions,
    mutations
};
