webpackJsonp([6],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(499)
/* template */
var __vue_template__ = __webpack_require__(500)
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
Component.options.__file = "resources/assets/admin/views/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b971add", Component.options)
  } else {
    hotAPI.reload("data-v-2b971add", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 499:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  computed: {
    checkTeachingFile: function checkTeachingFile() {

      var xmlhttp = void 0;

      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); //其他浏览器
      } else if (window.ActiveXObject) {
        try {
          xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); //旧版IE
        } catch (e) {}
        try {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //新版IE
        } catch (e) {}
        if (!xmlhttp) {
          window.alert("不能创建XMLHttpRequest对象");
        }
      }
      var yourFileURL = "/admin/pdf/teaching.pdf";
      xmlhttp.open("GET", yourFileURL, false);
      xmlhttp.send();

      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200 && xmlhttp.response.indexOf('html') === -1) return 'exists';else return 'not exists';
      }
    }
  }
});

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.checkTeachingFile === "exists"
    ? _c("iframe", {
        staticClass: "iframe",
        staticStyle: {
          border: "0",
          "box-shadow": "0 1px 10px 0 rgba(0, 0, 0, 0.1)"
        },
        attrs: {
          width: "100%",
          height: "600px",
          src: "/admin/pdf/teaching.pdf"
        }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b971add", module.exports)
  }
}

/***/ })

});