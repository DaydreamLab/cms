import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

// 導入封裝的回調函數與設定
import { setting, error_handler } from "configs/ajax";

// 動態設置本機與線上接口域名
Vue.axios.defaults.baseURL = setting.host;

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       請求的接口URL
 * @param  {object}   data      傳的參數，沒有則傳空對象
 * @param  {Function} fn        成功的回調函數
 * @param  {Function} errFn     錯誤的回調函數
 * @param  {Function} finalFn   不論成功與否的回調函數
 * @param  {boolean}  tokenFlag 是否需要攜帶token參數。true，不需要；false，需要
 */

/**
 * 要新增參數也要在 register/plugin.js 新增
 */
export default function({
    type,
    path,
    pathVar = "",
    data,
    fn,
    errFn,
    finalFn,
    tokenFlag,
    headers,
    opts
} = {}) {
    /**
     * 若 path 裡面有包含 * 則以 pathVar 取代
     */
    path = path.replace(/\*/g, pathVar);

    var options = {
        method: type,
        url: path,
        headers: headers && typeof headers === "object" ? headers : {}
    };

    options[type === "get" ? "params" : "data"] = data;

    if (!tokenFlag) {
        options.headers["Authorization"] =
            "Bearer " + this.$store.state.user.user_token;
    }

    //axios 參數
    if (opts && typeof opts === "object") {
        for (var f in opts) {
            options[f] = opts[f];
        }
    }

    //發送請求
    Vue.axios(options)
        .then(res => {
            const res_data = res.data;
            if (res_data[setting.response_data_field]) {
                // 若是 data 內有值
                fn({
                    data: res_data[setting.response_data_field],
                    msg: res_data[setting.response_message_field]
                });
            } else {
                // 若是 data 為空
                fn({ msg: res_data[setting.response_message_field] });
            }
        })
        .catch(err => {
            const err_res_data = err.response.data;
            // 若有設定特定狀態碼處理
            if (
                error_handler.statusError[
                    err_res_data[setting.response_status_code_field]
                ]
            ) {
                error_handler.statusError[
                    err_res_data[setting.response_status_code_field]
                ].call(this, err_res_data);
            } else {
                if (errFn) {
                    errFn.call(
                        this,
                        err_res_data[setting.response_message_field]
                    );
                } else {
                    error_handler.requestError.call(this, err.response);
                }
            }
        })
        .finally(() => {
            if (finalFn) return finalFn.call(this);
        });
}
