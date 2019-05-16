webpackJsonp([88],{

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(609)
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
Component.options.__file = "resources/assets/admin/layout/Footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65837cac", Component.options)
  } else {
    hotAPI.reload("data-v-65837cac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    {
      staticClass: "row-bg",
      attrs: { type: "flex", justify: "space-between" }
    },
    [
      _c("el-col", { attrs: { span: 12 } }, [
        _vm._v(
          "\n        © " +
            _vm._s(new Date().getFullYear()) +
            " " +
            _vm._s(_vm.$store.state.global.site_name) +
            ". All Rights Reserved.   \n    "
        )
      ]),
      _vm._v(" "),
      _c("el-col", { staticClass: "text-right", attrs: { span: 12 } }, [
        _vm._v("\n        Powered by\n            "),
        _c(
          "a",
          {
            attrs: {
              href: this.$store.state.global.author_link,
              target: "_blank"
            }
          },
          [
            _vm._v(
              "\n                " + _vm._s(_vm.$store.state.global.author_name)
            )
          ]
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-65837cac", module.exports)
  }
}

/***/ })

});