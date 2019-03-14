import Vue from "vue";
import Vuex from "vuex";

import global from "./modules/global";
import user from "./modules/user";
import sys from "./modules/sys";

import getters from "./getters";

Vue.use(Vuex);

const Modules = {
    global,
    user,
    sys
};

export default new Vuex.Store({
    modules: Modules,
    getters
});
