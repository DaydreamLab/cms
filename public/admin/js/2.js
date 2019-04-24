webpackJsonp([2],{

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(290)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(292)
/* template */
var __vue_template__ = __webpack_require__(320)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15828418"
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
Component.options.__file = "resources/assets/admin/views/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15828418", Component.options)
  } else {
    hotAPI.reload("data-v-15828418", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(267)("100bbe7b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15828418\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15828418\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(266)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.login-wrapper[data-v-15828418] {\n  background: -webkit-gradient(linear, left top, right top, from(#3f6c95), to(#2f3855));\n  background: linear-gradient(to right, #3f6c95 0%, #2f3855 100%);\n  height: 100vh;\n}\n.login-form[data-v-15828418] {\n  position: absolute;\n  max-width: 600px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 4px;\n  padding: 30px;\n}\n.btn--help[data-v-15828418] {\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils___ = __webpack_require__(15);
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
  name: "login",
  data: function data() {
    var _this = this;

    return {
      remember: this.$store.state.user.remember,
      password_visible: false,
      login_visibel: false,
      login_loading: false, // v-loading
      data: {
        email: "",
        password: ""
      },
      rule_data: {
        email: [{
          validator: function validator(rule, value, callback) {
            if (value === "") {
              callback(new Error(_this.$t("ERROR_PLEASE_ENTER_USER_NAME")));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }, {
          type: "email",
          message: this.$t("ERROR_PLEASE_ENTER_VALID_EMAIL"),
          trigger: "blur"
        }],
        password: [{
          validator: function validator(rule, value, callback) {
            if (value === "") {
              callback(new Error(_this.$t("ERROR_PLEASE_ENTER_PASSWORD")));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }]
      }
    };
  },
  mounted: function mounted() {
    if (this.$store.state.global.is_login_refresh) {
      // setTimeout(() => {
      //   this.$router.go(0);
      // }, 50);
      this.$router.go(0);
      this.$store.commit("update_login_refresh", {
        type: false
      });
    }

    if (this.remember.remember_flag === true) {
      this.data.email = this.remember.remember_login_info.email;
    }
  },

  methods: {
    togglePassword: function togglePassword() {
      this.password_visible = !this.password_visible;
    },
    onLogin: function onLogin(ref) {
      var _this2 = this;

      this.$refs[ref].validate(function (valid) {
        if (valid) {
          _this2.login_loading = true;
          _this2.$$api_user_login({
            tokenFlag: true,
            data: _this2[ref],
            fn: function fn(_ref) {
              var data = _ref.data,
                  msg = _ref.msg;

              _this2.$message.success(msg);

              if (_this2.remember.remember_flag === true) {
                _this2.$store.dispatch("update_remember", {
                  remember_flag: _this2.remember.remember_flag,
                  remember_login_info: {
                    email: _this2[ref].email,
                    token: data.items.token
                  }
                });
              } else {
                _this2.$store.dispatch("remove_remember");
              }
              var user_id = data.items.id;
              var user_redirect = data.items.redirect;

              // 儲存用戶 token
              _this2.$store.dispatch("update_userinfo", data.items).then(function () {
                // 取得用戶 routes
                _this2.$$api_user_getRoutes({
                  fn: function fn(_ref2) {
                    var data = _ref2.data;

                    var user_routes = data.items;
                    _this2.$router.options.routes = Object(__WEBPACK_IMPORTED_MODULE_0_utils___["c" /* formatRoutes */])(user_routes);
                    _this2.$router.addRoutes(_this2.$router.options.routes);

                    _this2.$store.dispatch("update_user_routes", {
                      routes: user_routes,
                      redirect: user_redirect
                    }).then(function () {
                      _this2.$router.push(user_redirect);
                    });
                  }
                });
              });
            },
            errFn: function errFn(msg) {
              _this2.$message.error(msg);
            },
            finalFn: function finalFn() {
              _this2.login_loading = false;
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _c("el-col", { attrs: { span: 24 } }, [
            _c(
              "div",
              { staticClass: "content login-wrapper" },
              [
                _c(
                  "el-form",
                  {
                    directives: [
                      {
                        name: "loading",
                        rawName: "v-loading",
                        value: _vm.login_loading,
                        expression: "login_loading"
                      }
                    ],
                    ref: "data",
                    staticClass: "login-form",
                    attrs: {
                      "label-position": "left",
                      "element-loading-text": _vm.$t(
                        "LOGIN_LOADING"
                      ) /*登入中⋯⋯*/,
                      model: _vm.data,
                      rules: _vm.rule_data
                    }
                  },
                  [
                    _c(
                      "el-form-item",
                      { staticClass: "text-center login-header" },
                      [
                        _c("SvgIcon", {
                          staticStyle: { width: "100%", height: "45px" },
                          attrs: { "icon-class": "logo" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      { attrs: { prop: "email" } },
                      [
                        _c("el-input", {
                          attrs: {
                            type: "email",
                            "auto-complete": "off",
                            placeholder: _vm.$t("GLOBAL_USERNAME") /*帳號*/
                          },
                          model: {
                            value: _vm.data.email,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "email", $$v)
                            },
                            expression: "data.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      { attrs: { prop: "password" } },
                      [
                        _c(
                          "el-input",
                          {
                            attrs: {
                              type: _vm.password_visible ? "text" : "password",
                              "auto-complete": "off",
                              placeholder: _vm.$t("GLOBAL_PASSWORD") /*密碼*/
                            },
                            nativeOn: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                _vm.onLogin("data", true)
                              }
                            },
                            model: {
                              value: _vm.data.password,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "password", $$v)
                              },
                              expression: "data.password"
                            }
                          },
                          [
                            _c(
                              "el-button",
                              {
                                attrs: { slot: "append" },
                                on: { click: _vm.togglePassword },
                                slot: "append"
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: {
                                    icon: [
                                      "fal",
                                      _vm.password_visible ? "eye" : "eye-slash"
                                    ]
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      [
                        _c(
                          "el-checkbox",
                          {
                            attrs: { checked: _vm.remember.remember_flag },
                            model: {
                              value: _vm.remember.remember_flag,
                              callback: function($$v) {
                                _vm.$set(_vm.remember, "remember_flag", $$v)
                              },
                              expression: "remember.remember_flag"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("GLOBAL_REMEMBER_ME") /*記住帳號*/)
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        staticClass: "is-block",
                        attrs: { type: "primary" },
                        on: {
                          click: function($event) {
                            _vm.onLogin("data")
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("LOGIN") /*登入*/))]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-15828418", module.exports)
  }
}

/***/ })

});