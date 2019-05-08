webpackJsonp([62],{

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(652)
/* template */
var __vue_template__ = __webpack_require__(653)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlDateTimeRange.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bb2c4ca", Component.options)
  } else {
    hotAPI.reload("data-v-3bb2c4ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (name) {
    return {
        name: name,
        data: function data() {
            return {};
        },

        computed: {
            data: function data() {
                return this.Data;
            },
            events: function events() {
                return this.Data.events || {};
            },
            submit_data: function submit_data() {
                return this.SubmitData;
            },
            submit_info: function submit_info() {
                return this.SubmitInfo;
            },
            temp_field_obj: function temp_field_obj() {
                return this.TempFieldObj;
            },
            custom_attrs: function custom_attrs() {
                return this.Data.custom_attrs || {};
            },
            label_attr: function label_attr() {
                return this.custom_attrs.label || "text";
            },
            value_attr: function value_attr() {
                return this.custom_attrs.value || "value";
            }
        },
        props: {
            Data: {
                type: Object,
                default: function _default() {
                    return {};
                }
            },
            SubmitData: {
                type: Object,
                default: function _default() {
                    return {};
                }
            },
            SubmitInfo: {
                type: Object,
                default: function _default() {
                    return {};
                }
            },
            TempFieldObj: {
                type: Object,
                default: function _default() {
                    return {};
                }
            }
        },
        watch: {
            $route: function $route() {
                this.init();
            }
        },
        created: function created() {
            this.setDefaultFieldByNoDefaultValue();
            this.setArrayValue();
        },
        mounted: function mounted() {
            this.init();
        },


        methods: {
            /**
             * 处理表单控件值复数类型，比如，获取的值和显示的文本不同时，除了返回需要提交表单的value值，还需要返回显示的文本，以防不时之需
             */
            setArrayValue: function setArrayValue() {
                var _this = this;

                //把存储value和text的数组转成对象格式，有利于提高根据值取文本的效率
                if (!this.temp_field_obj[this.data.key]) {
                    this.temp_field_obj[this.data.key] = {};
                }

                // console.log(this.custom_attrs);

                //当存在value和text数组时，才可调用
                if (this.data.list && Array.isArray(this.data.list)) {
                    //遍历value和text数组，组装成对象格式
                    this.data.list.forEach(function (item) {
                        _this.temp_field_obj[_this.data.key][item[_this.value_attr] !== undefined ? item[_this.value_attr] : item[_this.label_attr]] = item[_this.label_attr] !== undefined ? item[_this.label_attr] : item[_this.value_attr];
                    });
                    //如果当前默认值为真，默认先提取一下默认值对应的文本
                    if (this.submit_data[this.data.key] !== undefined) {
                        //默认值分两种：数组(多选)，字符串或整形(单选)
                        if (Array.isArray(this.submit_data[this.data.key])) {
                            //循环数组值，把每个对应的文本取出来
                            this.submit_info[this.data.key] = [];
                            this.submit_data[this.data.key].forEach(function (item) {
                                if (_this.temp_field_obj[_this.data.key][item]) {
                                    _this.submit_info[_this.data.key].push(_this.temp_field_obj[_this.data.key][item]);
                                }
                            });
                        } else {
                            //不是数组，直接提取对应的值得文本
                            this.submit_info[this.data.key] = "";
                            if (this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]) {
                                this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][this.submit_data[this.data.key]];
                            }
                        }
                    }
                }
            },


            /**
             * 当没有传默认值或者连default_value都不存在时(添加的时候确实是不需要传default_value,如果不这样操作一下，绑定将会失败)
             * 此时，组件中定义的default_value只是一个空对象，这时，v-model是无法绑定的，所以这个函数用来设置默认字段。
             */
            setDefaultFieldByNoDefaultValue: function setDefaultFieldByNoDefaultValue() {
                // console.log(this.submit_data);
                if (this.submit_data[this.data.key] === undefined) {
                    this.$set(this.submit_data, this.data.key, "");
                }
            },
            init: function init() {}
        }
    };
});

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(285);
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-date-time-range');
Js.mixins = [{
	computed: {
		date_time_attrs: function date_time_attrs() {
			return this.Data.date_time_attrs || {};
		}
	},
	methods: {
		onChange: function onChange(v) {
			this.events.change && this.events.change(v);
		}
	}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-date-picker",
    _vm._b(
      {
        attrs: { type: "datetimerange", placeholder: _vm.data.desc },
        on: { change: _vm.onChange },
        model: {
          value: _vm.submit_data[_vm.data.key],
          callback: function($$v) {
            _vm.$set(_vm.submit_data, _vm.data.key, $$v)
          },
          expression: "submit_data[data.key]"
        }
      },
      "el-date-picker",
      _vm.date_time_attrs,
      false
    )
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3bb2c4ca", module.exports)
  }
}

/***/ })

});