import Storage from "utils/storage";

const defaults = {
    site_name: "Daydream Lab CMS",
    author_name: "Daydream Lab Intl.",
    author_link: "http://www.daydream-lab.com/",
    left_open: Storage.get("left_open") || true,
    is_login_refresh: false // for refreshing routes
};

const state = defaults;

const actions = {};

const mutations = {
    left_menu(state, option) {
        if (option == "open") {
            state.left_open = true;
            Storage.set("left_open", true);
        } else if (option == "close") {
            state.left_open = false;
            Storage.set("left_open", false);
        } else if (option == "toggle") {
            state.left_open = !state.left_open;
            Storage.set("left_open", state.left_open);
        }
    },
    update_login_refresh(state, type) {
        state.is_login_refresh = type;
    }
};

export default {
    state,
    actions,
    mutations
};
