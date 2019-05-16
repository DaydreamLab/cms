webpackJsonp([6],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(421)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(423)
/* template */
var __vue_template__ = __webpack_require__(447)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47fabec5"
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
Component.options.__file = "resources/assets/admin/views/content/category/components/item-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47fabec5", Component.options)
  } else {
    hotAPI.reload("data-v-47fabec5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(256)("f7ad1830", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47fabec5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-list.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47fabec5\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(255)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.el-collapse[data-v-47fabec5] {\n  margin-top: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sortablejs__);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Item: function Item() {
      return __webpack_require__.e/* import() */(5/* duplicate */).then(__webpack_require__.bind(null, 109));
    } },
  data: function data() {
    return {
      list: [],
      listId: "list-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""),
      listLoading: false,
      activeId: "",
      isAdding: false
    };
  },

  props: {
    type: {
      type: String,
      required: true
    },
    category: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  mounted: function mounted() {
    this.handleGetList();
  },

  methods: {
    onClickBtnAdd: function onClickBtnAdd() {
      this.isAdding = true;
      this.onChangeActive();
    },
    onChangeActive: function onChangeActive() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      this.activeId = id;
    },
    handleOrderChange: function handleOrderChange(_ref) {
      var _this = this;

      var id = _ref.id,
          index_diff = _ref.index_diff,
          order = _ref.order;

      this.$$api_item_ordering({
        data: {
          id: id,
          index_diff: index_diff,
          order: order
        },
        fn: function fn(_ref2) {
          var msg = _ref2.msg;

          _this.$message.success(msg);
        }
      });
    },
    handleGetList: function handleGetList() {
      var _this2 = this;

      this.listLoading = true;
      this.$$api_item_list({
        data: {
          category_id: this.Category.id,
          extension: "item",
          content_type: this.Type,
          order_by: "ordering",
          order: "desc"
        },
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.list = data.items;
          _this2.$nextTick(function () {
            _this2.initSortableList();
          });
        },
        finalFn: function finalFn() {
          _this2.listLoading = false;
        }
      });
    },
    initSortableList: function initSortableList() {
      var _this3 = this;

      var el = document.getElementById(this.listId);
      if (el) {
        __WEBPACK_IMPORTED_MODULE_0_sortablejs___default.a.create(el, {
          handle: ".sortable-handler",
          onEnd: function onEnd(_ref4) {
            var newIndex = _ref4.newIndex,
                oldIndex = _ref4.oldIndex;

            var _list$splice = _this3.list.splice(oldIndex, 1),
                _list$splice2 = _slicedToArray(_list$splice, 1),
                targetItem = _list$splice2[0];

            _this3.list.splice(newIndex, 0, targetItem);
            _this3.handleOrderChange({
              id: _this3.list[newIndex].id,
              index_diff: newIndex - oldIndex,
              order: "desc"
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "loading",
          rawName: "v-loading",
          value: _vm.listLoading,
          expression: "listLoading"
        }
      ]
    },
    [
      _c(
        "el-button",
        {
          attrs: { type: "primary", plain: "" },
          on: { click: _vm.onClickBtnAdd }
        },
        [
          _c("font-awesome-icon", { attrs: { icon: ["fal", "plus"] } }),
          _vm._v("\n    " + _vm._s(_vm.$t("TOOLBAR_ADD" /*新增*/)) + "\n  ")
        ],
        1
      ),
      _vm._v(" "),
      _vm.list.length > 0 || _vm.isAdding
        ? _c(
            "div",
            { staticClass: "el-collapse", attrs: { id: _vm.listId } },
            [
              _vm.isAdding
                ? _c("Item", {
                    attrs: {
                      type: _vm.Type,
                      data: {
                        extrafield_group_id: _vm.Category.item_extrafield
                      },
                      category: _vm.Category,
                      "is-disabled": false,
                      "is-active": ""
                    },
                    on: {
                      "update-active": function($event) {
                        _vm.isAdding = false
                      },
                      update: _vm.handleGetList
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.list, function(item) {
                return _c(
                  "Item",
                  {
                    key: item.id,
                    attrs: {
                      type: _vm.Type,
                      category: _vm.Category,
                      data: item,
                      "is-active": _vm.activeId === item.id,
                      "is-disabled": Boolean(
                        _vm.activeId && _vm.activeId !== item.id
                      )
                    },
                    on: {
                      "update-active": _vm.onChangeActive,
                      update: _vm.handleGetList
                    }
                  },
                  [_vm._v(_vm._s(item))]
                )
              })
            ],
            2
          )
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-47fabec5", module.exports)
  }
}

/***/ })

});