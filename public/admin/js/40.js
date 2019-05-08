webpackJsonp([40],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(429)
/* template */
var __vue_template__ = __webpack_require__(430)
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
Component.options.__file = "resources/assets/admin/views/api/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5db8d738", Component.options)
  } else {
    hotAPI.reload("data-v-5db8d738", Component.options)
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(288);
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
  name: "api-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "url",
        label: "路徑",
        type: "editable"
      }, {
        key: "asset_title",
        label: "隸屬資源",
        formatter: function formatter(item) {
          return _this.$t(item.asset_title);
        }
      }, {
        key: "method",
        label: "代碼"
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list"
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }],
        default_value: {
          search: ""
        }
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref) {
      var _this2 = this;

      var ids = _ref.ids,
          state = _ref.state;

      this.$$api_api_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref2) {
          var msg = _ref2.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref3) {
      var _this3 = this;

      var ids = _ref3.ids,
          datas = _ref3.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_api_delete({
          data: { ids: ids },
          fn: function fn(_ref4) {
            var data = _ref4.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref5) {
      var data = _ref5.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref6.page_data,
          _fn = _ref6.fn;

      this.$$api_api_list({
        data: page_data,
        fn: function fn(_ref7) {
          var data = _ref7.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 430:
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
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-5db8d738", module.exports)
  }
}

/***/ })

});