import * as types from "../mutation-types";
import Storage from "utils/storage";

const defaults = {
    errorlog_list: [],
    language: Storage.get("language") || "tw",
    site_list: Storage.get("site_list") || "",
    asset_list: Storage.get("asset_list") || "",
    role_list: Storage.get("role_list") || "",
    viewlevel_list: Storage.get("viewlevel_list") || "",
    category_list: Storage.get("category_list") || "",
    language_list: Storage.get("language_list") || ""
};

const state = defaults;

const actions = {
    update_error_logs({ commit }, data) {
        commit(types.UPDATE_ERROR_LOGS, data);
    },
    update_option_related_list({ commit }, { type, data }) {
        commit(types.UPDATE_OPTION_RELATED_LIST, { type, data });
    },
    remove_option_related_list({ commit }) {
        const params = ["category", "language", "viewlevel"];
        params.forEach(param => {
            commit(types.UPDATE_OPTION_RELATED_LIST, { type: param, data: "" });
        });
    }
};

const mutations = {
    [types.UPDATE_ERROR_LOGS](state, data) {
        state.errorlog_list.push(data);
    },
    [types.UPDATE_OPTION_RELATED_LIST](state, { type, data }) {
        state[`${type}_list`] = data;
        Storage.set(`${type}_list`, state[`${type}_list`]);
    },
    set_language(state, language) {
        state.language = language;
        Storage.set("language", state.language);
    },
    update_site_list(state, sites) {
        state.site_list = sites;
        Storage.set("site_list", state.site_list);
    }
};

export default {
    state,
    actions,
    mutations
};
