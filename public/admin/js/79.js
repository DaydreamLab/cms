webpackJsonp([79],{

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(605)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(607)
/* template */
var __vue_template__ = __webpack_require__(608)
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
Component.options.__file = "resources/assets/admin/layout/Breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63e8de94", Component.options)
  } else {
    hotAPI.reload("data-v-63e8de94", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(262)("a0c9d152", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63e8de94\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Breadcrumb.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63e8de94\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Breadcrumb.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(261)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.breadcrumb-container {\n  line-height: 60px;\n}\n.breadcrumb--alias {\n  color: #4d4d4d;\n  cursor: text;\n}\n\n/*fade*/\n.breadcrumb-enter-active, .breadcrumb-leave-active {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.breadcrumb-enter, .breadcrumb-leave-active {\n  opacity: 0;\n  -webkit-transform: translateX(20px);\n          transform: translateX(20px);\n}\n.breadcrumb-move {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.breadcrumb-leave-active {\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ 607:
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatEditTitle: function formatEditTitle(name) {
      return name = name.replace(this.$t("TOOLBAR_EDIT"), this.$route.query.id ? this.$t("TOOLBAR_EDIT") : this.$t("TOOLBAR_ADD"));
    }
  }
});

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "breadcrumb-container" },
    [
      _c(
        "el-breadcrumb",
        { attrs: { separator: "/" } },
        [
          _c(
            "transition-group",
            { attrs: { name: "breadcrumb" } },
            [
              _c(
                "el-breadcrumb-item",
                {
                  key: "index",
                  attrs: {
                    to: { path: _vm.$store.state.user.user_info.redirect }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("GLOBAL_HOMEPAGE" /*首頁*/)))]
              ),
              _vm._v(" "),
              _vm._l(_vm.$route.matched, function(item, index) {
                return item.name && item.path !== "/"
                  ? _c(
                      "el-breadcrumb-item",
                      { key: item.meta.id },
                      [
                        index == _vm.$route.matched.length - 1
                          ? _c("span", { staticClass: "breadcrumb--alias" }, [
                              _vm._v(
                                _vm._s(_vm.formatEditTitle(_vm.$t(item.name)))
                              )
                            ])
                          : _c("router-link", { attrs: { to: item.path } }, [
                              _vm._v(_vm._s(_vm.$t(item.name)))
                            ])
                      ],
                      1
                    )
                  : _vm._e()
              })
            ],
            2
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-63e8de94", module.exports)
  }
}

/***/ })

});