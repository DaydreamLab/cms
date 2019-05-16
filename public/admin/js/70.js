webpackJsonp([70],{

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(367)
/* template */
var __vue_template__ = __webpack_require__(368)
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
Component.options.__file = "resources/assets/admin/components/field-form/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-045ca43f", Component.options)
  } else {
    hotAPI.reload("data-v-045ca43f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(279);
//
//
//
//
//
//
//
//
//
//
//
//
//


var _isEmpty = function _isEmpty() {
  return __webpack_require__.e/* import() */(74).then(__webpack_require__.bind(null, 339));
};
var _pick = function _pick() {
  return __webpack_require__.e/* import() */(72).then(__webpack_require__.bind(null, 402));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: { FieldFormItem: function FieldFormItem() {
      return __webpack_require__.e/* import() */(73).then(__webpack_require__.bind(null, 403));
    } },
  props: {
    fields: {
      type: Array,
      default: []
    },
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  watch: {
    fields: {
      handler: function handler() {
        var _this = this;

        _isEmpty().then(function () {
          if (_isEmpty(_this.data)) {
            var fields = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["b" /* schema */].Entity("fields");
            var normalize_list = Object(__WEBPACK_IMPORTED_MODULE_0_normalizr__["a" /* normalize */])(_this.fields, [fields]);
            _this.$emit("update:data", normalize_list.entities["fields"]);
          }
        });
      },

      immediate: true
    }
  },
  computed: {
    rules: function rules() {
      var _this2 = this;

      _pick().then(function () {
        var required_fields = _this2.fields.filter(function (el) {
          return el.required;
        });
        var fields = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["b" /* schema */].Entity("fields", undefined, {
          idAttribute: "alias",
          processStrategy: function processStrategy(entity) {
            return _pick(entity, "required");
          }
        });
        var normalize_list = Object(__WEBPACK_IMPORTED_MODULE_0_normalizr__["a" /* normalize */])(required_fields, [fields]);
        return normalize_list.entities["fields"];
      });
    }
  }
});

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    { ref: "field-data", attrs: { model: _vm.data, "label-position": "top" } },
    _vm._l(_vm.fields, function(field, $index) {
      return _c(
        "el-form-item",
        { key: field.id, attrs: { prop: field.alias, label: field.title } },
        [
          _c("FieldFormItem", {
            attrs: { "default-value": _vm.data[field.id], fieldData: field }
          })
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-045ca43f", module.exports)
  }
}

/***/ })

});