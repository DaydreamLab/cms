webpackJsonp([38],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(519)
/* template */
var __vue_template__ = __webpack_require__(520)
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
Component.options.__file = "resources/assets/admin/views/system/language/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ae037c6", Component.options)
  } else {
    hotAPI.reload("data-v-5ae037c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 278:
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
        $route: {
            immediate: true,
            handler: "initData"
        }
    },
    methods: {
        $_editMixin_onSubmitFinish: function $_editMixin_onSubmitFinish(_ref) {
            var msg = _ref.msg,
                btn_type = _ref.btn_type,
                query = _ref.query;

            this.$message.success(msg);
            switch (btn_type) {
                case "save":
                    this.$router.push({
                        path: this.$route.path,
                        query: query
                    });
                    break;
                case "savenadd":
                    //Checkout
                    if (this.checkRouteNeedCheckout(this.$route.path) && query.id) {
                        this.handleCheckout(query.id);
                    }
                    this.$router.push({
                        path: this.$route.path
                    });
                    this.$router.go(0);
                    break;
                case "savenclose":
                    //Checkout
                    this.$_editMixin_onCancel(query.id);
                    break;
            }
        },
        $_editMixin_onCancel: function $_editMixin_onCancel() {
            var checkout_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            if (this.checkRouteNeedCheckout(this.$route.path) && checkout_id) {
                this.handleCheckout(checkout_id);
            }
            this.$router.push({
                path: this.$route.path.replace("/edit", ""),
                query: this.$route.query.from
            });
        },
        checkRouteNeedCheckout: function checkRouteNeedCheckout(route) {
            var checkoutArray = ["item", "category", "menu", "site"];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = checkoutArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var path = _step.value;

                    if (route.includes(path)) {
                        return true;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        updateParams: function updateParams() {
            this.params.id = Number(this.$route.query.id) || "";
            this.params.pid = Number(this.$route.query.pid) || 1;
            this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
        },
        initData: function initData() {
            this.updateParams();

            if (this.params.id) {
                this.handleGetData();
            }
        }
    }
});

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {
        var _this = this;

        this.$$eventBus.$on("onClickCMSFormDataToolbar", function (btnOpts) {
            var type = btnOpts.type;

            switch (type) {
                case "cancel":
                    _this.$_editMixin_onCancel(_this.$route.query.id);
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    _this.handleSubmit({
                        btn_type: type,
                        submit_data: _this.defaultValue
                    });
                    break;
                case "trash":
                    _this.handleTrash();
                    break;
            }
        });
    },
    mounted: function mounted() {
        this.initToolbar(this.toolbar);
    },
    beforeDestroy: function beforeDestroy() {
        this.initToolbar();
        this.$$eventBus.$off("onClickCMSFormDataToolbar");
    },

    methods: {
        initToolbar: function initToolbar() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.$$eventBus.$emit("onInitToolbar", {
                name: "CMSFormData",
                data: data
            });
        }
    }
});

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_edit_cms__ = __webpack_require__(282);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LanguageEdit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_edit_cms__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        type: {
          list: [{
            value: "content",
            text: this.$t("LANGUAGE_FIELD_TYPE_CONTENT")
          }, {
            value: "system",
            text: this.$t("LANGUAGE_FIELD_TYPE_SYSTEM")
          }],
          custom_attrs: {
            label: "text",
            value: "value"
          }
        }
      },
      defaultValue: {
        title: "",
        code: "",
        sef: "",
        description: "",
        type: "content",
        state: 1,
        ordering: ""
      }
    };
  },

  methods: {
    handleTrash: function handleTrash() {
      var _this = this;

      this.$$api_language_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.$_editMixin_onCancel();
        }
      });
    },
    handleSubmit: function handleSubmit(_ref2) {
      var _this2 = this;

      var submit_data = _ref2.submit_data,
          btn_type = _ref2.btn_type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_language_save({
        data: submit_data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$message.success(msg);
          submit_data.id = data.items.id || submit_data.id;
          _this2.$_editMixin_onSubmitFinish({
            btn_type: btn_type,
            query: { id: submit_data.id }
          });
        }
      });
    },
    handleGetData: function handleGetData() {
      var _this3 = this;

      this.$$api_language_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this3.defaultValue = _extends({}, _this3.defaultValue, data.items);
        }
      });
    }
  }
});

/***/ }),

/***/ 520:
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
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.defaultValue
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "type",
                            label: _vm.$t("OPTION_TYPE") /*類型*/
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              model: {
                                value: _vm.defaultValue.type,
                                callback: function($$v) {
                                  _vm.$set(_vm.defaultValue, "type", $$v)
                                },
                                expression: "defaultValue.type"
                              }
                            },
                            _vm._l(_vm.fields.type.list, function(option) {
                              return _c("el-option", {
                                key: option[_vm.fields.type.custom_attrs.value],
                                attrs: {
                                  label:
                                    option[_vm.fields.type.custom_attrs.label],
                                  value:
                                    option[_vm.fields.type.custom_attrs.value]
                                }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.defaultValue.title,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "title", $$v)
                              },
                              expression: "defaultValue.title"
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
                            prop: "code",
                            label: _vm.$t(
                              "LANGUAGE_FIELD_LANG_TAG_LABEL"
                            ) /*語言標籤*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.defaultValue.code,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "code", $$v)
                              },
                              expression: "defaultValue.code"
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
                            prop: "sef",
                            label: _vm.$t(
                              "LANGUAGE_FIELD_LANG_CODE_LABEL"
                            ) /*網址語言代碼*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.defaultValue.sef,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "sef", $$v)
                              },
                              expression: "defaultValue.sef"
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
                            prop: "description",
                            label: _vm.$t("FIELD_DESCRIPTION_LABEL") /*描述*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.defaultValue.description,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "description", $$v)
                              },
                              expression: "defaultValue.description"
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
    require("vue-hot-reload-api")      .rerender("data-v-5ae037c6", module.exports)
  }
}

/***/ })

});