webpackJsonp([79],{

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(603)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(605)
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
Component.options.__file = "resources/assets/admin/layout/TheContent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3880c24e", Component.options)
  } else {
    hotAPI.reload("data-v-3880c24e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(256)("8d937530", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3880c24e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TheContent.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3880c24e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TheContent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(255)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.content-container > .list-data, .content-container > .form-data {\n  background: #fff;\n  padding: 20px;\n}\n.content-container .el-main, .content-container .el-aside {\n  padding: 0;\n  margin-right: 20px;\n  background: #fff;\n}\n\n/*transition: router*/\n.content-enter-active {\n  -webkit-animation: coming 1s;\n          animation: coming 1s;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  opacity: 0;\n}\n.content-leave-active {\n  -webkit-animation: going 1s;\n          animation: going 1s;\n}\n@-webkit-keyframes coming {\nfrom {\n    -webkit-transform: translate3d(0, -50px, 0);\n            transform: translate3d(0, -50px, 0);\n    opacity: 0;\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n@keyframes coming {\nfrom {\n    -webkit-transform: translate3d(0, -50px, 0);\n            transform: translate3d(0, -50px, 0);\n    opacity: 0;\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    opacity: 1;\n}\n}\n@-webkit-keyframes going {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, -50px, 0);\n            transform: translate3d(0, -50px, 0);\n    opacity: 0;\n}\n}\n@keyframes going {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\nto {\n    -webkit-transform: translate3d(0, -50px, 0);\n            transform: translate3d(0, -50px, 0);\n    opacity: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-container" }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3880c24e", module.exports)
  }
}

/***/ })

});