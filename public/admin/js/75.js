webpackJsonp([75],{

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(587)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(589)
/* template */
var __vue_template__ = __webpack_require__(590)
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
Component.options.__file = "resources/assets/admin/layout/TheBreadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67e8c7d3", Component.options)
  } else {
    hotAPI.reload("data-v-67e8c7d3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(588);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(251)("772f8d84", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67e8c7d3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Applications/MAMP/htdocs/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TheBreadcrumb.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-67e8c7d3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Applications/MAMP/htdocs/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TheBreadcrumb.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n.breadcrumb-container{line-height:60px\n}\n.breadcrumb--alias{color:#4d4d4d;cursor:text\n}\n.breadcrumb-enter-active,.breadcrumb-leave-active{-webkit-transition:all 0.5s;transition:all 0.5s\n}\n.breadcrumb-enter,.breadcrumb-leave-active{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)\n}\n.breadcrumb-move{-webkit-transition:all 0.5s;transition:all 0.5s\n}\n.breadcrumb-leave-active{position:absolute\n}\n", ""]);

// exports


/***/ }),

/***/ 589:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    breadcrumbs: function breadcrumbs() {
      return this.$route.matched.filter(function (route) {
        return route.name && route.path !== "/";
      });
    }
  },
  methods: {
    formatEditTitle: function formatEditTitle(name) {
      return name = name.replace(this.$t("TOOLBAR_EDIT"), this.$route.query.id ? this.$t("TOOLBAR_EDIT") : this.$t("TOOLBAR_ADD"));
    }
  }
});

/***/ }),

/***/ 590:
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
              _vm._l(_vm.breadcrumbs, function(ref, $index) {
                var name = ref.name
                var path = ref.path
                var meta = ref.meta
                return _c(
                  "el-breadcrumb-item",
                  { key: meta.id },
                  [
                    $index === _vm.$route.matched.length - 1
                      ? _c("span", { staticClass: "breadcrumb--alias" }, [
                          _vm._v(_vm._s(_vm.formatEditTitle(_vm.$t(name))))
                        ])
                      : _c("router-link", { attrs: { to: path } }, [
                          _vm._v(_vm._s(_vm.$t(name)))
                        ])
                  ],
                  1
                )
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
    require("vue-hot-reload-api")      .rerender("data-v-67e8c7d3", module.exports)
  }
}

/***/ })

});