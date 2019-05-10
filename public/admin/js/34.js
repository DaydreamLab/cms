webpackJsonp([34],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(414)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(416)
/* template */
var __vue_template__ = __webpack_require__(417)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/assets/admin/views/asset/assign/group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e547afba", Component.options)
  } else {
    hotAPI.reload("data-v-e547afba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(256)("1ba120ed", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e547afba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e547afba\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(255)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 416:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "asset-assign-group",
  data: function data() {
    return {
      params: {
        asset_id: ""
      },
      fields: [{
        key: "group_ids",
        label: "選擇群組",
        type: "tree",
        list: [],
        custom_attrs: {
          label: "title"
        },
        tree_attrs: {
          "check-strictly": true
        }
      }],
      default_value: {
        group_ids: []
      },
      toolbar: {
        default: ["save", "savenclose", "savenadd", "cancel", "delete", "preview"],
        custom: []
      }
    };
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  },
  created: function created() {
    this.init();
  },


  methods: {
    onSubmit: function onSubmit(_ref) {
      var _this = this;

      var data = _ref.data,
          info = _ref.info,
          type = _ref.type;

      if (this.params.asset_id) {
        data.asset_id = this.params.asset_id;
      }
      this.$$api_asset_assignGroup({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          _this.$onSubmitFinish({
            type: type,
            query: { id: data.items.id }
          });
        }
      });
    },
    onCancel: function onCancel() {
      this.$router.push(this.$route.path.replace("/assign", ""));
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_asset_group({
        pathVar: this.params.asset_id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.default_value.group_ids = data.items.map(function (item) {
            return item.id;
          });

          // for select options
          _this2.$$api_asset_listGroup({
            fn: function fn(_ref4) {
              var data = _ref4.data;

              _this2.fields[0].list = data.items;
            }
          });
        }
      });
    },
    onUpdateParams: function onUpdateParams() {
      this.params.asset_id = parseInt(this.$route.query.id) || "";
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.asset_id) {
        this.onGetView();
      }
    }
  }
});

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("FormData", {
    attrs: {
      FieldList: _vm.fields,
      DefaultValue: _vm.default_value,
      Toolbar: _vm.toolbar
    },
    on: { onSubmit: _vm.onSubmit, onCancel: _vm.onCancel }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e547afba", module.exports)
  }
}

/***/ })

});