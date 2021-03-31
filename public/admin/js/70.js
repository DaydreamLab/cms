webpackJsonp([70],{

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(446)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(448)
/* template */
var __vue_template__ = __webpack_require__(451)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24a1c216"
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
Component.options.__file = "resources/assets/admin/components/editor/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24a1c216", Component.options)
  } else {
    hotAPI.reload("data-v-24a1c216", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(447);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(251)("4f151c59", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24a1c216\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Applications/MAMP/htdocs/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24a1c216\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Applications/MAMP/htdocs/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n.custom-toolbar-button[data-v-24a1c216]{position:absolute;top:4px;right:4px\n}\n", ""]);

// exports


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugins__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toolbar__ = __webpack_require__(450);
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Media: function Media() {
      return __webpack_require__.e/* import() */(68/* duplicate */).then(__webpack_require__.bind(null, 361));
    } },
  data: function data() {
    return {
      mediaPaths: [],
      mediaDialogVisible: false,
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false
    };
  },

  props: {
    id: {
      type: String,
      default: "editor-" + +new Date() + ((Math.random() * 1000).toFixed(0) + "")
    },
    value: {
      type: String,
      default: ""
    },
    toolbar: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },
    menubar: {
      type: String,
      default: "file edit insert view format table"
    },
    height: {
      type: Number,
      required: false,
      default: 400
    }
  },
  watch: {
    value: function value(val) {
      var _this2 = this;

      if (!this.hasChange && this.hasInit) {
        this.$nextTick(function () {
          return window.tinymce.get(_this2.tinymceId).setContent(val || "");
        });
      }
    }
  },
  mounted: function mounted() {
    this.initTinymce();
  },
  activated: function activated() {
    this.initTinymce();
  },
  deactivated: function deactivated() {
    this.destroyTinymce();
  },
  destroyed: function destroyed() {
    this.destroyTinymce();
  },

  methods: {
    handleInsertMedia: function handleInsertMedia(files) {
      var _this = this;
      files.forEach(function (item) {
        window.tinymce.get(_this.tinymceId).insertContent("<img src=\"/storage/media" + item.path + "\" >");
      });
    },
    onClickBtnSelectMedia: function onClickBtnSelectMedia() {
      this.mediaDialogVisible = false;
      this.handleInsertMedia(this.mediaPaths);
    },
    onChangeMedia: function onChangeMedia(files) {
      this.mediaPaths = files;
    },
    setContent: function setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent: function getContent() {
      window.tinymce.get(this.tinymceId).getContent();
    },
    initTinymce: function initTinymce() {
      var _this3 = this;

      var _this = this;
      window.tinymce.init({
        language: "zh_TW",
        selector: "#" + this.tinymceId,
        height: this.height,
        body_class: "panel-body ",
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : __WEBPACK_IMPORTED_MODULE_1__toolbar__["a" /* default */],
        menubar: this.menubar,
        plugins: __WEBPACK_IMPORTED_MODULE_0__plugins__["a" /* default */],
        // end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",
        imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
        default_link_target: "_blank",
        link_title: true,
        convert_urls: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: function init_instance_callback(editor) {
          if (_this.value) {
            editor.setContent(_this.value);
          }
          _this.hasInit = true;
          editor.on("NodeChange Change KeyUp SetContent", function () {
            _this3.hasChange = true;
            _this3.$emit("input", editor.getContent());
          });
        },
        setup: function setup(editor) {
          // editor.on("FullscreenStateChanged", e => {
          //   _this.fullscreen = e.state;
          // });
        }
      });
    },
    destroyTinymce: function destroyTinymce() {
      var tinymce = window.tinymce.get(this.tinymceId);
      if (this.fullscreen) {
        tinymce.execCommand("mceFullScreen");
      }

      if (tinymce) {
        tinymce.destroy();
      }
    }
  }
});

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/

var plugins = ["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"];

/* harmony default export */ __webpack_exports__["a"] = (plugins);

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Here is a list of the toolbar
// Detail list see https://www.tinymce.com/docs/advanced/editor-control-identifiers/#toolbarcontrols

var toolbar = ['formatselect ' + 'fontsizeselect ' + 'searchreplace ' + 'bold ' + 'italic ' + 'underline ' + 'strikethrough ' + 'alignleft ' + 'aligncenter ' + 'alignright ' + 'outdent ' + 'indent' + 'blockquote ' + 'removeformat ' + 'subscript ' + 'superscript ' + 'code ', // <= 逗號是換行
//'codesample ' +
'hr ' + 'bullist ' + 'numlist ' + 'link ' + 'image ' + 'charmap ' + 'preview ' + 'anchor ' + 'pagebreak ' + 'insertdatetime ' + 'media ' + 'table ' + 'emoticons ' + 'forecolor ' + 'backcolor ' + 'fullscreen ' + 'undo ' + 'redo '];

/* harmony default export */ __webpack_exports__["a"] = (toolbar);

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tinymce-container" },
    [
      _c("textarea", { attrs: { id: _vm.tinymceId } }),
      _vm._v(" "),
      _c(
        "el-button",
        {
          staticClass: "custom-toolbar-button",
          attrs: { size: "mini", type: "primary" },
          on: {
            click: function($event) {
              _vm.mediaDialogVisible = true
            }
          }
        },
        [
          _c("font-awesome-icon", { attrs: { icon: ["fal", "images"] } }),
          _vm._v(
            "\n    " +
              _vm._s(
                _vm.$t("EDITOR_CHOOSE_IMAGE_FROM_MEDIA") /*從媒體選擇圖片*/
              ) +
              "\n  "
          )
        ],
        1
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
            ? _c("Media", { on: { change: _vm.onChangeMedia } })
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
                  on: { click: _vm.onClickBtnSelectMedia }
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
    require("vue-hot-reload-api")      .rerender("data-v-24a1c216", module.exports)
  }
}

/***/ })

});