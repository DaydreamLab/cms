webpackJsonp([5],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(424)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(426)
/* template */
var __vue_template__ = __webpack_require__(446)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6042c5f6"
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
Component.options.__file = "resources/assets/admin/views/content/category/components/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6042c5f6", Component.options)
  } else {
    hotAPI.reload("data-v-6042c5f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(425);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(256)("8ebb0d16", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6042c5f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6042c5f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(255)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.el-collapse-item__header[data-v-6042c5f6] {\n  cursor: auto;\n  padding-left: 8px;\n}\n.el-collapse-item__header.is-disabled[data-v-6042c5f6] {\n    cursor: not-allowed;\n    background: #e6e6e6;\n}\n", ""]);

// exports


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
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
  components: {
    MediaInput: function MediaInput() {
      return __webpack_require__.e/* import() */(68/* duplicate */).then(__webpack_require__.bind(null, 365));
    },
    FieldForm: function FieldForm() {
      return __webpack_require__.e/* import() */(80).then(__webpack_require__.bind(null, 364));
    }
  },
  props: {
    category: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    type: {
      type: String,
      required: true
    },

    isActive: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      fields: {
        extrafield_group_id: {
          list: this.$store.getters.extrafield_group_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        }
      },
      defaultValue: {
        id: "",
        title: "",
        link: "",
        introtext: "",
        description: "",
        category_id: "",
        language: "",
        image: "",
        state: 1,
        featured: 0,
        extrafield_group_id: "",
        extrafields: {}
      },
      saveLoading: false,
      formLabelRefs: {
        slideshow: {
          title: "Slide 標題",
          image: "背景圖片"
        },
        link: {
          image: "Logo",
          title: "連結標題",
          link: "連結網址",
          description: "連結描述"
        },
        menu: {
          title: "菜名",
          introtext: "描述",
          description: "價錢"
        },
        timeline: {
          title: "標題",
          description: "描述"
        }
      }
    };
  },

  computed: {
    group_fields: function group_fields() {
      return this.fields.extrafield_group_id.list[this.defaultValue.extrafield_group_id];
    }
  },
  mounted: function mounted() {
    this.initData();
  },

  methods: {
    onClickBtnDelete: function onClickBtnDelete(id) {
      var _this = this;

      this.$$api_item_delete({
        data: { ids: [id] },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.$emit("update");
        }
      });
    },
    onClickBtnSave: function onClickBtnSave() {
      var _this2 = this;

      this.saveLoading = true;

      if (this.category) {
        this.defaultValue.category_id = this.category.id;
        this.defaultValue.language = this.category.language;
      }

      this.$$api_item_save({
        data: this.defaultValue,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this2.$message.success(msg);
          _this2.$emit("update");
          _this2.updateActiveItem();
        },
        finalFn: function finalFn() {
          _this2.saveLoading = false;
        }
      });
    },
    updateActiveItem: function updateActiveItem(id) {
      this.$emit("update-active", id);
    },
    initData: function initData() {
      this.defaultValue = _extends({}, this.defaultValue, this.data);
    }
  }
});

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-collapse-item" }, [
    _c(
      "div",
      {
        staticClass: "el-collapse-item__header",
        class: { "is-disabled": _vm.isDisabled }
      },
      [
        _c(
          "el-button",
          {
            staticClass: "sortable-handler",
            attrs: { disabled: _vm.isDisabled, type: "text" }
          },
          [_c("font-awesome-icon", { attrs: { icon: ["fal", "arrows"] } })],
          1
        ),
        _vm._v("\n    " + _vm._s(_vm.data.title) + "\n    "),
        _c(
          "div",
          { staticClass: "el-collapse-item__arrow" },
          [
            _vm.isActive
              ? [
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_CANCEL" /*取消*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { size: "small", plain: "" },
                          on: {
                            click: function($event) {
                              _vm.updateActiveItem()
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "times"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_SAVE" /*儲存*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: {
                            loading: _vm.saveLoading,
                            type: "primary",
                            size: "small"
                          },
                          on: { click: _vm.onClickBtnSave }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "save"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              : [
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_EDIT" /*編輯*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: {
                            disabled: _vm.isDisabled,
                            type: "primary",
                            size: "small",
                            plain: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.updateActiveItem(_vm.data.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "edit"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_DELETE" /*刪除*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: {
                            disabled: _vm.isDisabled,
                            type: "danger",
                            size: "small",
                            plain: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.onClickBtnDelete(_vm.data.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "trash-alt"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
          ],
          2
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm.isActive
      ? _c(
          "div",
          { staticClass: "el-collapse-item__wrap" },
          [
            _c(
              "el-form",
              { ref: "form-data", attrs: { model: _vm.defaultValue } },
              [
                _vm._l(_vm.formLabelRefs[_vm.type], function(value, key) {
                  return [
                    key === "image"
                      ? _c(
                          "el-form-item",
                          {
                            attrs: {
                              prop: key,
                              label: _vm.formLabelRefs[_vm.type][key]
                            }
                          },
                          [
                            _c("MediaInput", {
                              model: {
                                value: _vm.defaultValue[key],
                                callback: function($$v) {
                                  _vm.$set(_vm.defaultValue, key, $$v)
                                },
                                expression: "defaultValue[key]"
                              }
                            })
                          ],
                          1
                        )
                      : _c(
                          "el-form-item",
                          {
                            attrs: {
                              prop: key,
                              label: _vm.formLabelRefs[_vm.type][key]
                            }
                          },
                          [
                            _c("el-input", {
                              model: {
                                value: _vm.defaultValue[key],
                                callback: function($$v) {
                                  _vm.$set(_vm.defaultValue, key, $$v)
                                },
                                expression: "defaultValue[key]"
                              }
                            })
                          ],
                          1
                        )
                  ]
                }),
                _vm._v(" "),
                _vm.group_fields && "extrafields" in _vm.group_fields
                  ? _c("FieldForm", {
                      attrs: {
                        fields: _vm.group_fields.extrafields,
                        data: _vm.defaultValue.extrafields
                      },
                      on: {
                        "update:data": function($event) {
                          _vm.$set(_vm.defaultValue, "extrafields", $event)
                        }
                      }
                    })
                  : _vm._e()
              ],
              2
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6042c5f6", module.exports)
  }
}

/***/ })

});