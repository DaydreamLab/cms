webpackJsonp([24],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(542)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(544)
/* template */
var __vue_template__ = __webpack_require__(545)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ece8df76"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/admin/views/user/log.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ece8df76", Component.options)
  } else {
    hotAPI.reload("data-v-ece8df76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            list: [],
            listLoading: {
                flag: false
            },
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 10,
                page_sizes: [10, 15, 20, 25, 50, 100],
                layout: "total, sizes, prev, pager, next, jumper"
            }
        };
    },

    watch: {
        $route: {
            handler: "$_listMixin_init",
            immediate: true
        }
    },
    methods: {
        $_listMixin_goAddRoute: function $_listMixin_goAddRoute() {
            this.$router.push(this.$route.path + "/edit");
        },

        /**
         * 組裝編輯路徑
         * @param {Object} query 編輯項目參數
         * @param.attr query.id 項目 id
         * @param.attr query.pid 項目 parent_id
         */
        $_listMixin_goEditRoute: function $_listMixin_goEditRoute(query) {
            this.$router.push({
                path: this.$route.path + "/edit",
                query: _extends({}, query, {
                    from: this.$route.query
                })
            });
        },
        $_listMixin_onSearchReset: function $_listMixin_onSearchReset() {
            this.$router.push({
                path: this.$route.path
            });
        },
        $_listMixin_onSearch: function $_listMixin_onSearch(data) {
            var query = this.$route.query;

            var searchData = _extends({}, query);

            for (var s in data) {
                searchData[s] = data[s];
                if (!searchData[s]) {
                    delete searchData[s];
                }
            }
            this.$router.push({
                path: this.$route.path,
                query: searchData
            });
        },
        $_listMixin_updateCurrentPage: function $_listMixin_updateCurrentPage(page) {
            var _this = this;

            this.$_listMixin_getList({
                page: page,
                fn: function fn() {
                    _this.$router.push({
                        path: _this.$route.path,
                        query: _this.setRouteQuery("page", page)
                    });
                }
            });
        },
        $_listMixin_updatePageSize: function $_listMixin_updatePageSize(pageSize) {
            var _this2 = this;

            this.$_listMixin_getList({
                pageSize: pageSize,
                fn: function fn() {
                    _this2.$router.push({
                        path: _this2.$route.path,
                        query: _this2.setRouteQuery("page_size", pageSize)
                    });
                }
            });
        },
        $_listMixin_getList: function $_listMixin_getList() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                page = _ref.page,
                pageSize = _ref.pageSize,
                where = _ref.where,
                fn = _ref.fn;

            this.listLoading.flag = true;

            var query = this.$route.query;

            this.paginations.current_page = page || Number(query.page) || 1;
            this.paginations.page_size = pageSize || Number(query.page_size) || this.paginations.page_size;

            var page_data = Object.assign(this.getRouteQuery(), {
                page: this.paginations.current_page,
                limit: this.paginations.page_size
            });
            if (where) {
                page_data = Object.assign(page_data, where || {});
            }
            this.handleGetList({ page_data: page_data, fn: fn });
        },
        $_listMixin_init: function $_listMixin_init() {
            this.$_listMixin_getList(); //為了在 cms mixin 可以加參數
        },
        setRouteQuery: function setRouteQuery(field, value) {
            var query = Object.assign({}, this.$route.query);

            if ((typeof field === "undefined" ? "undefined" : _typeof(field)) === "object") {
                query = field;
            } else {
                query[field] = value;
            }

            return query;
        },
        getRouteQuery: function getRouteQuery() {
            var _this3 = this;

            var query = this.$route.query;
            var numberArray = ["id", "pid", "category_id", "access"];
            var dateArray = ["start_date", "end_date"];
            var data = {};

            Object.keys(query).forEach(function (field) {
                _this3.searchbar.defaultValue[field] = numberArray.includes(field) ? Number(query[field]) : dateArray.includes(field) ? _this3.$options.filters.storeDateFormat(query[field]) : query[field];
                data[field] = query[field];
            });
            return data;
        }
    }
});

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(543);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(250)("60cc8052", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ece8df76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./log.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ece8df76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./log.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(249)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list__ = __webpack_require__(277);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserLogList",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      list: [],
      fields: [{
        key: "creator",
        label: this.$t("GLOBAL_USERNAME")
      }, {
        key: "created_at",
        label: this.$t("LIST_DATA_CREATED_DATE_LABEL"),
        formatter: function formatter(_ref) {
          var created_at = _ref.created_at;

          return _this.$options.filters.displayDateFormat(created_at);
        }
      }, {
        key: "type",
        label: this.$t("OPTION_TYPE")
      }, {
        key: "action",
        label: this.$t("LIST_DATA_ACTIONS_LABEL")
      }],
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "start_date",
          type: "date",
          desc: this.$t("FIELD_SEARCH_START_DATE"),
          clearable: true,
          date_attrs: {
            "value-format": "yyyy-MM-dd HH:mm:ss" // default is Date() will cause error
          }
        }, {
          key: "end_date",
          type: "date",
          desc: this.$t("FIELD_SEARCH_END_DATE"),
          clearable: true,
          date_attrs: {
            "value-format": "yyyy-MM-dd HH:mm:ss" // default is Date() will cause error
          }
        }],
        defaultValue: {
          search: "",
          start_date: "",
          end_date: ""
        }
      }
    };
  },

  methods: {
    handleGetList: function handleGetList() {
      var _this2 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref2.page_data,
          _fn = _ref2.fn;

      this.$$api_observer_log({
        data: page_data,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.listLoading.flag = false;
          _this2.list = data.items;
          _this2.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ListData", {
    ref: "list-data",
    attrs: {
      "list-loading": _vm.listLoading,
      pagination: _vm.paginations,
      list: _vm.list,
      "field-list": _vm.fields,
      searchbar: _vm.searchbar
    },
    on: {
      "change-current-page": _vm.$_listMixin_updateCurrentPage,
      "change-page-size": _vm.$_listMixin_updatePageSize,
      search: _vm.$_listMixin_onSearch,
      "search-reset": _vm.$_listMixin_onSearchReset
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ece8df76", module.exports)
  }
}

/***/ })

});