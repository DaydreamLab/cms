webpackJsonp([78],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(369)
/* template */
var __vue_template__ = __webpack_require__(370)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/admin/views/content/item/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-525be48f", Component.options)
  } else {
    hotAPI.reload("data-v-525be48f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 283:
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

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        $_listMixin_init: function $_listMixin_init() {
            this.$set(this.toolbar, "type", this.$route.query.state === "-2" ? "trash" : "list");
            this.$_listMixin_getList();
        }
    }
});

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_options__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_list_cms__ = __webpack_require__(289);
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
  name: "ItemList",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_options__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_list_cms__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      sort: {
        show: true
      },
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable",
        width: 300
      }, {
        key: "featured",
        label: this.$t("OPTION_FEATURED"),
        type: "icon",
        width: "80",
        formatter: function formatter(value) {
          return {
            style: {
              color: value === 1 ? "#fdd034" : "#cfd3da"
            },
            icon: ["fas", "star"]
          };
        }
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "label",
        width: "120",
        formatter: function formatter(value) {
          var stateText = {
            "1": "PUBLISHED",
            "0": "UNPUBLISHED",
            "-1": "ARCHIVED",
            "-2": "TRASHED",
            "2": "PENDING",
            "3": "EXPIRED"
          };
          return {
            text: _this.$t(stateText[value]),
            color: "item_state_" + value + "_color"
          };
        }
      }, {
        key: "category_title",
        label: this.$t("OPTION_CATEGORY"),
        width: "120"
      }, {
        key: "creator",
        label: this.$t("LIST_DATA_AUTHOR_LABEL")
      }, {
        key: "updater",
        label: this.$t("LIST_DATA_MODIFIED_BY_LABEL"),
        width: "100"
      }, {
        key: "created_at",
        label: this.$t("LIST_DATA_CREATED_DATE_LABEL"),
        formatter: function formatter(_ref) {
          var created_at = _ref.created_at;

          return _this.$options.filters.displayDateFormat(created_at);
        }
      }, {
        key: "updated_at",
        label: this.$t("LIST_DATA_MODIFIED_DATE_LABEL"),
        formatter: function formatter(_ref2) {
          var updated_at = _ref2.updated_at;

          return _this.$options.filters.displayDateFormat(updated_at);
        }
      }, {
        key: "hits",
        label: this.$t("LIST_DATA_HITS_LABEL")
      }, {
        key: "introimage",
        label: this.$t("LIST_DATA_INTRO_IMAGE_LABEL"),
        type: "icon",
        sort: false,
        formatter: function formatter(value) {
          return {
            icon: value ? ["fal", "image"] : ""
          };
        }
      }, {
        key: "image",
        label: this.$t("LIST_DATA_IMAGE_LABEL"),
        type: "icon",
        sort: false,
        formatter: function formatter(value) {
          return {
            icon: value ? ["fal", "image"] : ""
          };
        }
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        width: "100",
        formatter: function formatter(_ref3) {
          var language = _ref3.language,
              language_title = _ref3.language_title;

          return language === "*" ? _this.$t("ALL_LANGUAGE") : language_title;
        }
      }, {
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID"),
        width: "60"
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "handleUpdateState",
          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.handleUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "handleUpdateState",
          fn: function fn(_ref5) {
            var ids = _ref5.ids;

            _this.handleUpdateState({ ids: ids, state: 0 });
          }
        }, {
          text: this.$t("TOOLBAR_FEATURED"),
          method: "updateFeatured",
          fn: function fn(_ref6) {
            var ids = _ref6.ids;

            _this.handleUpdateFeatured({ ids: ids, featured: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNFEATURED"),
          method: "updateFeatured",
          fn: function fn(_ref7) {
            var ids = _ref7.ids;

            _this.handleUpdateFeatured({ ids: ids, featured: 0 });
          }
        }, {
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref8) {
            var ids = _ref8.ids;

            _this.handleCheckout({ ids: ids });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "featured",
          type: "select",
          desc: this.$t("OPTION_FEATURED"),
          clearable: true,
          list: [{
            value: "1",
            text: this.$t("FEATURED")
          }, {
            value: "0",
            text: this.$t("NOT_FEATURED")
          }],
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          clearable: true,
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }],
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }, {
          key: "category_id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          clearable: true,
          list: this.$store.getters.item_article_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          },
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }, {
          key: "language",
          type: "select",
          desc: this.$t("OPTION_LANGUAGE"),
          clearable: true,
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          },
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }, {
          key: "access",
          type: "select",
          desc: this.$t("FIELD_ACCESS_LEVEL"),
          clearable: true,
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          },
          events: {
            change: function change() {
              _this.$_listMixin_onSearch(_this.searchbar.defaultValue);
            }
          }
        }],
        defaultValue: {
          search: "",
          state: "",
          featured: "",
          category_id: "",
          language: "",
          access: ""
        }
      }
    };
  },
  created: function created() {
    this.$_optionMixin_updateFieldList({
      item_article_category: 3,
      language: 4,
      viewlevel: 5
    }, true);
  },

  methods: {
    handleCheckout: function handleCheckout(_ref9) {
      var _this2 = this;

      var data = _ref9.data,
          ids = _ref9.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_item_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref10) {
          var msg = _ref10.msg;

          _this2.$message.success(msg);
          _this2.$_listMixin_getList();
        }
      });
    },
    handleUpdateOrder: function handleUpdateOrder(_ref11) {
      var _this3 = this;

      var id = _ref11.id,
          index_diff = _ref11.index_diff,
          order = _ref11.order;

      this.$$api_item_ordering({
        data: {
          id: id,
          index_diff: index_diff,
          order: order
        },
        fn: function fn(_ref12) {
          var msg = _ref12.msg;

          _this3.$message.success(msg);
        }
      });
    },
    onSortChange: function onSortChange(order) {
      this.$_listMixin_getList({
        where: { order_by: "ordering", order: order.replace("ending", "") }
      });
    },
    handleUpdateFeatured: function handleUpdateFeatured(_ref13) {
      var _this4 = this;

      var ids = _ref13.ids,
          featured = _ref13.featured;

      this.$$api_item_updateFeatured({
        data: {
          ids: ids,
          featured: featured
        },
        fn: function fn(_ref14) {
          var msg = _ref14.msg;

          _this4.$message.success(msg);
          _this4.$_listMixin_getList();
        }
      });
    },
    handleUpdateState: function handleUpdateState(_ref15) {
      var _this5 = this;

      var ids = _ref15.ids,
          state = _ref15.state;

      this.$$api_item_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref16) {
          var msg = _ref16.msg;

          _this5.$message.success(msg);
          _this5.$_listMixin_getList();
        }
      });
    },
    handleBatchDelete: function handleBatchDelete(_ref17) {
      var _this6 = this;

      var ids = _ref17.ids,
          datas = _ref17.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this6.$$api_item_delete({
          data: { ids: ids },
          fn: function fn(_ref18) {
            var data = _ref18.data;

            _this6.$_listMixin_getList();
          }
        });
      });
    },
    setEditRouteQuery: function setEditRouteQuery(_ref19) {
      var data = _ref19.data;

      this.$_listMixin_goEditRoute({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this7 = this;

      var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref20.page_data,
          _fn = _ref20.fn;

      this.$$api_item_list({
        data: page_data,
        fn: function fn(_ref21) {
          var data = _ref21.data;

          _this7.listLoading.flag = false;
          _this7.list = data.items;
          _this7.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ListData", {
    ref: "list-data",
    attrs: {
      list: _vm.list,
      "field-list": _vm.fields,
      "list-loading": _vm.listLoading,
      sort: { show: true },
      pagination: _vm.paginations,
      toolbar: _vm.toolbar,
      searchbar: _vm.searchbar
    },
    on: {
      "click-add": _vm.$_listMixin_goAddRoute,
      "click-edit": _vm.setEditRouteQuery,
      "click-batch-trash": _vm.handleUpdateState,
      "click-batch-restore": _vm.handleUpdateState,
      "click-batch-delete": _vm.handleBatchDelete,
      "click-checkout": _vm.handleCheckout,
      "change-current-page": _vm.$_listMixin_updateCurrentPage,
      "change-page-size": _vm.$_listMixin_updatePageSize,
      search: _vm.$_listMixin_onSearch,
      "search-reset": _vm.$_listMixin_onSearchReset,
      "on-order-change": _vm.handleUpdateOrder,
      "on-sort-change": _vm.onSortChange
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-525be48f", module.exports)
  }
}

/***/ })

});