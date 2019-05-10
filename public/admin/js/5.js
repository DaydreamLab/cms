webpackJsonp([5,80],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(429)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(431)
/* template */
var __vue_template__ = __webpack_require__(451)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6042c5f6"
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
Component.options.__file = "resources/assets/admin/views/content/category/components/item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6042c5f6", Component.options)
  } else {
    hotAPI.reload("data-v-6042c5f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 163:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 255:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(163)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(430);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(256)("8ebb0d16", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6042c5f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6042c5f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(255)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.el-collapse-item__header[data-v-6042c5f6] {\n  cursor: auto;\n  padding-left: 8px;\n}\n.el-collapse-item__header.is-disabled[data-v-6042c5f6] {\n    cursor: not-allowed;\n    background: #e6e6e6;\n}\n", ""]);

// exports


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  components: {
    MediaInput: function MediaInput() {
      return __webpack_require__.e/* import() */(81/* duplicate */).then(__webpack_require__.bind(null, 365));
    },
    FieldForm: function FieldForm() {
      return __webpack_require__.e/* import() */(78).then(__webpack_require__.bind(null, 364));
    }
  },
  props: {
    category: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    type: {
      type: String,
      required: true
    },

    isActive: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      fields: {
        extrafield_group_id: {
          list: this.$store.getters.extrafield_group_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        }
      },
      default_value: {
        id: "",
        title: "",
        link: "",
        introtext: "",
        description: "",
        category_id: "",
        language: "",
        image: "",
        state: 1,
        featured: 0,
        extrafield_group_id: "",
        extrafields: {}
      },
      save_loading: false,
      form_label_map: {
        slideshow: {
          title: "Slide 標題",
          image: "背景圖片"
        },
        link: {
          image: "Logo",
          title: "連結標題",
          link: "連結網址",
          description: "連結描述"
        },
        menu: {
          title: "菜名",
          introtext: "描述",
          description: "價錢"
        },
        timeline: {
          title: "標題",
          description: "描述"
        }
      }
    };
  },

  computed: {
    groupFields: function groupFields() {
      return this.fields.extrafield_group_id.list[this.default_value.extrafield_group_id];
    }
  },
  mounted: function mounted() {
    this.onFillForm();
  },

  methods: {
    onClickBtnDelete: function onClickBtnDelete(id) {
      var _this = this;

      this.$$api_item_delete({
        data: { ids: [id] },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.$emit("update");
        }
      });
    },
    onClickBtnSave: function onClickBtnSave() {
      var _this2 = this;

      this.save_loading = true;

      if (this.category) {
        this.default_value.category_id = this.category.id;
        this.default_value.language = this.category.language;
      }

      this.$$api_item_save({
        data: this.default_value,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this2.$message.success(msg);
          _this2.$emit("update");
          _this2.onUpdateActiveItem();
        },
        finalFn: function finalFn() {
          _this2.save_loading = false;
        }
      });
    },
    onUpdateActiveItem: function onUpdateActiveItem(id) {
      this.$emit("updateActive", id);
    },
    onFillForm: function onFillForm() {
      this.default_value = _extends({}, this.default_value, this.data);
    }
  }
});

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-collapse-item" }, [
    _c(
      "div",
      {
        staticClass: "el-collapse-item__header",
        class: { "is-disabled": _vm.isDisabled }
      },
      [
        _c(
          "el-button",
          {
            staticClass: "sortable-handler",
            attrs: { disabled: _vm.isDisabled, type: "text" }
          },
          [_c("font-awesome-icon", { attrs: { icon: ["fal", "arrows"] } })],
          1
        ),
        _vm._v("\n    " + _vm._s(_vm.data.title) + "\n    "),
        _c(
          "div",
          { staticClass: "el-collapse-item__arrow" },
          [
            _vm.isActive
              ? [
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_CANCEL" /*取消*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { size: "small", plain: "" },
                          on: {
                            click: function($event) {
                              _vm.onUpdateActiveItem()
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "times"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_SAVE" /*儲存*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: {
                            loading: _vm.save_loading,
                            type: "primary",
                            size: "small"
                          },
                          on: { click: _vm.onClickBtnSave }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "save"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              : [
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_EDIT" /*編輯*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: {
                            disabled: _vm.isDisabled,
                            type: "primary",
                            size: "small",
                            plain: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.onUpdateActiveItem(_vm.data.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "edit"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tooltip",
                    {
                      attrs: {
                        effect: "dark",
                        content: _vm.$t("TOOLBAR_DELETE" /*刪除*/),
                        placement: "top-start"
                      }
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: {
                            disabled: _vm.isDisabled,
                            type: "danger",
                            size: "small",
                            plain: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.onClickBtnDelete(_vm.data.id)
                            }
                          }
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: ["fal", "trash-alt"] }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
          ],
          2
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm.isActive
      ? _c(
          "div",
          { staticClass: "el-collapse-item__wrap" },
          [
            _c(
              "el-form",
              { ref: "form-data", attrs: { model: _vm.default_value } },
              [
                _vm._l(_vm.form_label_map[_vm.type], function(value, key) {
                  return [
                    key === "image"
                      ? _c(
                          "el-form-item",
                          {
                            attrs: {
                              prop: key,
                              label: _vm.form_label_map[_vm.type][key]
                            }
                          },
                          [
                            _c("MediaInput", {
                              attrs: { Data: _vm.default_value[key] },
                              on: {
                                onClickBtnSelect: function(value) {
                                  return (_vm.default_value[key] = value)
                                }
                              }
                            })
                          ],
                          1
                        )
                      : _c(
                          "el-form-item",
                          {
                            attrs: {
                              prop: key,
                              label: _vm.form_label_map[_vm.type][key]
                            }
                          },
                          [
                            _c("el-input", {
                              model: {
                                value: _vm.default_value[key],
                                callback: function($$v) {
                                  _vm.$set(_vm.default_value, key, $$v)
                                },
                                expression: "default_value[key]"
                              }
                            })
                          ],
                          1
                        )
                  ]
                }),
                _vm._v(" "),
                _vm.groupFields && "extrafields" in _vm.groupFields
                  ? _c("FieldForm", {
                      attrs: {
                        fields: _vm.groupFields["extrafields"],
                        data: _vm.default_value.extrafields
                      },
                      on: {
                        "update:data": function($event) {
                          _vm.$set(_vm.default_value, "extrafields", $event)
                        }
                      }
                    })
                  : _vm._e()
              ],
              2
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6042c5f6", module.exports)
  }
}

/***/ })

});