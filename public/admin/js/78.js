webpackJsonp([78],{

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(436)
/* template */
var __vue_template__ = __webpack_require__(437)
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
Component.options.__file = "resources/assets/admin/components/popover-menu/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-557d3262", Component.options)
  } else {
    hotAPI.reload("data-v-557d3262", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 436:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      popover_visible: false
    };
  },

  methods: {
    onClickMenu: function onClickMenu(fn) {
      this.popover_visible = false;
      // setTimeout(() => {
      //   this.$emit("clickMenu", this.popoverData, fn);
      // }, 50);
    }
  },
  watch: {
    popover_visible: function popover_visible(value) {
      this.$emit("update:popoverVisible", value);
    }
  },
  props: {
    popoverIndex: {
      type: Number,
      default: 0
    },
    popoverData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    popoverVisible: {
      type: Boolean,
      default: false
    },
    popoverMenu: {
      type: Array,
      default: function _default() {
        return [{
          type: "menu",
          icon: "edit",
          title: "edit"
        }, {
          type: "menu",
          icon: "star",
          title: "important"
        }, {
          type: "menu",
          icon: "add",
          title: "add"
        }, {
          type: "hr",
          icon: "",
          title: ""
        }, {
          type: "menu",
          title: "delete"
        }];
      }
    }
  }
});

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-popover",
    {
      ref: "popover-menu",
      attrs: {
        placement: "bottom-end",
        width: "200",
        "popper-class": "block-set-menu",
        trigger: "click"
      },
      model: {
        value: _vm.popover_visible,
        callback: function($$v) {
          _vm.popover_visible = $$v
        },
        expression: "popover_visible"
      }
    },
    [
      _vm._l(_vm.popoverMenu, function(item, index) {
        return !item.condition ||
          typeof item.condition !== "function" ||
          (typeof item.condition === "function" &&
            item.condition({ data: _vm.popoverData }) === true)
          ? _c(
              "div",
              {
                key: index,
                class: [
                  { "menu-item": item.type == "menu" },
                  item.icon ? "p-icon p-" + item.icon : ""
                ],
                on: {
                  click: function($event) {
                    item.type == "menu"
                      ? _vm.onClickMenu(item.fn({ data: _vm.popoverData }))
                      : ""
                  }
                }
              },
              [
                item.type == "menu"
                  ? _c("span", [_vm._v(_vm._s(item.title))])
                  : _vm._e(),
                _vm._v(" "),
                item.type == "hr" ? _c("hr") : _vm._e()
              ]
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm._t("popover-content", null, { slot: "reference" })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-557d3262", module.exports)
  }
}

/***/ })

});