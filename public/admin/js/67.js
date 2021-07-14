webpackJsonp([67],{

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(428)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(430)
/* template */
var __vue_template__ = __webpack_require__(439)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60d31bef"
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
Component.options.__file = "resources/assets/admin/components/media-input/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60d31bef", Component.options)
  } else {
    hotAPI.reload("data-v-60d31bef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(250)("1f1843c4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(249)(false);
// imports


// module
exports.push([module.i, "\n.preview-image[data-v-60d31bef]{max-width:100%\n}\n", ""]);

// exports


/***/ }),

/***/ 430:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MediaInput",
  components: { Media: function Media() {
      return __webpack_require__.e/* import() */(68/* duplicate */).then(__webpack_require__.bind(null, 360));
    } },
  data: function data() {
    return {
      tempValue: "",
      mediaDialogVisible: false
    };
  },

  props: {
    value: String
  },
  methods: {
    onChangePath: function onChangePath(value) {
      this.$emit("input", value);
    },
    onChangeMediaSelection: function onChangeMediaSelection(files) {
      console.log("TCL: onChangeMediaSelection -> files", files);
      this.tempValue = "/storage/media" + files[files.length - 1].path;
    },
    onClickSelectMedia: function onClickSelectMedia() {
      this.mediaDialogVisible = false;
      this.$emit("input", this.tempValue);
    }
  }
});

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-input",
        {
          attrs: { value: _vm.value, clearable: "" },
          on: {
            input: _vm.onChangePath,
            change: _vm.onChangePath,
            clear: function($event) {
              return _vm.onChangePath("")
            }
          }
        },
        [
          _c(
            "template",
            { slot: "prepend" },
            [
              _c(
                "el-popover",
                {
                  attrs: {
                    placement: "top-start",
                    title: _vm.$t(
                      "FIELD_MEDIA_PREVIEW_SELECTED_IMAGE" /*預覽*/
                    ),
                    width: "200",
                    trigger: "hover"
                  }
                },
                [
                  _vm.value
                    ? _c("img", {
                        staticClass: "preview-image",
                        attrs: { src: _vm.value, alt: "" }
                      })
                    : _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.$t("FIELD_MEDIA_PREVIEW_EMPTY" /*沒有選擇圖片*/)
                          )
                        )
                      ]),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    { attrs: { slot: "reference" }, slot: "reference" },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fal", "eye"] }
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
            "template",
            { slot: "append" },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.mediaDialogVisible = true
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("SELECT") /*選擇*/))]
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { width: "80%", visible: _vm.mediaDialogVisible },
          on: {
            "update:visible": function($event) {
              _vm.mediaDialogVisible = $event
            }
          }
        },
        [
          _vm.mediaDialogVisible
            ? _c("Media", {
                attrs: { filePath: _vm.value },
                on: { change: _vm.onChangeMediaSelection }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.onClickSelectMedia }
                },
                [_vm._v(_vm._s(_vm.$t("SELECT") /*選擇*/))]
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
    require("vue-hot-reload-api")      .rerender("data-v-60d31bef", module.exports)
  }
}

/***/ })

});