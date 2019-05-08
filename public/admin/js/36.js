webpackJsonp([36],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(502)
/* template */
var __vue_template__ = __webpack_require__(503)
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

/***/ 290:
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
            this.params.pid = parseInt(this.$route.query.pid) || "";
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {
        var _this = this;

        this.$$eventBus.$on("onClickCMSFormDataToolbar", function (opts) {
            switch (opts.type) {
                case "cancel":
                    _this.$onCancel(_this.$route.query.id);
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    _this.handleSubmit({
                        ref: "form-data",
                        type: opts.type,
                        submit_data: _this.default_value
                    });
                    break;
                case "trash":
                    _this.onTrash();
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__ = __webpack_require__(300);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "tag-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      default_value: {
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
          type = _ref.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_tag_save({
        data: submit_data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          if (data) {
            submit_data.id = data.items.id;
          }
          _this.$onSubmitFinish({ type: type, query: { id: submit_data.id } });
        }
      });
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_tag_get({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.default_value = _extends({}, _this2.default_value, data.items);
        }
      });
    }
  }
});

/***/ }),

/***/ 503:
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
                        model: _vm.default_value
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
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
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
                              value: _vm.default_value.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "alias", $$v)
                              },
                              expression: "default_value.alias"
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
                        model: _vm.default_value
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
                              value: _vm.default_value.metadesc,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metadesc", $$v)
                              },
                              expression: "default_value.metadesc"
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
                              value: _vm.default_value.metakeywords,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metakeywords", $$v)
                              },
                              expression: "default_value.metakeywords"
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
      _c("el-aside", { attrs: { width: "400px" } }, [
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
                attrs: { "label-position": "top", model: _vm.default_value }
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
                          value: _vm.default_value.state,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "state", $$v)
                          },
                          expression: "default_value.state"
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