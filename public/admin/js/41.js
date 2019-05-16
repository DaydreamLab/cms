webpackJsonp([41],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(419)
/* template */
var __vue_template__ = __webpack_require__(420)
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
Component.options.__file = "resources/assets/admin/views/asset/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9252003c", Component.options)
  } else {
    hotAPI.reload("data-v-9252003c", Component.options)
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

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list__ = __webpack_require__(283);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
  name: "AssetList",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }, {
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable",
        formatter: function formatter(value) {
          var _value$split = value.split("  "),
              _value$split2 = _slicedToArray(_value$split, 2),
              prefix = _value$split2[0],
              title = _value$split2[1];

          var combinedTitle = title ? prefix + " " + _this.$t(title) : _this.$t(prefix);

          return combinedTitle;
        }
      }, {
        key: "path",
        label: "訪問路徑"
      }, {
        key: "component",
        label: "元件路徑"
      }, {
        key: "type",
        label: "類型"
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(value) {
          return {
            color: "item_state_" + value + "_color",
            icon: ["fal", value === 1 ? "check" : "times"]
          };
        }
      }],
      list_btns: {
        btns: [{
          text: "指定資源群組",
          type: "primary",
          method: "assignGroup",
          fn: function fn(_ref) {
            var data = _ref.data;

            _this.$router.push({
              path: _this.$route.path + "/assign/group",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }]
      },
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref2) {
            var data = _ref2.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref3) {
            var ids = _ref3.ids;

            _this.handleUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref4) {
            var data = _ref4.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref5) {
            var ids = _ref5.ids;

            _this.handleUpdateState({ ids: ids, state: 0 });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }],
        defaultValue: {
          search: ""
        }
      }
    };
  },

  methods: {
    handleUpdateOrder: function handleUpdateOrder(_ref6) {
      var id = _ref6.id,
          index_diff = _ref6.index_diff,
          order = _ref6.order;

      this.$$api_asset_ordering({
        data: {
          id: id,
          index_diff: index_diff,
          order: order
        },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          console.log(msg);
        }
      });
    },

    /**
     * Toolbar
     */
    handleUpdateState: function handleUpdateState(_ref8) {
      var _this2 = this;

      var ids = _ref8.ids,
          state = _ref8.state;

      this.$$api_asset_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref9) {
          var msg = _ref9.msg;

          _this2.$message.success(msg);
          _this2.$_listMixin_getList();
        }
      });
    },
    handleBatchDelete: function handleBatchDelete(_ref10) {
      var _this3 = this;

      var ids = _ref10.ids,
          datas = _ref10.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_asset_delete({
          data: { ids: ids },
          fn: function fn(_ref11) {
            var data = _ref11.data;

            _this3.$_listMixin_getList();
          }
        });
      });
    },
    setEditRouteQuery: function setEditRouteQuery(_ref12) {
      var data = _ref12.data;

      this.$_listMixin_goEditRoute({
        id: data.id,
        pid: data.parent_id
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref13.page_data,
          _fn = _ref13.fn;

      this.$$api_asset_list({
        data: page_data,
        fn: function fn(_ref14) {
          var data = _ref14.data;

          _this4.listLoading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ListData", {
    ref: "list-data",
    attrs: {
      list: _vm.list,
      "list-loading": _vm.listLoading,
      listBtns: _vm.list_btns,
      "field-list": _vm.fields,
      sort: { show: true },
      pagination: _vm.paginations,
      toolbar: _vm.toolbar,
      searchbar: _vm.searchbar
    },
    on: {
      "click-add": _vm.$_listMixin_goAddRoute,
      "click-edit": _vm.setEditRouteQuery,
      "click-batch-delete": _vm.handleBatchDelete,
      "change-current-page": _vm.$_listMixin_updateCurrentPage,
      "change-page-size": _vm.$_listMixin_updatePageSize,
      "on-order-change": _vm.handleUpdateOrder,
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
    require("vue-hot-reload-api")      .rerender("data-v-9252003c", module.exports)
  }
}

/***/ })

});