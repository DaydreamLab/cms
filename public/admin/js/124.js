webpackJsonp([124],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(546)
/* template */
var __vue_template__ = __webpack_require__(547)
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
Component.options.__file = "resources/assets/admin/views/user/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc05c74e", Component.options)
  } else {
    hotAPI.reload("data-v-dc05c74e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            params: {
                id: "",
                pid: ""
            },
            toolbar: {
                type: "edit"
            }
        };
    },

    watch: {
        $route: function $route() {
            this.$initView();
        }
    },
    created: function created() {
        this.$initView();
    },

    methods: {
        $onSubmitFinish: function $onSubmitFinish(_ref) {
            var type = _ref.type,
                query = _ref.query;

            switch (type) {
                case "save":
                    this.$router.push({
                        path: this.$route.path,
                        query: query
                    });
                    break;
                case "savenadd":
                    this.$router.push({
                        path: this.$route.path
                    });
                    this.$router.go(0);
                    break;
                case "savenclose":
                    this.$onCancel();
                    break;
            }
        },
        $onCancel: function $onCancel() {
            var checkout_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            if (checkout_id) {
                this.handleCheckout(checkout_id);
            }
            this.$router.push({
                path: this.$route.path.replace("/edit", ""),
                query: this.$route.query.from
            });
        },
        onUpdateViewParams: function onUpdateViewParams() {
            this.params.id = parseInt(this.$route.query.id) || "";
            this.params.pid = parseInt(this.$route.query.pid) || 1;
            this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
        },
        $initView: function $initView() {
            this.onUpdateViewParams();

            if (this.params.id) {
                this.onGetView();
            }
        }
    }
});

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(288);
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
  name: "user-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        group_ids: {
          list: [],
          custom_attrs: {
            children: "children",
            label: "title"
          }
        }
      },
      default_value: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        reset_password: "0",
        group_ids: [],
        activation: 1,
        block: 0
      }
    };
  },
  created: function created() {
    var _this = this;

    this.$$eventBus.$on("onClickUSERFormDataToolbar", function (opts) {
      switch (opts.type) {
        case "cancel":
          _this.$onCancel();
          break;
        case "save":
        case "savenclose":
        case "savenadd":
          _this.onSubmit({
            ref: "form-data",
            type: opts.type,
            data: _this.default_value
          });
          break;
        case "trash":
          _this.onTrash();
          break;
      }
    });
    this.onUpdateFieldList();
    this.$$eventBus.$emit("onInitToolbar", {
      name: "USERFormData",
      data: this.toolbar
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$$eventBus.$emit("onInitToolbar", {
      name: "USERFormData",
      data: {}
    });
    this.$$eventBus.$off("onClickUSERFormDataToolbar");
  },

  methods: {
    onTrash: function onTrash() {
      var _this2 = this;

      this.$$api_user_updateBlock({
        data: {
          ids: [this.params.id],
          block: 1
        },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this2.$message.success(msg);
          _this2.$onCancel();
        }
      });
    },
    onCheckGroupChange: function onCheckGroupChange() {
      this.default_value.group_ids = this.$refs.groupTree.getCheckedKeys();
    },
    onSubmit: function onSubmit(_ref2) {
      var _this3 = this;

      var data = _ref2.data,
          info = _ref2.info,
          type = _ref2.type;

      var submit_data = data;
      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_user_save({
        data: submit_data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this3.$message.success(msg);

          if (data) {
            submit_data.id = data.items.id;
          }
          _this3.$onSubmitFinish({
            type: type,
            query: { id: submit_data.id }
          });
        }
      });
    },
    $onCancel: function $onCancel() {
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView: function onGetView() {
      var _this4 = this;

      this.$$api_user_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this4.default_value = _extends({}, _this4.default_value, data.items, {
            group_ids: data.items["groups"].map(function (item) {
              return item.id;
            })
          });
        }
      });
    },
    onUpdateFieldList: function onUpdateFieldList() {
      var _this5 = this;

      this.$$api_user_listTreeGroup({
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this5.fields.group_ids.list = data.items;
        }
      });
    }
  }
});

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: _vm.$t("USER_TAB_DETAIL") /*會員資料*/ } },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { label: _vm.$t("USER_OPTION_ACTIVE") } },
                        [
                          _c("el-switch", {
                            attrs: {
                              "active-text": _vm.$t("YES"),
                              "active-value": 1,
                              "inactive-text": _vm.$t("NO"),
                              "inactive-value": 0
                            },
                            model: {
                              value: _vm.default_value.activation,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "activation", $$v)
                              },
                              expression: "default_value.activation"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "first_name",
                            label: _vm.$t("USER_FIELD_FIRST_NAME" /*姓*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.first_name,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "first_name", $$v)
                              },
                              expression: "default_value.first_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "last_name",
                            label: _vm.$t("USER_FIELD_LAST_NAME") /*名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.last_name,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "last_name", $$v)
                              },
                              expression: "default_value.last_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "email",
                            label: _vm.$t("USER_FIELD_EMAIL") /*Email*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.email,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "email", $$v)
                              },
                              expression: "default_value.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "password",
                            label: _vm.$t("USER_FIELD_PASSWORD") /*密碼*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.password,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "password", $$v)
                              },
                              expression: "default_value.password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "password_confirmation",
                            label: _vm.$t(
                              "USER_FIELD_PASSWORD_CONFIRMATION"
                            ) /*再次輸入密碼*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.password_confirmation,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.default_value,
                                  "password_confirmation",
                                  $$v
                                )
                              },
                              expression: "default_value.password_confirmation"
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
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("USER_TAB_ASSIGN_GROUP") /*指定會員群組*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { prop: "group_ids" } },
                        [
                          _c("el-tree", {
                            ref: "groupTree",
                            attrs: {
                              data: _vm.fields.group_ids.list,
                              "default-checked-keys":
                                _vm.default_value.group_ids,
                              "default-expanded-keys":
                                _vm.default_value.group_ids,
                              props: _vm.fields.group_ids.custom_attrs,
                              "node-key": "id",
                              "check-strictly": "",
                              "show-checkbox": ""
                            },
                            on: { "check-change": _vm.onCheckGroupChange }
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
    require("vue-hot-reload-api")      .rerender("data-v-dc05c74e", module.exports)
  }
}

/***/ })

});