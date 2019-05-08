webpackJsonp([80],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(383)
/* template */
var __vue_template__ = __webpack_require__(384)
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

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            list: [],
            list_loading: {
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
            handler: "$initList",
            immediate: true
        }
    },
    methods: {
        $onClickBtnAdd: function $onClickBtnAdd() {
            this.$router.push(this.$route.path + "/edit");
        },
        $onClickBntEdit: function $onClickBntEdit(query) {
            this.$router.push({
                path: this.$route.path + "/edit",
                query: _extends({}, query, {
                    from: this.$route.query
                })
            });
        },
        $onSearchReset: function $onSearchReset() {
            this.$router.push({
                path: this.$route.path
            });
        },
        $onSearch: function $onSearch(_ref) {
            var data = _ref.data;

            var sd = {};

            var query = this.$route.query;

            for (var p in query) {
                sd[p] = query[p];
            }
            for (var s in data) {
                sd[s] = data[s];
                if (!sd[s]) {
                    delete sd[s];
                }
            }

            this.$router.push({
                path: this.$route.path,
                query: sd
            });
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
            var _this = this;

            var query = this.$route.query;
            var intArray = ["id", "pid", "category_id", "access"];
            var dateArray = ["start_date", "end_date"];
            var data = {};

            Object.keys(query).forEach(function (field) {
                _this.searchbar.default_value[field] = intArray.includes(field) ? parseInt(query[field]) : dateArray.includes(field) ? _this.$options.filters.storeDateFormat(query[field]) : query[field];
                data[field] = query[field];
            });
            return data;
        },
        $onChangeCurrentPage: function $onChangeCurrentPage(page) {
            var _this2 = this;

            this.$onGetList({
                page: page,
                fn: function fn() {
                    _this2.$router.push({
                        path: _this2.$route.path,
                        query: _this2.setRouteQuery("page", page)
                    });
                }
            });
        },
        $onChangePageSize: function $onChangePageSize(pageSize) {
            var _this3 = this;

            this.$onGetList({
                pageSize: pageSize,
                fn: function fn() {
                    _this3.$router.push({
                        path: _this3.$route.path,
                        query: _this3.setRouteQuery("page_size", pageSize)
                    });
                }
            });
        },
        $onGetList: function $onGetList() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                page = _ref2.page,
                pageSize = _ref2.pageSize,
                where = _ref2.where,
                fn = _ref2.fn;

            this.list_loading.flag = true;

            var query = this.$route.query;

            this.paginations.current_page = page || parseInt(query.page) || 1;
            this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

            var page_data = Object.assign(this.getRouteQuery(), {
                page: this.paginations.current_page,
                limit: this.paginations.page_size
            });
            if (where) {
                page_data = Object.assign(page_data, where || {});
            }
            this.handleGetList({ page_data: page_data, fn: fn });
        },
        $initList: function $initList() {
            this.$onGetList();
        }
    }
});

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        $initList: function $initList() {
            this.$set(this.toolbar, "type", this.$route.query.state === "-2" ? "trash" : "list");
            this.$onGetList();
        }
    }
});

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__ = __webpack_require__(295);
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
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "item-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__["a" /* default */]],
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
        formatter: function formatter(item) {
          return {
            style: {
              color: item === 1 ? "#fdd034" : "#cfd3da"
            },
            icon: ["fas", "star"]
          };
        }
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "label",
        width: "120",
        formatter: function formatter(item) {
          var item_text = {
            "1": "PUBLISHED",
            "0": "UNPUBLISHED",
            "-1": "ARCHIVED",
            "-2": "TRASHED",
            "2": "PENDING",
            "3": "EXPIRED"
          };
          return {
            text: _this.$t(item_text[item]),
            color: "item_state_" + item + "_color"
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
        formatter: function formatter(item) {
          return _this.$options.filters.displayDateFormat(item.created_at);
        }
      }, {
        key: "updated_at",
        label: this.$t("LIST_DATA_MODIFIED_DATE_LABEL"),
        formatter: function formatter(item) {
          return _this.$options.filters.displayDateFormat(item.updated_at);
        }
      }, {
        key: "hits",
        label: this.$t("LIST_DATA_HITS_LABEL")
      }, {
        key: "introimage",
        label: this.$t("LIST_DATA_INTRO_IMAGE_LABEL"),
        type: "icon",
        sort: false,
        formatter: function formatter(item) {
          return {
            icon: item ? ["fal", "image"] : ""
          };
        }
      }, {
        key: "image",
        label: this.$t("LIST_DATA_IMAGE_LABEL"),
        type: "icon",
        sort: false,
        formatter: function formatter(item) {
          return {
            icon: item ? ["fal", "image"] : ""
          };
        }
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        width: "100",
        formatter: function formatter(item) {
          return item.language === "*" ? _this.$t("ALL_LANGUAGE") : item.language_title;
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
          method: "updateState",
          fn: function fn(_ref) {
            var ids = _ref.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }, {
          text: this.$t("TOOLBAR_FEATURED"),
          method: "updateFeatured",
          fn: function fn(_ref3) {
            var ids = _ref3.ids;

            _this.onClickBtnUpdatFeatured({ ids: ids, featured: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNFEATURED"),
          method: "updateFeatured",
          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdatFeatured({ ids: ids, featured: 0 });
          }
        }, {
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref5) {
            var ids = _ref5.ids;

            _this.onClickBtnCheckout({ ids: ids });
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
          }]
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
          }]
        }, {
          key: "category_id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          clearable: true,
          list: this.$store.getters.item_article_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
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
          }
        }],
        default_value: {
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
    this.$getFieldList({
      item_article_category: 3,
      language: 4,
      viewlevel: 5
    }, "searchbar");
  },

  methods: {
    /**
     * list actions
     */
    onClickBtnCheckout: function onClickBtnCheckout(_ref6) {
      var _this2 = this;

      var data = _ref6.data,
          ids = _ref6.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_item_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onOrderChange: function onOrderChange(_ref8) {
      var _this3 = this;

      var id = _ref8.id,
          index_diff = _ref8.index_diff,
          order = _ref8.order;

      this.$$api_item_ordering({
        data: {
          id: id,
          index_diff: index_diff,
          order: order
        },
        fn: function fn(_ref9) {
          var msg = _ref9.msg;

          _this3.$message.success(msg);
        }
      });
    },
    onSortChange: function onSortChange(order) {
      this.$onGetList({
        where: { order_by: "ordering", order: order.replace("ending", "") }
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdatFeatured: function onClickBtnUpdatFeatured(_ref10) {
      var _this4 = this;

      var ids = _ref10.ids,
          featured = _ref10.featured;

      this.$$api_item_updateFeatured({
        data: {
          ids: ids,
          featured: featured
        },
        fn: function fn(_ref11) {
          var msg = _ref11.msg;

          _this4.$message.success(msg);
          _this4.$onGetList();
        }
      });
    },
    onClickBtnBatchTrash: function onClickBtnBatchTrash(_ref12) {
      var ids = _ref12.ids,
          state = _ref12.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnBatchRestore: function onClickBtnBatchRestore(_ref13) {
      var ids = _ref13.ids,
          state = _ref13.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref14) {
      var _this5 = this;

      var ids = _ref14.ids,
          state = _ref14.state;

      this.$$api_item_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref15) {
          var msg = _ref15.msg;

          _this5.$message.success(msg);
          _this5.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref16) {
      var _this6 = this;

      var ids = _ref16.ids,
          datas = _ref16.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this6.$$api_item_delete({
          data: { ids: ids },
          fn: function fn(_ref17) {
            var data = _ref17.data;

            _this6.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref18) {
      var data = _ref18.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this7 = this;

      var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref19.page_data,
          _fn = _ref19.fn;

      this.$$api_item_list({
        data: page_data,
        fn: function fn(_ref20) {
          var data = _ref20.data;

          _this7.list_loading.flag = false;
          _this7.list = data.items;
          _this7.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Sort: _vm.sort,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset,
          onOrderChange: _vm.onOrderChange,
          onSortChange: _vm.onSortChange
        }
      })
    ],
    1
  )
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