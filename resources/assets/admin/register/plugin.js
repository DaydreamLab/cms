import { ajax } from "utils/";
import request from "@/apis/";
import Vue from "vue";

var plugins = {};
for (var i = 0; i < request.length; i++) {
    if (
        typeof request[i] === "object" &&
        request[i].list &&
        Array.isArray(request[i].list)
    ) {
        for (var j = 0; j < request[i].list.length; j++) {
            plugins[
                "api_" + request[i].module + "_" + request[i].list[j].method
            ] = (function(n, m) {
                return function({
                    type = request[n].list[m].type,
                    path = request[n].list[m].path,
                    data,
                    fn,
                    errFn,
                    finalFn,
                    headers,
                    opts,
                    pathVar,
                    tokenFlag
                } = {}) {
                    //request[n].list[m].type, request[n].list[m].path, data, fn, opts
                    ajax.call(this, {
                        type,
                        path,
                        data,
                        fn,
                        errFn,
                        finalFn,
                        headers,
                        opts,
                        pathVar,
                        tokenFlag
                    });
                };
            })(i, j);
        }
    }
}

plugins["eventBus"] = new Vue();

export default plugins;
