import store from "store/";
import router from "router/";

export default {
    bind: function(el, binding, vnode) {
        var s = JSON.stringify;

        const user_apis = store.state.user.user_apis;
        const current_asset_id = router.currentRoute.meta.id;

        const hasPermission = user_apis[current_asset_id]
            ? user_apis[current_asset_id].includes(binding.value)
            : true;

        const forNoPermission = binding.arg === "not";

        if (
            (!hasPermission && !forNoPermission) ||
            (hasPermission && forNoPermission)
        ) {
            el.style.display = "none";
        }
    }
};
