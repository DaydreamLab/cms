webpackJsonp([31],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(529)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(531)
/* template */
var __vue_template__ = __webpack_require__(532)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/admin/views/system/setting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f3df1f5", Component.options)
  } else {
    hotAPI.reload("data-v-3f3df1f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(530);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(256)("351f3728", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f3df1f5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f3df1f5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(255)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 531:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SettingEdit",
  data: function data() {
    return {
      fields: [{
        key: "locale",
        type: "select",
        label: this.$t("SETTING_FIELD_SITE_LANG_LABEL") /*網站語言*/
        , desc: this.$t("OPTION_LANGUAGE"),
        list: this.$store.getters.language_list,
        custom_attrs: {
          label: "title",
          value: "sef"
        }
      }, {
        key: "locale_admin",
        type: "select",
        label: this.$t("SETTING_FIELD_ADMIN_LANG_LABEL") /*管理區語言*/
        , desc: this.$t("OPTION_LANGUAGE"),
        list: this.$store.getters.language_list,
        custom_attrs: {
          label: "title",
          value: "sef"
        }
      }],
      toolbar: {
        type: ["save"]
      },
      defaultValue: {
        locale: "",
        locale_admin: ""
      }
    };
  },

  watch: {
    $route: {
      immediate: true,
      handler: "handleGetData"
    }
  },
  methods: {
    handleSubmit: function handleSubmit(_ref) {
      var _this = this;

      var submit_data = _ref.submit_data,
          btn_type = _ref.btn_type;

      this.$$api_setting_save({
        data: submit_data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          if (btn_type === "save") {
            _this.$router.push({
              path: _this.$route.path
            });
          }
        }
      });
    },
    handleGetData: function handleGetData() {
      var _this2 = this;

      this.$$api_setting_get({
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.defaultValue = _extends({}, _this2.defaultValue, data.items);
        }
      });
    }
  }
});

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("FormData", {
    attrs: {
      "default-value": _vm.defaultValue,
      "field-list": _vm.fields,
      toolbar: _vm.toolbar
    },
    on: { "on-submit": _vm.handleSubmit }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f3df1f5", module.exports)
  }
}

/***/ })

});