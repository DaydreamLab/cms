webpackJsonp([113],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(530)
/* template */
var __vue_template__ = __webpack_require__(531)
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
Component.options.__file = "resources/assets/admin/views/system/language/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b98105a", Component.options)
  } else {
    hotAPI.reload("data-v-4b98105a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 285:
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

/***/ 290:
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

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__ = __webpack_require__(290);
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
  name: "language-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "code",
        label: this.$t("LANGUAGE_FIELD_LANG_TAG_LABEL")
      }, {
        key: "sef",
        label: this.$t("LANGUAGE_FIELD_LANG_CODE_LABEL")
      }, {
        key: "type",
        label: this.$t("LANGUAGE_FIELD_TYPE_LABEL"),
        formatter: function formatter(item) {
          return item.type === "system" ? _this.$t("LANGUAGE_FIELD_TYPE_SYSTEM") : _this.$t("LANGUAGE_FIELD_TYPE_CONTENT");
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }]
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
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }, {
          key: "type",
          type: "select",
          desc: this.$t("OPTION_TYPE"),
          clearable: true,
          list: [{
            value: "content",
            text: this.$t("LANGUAGE_FIELD_TYPE_CONTENT")
          }, {
            value: "system",
            text: this.$t("LANGUAGE_FIELD_TYPE_SYSTEM")
          }]
        }],
        default_value: {
          search: "",
          state: "",
          type: ""
        }
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnBatchTrash: function onClickBtnBatchTrash(_ref5) {
      var ids = _ref5.ids,
          state = _ref5.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnBatchRestore: function onClickBtnBatchRestore(_ref6) {
      var ids = _ref6.ids,
          state = _ref6.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref7) {
      var _this2 = this;

      var ids = _ref7.ids,
          state = _ref7.state;

      this.$$api_language_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref8) {
          var msg = _ref8.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref9) {
      var _this3 = this;

      var ids = _ref9.ids,
          datas = _ref9.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_language_delete({
          data: { ids: ids },
          fn: function fn(_ref10) {
            var data = _ref10.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref11) {
      var data = _ref11.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref12.page_data,
          _fn = _ref12.fn;

      this.$$api_language_list({
        data: page_data,
        fn: function fn(_ref13) {
          var data = _ref13.data;

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

/***/ 531:
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
      onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
      onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
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
    require("vue-hot-reload-api")      .rerender("data-v-4b98105a", module.exports)
  }
}

/***/ })

});