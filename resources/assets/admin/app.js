import Vue from "vue";
import i18n from "lang/";

// Using Element UI
import ELEMENT from "element-ui";
// import "../../../theme/reset.css";
// import "../../../theme/index.css";
Vue.use(ELEMENT, {
    i18n: (key, value) => i18n.t(key, value)
});

// Using FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { faStar, faCaretDown } from "@fortawesome/free-solid-svg-icons";
library.add(fal, faStar, faCaretDown);

import App from "./pages/App";
import router from "router/";
import store from "store/";

import "./icons";
import "./register";

// Remove the productionTip in dev tool console
if (process.env.NODE_ENV === "production") {
    Vue.config.productionTip = false;
    Vue.config.devtools = false;
}
const app = new Vue({
    el: "#app",
    i18n,
    router,
    store,
    render: h => h(App)
});
