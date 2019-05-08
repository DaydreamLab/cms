webpackJsonp([45],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(425)
/* template */
var __vue_template__ = __webpack_require__(426)
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
Component.options.__file = "resources/assets/admin/views/___role/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-731aafbd", Component.options)
  } else {
    hotAPI.reload("data-v-731aafbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  name: "role-list",
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "redirect",
        label: "登入後頁面"
      }, {
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
        }],
        default_value: {
          search: ""
        }
      },
      list_actions: {
        btns: [{
          text: this.$t("ASSET_USER_ROLE_ASSIGN_ASSET_TITLE"),
          type: "primary",
          method: "grant_asset",
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/asset",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }, {
          text: this.$t("ASSET_USER_ROLE_ASSIGN_API_TITLE"),
          type: "primary",
          method: "grant_api",
          fn: function fn(_ref6) {
            var data = _ref6.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/api",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }]
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref7) {
      var _this2 = this;

      var ids = _ref7.ids,
          state = _ref7.state;

      this.$$api_role_updateState({
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
        _this3.$$api_role_delete({
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
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref12.page_data,
          _fn = _ref12.fn;

      this.$$api_role_list({
        data: page_data,
        fn: function fn(_ref13) {
          var data = _ref13.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _this4.$store.dispatch("update_option_related_list", {
            type: "role",
            data: data.items
          });

          _fn && _fn();
        }
      });
    },
    init: function init() {
      this.$onGetList();
    }
  }
});

/***/ }),

/***/ 426:
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
          ListActions: _vm.list_actions,
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
    require("vue-hot-reload-api")      .rerender("data-v-731aafbd", module.exports)
  }
}

/***/ })

});