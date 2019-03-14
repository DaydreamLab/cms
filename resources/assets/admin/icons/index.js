import Vue from "vue";
import SvgIcon from "cps/svg-icon";

Vue.component("SvgIcon", SvgIcon);

const req = require.context(
    '!svg-sprite-loader?{"symbolId":"icon-[name]"}!./svg',
    false,
    /.svg$/
);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const iconMap = requireAll(req);
