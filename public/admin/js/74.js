webpackJsonp([74],{

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(592)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(594)
/* template */
var __vue_template__ = __webpack_require__(595)
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
Component.options.__file = "resources/assets/admin/layout/TheNavbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a3bfd40", Component.options)
  } else {
    hotAPI.reload("data-v-2a3bfd40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(593);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(250)("063c3f62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a3bfd40\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TheNavbar.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a3bfd40\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TheNavbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(249)(false);
// imports


// module
exports.push([module.i, "\n.navbar{height:60px;-webkit-box-shadow:0px 1px 10px 0px rgba(0,0,0,0.15);box-shadow:0px 1px 10px 0px rgba(0,0,0,0.15)\n}\n.navbar-left{-webkit-box-flex:1;-ms-flex:1;flex:1\n}\n.navbar-right__item{vertical-align:middle\n}\n.navbar-right__item+.navbar-right__item{padding-left:40px\n}\n.navbar-right__item+.navbar-right__item:before{content:\"\";height:30px;width:1px;background:#e6e6e6;position:absolute;top:calc(50% - 15px);left:20px\n}\n.navbar-right__icontitle{margin-right:.25em\n}\n.navbar-right__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.navbar-right__dropdown_item{-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:10px\n}\n.navbar-right__dropdown_subtitle{color:#909399\n}\n", ""]);

// exports


/***/ }),

/***/ 594:
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
  name: "Navbar",
  methods: {
    toggle_menu: function toggle_menu() {
      this.$store.commit("left_menu", "toggle");
    },

    /**
     * 登出
     */
    handleLogout: function handleLogout() {
      var _this = this;

      this.$confirm(this.$t("GLOBAL_CONFIRM_LOGOUT"), {
        type: "warning"
      }).then(function () {
        _this.$$api_user_logout({
          fn: function fn() {
            _this.$message.success(_this.$t("GLOBAL_LOGOUT_SUCCESS"));
            _this.$store.dispatch("remove_option_related_list");
            _this.$store.dispatch("remove_userinfo").then(function () {
              _this.$router.push("/login");
            });
          }
        });
      });
    },
    onCommand: function onCommand(cmd) {
      if (cmd === "logout") {
        this.handleLogout();
      }
    }
  }
});

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "navbar" }, [
    _c(
      "div",
      { staticClass: "navbar-left" },
      [
        _c("font-awesome-icon", {
          staticClass: "sidebar-toggle",
          attrs: { icon: ["fal", "list-ul"] },
          on: { click: _vm.toggle_menu }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "navbar-right" },
      [
        _c(
          "el-dropdown",
          {
            staticClass: "navbar-right__item",
            attrs: { trigger: "click" },
            on: { command: _vm.onCommand }
          },
          [
            _c("div", { staticClass: "navbar-right__dropdown" }, [
              _c(
                "div",
                { staticClass: "navbar-right__dropdown_item" },
                [
                  _c("span", { staticClass: "navbar-right__icontitle" }, [
                    _vm._v(_vm._s(_vm.$t("GLOBAL_VIEW_SITE" /*預覽網站*/)))
                  ]),
                  _vm._v(" "),
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fal", "external-link"] }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fas", "caret-down"] }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "el-dropdown-menu",
              { attrs: { slot: "dropdown" }, slot: "dropdown" },
              _vm._l(_vm.$store.state.sys.site_list, function(site) {
                return _c(
                  "a",
                  {
                    key: site.id,
                    attrs: {
                      href: "https://" + site.url + "/" + site.sef,
                      target: "_blank"
                    }
                  },
                  [_c("el-dropdown-item", [_vm._v(_vm._s(site.title))])],
                  1
                )
              }),
              0
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-dropdown",
          {
            staticClass: "navbar-right__item",
            attrs: { trigger: "click" },
            on: { command: _vm.onCommand }
          },
          [
            _c("div", { staticClass: "navbar-right__dropdown" }, [
              _c("div", { staticClass: "navbar-right__dropdown_item" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.$store.state.user.user_info.last_name) +
                    "\n          "
                ),
                _c("div", { staticClass: "navbar-right__dropdown_subtitle" }, [
                  _vm._v(_vm._s(_vm.$store.state.user.user_info.first_name))
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fas", "caret-down"] }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "el-dropdown-menu",
              { attrs: { slot: "dropdown" }, slot: "dropdown" },
              [
                _c(
                  "el-dropdown-item",
                  { attrs: { command: "logout" } },
                  [
                    _c("span", { staticClass: "navbar-right__icontitle" }, [
                      _vm._v(_vm._s(_vm.$t("LOGOUT") /*登出*/))
                    ]),
                    _vm._v(" "),
                    _c("font-awesome-icon", {
                      attrs: { icon: ["fal", "sign-out"] }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2a3bfd40", module.exports)
  }
}

/***/ })

});