webpackJsonp([0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(495)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(497)
/* template */
var __vue_template__ = __webpack_require__(498)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c9d3554"
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
Component.options.__file = "resources/assets/admin/views/error/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c9d3554", Component.options)
  } else {
    hotAPI.reload("data-v-0c9d3554", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(496);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(250)("1f6044cf", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c9d3554\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c9d3554\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(249)(false);
// imports


// module
exports.push([module.i, "\n.error-bg[data-v-0c9d3554]{background-color:#2f3855\n}\n.error-container[data-v-0c9d3554]{min-height:100vh;color:#fff\n}\n.error-content[data-v-0c9d3554]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);text-align:center\n}\n", ""]);

// exports


/***/ }),

/***/ 497:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Error",
  methods: {
    onClickBtnGoback: function onClickBtnGoback() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "error-bg" }, [
    _c("div", { staticClass: "error-container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "text-center error-content" },
          [
            _c("router-view"),
            _vm._v(" "),
            _c(
              "el-button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    $event.stopPropagation()
                    return _vm.onClickBtnGoback($event)
                  }
                }
              },
              [_vm._v("Go Back")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c9d3554", module.exports)
  }
}

/***/ })

});