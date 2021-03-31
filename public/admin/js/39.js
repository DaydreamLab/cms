webpackJsonp([39],{

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(484)
/* template */
var __vue_template__ = __webpack_require__(485)
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
Component.options.__file = "resources/assets/admin/views/content/tag/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73c7b5fa", Component.options)
  } else {
    hotAPI.reload("data-v-73c7b5fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 279:
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

/***/ 283:
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

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_edit_cms__ = __webpack_require__(283);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TagEdit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_edit_cms__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        language: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      },
      defaultValue: {
        title: "",
        alias: "",
        state: 1,
        access: 1,
        language: "*",
        ordering: "",
        parent_id: 1,
        metadesc: "",
        metakeywords: ""
      }
    };
  },

  methods: {
    handleSubmit: function handleSubmit(_ref) {
      var _this = this;

      var submit_data = _ref.submit_data,
          btn_type = _ref.btn_type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_tag_save({
        data: submit_data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$_editMixin_onSubmitFinish({
            msg: msg,
            btn_type: btn_type,
            query: { id: data ? data.items.id : submit_data.id }
          });
        }
      });
    },
    handleGetData: function handleGetData() {
      var _this2 = this;

      this.$$api_tag_get({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.defaultValue = _extends({}, _this2.defaultValue, data.items);
        }
      });
    }
  }
});

/***/ }),

/***/ 485:
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
                            prop: "alias",
                            label: _vm.$t("FIELD_ALIAS_LABEL") /*別名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.defaultValue.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "alias", $$v)
                              },
                              expression: "defaultValue.alias"
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
                    label: _vm.$t(
                      "GLOBAL_FIELDSET_METADATA_OPTIONS"
                    ) /*Metadata*/
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
                            prop: "metadesc",
                            label: _vm.$t(
                              "FIELD_META_DESCRIPTION_LABEL"
                            ) /*Meta 說明*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.defaultValue.metadesc,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "metadesc", $$v)
                              },
                              expression: "defaultValue.metadesc"
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
                            prop: "metakeywords",
                            label: _vm.$t(
                              "FIELD_META_KEYWORDS_LABEL"
                            ) /*Meta 關鍵字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.defaultValue.metakeywords,
                              callback: function($$v) {
                                _vm.$set(_vm.defaultValue, "metakeywords", $$v)
                              },
                              expression: "defaultValue.metakeywords"
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
      ),
      _vm._v(" "),
      _c("el-aside", { attrs: { width: "300px" } }, [
        _c("div", { staticClass: "content-aside__header" }, [
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*選項*/))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-aside__content" },
          [
            _c(
              "el-form",
              {
                ref: "form-data",
                attrs: { "label-position": "top", model: _vm.defaultValue }
              },
              [
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "state",
                      label: _vm.$t("OPTION_STATE" /*狀態*/)
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.state,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "state", $$v)
                          },
                          expression: "defaultValue.state"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("PUBLISHED") /*發佈的*/,
                            value: 1
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("UNPUBLISHED") /*停止發佈的*/,
                            value: 0
                          }
                        })
                      ],
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
                      prop: "language",
                      label: _vm.$t("OPTION_LANGUAGE") /*語言*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.defaultValue.language,
                          callback: function($$v) {
                            _vm.$set(_vm.defaultValue, "language", $$v)
                          },
                          expression: "defaultValue.language"
                        }
                      },
                      _vm._l(_vm.fields.language.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.language.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.language.custom_attrs.label],
                            value:
                              option[_vm.fields.language.custom_attrs.value]
                          }
                        })
                      }),
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
    require("vue-hot-reload-api")      .rerender("data-v-73c7b5fa", module.exports)
  }
}

/***/ })

});