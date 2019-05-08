webpackJsonp([46],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(423)
/* template */
var __vue_template__ = __webpack_require__(424)
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
Component.options.__file = "resources/assets/admin/views/___role/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb3a51ae", Component.options)
  } else {
    hotAPI.reload("data-v-fb3a51ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  name: "role-edit",
  data: function data() {
    return {
      params: {
        id: "",
        pid: 1
      },
      fields: [{
        key: "parent_id",
        type: "select",
        label: "上層角色",
        list: this.$store.getters.role_list,
        custom_attrs: {
          label: "tree_title",
          value: "id"
        }
      }, {
        key: "title",
        label: "標題"
      }, {
        key: "redirect",
        type: "select",
        label: "登入後頁面",
        list: [],
        custom_attrs: {
          label: "full_path",
          value: "full_path"
        }
      }, {
        key: "state",
        label: "是否啟用",
        type: "radio",
        list: [{
          text: "禁用",
          value: "0"
        }, {
          text: "啟用",
          value: "1"
        }]
      }],
      toolbar: {
        type: "edit"
      },
      default_value: {
        parent_id: 1,
        title: "",
        redirect: "",
        state: 1
      }
    };
  },

  methods: {
    onSubmit: function onSubmit(_ref) {
      var _this = this;

      var data = _ref.data,
          info = _ref.info,
          type = _ref.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_role_save({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          _this.$onSubmitFinish({
            type: type,
            query: { id: data.items.id, pid: data.items.parent_id }
          });
        }
      });
    },
    onCancel: function onCancel() {
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_role_pages({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.fields[2].list = data.items;
        }
      });

      this.$$api_role_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this2.default_value = _extends({}, _this2.default_value, data.items);
        }
      });
    }
  }
});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("FormData", {
        attrs: {
          FieldList: _vm.fields,
          DefaultValue: _vm.default_value,
          Toolbar: _vm.toolbar
        },
        on: { onSubmit: _vm.onSubmit, onCancel: _vm.onCancel }
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
    require("vue-hot-reload-api")      .rerender("data-v-fb3a51ae", module.exports)
  }
}

/***/ })

});