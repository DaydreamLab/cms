webpackJsonp([40],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(543)
/* template */
var __vue_template__ = __webpack_require__(544)
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
Component.options.__file = "resources/assets/admin/views/user/group/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5810993d", Component.options)
  } else {
    hotAPI.reload("data-v-5810993d", Component.options)
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

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(283);
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
  name: "user-group-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: [{
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
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
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }],
        default_value: {
          search: "",
          state: ""
        }
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref) {
      var _this = this;

      var ids = _ref.ids,
          datas = _ref.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this.$$api_user_deleteGroup({
          data: { ids: ids },
          fn: function fn(_ref2) {
            var data = _ref2.data;

            _this.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref3) {
      var data = _ref3.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this2 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref4.page_data,
          _fn = _ref4.fn;

      this.$$api_user_listGroup({
        data: page_data,
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this2.list_loading.flag = false;
          _this2.list = data.items;
          _this2.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("ListData", {
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5810993d", module.exports)
  }
}

/***/ })

});