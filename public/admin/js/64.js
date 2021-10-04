webpackJsonp([64],{

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(615)
/* template */
var __vue_template__ = __webpack_require__(616)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlCascader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0404a995", Component.options)
  } else {
    hotAPI.reload("data-v-0404a995", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (name) {
    return {
        name: name,
        props: {
            fieldData: {
                type: Object,
                default: function _default() {
                    return {};
                }
            },
            submitData: {
                type: Object,
                default: function _default() {
                    return {};
                }
            },
            submitInfo: {
                type: Object,
                default: function _default() {
                    return {};
                }
            },
            tempFieldObj: {
                type: Object,
                default: function _default() {
                    return {};
                }
            }
        },
        computed: {
            data: function data() {
                return this.fieldData;
            },
            events: function events() {
                return this.fieldData.events || {};
            },
            submit_data: function submit_data() {
                return this.submitData;
            },
            submit_info: function submit_info() {
                return this.submitInfo;
            },
            temp_field_obj: function temp_field_obj() {
                return this.tempFieldObj;
            },
            custom_attrs: function custom_attrs() {
                return this.fieldData.custom_attrs || {};
            },
            label_attr: function label_attr() {
                return this.custom_attrs.label || "text";
            },
            value_attr: function value_attr() {
                return this.custom_attrs.value || "value";
            }
        },
        created: function created() {
            this.setDefaultFieldByNodefaultValue();
            this.setArrayValue();
        },

        methods: {
            /**
             * 處理表單控件值複數類型，比如，獲取的值和顯示的文本不同時，除了返回需要提交表單的value值，還需要返回顯示的文本，以防不時之需
             */
            setArrayValue: function setArrayValue() {
                var _this = this;

                //把存儲value和text的數組轉成對象格式，有利於提高根據值取文本的效率
                if (!this.temp_field_obj[this.data.key]) {
                    this.temp_field_obj[this.data.key] = {};
                }

                //當存在value和text數組時，才可調用
                if (this.data.list && Array.isArray(this.data.list)) {
                    //遍曆value和text數組，組裝成對象格式
                    this.data.list.forEach(function (item) {
                        _this.temp_field_obj[_this.data.key][item[_this.value_attr] !== undefined ? item[_this.value_attr] : item[_this.label_attr]] = item[_this.label_attr] !== undefined ? item[_this.label_attr] : item[_this.value_attr];
                    });
                    //如果當前默認值為真，默認先提取一下默認值對應的文本
                    if (this.submit_data[this.data.key] !== undefined) {
                        //默認值分兩種：數組(多選)，字符串或整形(單選)
                        if (Array.isArray(this.submit_data[this.data.key])) {
                            //循環數組值，把每個對應的文本取出來
                            this.submit_info[this.data.key] = [];
                            this.submit_data[this.data.key].forEach(function (item) {
                                if (_this.temp_field_obj[_this.data.key][item]) {
                                    _this.submit_info[_this.data.key].push(_this.temp_field_obj[_this.data.key][item]);
                                }
                            });
                        } else {
                            //不是數組，直接提取對應的值得文本
                            this.submit_info[this.data.key] = "";
                            if (this.temp_field_obj[this.data.key][this.submit_data[this.data.key]]) {
                                this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][this.submit_data[this.data.key]];
                            }
                        }
                    }
                }
            },


            /**
             * 當有傳默認值或者連default_value都不存在時(添加的時候確實是不需要傳default_value,如果不這樣操作一下，綁定將會失敗)
             * 此時，組件中定義的default_value隻是一個空對象，這時，v-model是無法綁定的，所以這個函數用來設置默認字段。
             */
            setDefaultFieldByNodefaultValue: function setDefaultFieldByNodefaultValue() {
                if (this.submit_data[this.data.key] === undefined) {
                    this.$set(this.submit_data, this.data.key, "");
                }
            }
        }
    };
});

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(276);
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


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])("sls-cascader");
Js.mixins = [{
  computed: {
    cascader_attrs: function cascader_attrs() {
      return this.fieldData.cascader_attrs || {};
    }
  },
  methods: {
    /**
     * 根據數組的長度，來決定需要遞歸幾次，最終取出需要的結果，我曹，冇法解釋，解釋不清的玩意。
     * @param  {array} 	areas 地區列錶，無線分類結構
     * @param  {array} 	temps 一維數組,如果隻有一個，代錶取頂級;如果兩個，取頂級的子級；如果三個，頂級的子級的子級....以此類推
     * @param  {number} k     遞歸次數，當這個值等於temps的長度時，就代錶結束了
     * @return {string}       地區名稱
     */
    onDeepGetCityName: function onDeepGetCityName(list, temps, k) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id + "" === temps[k] + "") {
          if (k < temps.length - 1) {
            k = k + 1;
            this.temp_field_obj[this.data.key].push(list[i].city);
            this.onDeepGetCityName(list[i].children, temps, k);
          } else {
            this.temp_field_obj[this.data.key].push(list[i].city);
            return;
          }
        }
      }
    },


    /**
     * 最後一級選擇完後觸發
     * @param v 選中的值數組，根據這個數組取出對應的文本
     */
    onChange: function onChange(v) {
      this.temp_field_obj[this.data.key] = [];
      this.onDeepGetCityName(this.data.options, v, 0);
      this.submit_info[this.data.key] = this.temp_field_obj[this.data.key];

      this.events.change && this.events.change({
        value: v,
        info: this.submit_info[this.data.key]
      });
    },


    /**
     * 每選擇一項時就觸發這個
     * 場景：當選擇的條件不允許繼續選擇時，可以使用這個事件
     * @param v 選中的值數組，根據這個數組取出對應的文本
     */
    onActiveItemChange: function onActiveItemChange(v) {
      this.temp_field_obj[this.data.key] = [];
      this.onDeepGetCityName(this.data.options, v, 0);
      this.submit_info[this.data.key] = this.temp_field_obj[this.data.key];
      this.events["active-item-change"] && this.events["active-item-change"]({
        value: v,
        info: this.submit_info[this.data.key]
      });
    }
  },
  created: function created() {
    if (!this.submit_data[this.data.key] || !Array.isArray(this.submit_data[this.data.key])) {
      this.submit_data[this.data.key] = [];
    }
    this.temp_field_obj[this.data.key] = [];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-cascader",
    _vm._b(
      {
        attrs: { placeholder: _vm.data.desc, options: _vm.data.options },
        on: {
          change: _vm.onChange,
          "active-item-change": _vm.onActiveItemChange
        },
        model: {
          value: _vm.submit_data[_vm.data.key],
          callback: function($$v) {
            _vm.$set(_vm.submit_data, _vm.data.key, $$v)
          },
          expression: "submit_data[data.key]"
        }
      },
      "el-cascader",
      _vm.cascader_attrs,
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
    require("vue-hot-reload-api")      .rerender("data-v-0404a995", module.exports)
  }
}

/***/ })

});