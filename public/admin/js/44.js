webpackJsonp([44],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(417)
/* template */
var __vue_template__ = __webpack_require__(418)
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
Component.options.__file = "resources/assets/admin/views/asset/group/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18a1ffde", Component.options)
  } else {
    hotAPI.reload("data-v-18a1ffde", Component.options)
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

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit__ = __webpack_require__(279);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "asset-group-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit__["a" /* default */]],
  data: function data() {
    return {
      fields: [{
        key: "title",
        desc: "請輸入資源群組名稱",
        label: "資源群組名稱"
      }, {
        key: "state",
        label: "是否啟用",
        desc: "",
        type: "radio",
        list: [{
          text: "禁用",
          value: "0"
        }, {
          text: "啟用",
          value: "1"
        }]
      }],
      toolbar: {
        type: "edit"
      },
      defaultValue: {
        title: "",
        state: 1
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
      this.$$api_asset_saveGroup({
        data: submit_data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$_editMixin_onSubmitFinish({
            msg: msg,
            btn_type: btn_type,
            query: {
              id: data ? data.items.id : submit_data.id,
              pid: data ? data.items.parent_id : submit_data.parent_id
            }
          });
        }
      });
    },
    handleGetData: function handleGetData() {
      var _this2 = this;

      this.$$api_asset_getGroup({
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

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("FormData", {
    attrs: {
      "default-value": _vm.defaultValue,
      "field-list": _vm.fields,
      toolbar: _vm.toolbar
    },
    on: { "on-submit": _vm.handleSubmit, "on-cancel": _vm.$_editMixin_onCancel }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-18a1ffde", module.exports)
  }
}

/***/ })

});