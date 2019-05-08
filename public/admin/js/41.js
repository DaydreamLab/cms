webpackJsonp([41],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(550)
/* template */
var __vue_template__ = __webpack_require__(551)
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
Component.options.__file = "resources/assets/admin/views/user/group/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6758c0a9", Component.options)
  } else {
    hotAPI.reload("data-v-6758c0a9", Component.options)
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

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(290);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "user-group-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: [{
        key: "title",
        desc: "Please enter group title",
        label: this.$t("FIELD_TITLE_LABEL")
      }, {
        key: "parent_id",
        type: "select",
        desc: "Please choose parent group",
        label: this.$t("OPTION_PARENT_GROUP" /*上層群組*/),
        list: [],
        custom_attrs: {
          label: "tree_list_title",
          value: "id"
        },
        condition: function condition(_ref) {
          var data = _ref.data;

          return data.parent_id !== 1;
        }
      }],
      default_value: {
        parent_id: 1,
        title: "",
        redirect: "",
        state: 1
      }
    };
  },
  created: function created() {
    this.onUpdateFieldList();
  },

  methods: {
    onSubmit: function onSubmit(_ref2) {
      var _this = this;

      var data = _ref2.data,
          info = _ref2.info,
          type = _ref2.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_user_saveGroup({
        data: data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this.$message.success(msg);
          _this.$onSubmitFinish({
            type: type,
            query: { id: data.items.id }
          });
        }
      });
    },
    onCancel: function onCancel() {
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_user_getGroup({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this2.default_value = _extends({}, _this2.default_value, data.items);
        }
      });
    },
    onUpdateFieldList: function onUpdateFieldList() {
      var _this3 = this;

      this.$$api_user_listOptionGroup({
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this3.fields[1].list = data.items;
        }
      });
    }
  }
});

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("FormData", {
        attrs: {
          FieldList: _vm.fields,
          DefaultValue: _vm.default_value,
          Toolbar: _vm.toolbar
        },
        on: { onSubmit: _vm.onSubmit, onCancel: _vm.onCancel }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-6758c0a9", module.exports)
  }
}

/***/ })

});