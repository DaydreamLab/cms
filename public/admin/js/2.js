webpackJsonp([2],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(502)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(504)
/* template */
var __vue_template__ = __webpack_require__(505)
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

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(503);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(251)("7b50473b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15828418\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Applications/MAMP/htdocs/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15828418\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Applications/MAMP/htdocs/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n.login-wrapper[data-v-15828418]{background:-webkit-gradient(linear, left top, right top, from(#3f6c95), to(#2f3855));background:linear-gradient(to right, #3f6c95 0%, #2f3855 100%);height:100vh\n}\n.login-form__wrapper[data-v-15828418]{position:absolute;min-width:300px;max-width:600px;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);background:#fff;border-radius:4px;padding:30px\n}\n.login-header[data-v-15828418]{margin-bottom:25px;text-align:center\n}\n.btn--help[data-v-15828418]{margin-top:10px\n}\n.login-form-enter-active[data-v-15828418],.login-form-leave-active[data-v-15828418]{-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out\n}\n.login-form-enter[data-v-15828418],.login-form-leave-to[data-v-15828418]{opacity:0\n}\n", ""]);

// exports


/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils___ = __webpack_require__(19);
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
  name: "Login",
  data: function data() {
    var _this = this;

    return {
      remember: this.$store.state.user.remember,
      password_visible: false,
      login_visibel: false,
      login_loading: false, // v-loading
      form_data: {
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
  created: function created() {
    if (this.remember.remember_flag) this.form_data.email = this.remember.remember_login_info.email;
  },

  methods: {
    togglePassword: function togglePassword() {
      this.password_visible = !this.password_visible;
    },

    /**
     * 透過 token 取得用戶 assets 與 apis
     * @param {String} redirectPage 重新導向的頁面路徑
     */
    getUserPage: function getUserPage(redirectPage) {
      var _this2 = this;

      this.$$api_user_getPages({
        fn: function fn(_ref) {
          var data = _ref.data;
          var _data$items = data.items,
              assets = _data$items.assets,
              apis = _data$items.apis;

          _this2.$router.options.routes = Object(__WEBPACK_IMPORTED_MODULE_0_utils___["c" /* formatRoutes */])(assets);
          _this2.$router.addRoutes(_this2.$router.options.routes);

          _this2.$message.success(_this2.$t("GLOBAL_LOGIN_SUCCESS"));
          _this2.$router.push(redirectPage);

          _this2.$store.dispatch("update_user_access", apis);
          _this2.$store.dispatch("update_user_routes", {
            routes: assets,
            redirect: redirectPage
          });
        },
        errFn: function errFn(msg) {
          _this2.$message.error(msg);
          _this2.$store.dispatch("remove_userinfo").then(function () {
            _this2.$router.push("/login");
          });
        },
        finalFn: function finalFn() {
          _this2.login_loading = false;
        }
      });
    },
    updateRememberStore: function updateRememberStore(userToken) {
      if (this.remember.remember_flag) {
        this.$store.dispatch("update_remember", {
          remember_flag: this.remember.remember_flag,
          remember_login_info: {
            email: this.form_data.email,
            userToken: userToken
          }
        });
      } else {
        this.$store.dispatch("remove_remember");
      }
    },
    onLogin: function onLogin() {
      var _this3 = this;

      this.$refs["form-data"].validate(function (valid) {
        if (valid) {
          _this3.login_loading = true;
          _this3.$$api_user_login({
            tokenFlag: true,
            data: _this3.form_data,
            fn: function fn(_ref2) {
              var data = _ref2.data,
                  msg = _ref2.msg;
              var _data$items2 = data.items,
                  token = _data$items2.token,
                  redirect = _data$items2.redirect;


              _this3.updateRememberStore(token);

              // 儲存用戶 token
              _this3.$store.dispatch("update_userinfo", data.items).then(function () {
                _this3.getUserPage(redirect);
              });
            },
            errFn: function errFn(msg) {
              _this3.login_loading = false;
              _this3.$message.error(msg);
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    [
      _c("el-col", { attrs: { span: 24 } }, [
        _c(
          "div",
          { staticClass: "content login-wrapper" },
          [
            _c(
              "transition",
              { attrs: { name: "login-form", appear: "" } },
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
                    ref: "form-data",
                    staticClass: "login-form__wrapper",
                    attrs: {
                      model: _vm.form_data,
                      rules: _vm.rule_data,
                      "element-loading-text": _vm.$t(
                        "LOGIN_LOADING"
                      ) /*登入中⋯⋯*/,
                      "label-position": "left"
                    }
                  },
                  [
                    _c("div", { staticClass: "text-center login-header" }, [
                      _c("img", {
                        staticStyle: { height: "45px" },
                        attrs: { src: "/admin/img/logo.svg" }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "login-from" },
                      [
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
                                value: _vm.form_data.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.form_data, "email", $$v)
                                },
                                expression: "form_data.email"
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
                                  type: _vm.password_visible
                                    ? "text"
                                    : "password",
                                  "auto-complete": "off",
                                  placeholder: _vm.$t(
                                    "GLOBAL_PASSWORD"
                                  ) /*密碼*/
                                },
                                nativeOn: {
                                  keyup: function($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
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
                                    return _vm.onLogin($event)
                                  }
                                },
                                model: {
                                  value: _vm.form_data.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form_data, "password", $$v)
                                  },
                                  expression: "form_data.password"
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
                                          _vm.password_visible
                                            ? "eye"
                                            : "eye-slash"
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
                                  _vm._s(
                                    _vm.$t("GLOBAL_REMEMBER_ME") /*記住帳號*/
                                  )
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
                            on: { click: _vm.onLogin }
                          },
                          [_vm._v(_vm._s(_vm.$t("LOGIN") /*登入*/))]
                        )
                      ],
                      1
                    )
                  ]
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