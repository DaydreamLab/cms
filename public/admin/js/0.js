webpackJsonp([0,2,3,4,5,6],Array(93).concat([
/* 93 */
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
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
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
/* 222 */
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

var listToStyles = __webpack_require__(93)

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
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(249)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(251)
/* template */
var __vue_template__ = __webpack_require__(252)
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
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(238)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(240)
/* template */
var __vue_template__ = __webpack_require__(262)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15828418"
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
Component.options.__file = "resources/assets/admin/views/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15828418", Component.options)
  } else {
    hotAPI.reload("data-v-15828418", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(253)
/* template */
var __vue_template__ = __webpack_require__(254)
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
Component.options.__file = "resources/assets/admin/views/error/401.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2db4318e", Component.options)
  } else {
    hotAPI.reload("data-v-2db4318e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(255)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(257)
/* template */
var __vue_template__ = __webpack_require__(258)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2d5fa488"
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
Component.options.__file = "resources/assets/admin/views/error/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d5fa488", Component.options)
  } else {
    hotAPI.reload("data-v-2d5fa488", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(259)
/* template */
var __vue_template__ = __webpack_require__(260)
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
Component.options.__file = "resources/assets/admin/views/error/500.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dfe0af9", Component.options)
  } else {
    hotAPI.reload("data-v-1dfe0af9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 228 */,
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 241,
	"./App": 75,
	"./App.vue": 75,
	"./___role/edit": 263,
	"./___role/edit.vue": 263,
	"./___role/list": 264,
	"./___role/list.vue": 264,
	"./api/edit": 265,
	"./api/edit.vue": 265,
	"./api/list": 266,
	"./api/list.vue": 266,
	"./asset/edit": 267,
	"./asset/edit.vue": 267,
	"./asset/grant/group": 268,
	"./asset/grant/group.vue": 268,
	"./asset/group/edit": 269,
	"./asset/group/edit.vue": 269,
	"./asset/group/list": 270,
	"./asset/group/list.vue": 270,
	"./asset/list": 271,
	"./asset/list.vue": 271,
	"./content/category/components/item": 242,
	"./content/category/components/item-list": 245,
	"./content/category/components/item-list.vue": 245,
	"./content/category/components/item.vue": 242,
	"./content/category/edit": 272,
	"./content/category/edit.vue": 272,
	"./content/category/list": 274,
	"./content/category/list.vue": 274,
	"./content/field/edit": 275,
	"./content/field/edit.vue": 275,
	"./content/field/group/edit": 276,
	"./content/field/group/edit.vue": 276,
	"./content/field/group/list": 277,
	"./content/field/group/list.vue": 277,
	"./content/field/list": 278,
	"./content/field/list.vue": 278,
	"./content/item/components/field": 246,
	"./content/item/components/field-form": 247,
	"./content/item/components/field-form.vue": 247,
	"./content/item/components/field.vue": 246,
	"./content/item/edit": 279,
	"./content/item/edit.vue": 279,
	"./content/item/list": 248,
	"./content/item/list.vue": 248,
	"./content/media": 280,
	"./content/media.vue": 280,
	"./content/search": 281,
	"./content/search.vue": 281,
	"./content/tag/edit": 282,
	"./content/tag/edit.vue": 282,
	"./content/tag/list": 283,
	"./content/tag/list.vue": 283,
	"./error": 223,
	"./error/": 223,
	"./error/401": 225,
	"./error/401.vue": 225,
	"./error/404": 226,
	"./error/404.vue": 226,
	"./error/500": 227,
	"./error/500.vue": 227,
	"./error/index": 223,
	"./error/index.vue": 223,
	"./index": 241,
	"./index.vue": 241,
	"./login": 224,
	"./login.vue": 224,
	"./menu/edit": 284,
	"./menu/edit.vue": 284,
	"./menu/list": 285,
	"./menu/list.vue": 285,
	"./module/components/params-form": 261,
	"./module/components/params-form.vue": 261,
	"./module/edit": 286,
	"./module/edit.vue": 286,
	"./module/list": 287,
	"./module/list.vue": 287,
	"./system/language/edit": 288,
	"./system/language/edit.vue": 288,
	"./system/language/list": 289,
	"./system/language/list.vue": 289,
	"./system/setting": 290,
	"./system/setting.vue": 290,
	"./system/site/edit": 291,
	"./system/site/edit.vue": 291,
	"./system/site/list": 292,
	"./system/site/list.vue": 292,
	"./user/edit": 293,
	"./user/edit.vue": 293,
	"./user/group/edit": 294,
	"./user/group/edit.vue": 294,
	"./user/group/grant/api": 295,
	"./user/group/grant/api.vue": 295,
	"./user/group/grant/asset": 296,
	"./user/group/grant/asset.vue": 296,
	"./user/group/list": 297,
	"./user/group/list.vue": 297,
	"./user/list": 298,
	"./user/list.vue": 298,
	"./user/log": 299,
	"./user/log.vue": 299,
	"./user/viewlevel/edit": 300,
	"./user/viewlevel/edit.vue": 300,
	"./user/viewlevel/list": 301,
	"./user/viewlevel/list.vue": 301
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 229;

/***/ }),
/* 230 */,
/* 231 */,
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            list: [],
            list_loading: {
                flag: false
            },
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 10,
                page_sizes: [10, 15, 20, 25],
                layout: "total, sizes, prev, pager, next, jumper"
            }
        };
    },

    watch: {
        $route: function $route() {
            this.$initList();
        }
    },
    mounted: function mounted() {
        this.$initList();
    },

    methods: {
        $onClickBtnAdd: function $onClickBtnAdd() {
            this.$router.push(this.$route.path + "/edit");
        },
        $onClickBntEdit: function $onClickBntEdit(query) {
            this.$router.push({
                path: this.$route.path + "/edit",
                query: query
            });
        },
        $onSearchReset: function $onSearchReset() {
            this.$router.push({
                path: this.$route.path
            });
        },
        $onSearch: function $onSearch(_ref) {
            var data = _ref.data;

            var sd = {};

            var query = this.$route.query;

            for (var p in query) {
                sd[p] = query[p];
            }
            for (var s in data) {
                sd[s] = data[s];
                if (!sd[s]) {
                    delete sd[s];
                }
            }

            this.$router.push({
                path: this.$route.path,
                query: sd
            });
        },
        setRouteQuery: function setRouteQuery(field, value) {
            var query = Object.assign({}, this.$route.query);

            if ((typeof field === "undefined" ? "undefined" : _typeof(field)) === "object") {
                query = field;
            } else {
                query[field] = value;
            }

            return query;
        },
        getRouteQuery: function getRouteQuery() {
            var _this = this;

            var query = this.$route.query;
            var intArray = ["id", "pid", "access"];
            var data = {};

            Object.keys(query).forEach(function (field) {
                _this.searchbar.default_value[field] = intArray.includes(field) ? parseInt(query[field]) : query[field];
                data[field] = query[field];
            });
            return data;
        },
        $onChangeCurrentPage: function $onChangeCurrentPage(page) {
            var _this2 = this;

            this.$onGetList({
                page: page,
                fn: function fn() {
                    _this2.$router.push({
                        path: _this2.$route.path,
                        query: _this2.setRouteQuery("page", page)
                    });
                }
            });
        },
        $onChangePageSize: function $onChangePageSize(pageSize) {
            var _this3 = this;

            this.$onGetList({
                pageSize: pageSize,
                fn: function fn() {
                    _this3.$router.push({
                        path: _this3.$route.path,
                        query: _this3.setRouteQuery("page_size", pageSize)
                    });
                }
            });
        },
        $onGetList: function $onGetList() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                page = _ref2.page,
                pageSize = _ref2.pageSize,
                where = _ref2.where,
                fn = _ref2.fn;

            this.list_loading.flag = true;

            var query = this.$route.query;

            this.paginations.current_page = page || parseInt(query.page) || 1;
            this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

            var page_data = Object.assign(this.getRouteQuery(), {
                page: this.paginations.current_page,
                limit: this.paginations.page_size
            });
            if (where) {
                page_data = Object.assign(page_data, where || {});
            }
            this.handleGetList({ page_data: page_data, fn: fn });
        },
        $initList: function $initList() {
            this.$onGetList();
        }
    }
});

/***/ }),
/* 233 */
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
            this.$router.push({
                path: this.$route.path.replace("/edit", ""),
                query: this.$router.go(-1)
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
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(237);


/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        //TODO: force update for category adding,
        $getFieldList: function $getFieldList() {
            var _this = this;

            var fieldsObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var usage = arguments[1];

            var fields_not_exit = Object.keys(fieldsObj).filter(function (key) {
                return !_this.checkStoreField(key);
            });
            if (fields_not_exit.length > 0) {
                this.$$api_option_list({
                    data: {
                        types: fields_not_exit
                    },
                    fn: function fn(_ref) {
                        var data = _ref.data;

                        fields_not_exit.forEach(function (type) {
                            if (type === "extrafield_group") {
                                data.items[type].unshift({
                                    value: "",
                                    title: _this.$t("OPTION_SELECT", {
                                        name: _this.$t("NONE")
                                    })
                                });
                                var groups = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["b" /* schema */].Entity("groups");
                                var normalize_list = Object(__WEBPACK_IMPORTED_MODULE_0_normalizr__["a" /* normalize */])(data.items[type], [groups]);
                                _updateFieldList(type, normalize_list.entities["groups"]);
                            } else {
                                _updateFieldList(type, data.items);
                            }
                        });
                    }
                });

                var _updateFieldList = function _updateFieldList(field, data) {
                    _this.onUpdateStoreFieldList(field, data[field] || data);
                    if (usage) {
                        _this.onUpdateSearchbarFieldList(field, fieldsObj[field]);
                    } else {
                        _this.onUpdateFieldList(field, fieldsObj[field]);
                    }
                };
            }
        },
        onUpdateFieldList: function onUpdateFieldList(field, field_key_or_index) {
            this.fields[field_key_or_index]["list"] = this.$store.getters[field + "_list"];
        },
        onUpdateSearchbarFieldList: function onUpdateSearchbarFieldList(field, field_index) {
            this.searchbar.fields[field_index]["list"] = this.$store.getters[field + "_list"];
        },
        onUpdateStoreFieldList: function onUpdateStoreFieldList(field, value) {
            if (field === "language") {
                value.unshift({
                    sef: "*",
                    title: this.$t("ALL_LANGUAGE")
                });
            }

            if (field === "menu_category" || field === "item_category") {
                value[0]["tree_list_title"] = this.$t("GLOBAL_ROOT" /*根*/);
            }
            //TODO: 處理 value 內 tree_list_title = ROOT 轉換
            this.$store.dispatch("update_option_related_list", {
                type: field,
                data: value
            });
        },
        checkStoreField: function checkStoreField(field) {
            return Boolean(this.$store.getters[field + "_list"]);
        }
    }
});

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        $initList: function $initList() {
            this.$set(this.toolbar, "type", this.$route.query.state === "-2" ? "trash" : "list");
            this.$onGetList();
        }
    }
});

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {
        var _this = this;

        this.$$eventBus.$on("onClickCMSFormDataToolbar", function (opts) {
            switch (opts.type) {
                case "cancel":
                    _this.$onCancel();
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    _this.handleSubmit({
                        ref: "form-data",
                        type: opts.type,
                        submit_data: _this.default_value
                    });
                    break;
                case "trash":
                    _this.onTrash();
                    break;
            }
        });
    },
    mounted: function mounted() {
        this.$$eventBus.$emit("onInitToolbar", {
            name: "CMSFormData",
            data: this.toolbar
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.$$eventBus.$off("onClickCMSFormDataToolbar");
    }
});

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalize$1; });
/* unused harmony export denormalize */
/**
 * Helpers to enable Immutable compatibility *without* bringing in
 * the 'immutable' package as a dependency.
 */

/**
 * Check if an object is immutable by checking if it has a key specific
 * to the immutable library.
 *
 * @param  {any} object
 * @return {bool}
 */
function isImmutable(object) {
  return !!(object && typeof object.hasOwnProperty === 'function' && (object.hasOwnProperty('__ownerID') || // Immutable.Map
  object._map && object._map.hasOwnProperty('__ownerID'))); // Immutable.Record
}

/**
 * Denormalize an immutable entity.
 *
 * @param  {Schema} schema
 * @param  {Immutable.Map|Immutable.Record} input
 * @param  {function} unvisit
 * @param  {function} getDenormalizedEntity
 * @return {Immutable.Map|Immutable.Record}
 */
function denormalizeImmutable(schema, input, unvisit) {
  return Object.keys(schema).reduce(function (object, key) {
    // Immutable maps cast keys to strings on write so we need to ensure
    // we're accessing them using string keys.
    var stringKey = '' + key;

    if (object.has(stringKey)) {
      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));
    } else {
      return object;
    }
  }, input);
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var getDefaultGetId = function getDefaultGetId(idAttribute) {
  return function (input) {
    return isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
  };
};

var EntitySchema = function () {
  function EntitySchema(key) {
    var definition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, EntitySchema);

    if (!key || typeof key !== 'string') {
      throw new Error('Expected a string key for Entity, but found ' + key + '.');
    }

    var _options$idAttribute = options.idAttribute,
        idAttribute = _options$idAttribute === undefined ? 'id' : _options$idAttribute,
        _options$mergeStrateg = options.mergeStrategy,
        mergeStrategy = _options$mergeStrateg === undefined ? function (entityA, entityB) {
      return _extends({}, entityA, entityB);
    } : _options$mergeStrateg,
        _options$processStrat = options.processStrategy,
        processStrategy = _options$processStrat === undefined ? function (input) {
      return _extends({}, input);
    } : _options$processStrat;


    this._key = key;
    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
    this._idAttribute = idAttribute;
    this._mergeStrategy = mergeStrategy;
    this._processStrategy = processStrategy;
    this.define(definition);
  }

  EntitySchema.prototype.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _babelHelpers$extends;

      var schema = definition[key];
      return _extends({}, entitySchema, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = schema, _babelHelpers$extends));
    }, this.schema || {});
  };

  EntitySchema.prototype.getId = function getId(input, parent, key) {
    return this._getId(input, parent, key);
  };

  EntitySchema.prototype.merge = function merge(entityA, entityB) {
    return this._mergeStrategy(entityA, entityB);
  };

  EntitySchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    var _this = this;

    var processedEntity = this._processStrategy(input, parent, key);
    Object.keys(this.schema).forEach(function (key) {
      if (processedEntity.hasOwnProperty(key) && _typeof(processedEntity[key]) === 'object') {
        var schema = _this.schema[key];
        processedEntity[key] = visit(processedEntity[key], processedEntity, key, schema, addEntity);
      }
    });

    addEntity(this, processedEntity, input, parent, key);
    return this.getId(input, parent, key);
  };

  EntitySchema.prototype.denormalize = function denormalize(entity, unvisit) {
    var _this2 = this;

    if (isImmutable(entity)) {
      return denormalizeImmutable(this.schema, entity, unvisit);
    }

    Object.keys(this.schema).forEach(function (key) {
      if (entity.hasOwnProperty(key)) {
        var schema = _this2.schema[key];
        entity[key] = unvisit(entity[key], schema);
      }
    });
    return entity;
  };

  createClass(EntitySchema, [{
    key: 'key',
    get: function get$$1() {
      return this._key;
    }
  }, {
    key: 'idAttribute',
    get: function get$$1() {
      return this._idAttribute;
    }
  }]);
  return EntitySchema;
}();

var PolymorphicSchema = function () {
  function PolymorphicSchema(definition, schemaAttribute) {
    classCallCheck(this, PolymorphicSchema);

    if (schemaAttribute) {
      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
        return input[schemaAttribute];
      } : schemaAttribute;
    }
    this.define(definition);
  }

  PolymorphicSchema.prototype.define = function define(definition) {
    this.schema = definition;
  };

  PolymorphicSchema.prototype.getSchemaAttribute = function getSchemaAttribute(input, parent, key) {
    return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
  };

  PolymorphicSchema.prototype.inferSchema = function inferSchema(input, parent, key) {
    if (this.isSingleSchema) {
      return this.schema;
    }

    var attr = this.getSchemaAttribute(input, parent, key);
    return this.schema[attr];
  };

  PolymorphicSchema.prototype.normalizeValue = function normalizeValue(value, parent, key, visit, addEntity) {
    var schema = this.inferSchema(value, parent, key);
    if (!schema) {
      return value;
    }
    var normalizedValue = visit(value, parent, key, schema, addEntity);
    return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : { id: normalizedValue, schema: this.getSchemaAttribute(value, parent, key) };
  };

  PolymorphicSchema.prototype.denormalizeValue = function denormalizeValue(value, unvisit) {
    var schemaKey = isImmutable(value) ? value.get('schema') : value.schema;
    if (!this.isSingleSchema && !schemaKey) {
      return value;
    }
    var id = isImmutable(value) ? value.get('id') : value.id;
    var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];
    return unvisit(id || value, schema);
  };

  createClass(PolymorphicSchema, [{
    key: 'isSingleSchema',
    get: function get$$1() {
      return !this._schemaAttribute;
    }
  }]);
  return PolymorphicSchema;
}();

var UnionSchema = function (_PolymorphicSchema) {
  inherits(UnionSchema, _PolymorphicSchema);

  function UnionSchema(definition, schemaAttribute) {
    classCallCheck(this, UnionSchema);

    if (!schemaAttribute) {
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    }
    return possibleConstructorReturn(this, _PolymorphicSchema.call(this, definition, schemaAttribute));
  }

  UnionSchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    return this.normalizeValue(input, parent, key, visit, addEntity);
  };

  UnionSchema.prototype.denormalize = function denormalize(input, unvisit) {
    return this.denormalizeValue(input, unvisit);
  };

  return UnionSchema;
}(PolymorphicSchema);

var ValuesSchema = function (_PolymorphicSchema) {
  inherits(ValuesSchema, _PolymorphicSchema);

  function ValuesSchema() {
    classCallCheck(this, ValuesSchema);
    return possibleConstructorReturn(this, _PolymorphicSchema.apply(this, arguments));
  }

  ValuesSchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    var _this2 = this;

    return Object.keys(input).reduce(function (output, key, index) {
      var _babelHelpers$extends;

      var value = input[key];
      return value !== undefined && value !== null ? _extends({}, output, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = _this2.normalizeValue(value, input, key, visit, addEntity), _babelHelpers$extends)) : output;
    }, {});
  };

  ValuesSchema.prototype.denormalize = function denormalize(input, unvisit) {
    var _this3 = this;

    return Object.keys(input).reduce(function (output, key) {
      var _babelHelpers$extends2;

      var entityOrId = input[key];
      return _extends({}, output, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[key] = _this3.denormalizeValue(entityOrId, unvisit), _babelHelpers$extends2));
    }, {});
  };

  return ValuesSchema;
}(PolymorphicSchema);

var validateSchema = function validateSchema(definition) {
  var isArray = Array.isArray(definition);
  if (isArray && definition.length > 1) {
    throw new Error('Expected schema definition to be a single schema, but found ' + definition.length + '.');
  }

  return definition[0];
};

var getValues = function getValues(input) {
  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
    return input[key];
  });
};

var normalize = function normalize(schema, input, parent, key, visit, addEntity) {
  schema = validateSchema(schema);

  var values = getValues(input);

  // Special case: Arrays pass *their* parent on to their children, since there
  // is not any special information that can be gathered from themselves directly
  return values.map(function (value, index) {
    return visit(value, parent, key, schema, addEntity);
  });
};

var denormalize = function denormalize(schema, input, unvisit) {
  schema = validateSchema(schema);
  return input && input.map ? input.map(function (entityOrId) {
    return unvisit(entityOrId, schema);
  }) : input;
};

var ArraySchema = function (_PolymorphicSchema) {
  inherits(ArraySchema, _PolymorphicSchema);

  function ArraySchema() {
    classCallCheck(this, ArraySchema);
    return possibleConstructorReturn(this, _PolymorphicSchema.apply(this, arguments));
  }

  ArraySchema.prototype.normalize = function normalize(input, parent, key, visit, addEntity) {
    var _this2 = this;

    var values = getValues(input);

    return values.map(function (value, index) {
      return _this2.normalizeValue(value, parent, key, visit, addEntity);
    }).filter(function (value) {
      return value !== undefined && value !== null;
    });
  };

  ArraySchema.prototype.denormalize = function denormalize(input, unvisit) {
    var _this3 = this;

    return input && input.map ? input.map(function (value) {
      return _this3.denormalizeValue(value, unvisit);
    }) : input;
  };

  return ArraySchema;
}(PolymorphicSchema);

var _normalize = function _normalize(schema, input, parent, key, visit, addEntity) {
  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    var localSchema = schema[key];
    var value = visit(input[key], input, key, localSchema, addEntity);
    if (value === undefined || value === null) {
      delete object[key];
    } else {
      object[key] = value;
    }
  });
  return object;
};

var _denormalize = function _denormalize(schema, input, unvisit) {
  if (isImmutable(input)) {
    return denormalizeImmutable(schema, input, unvisit);
  }

  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    if (object[key]) {
      object[key] = unvisit(object[key], schema[key]);
    }
  });
  return object;
};

var ObjectSchema = function () {
  function ObjectSchema(definition) {
    classCallCheck(this, ObjectSchema);

    this.define(definition);
  }

  ObjectSchema.prototype.define = function define(definition) {
    this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
      var _babelHelpers$extends;

      var schema = definition[key];
      return _extends({}, entitySchema, (_babelHelpers$extends = {}, _babelHelpers$extends[key] = schema, _babelHelpers$extends));
    }, this.schema || {});
  };

  ObjectSchema.prototype.normalize = function normalize() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _normalize.apply(undefined, [this.schema].concat(args));
  };

  ObjectSchema.prototype.denormalize = function denormalize() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _denormalize.apply(undefined, [this.schema].concat(args));
  };

  return ObjectSchema;
}();

var visit = function visit(value, parent, key, schema, addEntity) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !value) {
    return value;
  }

  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
    var method = Array.isArray(schema) ? normalize : _normalize;
    return method(schema, value, parent, key, visit, addEntity);
  }

  return schema.normalize(value, parent, key, visit, addEntity);
};

var addEntities = function addEntities(entities) {
  return function (schema, processedEntity, value, parent, key) {
    var schemaKey = schema.key;
    var id = schema.getId(value, parent, key);
    if (!(schemaKey in entities)) {
      entities[schemaKey] = {};
    }

    var existingEntity = entities[schemaKey][id];
    if (existingEntity) {
      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
    } else {
      entities[schemaKey][id] = processedEntity;
    }
  };
};

var schema = {
  Array: ArraySchema,
  Entity: EntitySchema,
  Object: ObjectSchema,
  Union: UnionSchema,
  Values: ValuesSchema
};

var normalize$1 = function normalize$$1(input, schema) {
  if (!input || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
    throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '".');
  }

  var entities = {};
  var addEntity = addEntities(entities);

  var result = visit(input, input, null, schema, addEntity);
  return { entities: entities, result: result };
};

var unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {
  var entity = getEntity(id, schema);
  if ((typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) !== 'object' || entity === null) {
    return entity;
  }

  if (!cache[schema.key]) {
    cache[schema.key] = {};
  }

  if (!cache[schema.key][id]) {
    // Ensure we don't mutate it non-immutable objects
    var entityCopy = isImmutable(entity) ? entity : _extends({}, entity);

    // Need to set this first so that if it is referenced further within the
    // denormalization the reference will already exist.
    cache[schema.key][id] = entityCopy;
    cache[schema.key][id] = schema.denormalize(entityCopy, unvisit);
  }

  return cache[schema.key][id];
};

var getUnvisit = function getUnvisit(entities) {
  var cache = {};
  var getEntity = getEntities(entities);

  return function unvisit(input, schema) {
    if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
      var method = Array.isArray(schema) ? denormalize : _denormalize;
      return method(schema, input, unvisit);
    }

    if (input === undefined || input === null) {
      return input;
    }

    if (schema instanceof EntitySchema) {
      return unvisitEntity(input, schema, unvisit, getEntity, cache);
    }

    return schema.denormalize(input, unvisit);
  };
};

var getEntities = function getEntities(entities) {
  var isImmutable$$1 = isImmutable(entities);

  return function (entityOrId, schema) {
    var schemaKey = schema.key;

    if ((typeof entityOrId === 'undefined' ? 'undefined' : _typeof(entityOrId)) === 'object') {
      return entityOrId;
    }

    return isImmutable$$1 ? entities.getIn([schemaKey, entityOrId.toString()]) : entities[schemaKey][entityOrId];
  };
};

var denormalize$1 = function denormalize$$1(input, schema, entities) {
  if (typeof input !== 'undefined') {
    return getUnvisit(entities)(input, schema);
  }
};




/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(239);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("100bbe7b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15828418\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15828418\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.login-wrapper[data-v-15828418] {\n  background: -webkit-gradient(linear, left top, right top, from(#3f6c95), to(#2f3855));\n  background: linear-gradient(to right, #3f6c95 0%, #2f3855 100%);\n  height: 100vh;\n}\n.login-form[data-v-15828418] {\n  position: absolute;\n  max-width: 600px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 4px;\n  padding: 30px;\n}\n.btn--help[data-v-15828418] {\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils___ = __webpack_require__(9);
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
  name: "login",
  data: function data() {
    var _this = this;

    return {
      remember: this.$store.state.user.remember,
      password_visible: false,
      login_visibel: false,
      login_loading: false, // v-loading
      data: {
        email: "",
        password: ""
      },
      rule_data: {
        email: [{
          validator: function validator(rule, value, callback) {
            if (value === "") {
              callback(new Error(_this.$t("ERROR_PLEASE_ENTER_USER_NAME")));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }, {
          type: "email",
          message: this.$t("ERROR_PLEASE_ENTER_VALID_EMAIL"),
          trigger: "blur"
        }],
        password: [{
          validator: function validator(rule, value, callback) {
            if (value === "") {
              callback(new Error(_this.$t("ERROR_PLEASE_ENTER_PASSWORD")));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }]
      }
    };
  },
  mounted: function mounted() {
    if (this.$store.state.global.is_login_refresh) {
      // setTimeout(() => {
      //   this.$router.go(0);
      // }, 50);
      this.$router.go(0);
      this.$store.commit("update_login_refresh", {
        type: false
      });
    }

    if (this.remember.remember_flag === true) {
      this.data.email = this.remember.remember_login_info.email;
    }
  },

  methods: {
    togglePassword: function togglePassword() {
      this.password_visible = !this.password_visible;
    },
    onLogin: function onLogin(ref) {
      var _this2 = this;

      this.$refs[ref].validate(function (valid) {
        if (valid) {
          _this2.login_loading = true;
          _this2.$$api_user_login({
            tokenFlag: true,
            data: _this2[ref],
            fn: function fn(_ref) {
              var data = _ref.data,
                  msg = _ref.msg;

              _this2.$message.success(msg);

              if (_this2.remember.remember_flag === true) {
                _this2.$store.dispatch("update_remember", {
                  remember_flag: _this2.remember.remember_flag,
                  remember_login_info: {
                    email: _this2[ref].email,
                    token: data.items.token
                  }
                });
              } else {
                _this2.$store.dispatch("remove_remember");
              }
              var user_id = data.items.id;
              var user_redirect = data.items.redirect;

              // 儲存用戶 token
              _this2.$store.dispatch("update_userinfo", data.items).then(function () {
                // 取得用戶 routes
                _this2.$$api_user_getRoutes({
                  fn: function fn(_ref2) {
                    var data = _ref2.data;

                    var user_routes = data.items;
                    _this2.$router.options.routes = Object(__WEBPACK_IMPORTED_MODULE_0_utils___["c" /* formatRoutes */])(user_routes);
                    _this2.$router.addRoutes(_this2.$router.options.routes);

                    _this2.$store.dispatch("update_user_routes", {
                      routes: user_routes,
                      redirect: user_redirect
                    }).then(function () {
                      _this2.$router.push(user_redirect);
                    });
                  }
                });
              });
            },
            errFn: function errFn(err) {
              _this2.$message.error(err.message);
            },
            finalFn: function finalFn() {
              _this2.login_loading = false;
            }
          });
        }
      });
    }
  }
});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(338)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(340)
/* template */
var __vue_template__ = __webpack_require__(341)
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
Component.options.__file = "resources/assets/admin/views/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b971add", Component.options)
  } else {
    hotAPI.reload("data-v-2b971add", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(362)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(364)
/* template */
var __vue_template__ = __webpack_require__(375)
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
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(365)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(367)
/* template */
var __vue_template__ = __webpack_require__(374)
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
Component.options.__file = "resources/assets/admin/components/media-input/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60d31bef", Component.options)
  } else {
    hotAPI.reload("data-v-60d31bef", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(368)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(370)
/* template */
var __vue_template__ = __webpack_require__(373)
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
Component.options.__file = "resources/assets/admin/components/media/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-380105b2", Component.options)
  } else {
    hotAPI.reload("data-v-380105b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(376)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(378)
/* template */
var __vue_template__ = __webpack_require__(379)
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
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(406)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(408)
/* template */
var __vue_template__ = __webpack_require__(409)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c3e5249c"
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
Component.options.__file = "resources/assets/admin/views/content/item/components/field.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3e5249c", Component.options)
  } else {
    hotAPI.reload("data-v-c3e5249c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(410)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(412)
/* template */
var __vue_template__ = __webpack_require__(413)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e9665af"
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
Component.options.__file = "resources/assets/admin/views/content/item/components/field-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e9665af", Component.options)
  } else {
    hotAPI.reload("data-v-1e9665af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(416)
/* template */
var __vue_template__ = __webpack_require__(417)
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
Component.options.__file = "resources/assets/admin/views/content/item/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-525be48f", Component.options)
  } else {
    hotAPI.reload("data-v-525be48f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("1f7dc693", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c9d3554\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c9d3554\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.error-bg[data-v-0c9d3554] {\n  background-color: #2f3855;\n}\n.error-container[data-v-0c9d3554] {\n  min-height: 100vh;\n  color: #fff;\n}\n.error-content[data-v-0c9d3554] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 251 */
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
  name: "error",
  methods: {
    onClickBtnGoback: function onClickBtnGoback() {
      this.$router.go(-1);
    }
  }
});

/***/ }),
/* 252 */
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

/***/ }),
/* 253 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "err401"
});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "error" }, [_c("span", [_vm._v("401")])]),
      _vm._v(" "),
      _c("div", { staticClass: "error-type" }, [
        _c("span", [_vm._v("PAGE NOT FOUND")])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("p", { staticClass: "error-msg" }, [
          _vm._v(
            "This is not the place you are looking for, you may try the below actions. "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2db4318e", module.exports)
  }
}

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("6c30a608", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d5fa488\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2d5fa488\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.error-code[data-v-2d5fa488] {\n  color: #E2C044;\n  font-size: 180px;\n}\n.error-type[data-v-2d5fa488] {\n  color: #D3D0CB;\n  font-size: 48px;\n}\n.error-desc[data-v-2d5fa488] {\n  color: #7A8092;\n  font-size: 24px;\n  margin-bottom: 60px;\n}\n", ""]);

// exports


/***/ }),
/* 257 */
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
  name: "err404"
});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "error-msg" }, [
        _c("div", { staticClass: "error-code" }, [_vm._v("404")]),
        _vm._v(" "),
        _c("div", { staticClass: "error-type" }, [_vm._v("PAGE NOT FOUND")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "error-desc" }, [
        _vm._v(
          "\n      This is not the place you are looking for, you may try the below actions.\n    "
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2d5fa488", module.exports)
  }
}

/***/ }),
/* 259 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "err500"
});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "error" }, [_c("span", [_vm._v("500")])]),
      _vm._v(" "),
      _c("div", { staticClass: "error-type" }, [
        _c("span", [_vm._v("INTERNAL SERVER ERROR")])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("p", { staticClass: "error-msg" }, [
          _vm._v(
            "Something went wrong at our end, we are working on it. Mean while try below options. "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1dfe0af9", module.exports)
  }
}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(438)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(440)
/* template */
var __vue_template__ = __webpack_require__(441)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-655249c0"
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
Component.options.__file = "resources/assets/admin/views/module/components/params-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-655249c0", Component.options)
  } else {
    hotAPI.reload("data-v-655249c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-row",
        [
          _c("el-col", { attrs: { span: 24 } }, [
            _c(
              "div",
              { staticClass: "content login-wrapper" },
              [
                _c(
                  "el-form",
                  {
                    directives: [
                      {
                        name: "loading",
                        rawName: "v-loading",
                        value: _vm.login_loading,
                        expression: "login_loading"
                      }
                    ],
                    ref: "data",
                    staticClass: "login-form",
                    attrs: {
                      "label-position": "left",
                      "element-loading-text": _vm.$t(
                        "LOGIN_LOADING"
                      ) /*登入中⋯⋯*/,
                      model: _vm.data,
                      rules: _vm.rule_data
                    }
                  },
                  [
                    _c(
                      "el-form-item",
                      { staticClass: "text-center login-header" },
                      [
                        _c("SvgIcon", {
                          staticStyle: { width: "100%", height: "45px" },
                          attrs: { "icon-class": "logo" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      { attrs: { prop: "email" } },
                      [
                        _c("el-input", {
                          attrs: {
                            type: "email",
                            "auto-complete": "off",
                            placeholder: _vm.$t("GLOBAL_USERNAME") /*帳號*/
                          },
                          model: {
                            value: _vm.data.email,
                            callback: function($$v) {
                              _vm.$set(_vm.data, "email", $$v)
                            },
                            expression: "data.email"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      { attrs: { prop: "password" } },
                      [
                        _c(
                          "el-input",
                          {
                            attrs: {
                              type: _vm.password_visible ? "text" : "password",
                              "auto-complete": "off",
                              placeholder: _vm.$t("GLOBAL_PASSWORD") /*密碼*/
                            },
                            nativeOn: {
                              keyup: function($event) {
                                if (
                                  !("button" in $event) &&
                                  _vm._k(
                                    $event.keyCode,
                                    "enter",
                                    13,
                                    $event.key,
                                    "Enter"
                                  )
                                ) {
                                  return null
                                }
                                _vm.onLogin("data", true)
                              }
                            },
                            model: {
                              value: _vm.data.password,
                              callback: function($$v) {
                                _vm.$set(_vm.data, "password", $$v)
                              },
                              expression: "data.password"
                            }
                          },
                          [
                            _c(
                              "el-button",
                              {
                                attrs: { slot: "append" },
                                on: { click: _vm.togglePassword },
                                slot: "append"
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: {
                                    icon: [
                                      "fal",
                                      _vm.password_visible ? "eye" : "eye-slash"
                                    ]
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-form-item",
                      [
                        _c(
                          "el-checkbox",
                          {
                            attrs: { checked: _vm.remember.remember_flag },
                            model: {
                              value: _vm.remember.remember_flag,
                              callback: function($$v) {
                                _vm.$set(_vm.remember, "remember_flag", $$v)
                              },
                              expression: "remember.remember_flag"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("GLOBAL_REMEMBER_ME") /*記住帳號*/)
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        staticClass: "is-block",
                        attrs: { type: "primary" },
                        on: {
                          click: function($event) {
                            _vm.onLogin("data")
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.$t("LOGIN") /*登入*/))]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-15828418", module.exports)
  }
}

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(342)
/* template */
var __vue_template__ = __webpack_require__(343)
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
Component.options.__file = "resources/assets/admin/views/___role/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fb3a51ae", Component.options)
  } else {
    hotAPI.reload("data-v-fb3a51ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(344)
/* template */
var __vue_template__ = __webpack_require__(345)
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
Component.options.__file = "resources/assets/admin/views/___role/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-731aafbd", Component.options)
  } else {
    hotAPI.reload("data-v-731aafbd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(346)
/* template */
var __vue_template__ = __webpack_require__(347)
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
Component.options.__file = "resources/assets/admin/views/api/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d00fea4", Component.options)
  } else {
    hotAPI.reload("data-v-6d00fea4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(348)
/* template */
var __vue_template__ = __webpack_require__(349)
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
Component.options.__file = "resources/assets/admin/views/api/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5db8d738", Component.options)
  } else {
    hotAPI.reload("data-v-5db8d738", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(350)
/* template */
var __vue_template__ = __webpack_require__(351)
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
Component.options.__file = "resources/assets/admin/views/asset/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73c1b164", Component.options)
  } else {
    hotAPI.reload("data-v-73c1b164", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(352)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(354)
/* template */
var __vue_template__ = __webpack_require__(355)
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
Component.options.__file = "resources/assets/admin/views/asset/grant/group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-279fcf38", Component.options)
  } else {
    hotAPI.reload("data-v-279fcf38", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(356)
/* template */
var __vue_template__ = __webpack_require__(357)
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
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(358)
/* template */
var __vue_template__ = __webpack_require__(359)
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
Component.options.__file = "resources/assets/admin/views/asset/group/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0959d872", Component.options)
  } else {
    hotAPI.reload("data-v-0959d872", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(360)
/* template */
var __vue_template__ = __webpack_require__(361)
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
Component.options.__file = "resources/assets/admin/views/asset/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9252003c", Component.options)
  } else {
    hotAPI.reload("data-v-9252003c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(380)
/* template */
var __vue_template__ = __webpack_require__(387)
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
Component.options.__file = "resources/assets/admin/views/content/category/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c511e820", Component.options)
  } else {
    hotAPI.reload("data-v-c511e820", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(381)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(383)
/* template */
var __vue_template__ = __webpack_require__(386)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24a1c216"
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
Component.options.__file = "resources/assets/admin/components/editor/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24a1c216", Component.options)
  } else {
    hotAPI.reload("data-v-24a1c216", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(388)
/* template */
var __vue_template__ = __webpack_require__(389)
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
Component.options.__file = "resources/assets/admin/views/content/category/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3a236f8", Component.options)
  } else {
    hotAPI.reload("data-v-e3a236f8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(390)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(392)
/* template */
var __vue_template__ = __webpack_require__(393)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-144ce84c"
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
Component.options.__file = "resources/assets/admin/views/content/field/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-144ce84c", Component.options)
  } else {
    hotAPI.reload("data-v-144ce84c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(394)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(396)
/* template */
var __vue_template__ = __webpack_require__(397)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c2c692c"
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
Component.options.__file = "resources/assets/admin/views/content/field/group/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c2c692c", Component.options)
  } else {
    hotAPI.reload("data-v-1c2c692c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(398)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(400)
/* template */
var __vue_template__ = __webpack_require__(401)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3abcb804"
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
Component.options.__file = "resources/assets/admin/views/content/field/group/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3abcb804", Component.options)
  } else {
    hotAPI.reload("data-v-3abcb804", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(402)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(404)
/* template */
var __vue_template__ = __webpack_require__(405)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32dd3724"
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
Component.options.__file = "resources/assets/admin/views/content/field/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32dd3724", Component.options)
  } else {
    hotAPI.reload("data-v-32dd3724", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(414)
/* template */
var __vue_template__ = __webpack_require__(415)
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
Component.options.__file = "resources/assets/admin/views/content/item/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61a40bfb", Component.options)
  } else {
    hotAPI.reload("data-v-61a40bfb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(418)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(420)
/* template */
var __vue_template__ = __webpack_require__(421)
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
Component.options.__file = "resources/assets/admin/views/content/media.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d324484e", Component.options)
  } else {
    hotAPI.reload("data-v-d324484e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(422)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(424)
/* template */
var __vue_template__ = __webpack_require__(425)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c815b6fa"
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
Component.options.__file = "resources/assets/admin/views/content/search.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c815b6fa", Component.options)
  } else {
    hotAPI.reload("data-v-c815b6fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(426)
/* template */
var __vue_template__ = __webpack_require__(427)
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
Component.options.__file = "resources/assets/admin/views/content/tag/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73c7b5fa", Component.options)
  } else {
    hotAPI.reload("data-v-73c7b5fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(428)
/* template */
var __vue_template__ = __webpack_require__(429)
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
Component.options.__file = "resources/assets/admin/views/content/tag/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-647f8e8e", Component.options)
  } else {
    hotAPI.reload("data-v-647f8e8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(430)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(432)
/* template */
var __vue_template__ = __webpack_require__(433)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-69d70d76"
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
Component.options.__file = "resources/assets/admin/views/menu/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69d70d76", Component.options)
  } else {
    hotAPI.reload("data-v-69d70d76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(434)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(436)
/* template */
var __vue_template__ = __webpack_require__(437)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-88675c4e"
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
Component.options.__file = "resources/assets/admin/views/menu/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88675c4e", Component.options)
  } else {
    hotAPI.reload("data-v-88675c4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(442)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(444)
/* template */
var __vue_template__ = __webpack_require__(445)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1843d618"
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
Component.options.__file = "resources/assets/admin/views/module/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1843d618", Component.options)
  } else {
    hotAPI.reload("data-v-1843d618", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(446)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(448)
/* template */
var __vue_template__ = __webpack_require__(449)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08fbaeac"
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
Component.options.__file = "resources/assets/admin/views/module/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08fbaeac", Component.options)
  } else {
    hotAPI.reload("data-v-08fbaeac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(450)
/* template */
var __vue_template__ = __webpack_require__(451)
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
Component.options.__file = "resources/assets/admin/views/system/language/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ae037c6", Component.options)
  } else {
    hotAPI.reload("data-v-5ae037c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(452)
/* template */
var __vue_template__ = __webpack_require__(453)
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
Component.options.__file = "resources/assets/admin/views/system/language/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b98105a", Component.options)
  } else {
    hotAPI.reload("data-v-4b98105a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(454)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(456)
/* template */
var __vue_template__ = __webpack_require__(457)
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
Component.options.__file = "resources/assets/admin/views/system/setting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f3df1f5", Component.options)
  } else {
    hotAPI.reload("data-v-3f3df1f5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(458)
/* template */
var __vue_template__ = __webpack_require__(459)
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
Component.options.__file = "resources/assets/admin/views/system/site/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8554d192", Component.options)
  } else {
    hotAPI.reload("data-v-8554d192", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(460)
/* template */
var __vue_template__ = __webpack_require__(461)
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
Component.options.__file = "resources/assets/admin/views/system/site/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3e5206a", Component.options)
  } else {
    hotAPI.reload("data-v-a3e5206a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(462)
/* template */
var __vue_template__ = __webpack_require__(463)
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
Component.options.__file = "resources/assets/admin/views/user/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dc05c74e", Component.options)
  } else {
    hotAPI.reload("data-v-dc05c74e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(464)
/* template */
var __vue_template__ = __webpack_require__(465)
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
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/admin/views/user/group/grant/api.vue"

module.exports = Component.exports


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = null
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
Component.options.__file = "resources/assets/admin/views/user/group/grant/asset.vue"

module.exports = Component.exports


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(466)
/* template */
var __vue_template__ = __webpack_require__(467)
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
Component.options.__file = "resources/assets/admin/views/user/group/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5810993d", Component.options)
  } else {
    hotAPI.reload("data-v-5810993d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(468)
/* template */
var __vue_template__ = __webpack_require__(469)
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
Component.options.__file = "resources/assets/admin/views/user/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa961626", Component.options)
  } else {
    hotAPI.reload("data-v-fa961626", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(470)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(472)
/* template */
var __vue_template__ = __webpack_require__(473)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ece8df76"
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
Component.options.__file = "resources/assets/admin/views/user/log.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ece8df76", Component.options)
  } else {
    hotAPI.reload("data-v-ece8df76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(474)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(476)
/* template */
var __vue_template__ = __webpack_require__(477)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74c593a9"
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
Component.options.__file = "resources/assets/admin/views/user/viewlevel/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74c593a9", Component.options)
  } else {
    hotAPI.reload("data-v-74c593a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(478)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(480)
/* template */
var __vue_template__ = __webpack_require__(481)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-657d6c3d"
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
Component.options.__file = "resources/assets/admin/views/user/viewlevel/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-657d6c3d", Component.options)
  } else {
    hotAPI.reload("data-v-657d6c3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(339);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("194f74f2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b971add\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b971add\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 340 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user_list: [{
        email: "superadmin@orangeshabu.com",
        password: "superadmin",
        group: "橘色集團超級管理者"
      }, {
        email: "admin@orangeshabu.com",
        password: "orangeshabu",
        group: "橘色集團網站管理者"
      }, {
        email: "admin@orangeshabushabu.com",
        password: "orangeshabushabu",
        group: "橘色涮涮屋網站管理者"
      }, {
        email: "admin@extension1byorange.com",
        password: "extension1byorange",
        group: "Extension 1 by 橘色網站管理者"
      }]
    };
  }
});

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b971add", module.exports)
  }
}

/***/ }),
/* 342 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "role-edit",
  data: function data() {
    return {
      params: {
        id: "",
        pid: 1
      },
      fields: [{
        key: "parent_id",
        type: "select",
        label: "上層角色",
        list: this.$store.getters.role_list,
        custom_attrs: {
          label: "tree_title",
          value: "id"
        }
      }, {
        key: "title",
        label: "標題"
      }, {
        key: "redirect",
        type: "select",
        label: "登入後頁面",
        list: [],
        custom_attrs: {
          label: "full_path",
          value: "full_path"
        }
      }, {
        key: "state",
        label: "是否啟用",
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
      default_value: {
        parent_id: 1,
        title: "",
        redirect: "",
        state: 1
      }
    };
  },

  methods: {
    onSubmit: function onSubmit(_ref) {
      var _this = this;

      var data = _ref.data,
          info = _ref.info,
          type = _ref.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_role_save({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          _this.$onSubmitFinish({
            type: type,
            query: { id: data.items.id, pid: data.items.parent_id }
          });
        }
      });
    },
    onCancel: function onCancel() {
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_role_pages({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this2.fields[2].list = data.items;
        }
      });

      this.$$api_role_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 343 */
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
    require("vue-hot-reload-api")      .rerender("data-v-fb3a51ae", module.exports)
  }
}

/***/ }),
/* 344 */
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
  name: "role-list",
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "redirect",
        label: "登入後頁面"
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }],
        default_value: {
          search: ""
        }
      },
      list_actions: {
        btns: [{
          text: this.$t("ASSET_USER_ROLE_ASSIGN_ASSET_TITLE"),
          type: "primary",
          method: "grant_asset",
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/asset",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }, {
          text: this.$t("ASSET_USER_ROLE_ASSIGN_API_TITLE"),
          type: "primary",
          method: "grant_api",
          fn: function fn(_ref6) {
            var data = _ref6.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/api",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }]
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref7) {
      var _this2 = this;

      var ids = _ref7.ids,
          state = _ref7.state;

      this.$$api_role_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref8) {
          var msg = _ref8.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref9) {
      var _this3 = this;

      var ids = _ref9.ids,
          datas = _ref9.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_role_delete({
          data: { ids: ids },
          fn: function fn(_ref10) {
            var data = _ref10.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref11) {
      var data = _ref11.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref12.page_data,
          _fn = _ref12.fn;

      this.$$api_role_list({
        data: page_data,
        fn: function fn(_ref13) {
          var data = _ref13.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _this4.$store.dispatch("update_option_related_list", {
            type: "role",
            data: data.items
          });

          _fn && _fn();
        }
      });
    },
    init: function init() {
      this.$onGetList();
    }
  }
});

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          ListActions: _vm.list_actions,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-731aafbd", module.exports)
  }
}

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(233);
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
  name: "api-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: [{
        key: "asset_id",
        type: "select",
        label: "Asset",
        list: [],
        custom_attrs: {
          label: "tree_title",
          value: "id"
        }
      }, {
        key: "url",
        label: "路徑"
      }, {
        key: "method",
        desc: "Please enter api method",
        label: "代碼"
      }],
      default_value: {
        asset_id: 1,
        url: "",
        method: ""
      }
    };
  },
  created: function created() {
    this.onUpdateFieldList();
  },

  methods: {
    onSubmit: function onSubmit(_ref) {
      var _this = this;

      var data = _ref.data,
          info = _ref.info,
          type = _ref.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_api_save({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);

          _this.$onSubmitFinish({
            type: type,
            query: { id: data.items.id, pid: data.items.parent_id }
          });
        }
      });
    },
    onCancel: function onCancel() {
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_api_get({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
        }
      });
    },
    onUpdateFieldList: function onUpdateFieldList() {
      var _this3 = this;

      this.$$api_asset_list({
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this3.fields[0].list = data.items;
        }
      });
    }
  }
});

/***/ }),
/* 347 */
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
    require("vue-hot-reload-api")      .rerender("data-v-6d00fea4", module.exports)
  }
}

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
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
  name: "api-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "url",
        label: "路徑",
        type: "editable"
      }, {
        key: "asset_title",
        label: "隸屬資源",
        formatter: function formatter(item) {
          return _this.$t(item.asset_title);
        }
      }, {
        key: "method",
        label: "代碼"
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list"
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }],
        default_value: {
          search: ""
        }
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref) {
      var _this2 = this;

      var ids = _ref.ids,
          state = _ref.state;

      this.$$api_api_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref2) {
          var msg = _ref2.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref3) {
      var _this3 = this;

      var ids = _ref3.ids,
          datas = _ref3.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_api_delete({
          data: { ids: ids },
          fn: function fn(_ref4) {
            var data = _ref4.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref5) {
      var data = _ref5.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref6.page_data,
          _fn = _ref6.fn;

      this.$$api_api_list({
        data: page_data,
        fn: function fn(_ref7) {
          var data = _ref7.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-5db8d738", module.exports)
  }
}

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_edit_mixin__ = __webpack_require__(233);
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
  name: "asset-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_edit_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "parent_id",
        type: "select",
        desc: "請選擇",
        label: "父级資源",
        list: this.$store.getters.asset_list,
        custom_attrs: {
          label: "tree_title",
          value: "id"
        },
        events: {
          change: function change(_ref) {
            var value = _ref.value;

            // update path prepend_value
            var result = _this.$store.getters.asset_list.filter(function (asset) {
              return asset.id === value;
            });
            _this.fields[2].prepend_value = result[0].path;

            // update component prepend_value
            if (value === 1) {
              _this.fields[3].prepend_value = "src/layout";
            } else {
              _this.fields[3].prepend_value = "views/";
            }
          }
        }
      }, {
        key: "title",
        desc: "請輸入資源名稱，名稱不可重複",
        label: "資源名稱"
      }, {
        key: "path",
        desc: "開頭須為 /；若為上層預設頁面，請留空",
        label: "資源訪問路徑",
        prepend: true,
        prepend_value: ""
      }, {
        key: "component",
        desc: "若上層為根，請勿填寫",
        label: "資源文件路徑",
        prepend: true,
        prepend_value: "",
        append: true,
        append_value: ".vue"
      }, {
        key: "type",
        desc: "請輸入資源類型",
        label: "資源類型",
        type: "radio",
        list: [{
          text: "別名",
          value: "alias"
        }, {
          text: "選單",
          value: "menu"
        }, {
          text: "選單標頭",
          value: "separator"
        }, {
          text: "功能",
          value: "function"
        }, {
          text: "外部連結",
          value: "url"
        }],
        events: {
          change: function change(_ref2) {
            var value = _ref2.value;

            if (value === "alias") {
              _this.default_value.redirect = "noredirect";
            } else {
              _this.default_value.redirect = "";
            }
          }
        }
      }, {
        key: "redirect",
        desc: "請輸入重新導向路徑。若類型為 url 請輸入要連結的網址",
        label: "重新導向路徑"
      }, {
        key: "icon",
        label: "icon",
        desc: "請輸入icon class"
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
      }, {
        key: "showNav",
        label: "顯示在選單",
        desc: "",
        type: "radio",
        list: [{
          text: "隱藏",
          value: "0"
        }, {
          text: "顯示",
          value: "1"
        }]
      }],
      toolbar: {
        type: "edit"
      },
      default_value: {
        parent_id: 1,
        title: "",
        path: "",
        type: "menu",
        icon: "",
        component: "",
        redirect: "",
        state: 1,
        showNav: 1
      }
    };
  },
  created: function created() {
    this.onUpdateFieldList();
    this.$getFieldList({
      asset: 0
    });
  },

  methods: {
    onSubmit: function onSubmit(_ref3) {
      var _this2 = this;

      var data = _ref3.data,
          info = _ref3.info,
          type = _ref3.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_asset_save({
        data: data,
        fn: function fn(_ref4) {
          var data = _ref4.data,
              msg = _ref4.msg;

          _this2.$message.success(msg);
          _this2.$onSubmitFinish({
            type: type,
            query: { id: data.items.id, pid: data.items.parent_id }
          });
        }
      });
    },
    onCancel: function onCancel() {
      var _this3 = this;

      // update user routes
      this.$$api_user_getRoutes({
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this3.$store.dispatch("update_user_routes", { routes: data.items }).then(function () {
            _this3.$router.push({
              path: _this3.$route.path.replace("/edit", ""),
              query: _this3.$router.go(-1)
            });
          });
        }
      });
    },
    onGetView: function onGetView() {
      var _this4 = this;

      this.$$api_asset_get({
        pathVar: this.params.id,
        fn: function fn(_ref6) {
          var data = _ref6.data;

          Object.keys(_this4.default_value).forEach(function (field) {
            return _this4.default_value[field] = data.items[field];
          });
        }
      });
    },
    onUpdateFieldList: function onUpdateFieldList() {
      // parent_id list
      if (this.params.pid === 1) {
        this.fields[3].prepend_value = "src/layout";
      } else {
        this.fields[3].prepend_value = "views/";
      }
    }
  }
});

/***/ }),
/* 351 */
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
    require("vue-hot-reload-api")      .rerender("data-v-73c1b164", module.exports)
  }
}

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(353);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("8a667c1e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-279fcf38\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-279fcf38\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 354 */
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
  name: "asset-grant-group",
  data: function data() {
    return {
      params: {
        asset_id: ""
      },
      fields: [{
        key: "group_ids",
        label: "Groups",
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
      this.$$api_asset_grantGroup({
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
      this.$router.push(this.$route.path.replace("grant", ""));
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
/* 355 */
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
    require("vue-hot-reload-api")      .rerender("data-v-279fcf38", module.exports)
  }
}

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(233);
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
  name: "asset-group-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */]],
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
      default_value: {
        title: "",
        state: 1
      }
    };
  },

  methods: {
    onSubmit: function onSubmit(_ref) {
      var _this = this;

      var data = _ref.data,
          info = _ref.info,
          type = _ref.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_asset_saveGroup({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          _this.$onSubmitFinish({
            type: type,
            query: { id: data.items.id, pid: data.items.parent_id }
          });
        }
      });
    },
    onCancel: function onCancel() {
      this.$router.push({
        path: this.$route.path.replace("/edit", ""),
        query: this.$router.go(-1)
      });
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_asset_getGroup({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 357 */
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
    require("vue-hot-reload-api")      .rerender("data-v-18a1ffde", module.exports)
  }
}

/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
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
  name: "asset-group-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }],
        default_value: {
          search: ""
        }
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref5) {
      var _this2 = this;

      var ids = _ref5.ids,
          state = _ref5.state;

      this.$$api_asset_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref6) {
          var msg = _ref6.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref7) {
      var _this3 = this;

      var ids = _ref7.ids,
          datas = _ref7.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_asset_delete({
          data: { ids: ids },
          fn: function fn(_ref8) {
            var data = _ref8.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref9) {
      var data = _ref9.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref10.page_data,
          _fn = _ref10.fn;

      this.$$api_asset_listGroup({
        data: page_data,
        fn: function fn(_ref11) {
          var data = _ref11.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-0959d872", module.exports)
  }
}

/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
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
  name: "asset-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      sort: {
        show: true
      },
      fields: [{
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }, {
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable",
        formatter: function formatter(item) {
          return _this.$t(item.replace(/;&nbsp/g, "").replace("<sup>|_</sup>", "").replace(".&nbsp;", ""));
        }
      }, {
        key: "path",
        label: "訪問路徑"
      }, {
        key: "component",
        label: "元件路徑"
      }, {
        key: "type",
        label: "類型"
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }],
        default_value: {
          search: ""
        }
      },
      list_actions: {
        btns: [{
          text: "Assign Group",
          type: "primary",
          method: "grant_group",
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/group",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }]
      }
    };
  },

  methods: {
    /**
     * list actions
     */
    onOrderChange: function onOrderChange(_ref6) {
      var id = _ref6.id,
          index_diff = _ref6.index_diff;

      this.$$api_asset_ordering({
        data: {
          id: id,
          index_diff: index_diff
        },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          console.log(msg);
        }
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref8) {
      var _this2 = this;

      var ids = _ref8.ids,
          state = _ref8.state;

      this.$$api_asset_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref9) {
          var msg = _ref9.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref10) {
      var _this3 = this;

      var ids = _ref10.ids,
          datas = _ref10.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_asset_delete({
          data: { ids: ids },
          fn: function fn(_ref11) {
            var data = _ref11.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref12) {
      var data = _ref12.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref13.page_data,
          _fn = _ref13.fn;

      this.$$api_asset_list({
        data: page_data,
        fn: function fn(_ref14) {
          var data = _ref14.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Sort: _vm.sort,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          ListActions: _vm.list_actions,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset,
          onOrderChange: _vm.onOrderChange
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-9252003c", module.exports)
  }
}

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(363);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("8ebb0d16", content, false, {});
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
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.el-collapse-item__header[data-v-6042c5f6] {\n  cursor: auto;\n}\n.el-collapse-item__header.is-disabled[data-v-6042c5f6] {\n    cursor: not-allowed;\n    background: #e6e6e6;\n}\n", ""]);

// exports


/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media_input__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cps_media_input__);
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
  components: { MediaInput: __WEBPACK_IMPORTED_MODULE_0_cps_media_input___default.a },
  props: {
    id: {
      type: Number,
      default: 0
    },
    categoryId: {
      type: Number,
      default: 0
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
      default_value: {
        id: "",
        title: "",
        link: "",
        introtext: "",
        description: "",
        category_id: "",
        image: "",
        state: 1,
        featured: 0
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
          introtext: "價錢"
        },
        timeline: {
          description: "描述文字"
        }
      }
    };
  },

  watch: {
    isActive: function isActive(v) {
      if (v) {
        this.onFillForm();
      }
    }
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
      if (this.categoryId) {
        this.default_value.category_id = this.categoryId;
      }
      this.$$api_item_save({
        data: this.default_value,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this2.$message.success(msg);
          _this2.$emit("update");
          _this2.onChangeActive();
        },
        finalFn: function finalFn() {
          _this2.save_loading = false;
        }
      });
    },
    onChangeActive: function onChangeActive(id) {
      this.$emit("changeActive", id);
    },
    onFillForm: function onFillForm() {
      var _this3 = this;

      Object.keys(this.default_value).forEach(function (field) {
        return _this3.default_value[field] = _this3.data[field];
      });
    }
  }
});

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(366);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("25bf4ee5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cps_media__);
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
  name: "media-input",
  components: { Media: __WEBPACK_IMPORTED_MODULE_0_cps_media___default.a },
  data: function data() {
    return {
      value: this.Data,
      dialogVisible: false
    };
  },

  props: {
    Data: String
  },
  methods: {
    onSelect: function onSelect() {
      this.$emit("onSelect", this.value);
    },
    onChange: function onChange() {
      this.$emit("onSelect", this.value);
    },
    onMediaChange: function onMediaChange(files) {
      this.value = files[files.length - 1];
    }
  },
  watch: {
    Data: function Data(v) {
      this.value = v;
    }
  }
});

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(369);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("79d520da", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-380105b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-380105b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.content-container .el-main.media-main {\n  min-height: 500px;\n  padding: 10px;\n}\n.content-container .el-aside.media-aside {\n  padding: 10px;\n}\n.media-container {\n  background: #fff;\n}\n.media-container .el-header, .media-container .el-footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.media-container .el-header {\n    border-bottom: 1px solid #e6e6e6;\n}\n.media-container .el-footer {\n    border-top: 1px solid #e6e6e6;\n    color: #999999;\n}\n.media-container .el-aside {\n    border-right: 1px solid #e6e6e6;\n}\n.media-toolbar__item {\n  margin-right: 10px;\n}\n.media-create__item {\n  margin-bottom: 10px;\n}\n.media-footer {\n  width: 100%;\n}\n.file-list__table .el-table__row {\n  cursor: default;\n}\n.file-list__table .el-table__row .file-item__thumb {\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    vertical-align: middle;\n    background-size: cover;\n}\n.file-list__icon {\n  color: #606266;\n  padding: 10px;\n}\n.file-list__icon:before, .file-list__icon:after {\n    content: \"\";\n    display: table;\n}\n.file-list__icon .file-item__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.file-list__icon .file-item__type {\n    width: 3em;\n    height: 3em;\n}\n.file-list__icon .file-item__icon {\n    font-size: 3em;\n}\n.file-list__icon .file-item__thumb {\n    width: 100%;\n    height: 100%;\n}\n.file-list__icon .file-item__name {\n    margin-top: 10px;\n    padding: 2px 4px;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    max-height: 2.4em;\n    line-height: 1.3em;\n    white-space: pre-line;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-break: break-word;\n    text-align: center;\n}\n.file-item {\n  width: 120px;\n  height: 80px;\n  float: left;\n  padding-right: 1.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.file-item__checkbox {\n    opacity: 0;\n    position: absolute;\n}\n.file-item.is-selected_filepath .file-item__name {\n    background: #2f3855;\n    color: #fff;\n    border-radius: 4px;\n    max-height: initial;\n    -webkit-line-clamp: initial;\n}\n", ""]);

// exports


/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
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
  name: "media",
  data: function data() {
    return {
      params: {
        dir: "/",
        path: this.FilePath,
        total: ""
      },
      view: "list",
      list_checkbox: true,
      selected_filepath: [],
      loading: false,
      folder_prop: {
        label: "name",
        children: "children"
      },
      folder_create: {
        show: false,
        value: ""
      },
      file_upload: {
        show: false
      },
      folders: [],
      files: []
    };
  },

  props: {
    FilePath: String
  },
  watch: {
    selected_filepath: function selected_filepath(value) {
      this.$emit("onSelectionChange", value);
    },
    "params.dir": function paramsDir() {
      this.$refs.folderTree.setCurrentKey(this.params.dir);
    },
    FilePath: function FilePath(v) {
      this.params.path = v;
    }
  },
  mounted: function mounted() {
    this.initMedia();
  },

  methods: {
    onSelectionChange: function onSelectionChange(value) {
      this.selected_filepath = value.map(function (el) {
        return el.path;
      });
    },
    onDeleteItem: function onDeleteItem() {
      var _this = this;

      this.$$api_media_delete({
        data: {
          paths: this.selected_filepath
        },
        fn: function fn() {
          _this.selected_filepath = [];
          _this.onGetFiles();
        }
      });
    },
    onItemDoubleClick: function onItemDoubleClick(item) {
      if (item.type === "Folder") {
        this.onClickFolder(item);
      } else {
        this.onClickFile(item);
      }
    },
    onClickFile: function onClickFile(file) {
      this.params.path = file.path;
      this.$emit("onDbClickFile", this.params.path);
    },
    onClickFolder: function onClickFolder(folder) {
      this.params.dir = folder.path;
      this.selected_filepath = [];
      this.onGetFiles();
    },
    handleUploadFile: function handleUploadFile() {
      this.$refs.fileUpload.submit();
    },
    onUploadFiles: function onUploadFiles(params) {
      var _this2 = this;

      var formData = new FormData();

      formData.append("files[]", params.file);
      formData.append("dir", this.params.dir);

      this.$$api_media_uploadFile({
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data: formData,
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this2.$message.success(msg);
          params.onSuccess();
          _this2.$refs.fileUpload.clearFiles();
          _this2.file_upload.show = false;
          _this2.onGetFiles();
        },
        errFn: function errFn(err) {
          _this2.$message.error(err.message);
          params.onError();
        }
      });
    },
    onCreateFolder: function onCreateFolder() {
      var _this3 = this;

      this.$$api_media_createFolder({
        data: {
          dir: this.params.dir,
          name: this.folder_create.value
        },
        fn: function fn(_ref2) {
          var data = _ref2.data;

          _this3.folder_create.value = "";
          _this3.folder_create.show = false;
          _this3.onGetFiles();
          _this3.onGetFolders();
        }
      });
    },
    onGetFolders: function onGetFolders() {
      var _this4 = this;

      this.$$api_media_listFolder({
        fn: function fn(_ref3) {
          var data = _ref3.data;

          data.items[0].name = _this4.$t("GLOBAL_ROOT" /*根*/);
          _this4.folders = data.items;
        }
      });
    },
    onGetFiles: function onGetFiles() {
      var _this5 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _fn = _ref4.fn;

      this.loading = true;
      this.$$api_media_listFile({
        data: {
          dir: this.params.dir
        },
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this5.files = data.items;
          _this5.params.total = data.records;
          _this5.loading = false;

          _fn && _fn();
        }
      });
    },
    onGetView: function onGetView() {
      this.params.dir = __WEBPACK_IMPORTED_MODULE_0_path___default.a.dirname(this.params.path) !== "." ? __WEBPACK_IMPORTED_MODULE_0_path___default.a.dirname(this.params.path) : "/";
      this.onGetFiles();
      this.selected_filepath.push(this.params.path);
    },
    initMedia: function initMedia() {
      var _this6 = this;

      this.onGetFolders();
      this.onGetFiles({
        fn: function fn() {
          if (_this6.params.path) {
            _this6.onGetView();
          }
        }
      });
    }
  }
});

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(372)))

/***/ }),
/* 372 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    { staticClass: "media-container" },
    [
      _c(
        "el-header",
        { staticClass: "media-toolbar" },
        [
          _c(
            "el-radio-group",
            {
              staticClass: "media-toolbar__item",
              model: {
                value: _vm.view,
                callback: function($$v) {
                  _vm.view = $$v
                },
                expression: "view"
              }
            },
            [
              _c(
                "el-radio-button",
                { attrs: { label: "icon" } },
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fal", "grip-horizontal"] }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-radio-button",
                { attrs: { label: "list" } },
                [_c("font-awesome-icon", { attrs: { icon: ["fal", "bars"] } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button-group",
            { staticClass: "media-toolbar__item" },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "success" },
                  on: {
                    click: function($event) {
                      _vm.file_upload.show = !_vm.file_upload.show
                    }
                  }
                },
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fal", "upload"] }
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("MEDIA_UPLOAD") /*上傳檔案*/) +
                      "\n      "
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.folder_create.show = !_vm.folder_create.show
                    }
                  }
                },
                [
                  _c("font-awesome-icon", { attrs: { icon: ["fal", "plus"] } }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("MEDIA_CREATE_DIR") /*新增資料夾*/) +
                      "\n      "
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-button-group",
            { staticClass: "media-toolbar__item" },
            [
              _c(
                "el-button",
                {
                  attrs: { disabled: _vm.selected_filepath.length <= 0 },
                  on: { click: _vm.onDeleteItem }
                },
                [
                  _c("font-awesome-icon", {
                    attrs: { icon: ["fal", "trash-alt"] }
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("TOOLBAR_DELETE") /*刪除*/) +
                      "\n      "
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-container",
        [
          _c(
            "el-aside",
            { staticClass: "media-aside", attrs: { width: "200px" } },
            [
              _c("el-tree", {
                ref: "folderTree",
                attrs: {
                  "node-key": "path",
                  data: _vm.folders,
                  props: _vm.folder_prop,
                  "expand-on-click-node": false,
                  "default-expand-all": "",
                  "highlight-current": ""
                },
                on: { "node-click": _vm.onClickFolder }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-main",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              staticClass: "media-main"
            },
            [
              _c(
                "div",
                { staticClass: "media-create" },
                [
                  _vm.folder_create.show
                    ? _c(
                        "el-input",
                        {
                          staticClass: "media-create__item",
                          model: {
                            value: _vm.folder_create.value,
                            callback: function($$v) {
                              _vm.$set(_vm.folder_create, "value", $$v)
                            },
                            expression: "folder_create.value"
                          }
                        },
                        [
                          _c("template", { slot: "prepend" }, [
                            _vm._v(_vm._s(_vm.params.dir))
                          ]),
                          _vm._v(" "),
                          _c(
                            "el-button",
                            {
                              attrs: { slot: "append" },
                              on: { click: _vm.onCreateFolder },
                              slot: "append"
                            },
                            [_vm._v(_vm._s(_vm.$t("MEDIA_CREATE") /*建立*/))]
                          )
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.file_upload.show
                    ? _c(
                        "el-upload",
                        {
                          ref: "fileUpload",
                          staticClass: "media-create__item",
                          attrs: {
                            action: "string",
                            "http-request": _vm.onUploadFiles,
                            "auto-upload": false,
                            multiple: ""
                          }
                        },
                        [
                          _c(
                            "el-button",
                            { attrs: { slot: "trigger" }, slot: "trigger" },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("MEDIA_SELECT_FILE") /*選擇檔案*/)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "el-button",
                            {
                              attrs: { type: "primary" },
                              on: { click: _vm.handleUploadFile }
                            },
                            [_vm._v(_vm._s(_vm.$t("MEDIA_UPLOAD") /*上傳*/))]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "el-upload__tip",
                              attrs: { slot: "tip" },
                              slot: "tip"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$t(
                                    "MEDIA_UPLOAD_FILE_LIMIT"
                                  ) /*最大大小: 10MB*/
                                )
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.view === "list"
                ? _c(
                    "el-table",
                    {
                      staticClass: "file-list__table",
                      attrs: { data: _vm.files, "current-row-key": "path" },
                      on: { "selection-change": _vm.onSelectionChange }
                    },
                    [
                      _vm.list_checkbox
                        ? _c("el-table-column", {
                            attrs: { type: "selection", width: "55" }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "name",
                          label: _vm.$t("MEDIA_NAME") /*名稱*/,
                          width: "350"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                _c(
                                  "div",
                                  {
                                    staticClass: "file-item__inner",
                                    on: {
                                      dblclick: function($event) {
                                        _vm.onItemDoubleClick(scope.row)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "file-item__type" },
                                      [
                                        scope.row.type === "Folder"
                                          ? _c("font-awesome-icon", {
                                              staticClass: "file-item__icon",
                                              attrs: { icon: ["fal", "folder"] }
                                            })
                                          : _c("span", {
                                              staticClass: "file-item__thumb",
                                              style: {
                                                background:
                                                  "url('" +
                                                  scope.row.thumb +
                                                  "') center center"
                                              }
                                            })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "file-item__name" },
                                      [_vm._v(_vm._s(scope.row.name))]
                                    )
                                  ]
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "type",
                          label: _vm.$t("MEDIA_TYPE") /*種類*/
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "size",
                          label: _vm.$t("MEDIA_SIZE") /*大小*/
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "modified",
                          label: _vm.$t("MEDIA_MODIFIED") /*修改日期*/
                        }
                      })
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "file-list__icon" },
                    _vm._l(_vm.files, function(item) {
                      return _c(
                        "label",
                        {
                          key: item.path,
                          staticClass: "file-item",
                          class: {
                            "is-selected_filepath":
                              _vm.selected_filepath.indexOf(item.path) >= 0
                          }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selected_filepath,
                                expression: "selected_filepath"
                              }
                            ],
                            staticClass: "file-item__checkbox",
                            attrs: { type: "checkbox" },
                            domProps: {
                              value: item.path,
                              checked: Array.isArray(_vm.selected_filepath)
                                ? _vm._i(_vm.selected_filepath, item.path) > -1
                                : _vm.selected_filepath
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.selected_filepath,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = item.path,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.selected_filepath = $$a.concat([
                                        $$v
                                      ]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.selected_filepath = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.selected_filepath = $$c
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "file-item__inner",
                              on: {
                                dblclick: function($event) {
                                  _vm.onItemDoubleClick(item)
                                }
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "file-item__type" },
                                [
                                  item.type === "Folder"
                                    ? _c("font-awesome-icon", {
                                        staticClass: "file-item__icon",
                                        attrs: { icon: ["fal", "folder"] }
                                      })
                                    : _c("div", {
                                        staticClass: "file-item__thumb",
                                        style: {
                                          background:
                                            "url('" +
                                            item.thumb +
                                            "') center center"
                                        }
                                      })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "file-item__name" }, [
                                _vm._v(_vm._s(item.name))
                              ])
                            ]
                          )
                        ]
                      )
                    })
                  )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-footer",
        { attrs: { height: "40px" } },
        [
          _c(
            "el-row",
            {
              staticClass: "media-footer",
              attrs: { type: "flex", justify: "space-between" }
            },
            [
              _c("el-col", { attrs: { span: 6 } }, [
                _vm._v(_vm._s(_vm.params.dir))
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 12 } }, [
                _vm._v(
                  _vm._s(
                    _vm.selected_filepath[_vm.selected_filepath.length - 1]
                  )
                )
              ]),
              _vm._v(" "),
              _vm.params.total
                ? _c(
                    "el-col",
                    { staticClass: "text-right", attrs: { span: 6 } },
                    [
                      _vm._v(
                        _vm._s(_vm.$t("MEDIA_ITEMS" /*項目*/)) +
                          _vm._s(_vm.params.total)
                      )
                    ]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-380105b2", module.exports)
  }
}

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-input",
        {
          attrs: { clearable: "" },
          on: { change: _vm.onChange },
          model: {
            value: _vm.value,
            callback: function($$v) {
              _vm.value = $$v
            },
            expression: "value"
          }
        },
        [
          _c(
            "template",
            { slot: "prepend" },
            [
              _c(
                "el-popover",
                {
                  attrs: {
                    placement: "top-start",
                    title: _vm.$t(
                      "FIELD_MEDIA_PREVIEW_SELECTED_IMAGE" /*預覽*/
                    ),
                    width: "200",
                    trigger: "hover"
                  }
                },
                [
                  _vm.value
                    ? _c("img", { attrs: { src: _vm.value, alt: "" } })
                    : _c("div", [
                        _vm._v(
                          _vm._s(
                            _vm.$t("FIELD_MEDIA_PREVIEW_EMPTY" /*沒有選擇圖片*/)
                          )
                        )
                      ]),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    { attrs: { slot: "reference" }, slot: "reference" },
                    [
                      _c("font-awesome-icon", {
                        attrs: { icon: ["fal", "eye"] }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "append" },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialogVisible = true
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("SELECT") /*選擇*/))]
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { width: "80%", visible: _vm.dialogVisible },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [
          _vm.dialogVisible
            ? _c("Media", {
                attrs: { FilePath: _vm.value },
                on: { onSelectionChange: _vm.onMediaChange }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.onSelect } },
                [_vm._v(_vm._s(_vm.$t("SELECT") /*選擇*/))]
              )
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-60d31bef", module.exports)
  }
}

/***/ }),
/* 375 */
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
                              _vm.onChangeActive()
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
                              _vm.onChangeActive(_vm.data.id)
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
      ]
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
                    key !== "image"
                      ? _c(
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
                      : _c(
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
                                onSelect: function(value) {
                                  return (_vm.default_value[key] = value)
                                }
                              }
                            })
                          ],
                          1
                        )
                  ]
                })
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

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(377);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("f7ad1830", content, false, {});
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
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.el-collapse[data-v-47fabec5] {\n  margin-top: 15px;\n}\n", ""]);

// exports


/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__item__);
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
  components: { Item: __WEBPACK_IMPORTED_MODULE_0__item___default.a },
  data: function data() {
    return {
      list: [],
      active_id: "",
      is_adding: false
    };
  },

  props: {
    Type: {
      type: String,
      required: true
    },
    Category: {
      type: Number,
      default: 0
    }
  },
  mounted: function mounted() {
    this.handleGetList();
  },

  methods: {
    onClickBtnAdd: function onClickBtnAdd() {
      this.is_adding = true;
    },
    onChangeActive: function onChangeActive(id) {
      this.active_id = id;
    },
    handleGetList: function handleGetList() {
      var _this = this;

      this.$$api_item_list({
        data: {
          page: 1,
          limit: 15,
          category_id: this.Category,
          extension: "item",
          content_type: this.Type
        },
        fn: function fn(_ref) {
          var data = _ref.data;

          _this.list = data.items;
        }
      });
    }
  }
});

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
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
      _vm.list.length > 0 || _vm.is_adding
        ? _c(
            "div",
            { staticClass: "el-collapse" },
            [
              _vm.is_adding
                ? _c("Item", {
                    attrs: {
                      type: _vm.Type,
                      "category-id": _vm.Category,
                      "is-disabled": false,
                      "is-active": ""
                    },
                    on: {
                      changeActive: function($event) {
                        _vm.is_adding = false
                      },
                      update: _vm.handleGetList
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.list, function(item) {
                return _c("Item", {
                  key: item.id,
                  attrs: {
                    data: item,
                    type: _vm.Type,
                    id: item.id,
                    "is-active": _vm.active_id === item.id,
                    "is-disabled": Boolean(
                      _vm.active_id && _vm.active_id !== item.id
                    )
                  },
                  on: {
                    changeActive: _vm.onChangeActive,
                    update: _vm.handleGetList
                  }
                })
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

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_editor__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cps_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_media_input__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_media_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cps_media_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mixins_edit_mixin__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mixins_cms_edit_mixin__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_item_list__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_item_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_item_list__);
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
  name: "category-edit",
  components: { Editor: __WEBPACK_IMPORTED_MODULE_0_cps_editor___default.a, MediaInput: __WEBPACK_IMPORTED_MODULE_1_cps_media_input___default.a, ItemList: __WEBPACK_IMPORTED_MODULE_5__components_item_list___default.a },
  mixins: [__WEBPACK_IMPORTED_MODULE_2_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        parent_id: {
          list: this.$store.getters.item_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        access: {
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        language: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      },
      default_value: {
        title: "",
        alias: "",
        description: "",
        parent_id: 1,
        state: 1,
        access: 1,
        language: "",
        updater: "",
        ordering: "",
        metadesc: "",
        metakeywords: "",
        extension: "item",
        content_type: "article",
        extrafields: []
      }
    };
  },
  created: function created() {
    this.$getFieldList({
      item_category: "parent_id",
      language: "language",
      viewlevel: "access"
    });
  },

  methods: {
    onTrash: function onTrash() {
      var _this = this;

      this.$$api_category_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.$onCancel();
        }
      });
    },
    handleSubmit: function handleSubmit(_ref2) {
      var _this2 = this;

      var submit_data = _ref2.submit_data,
          type = _ref2.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_category_save({
        data: submit_data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$message.success(msg);

          if (data) {
            submit_data.id = data.items.id;
            submit_data.pid = data.items.parent_id;
          }
          _this2.$onSubmitFinish({
            type: type,
            query: { id: submit_data.id, pid: submit_data.parent_id }
          });
        }
      });
    },
    onGetView: function onGetView() {
      var _this3 = this;

      this.$$api_category_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          Object.keys(_this3.default_value).forEach(function (field) {
            return _this3.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("2c06b00b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24a1c216\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24a1c216\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.custom-toolbar-button[data-v-24a1c216] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n}\n", ""]);

// exports


/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cps_media__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar__ = __webpack_require__(385);
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
  components: { Media: __WEBPACK_IMPORTED_MODULE_0_cps_media___default.a },
  data: function data() {
    return {
      editor: null,
      mediaPath: "",
      mediaDialogVisible: false,
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false
    };
  },

  computed: {
    field: function field() {
      return this.Field;
    },
    submit_data: function submit_data() {
      return this.SubmitData;
    }
  },
  props: {
    id: {
      type: String,
      default: "editor-" + +new Date() + ((Math.random() * 1000).toFixed(0) + "")
    },
    toolbar: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },
    menubar: {
      type: String,
      default: "file edit insert view format table"
    },
    height: {
      type: Number,
      required: false,
      default: 400
    },
    Field: {
      type: String
    },
    SubmitData: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  watch: {
    submit_data: {
      deep: true,
      handler: function handler() {
        var _this2 = this;

        // this.editor.setData(this.submit_data[this.field]);
        if (!this.hasChange && this.hasInit) {
          this.$nextTick(function () {
            return window.tinymce.get(_this2.tinymceId).setContent(_this2.submit_data[_this2.field] || "");
          });
        }
      }
    }
  },
  mounted: function mounted() {
    this.initTinymce();
  },
  activated: function activated() {
    this.initTinymce();
  },
  deactivated: function deactivated() {
    this.destroyTinymce();
  },
  destroyed: function destroyed() {
    this.destroyTinymce();
  },

  methods: {
    onSelectMedia: function onSelectMedia() {
      this.mediaDialogVisible = false;

      var _this = this;
      window.tinymce.get(_this.tinymceId).insertContent("<img class=\"wscnph\" src=\"" + _this.mediaPath + "\" >");
    },
    onMediaChange: function onMediaChange(files) {
      this.mediaPath = files[files.length - 1];
    },
    setContent: function setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent: function getContent() {
      window.tinymce.get(this.tinymceId).getContent();
    },
    initTinymce: function initTinymce() {
      var _this3 = this;

      var _this = this;
      window.tinymce.init({
        language: "zh_TW",
        selector: "#" + this.tinymceId,
        height: this.height,
        body_class: "panel-body ",
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : __WEBPACK_IMPORTED_MODULE_2__toolbar__["a" /* default */],
        menubar: this.menubar,
        plugins: __WEBPACK_IMPORTED_MODULE_1__plugins__["a" /* default */],
        end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",
        imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
        default_link_target: "_blank",
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: function init_instance_callback(editor) {
          if (_this.value) {
            editor.setContent(_this.value);
          }
          _this.hasInit = true;
          editor.on("NodeChange Change KeyUp SetContent", function () {
            _this3.hasChange = true;
            _this3.$emit("input", editor.getContent());
          });
        },
        setup: function setup(editor) {
          // editor.on("FullscreenStateChanged", e => {
          //   _this.fullscreen = e.state;
          // });
        }
      });
    },
    destroyTinymce: function destroyTinymce() {
      var tinymce = window.tinymce.get(this.tinymceId);
      if (this.fullscreen) {
        tinymce.execCommand("mceFullScreen");
      }

      if (tinymce) {
        tinymce.destroy();
      }
    }
  }
});

/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Any plugins you want to use has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/

var plugins = ["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"];

/* harmony default export */ __webpack_exports__["a"] = (plugins);

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Here is a list of the toolbar
// Detail list see https://www.tinymce.com/docs/advanced/editor-control-identifiers/#toolbarcontrols

var toolbar = ['searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample', 'hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen'];

/* harmony default export */ __webpack_exports__["a"] = (toolbar);

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tinymce-container" },
    [
      _c("textarea", { attrs: { id: _vm.tinymceId } }, [
        _vm._v(_vm._s(this.submit_data[this.field]))
      ]),
      _vm._v(" "),
      _c(
        "el-button",
        {
          staticClass: "custom-toolbar-button",
          attrs: { size: "mini", type: "primary" },
          on: {
            click: function($event) {
              _vm.mediaDialogVisible = true
            }
          }
        },
        [
          _c("font-awesome-icon", { attrs: { icon: ["fal", "images"] } }),
          _vm._v(
            "\n    " +
              _vm._s(
                _vm.$t("EDITOR_CHOOSE_IMAGE_FROM_MEDIA") /*從媒體選擇圖片*/
              ) +
              "\n  "
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { width: "80%", visible: _vm.mediaDialogVisible },
          on: {
            "update:visible": function($event) {
              _vm.mediaDialogVisible = $event
            }
          }
        },
        [
          _vm.mediaDialogVisible
            ? _c("Media", {
                attrs: { FilePath: _vm.mediaPath },
                on: { onSelectionChange: _vm.onMediaChange }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.onSelectMedia }
                },
                [_vm._v(_vm._s(_vm.$t("SELECT") /*選擇*/))]
              )
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-24a1c216", module.exports)
  }
}

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-width": "100px",
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "alias",
                            label: _vm.$t("FIELD_ALIAS_LABEL") /*別名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "alias", $$v)
                              },
                              expression: "default_value.alias"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "description",
                            label: _vm.$t(
                              "FIELD_CATEGORY_DESCRIPTION_LABEL"
                            ) /*分類描述*/
                          }
                        },
                        [
                          _c("Editor", {
                            attrs: {
                              Field: "description",
                              SubmitData: _vm.default_value
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t(
                      "GLOBAL_FIELDSET_METADATA_OPTIONS"
                    ) /*Metadata*/
                  }
                },
                [
                  _c(
                    "el-form",
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metadesc",
                            label: _vm.$t(
                              "FIELD_META_DESCRIPTION_LABEL"
                            ) /*Meta 說明*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metadesc,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metadesc", $$v)
                              },
                              expression: "default_value.metadesc"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metakeywords",
                            label: _vm.$t(
                              "FIELD_META_KEYWORDS_LABEL"
                            ) /*Meta 關鍵字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metakeywords,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metakeywords", $$v)
                              },
                              expression: "default_value.metakeywords"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_IMAGE_OPTIONS") /*圖片*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "introimage",
                            label: _vm.$t(
                              "CONTENT_FIELD_INTRO_IMAGE_LABEL"
                            ) /*摘要圖片*/
                          }
                        },
                        [
                          _c("MediaInput", {
                            attrs: { Data: _vm.default_value.introimage },
                            on: {
                              onSelect: function(value) {
                                return (_vm.default_value.introimage = value)
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "image",
                            label: _vm.$t(
                              "CONTENT_FIELD_MAIN_IMAGE_LABEL"
                            ) /*主要圖片*/
                          }
                        },
                        [
                          _c("MediaInput", {
                            attrs: { Data: _vm.default_value.image },
                            on: {
                              onSelect: function(value) {
                                return (_vm.default_value.image = value)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.default_value.extension === "item" &&
              _vm.default_value.content_type !== "article"
                ? _c(
                    "el-tab-pane",
                    {
                      attrs: {
                        label: _vm.$t("GLOBAL_FIELDSET_CONTENT_MANAGE_PREFIX", {
                          name: _vm.$t(
                            "OPTION_CONTENT_TYPE_" +
                              _vm.default_value.content_type.toUpperCase()
                          )
                        })
                      }
                    },
                    [
                      _vm.params.id
                        ? _c("ItemList", {
                            attrs: {
                              Category: _vm.params.id,
                              Type: _vm.default_value.content_type
                            }
                          })
                        : _c("div", [_vm._v("請先儲存分類")])
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-aside", { attrs: { width: "400px" } }, [
        _c("div", { staticClass: "content-aside__header" }, [
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*選項*/))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-aside__content" },
          [
            _c(
              "el-form",
              {
                ref: "form-data",
                attrs: { "label-position": "top", model: _vm.default_value }
              },
              [
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "state",
                      label: _vm.$t("OPTION_STATE" /*狀態*/)
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.state,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "state", $$v)
                          },
                          expression: "default_value.state"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("PUBLISHED") /*發佈的*/,
                            value: 1
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("UNPUBLISHED") /*停止發佈的*/,
                            value: 0
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "parent_id",
                      label: _vm.$t("OPTION_PARENT_CATEGORY") /*上層分類*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.parent_id,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "parent_id", $$v)
                          },
                          expression: "default_value.parent_id"
                        }
                      },
                      _vm._l(_vm.fields.parent_id.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.parent_id.value],
                          attrs: {
                            label:
                              option[_vm.fields.parent_id.custom_attrs.label],
                            value:
                              option[_vm.fields.parent_id.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "extension",
                      label: _vm.$t("OPTION_EXTENSION") /*擴充類型*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.extension,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "extension", $$v)
                          },
                          expression: "default_value.extension"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("OPTION_EXTENSION_MENU") /*選單*/,
                            value: "menu"
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("OPTION_EXTENSION_MODULE") /*模組*/,
                            value: "module"
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("OPTION_EXTENSION_ITEM") /*項目*/,
                            value: "item"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.default_value.extension === "item"
                  ? _c(
                      "el-form-item",
                      {
                        attrs: {
                          prop: "content_type",
                          label: _vm.$t("OPTION_CONTENT_TYPE") /*內容類型*/
                        }
                      },
                      [
                        _c(
                          "el-select",
                          {
                            model: {
                              value: _vm.default_value.content_type,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "content_type", $$v)
                              },
                              expression: "default_value.content_type"
                            }
                          },
                          [
                            _c("el-option", {
                              attrs: {
                                label: _vm.$t(
                                  "OPTION_CONTENT_TYPE_ARTICLE"
                                ) /*文章*/,
                                value: "article"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: {
                                label: _vm.$t(
                                  "OPTION_CONTENT_TYPE_MENU"
                                ) /*選單*/,
                                value: "menu"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: {
                                label: _vm.$t(
                                  "OPTION_CONTENT_TYPE_TIMELINE"
                                ) /*時間軸*/,
                                value: "timeline"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: {
                                label: _vm.$t(
                                  "OPTION_CONTENT_TYPE_SLIDESHOW"
                                ) /*Slideshow*/,
                                value: "slideshow"
                              }
                            }),
                            _vm._v(" "),
                            _c("el-option", {
                              attrs: {
                                label: _vm.$t(
                                  "OPTION_CONTENT_TYPE_LINK"
                                ) /*連結*/,
                                value: "link"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "access",
                      label: _vm.$t("FIELD_ACCESS_LEVEL") /*存取層級*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.access,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "access", $$v)
                          },
                          expression: "default_value.access"
                        }
                      },
                      _vm._l(_vm.fields.access.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.access.custom_attrs.value],
                          attrs: {
                            label: option[_vm.fields.access.custom_attrs.label],
                            value: option[_vm.fields.access.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "language",
                      label: _vm.$t("OPTION_LANGUAGE") /*語言*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.language,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "language", $$v)
                          },
                          expression: "default_value.language"
                        }
                      },
                      _vm._l(_vm.fields.language.list, function(option) {
                        return _c("el-option", {
                          key: option.id,
                          attrs: {
                            label:
                              option[_vm.fields.language.custom_attrs.label],
                            value:
                              option[_vm.fields.language.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-c511e820", module.exports)
  }
}

/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__ = __webpack_require__(235);
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
  name: "category-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      sort: {
        show: true
      },
      fields: [{
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "content_type",
        label: this.$t("OPTION_CONTENT_TYPE")
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "label",
        width: "120",
        formatter: function formatter(item) {
          var item_text = {
            "1": "PUBLISHED",
            "0": "UNPUBLISHED",
            "-1": "ARCHIVED",
            "-2": "TRASHED"
          };
          return {
            text: _this.$t(item_text[item]),
            color: "item_state_" + item + "_color"
          };
        }
      }, {
        key: "image",
        label: this.$t("LIST_DATA_IMAGE_LABEL"),
        type: "icon",
        width: "90",
        sort: false,
        formatter: function formatter(item) {
          return {
            icon: item ? ["fal", "image"] : ""
          };
        }
      }, {
        key: "access_title",
        label: this.$t("FIELD_ACCESS_LEVEL")
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        formatter: function formatter(item) {
          return item.language === "*" ? _this.$t("ALL_LANGUAGE") : item.language_title;
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({
              ids: ids,
              state: 1
            });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({
              ids: ids,
              state: 0
            });
          }
        }, {
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref5) {
            var ids = _ref5.ids;

            _this.onClickBtnCheckout({ ids: ids });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }, {
          key: "id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          list: this.$store.getters.item_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        }, {
          key: "language",
          type: "select",
          desc: this.$t("OPTION_LANGUAGE"),
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }, {
          key: "access",
          type: "select",
          desc: this.$t("FIELD_ACCESS_LEVEL"),
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        }],
        default_value: {
          search: "",
          state: "",
          id: "",
          language: "",
          access: ""
        }
      }
    };
  },
  created: function created() {
    this.$getFieldList({ item_category: 2, language: 3, viewlevel: 4 }, "searchbar");
  },

  methods: {
    /**
     * list actions
     */
    onClickBtnCheckout: function onClickBtnCheckout(_ref6) {
      var _this2 = this;

      var data = _ref6.data,
          ids = _ref6.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_category_checkout({
        data: {
          ids: checkout_data
        },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onOrderChange: function onOrderChange(_ref8) {
      var id = _ref8.id,
          index_diff = _ref8.index_diff;

      this.$$api_category_ordering({
        data: {
          id: id,
          index_diff: index_diff
        },
        fn: function fn(_ref9) {
          var msg = _ref9.msg;

          console.log(msg);
        }
      });
    },


    /**
     * Toolbar
     */
    onClickBtnBatchTrash: function onClickBtnBatchTrash(_ref10) {
      var ids = _ref10.ids,
          state = _ref10.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnBatchRestore: function onClickBtnBatchRestore(_ref11) {
      var ids = _ref11.ids,
          state = _ref11.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref12) {
      var _this3 = this;

      var ids = _ref12.ids,
          state = _ref12.state;

      this.$$api_category_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref13) {
          var msg = _ref13.msg;

          _this3.$message.success(msg);
          _this3.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref14) {
      var _this4 = this;

      var ids = _ref14.ids,
          datas = _ref14.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this4.$$api_category_delete({
          data: {
            ids: ids
          },
          fn: function fn(_ref15) {
            var data = _ref15.data;

            _this4.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref16) {
      var data = _ref16.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id
      });
    },
    handleGetList: function handleGetList() {
      var _this5 = this;

      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref17.page_data,
          _fn = _ref17.fn;

      this.$$api_category_list({
        data: page_data,
        fn: function fn(_ref18) {
          var data = _ref18.data;

          _this5.list_loading.flag = false;
          _this5.list = data.items;
          _this5.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Sort: _vm.sort,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset,
          onOrderChange: _vm.onOrderChange
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-e3a236f8", module.exports)
  }
}

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(391);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("17ce8885", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-144ce84c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-144ce84c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-144ce84c", module.exports)
  }
}

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(395);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("06ac593b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2c692c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2c692c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1c2c692c", module.exports)
  }
}

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(399);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("0cb8e595", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3abcb804\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3abcb804\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3abcb804", module.exports)
  }
}

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(403);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("2491d8bc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32dd3724\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32dd3724\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__ = __webpack_require__(235);
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
  name: "field-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "alias",
        label: this.$t("FIELD_ALIAS_LABEL")
      }, {
        key: "group_title",
        label: this.$t("OPTION_CATEGORY")
      }, {
        key: "type",
        label: this.$t("OPTION_TYPE")
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref) {
            var ids = _ref.ids;

            _this.onClickBtnCheckout({ ids: ids });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }, {
          key: "group_id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          list: this.$store.getters.extrafield_group_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        }, {
          key: "type",
          type: "select",
          desc: this.$t("OPTION_TYPE"),
          list: [{
            value: "textfield",
            text: this.$t("FIELD_TYPE_TEXTFIELD")
          }, {
            value: "textarea",
            text: this.$t("FIELD_TYPE_TEXTAREA")
          }, {
            value: "select",
            text: this.$t("FIELD_TYPE_SELECT")
          }, {
            value: "multipleSelect",
            text: this.$t("FIELD_TYPE_MULTIPLESELECT")
          }, {
            value: "radio",
            text: this.$t("FIELD_TYPE_RADIO")
          }, {
            value: "link",
            text: this.$t("FIELD_TYPE_LINK")
          }, {
            value: "date",
            text: this.$t("FIELD_TYPE_DATE")
          }, {
            value: "textarea",
            text: this.$t("FIELD_TYPE_IMAGE")
          }]
        }],
        default_value: {
          search: "",
          state: "",
          group_id: "",
          type: ""
        }
      }
    };
  },
  created: function created() {
    this.$getFieldList({ extrafield_group: 2 }, "searchbar");
  },

  methods: {
    onClickBtnCheckout: function onClickBtnCheckout(_ref2) {
      var _this2 = this;

      var data = _ref2.data,
          ids = _ref2.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_field_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref3) {
          var msg = _ref3.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref4) {
      var _this3 = this;

      var ids = _ref4.ids,
          datas = _ref4.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_field_delete({
          data: { ids: ids },
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref6) {
      var data = _ref6.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref7.page_data,
          _fn = _ref7.fn;

      this.$$api_field_list({
        data: page_data,
        fn: function fn(_ref8) {
          var data = _ref8.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          FieldList: _vm.fields,
          Searchbar: _vm.searchbar,
          Toolbar: _vm.toolbar
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnCheckout: _vm.onClickBtnCheckout
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-32dd3724", module.exports)
  }
}

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(407);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("53a51b4c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c3e5249c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./field.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c3e5249c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./field.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n", ""]);

// exports


/***/ }),
/* 408 */
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
  props: {
    type: {
      type: String,
      default: "text"
    },
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      default_value: {
        id: "",
        value: ""
      },
      params: {
        link: {
          text: "",
          target: ""
        }
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.data) {
      Object.keys(this.default_value).forEach(function (field) {
        return _this.default_value[field] = _this.data[field];
      });
      if (this.params[this.type]) {
        console.log(this.params);
        Object.keys(this.params[this.type]).forEach(function (param) {
          return _this.params[_this.type][param] = _this.data.params[param];
        });
      }
    }
  }
});

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.type === "link"
        ? _c(
            "el-row",
            { attrs: { gutter: 10 } },
            [
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: _vm.$t("FIELD_TYPE_LINK_TEXT") },
                    model: {
                      value: _vm.params[_vm.type]["text"],
                      callback: function($$v) {
                        _vm.$set(_vm.params[_vm.type], "text", $$v)
                      },
                      expression: "params[type]['text']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c("el-input", {
                    attrs: { placeholder: _vm.$t("FIELD_TYPE_LINK") },
                    model: {
                      value: _vm.default_value["value"],
                      callback: function($$v) {
                        _vm.$set(_vm.default_value, "value", $$v)
                      },
                      expression: "default_value['value']"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 8 } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: _vm.$t("FIELD_TYPE_LINK_OPEN_IN") },
                      model: {
                        value: _vm.params[_vm.type]["target"],
                        callback: function($$v) {
                          _vm.$set(_vm.params[_vm.type], "target", $$v)
                        },
                        expression: "params[type]['target']"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: {
                          label: _vm.$t("FIELD_TYPE_LINK_OPEN_IN_SAME_WINDOW"),
                          value: "_self"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: {
                          label: _vm.$t("FIELD_TYPE_LINK_OPEN_IN_NEW_WINDOW"),
                          value: "_blank"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm.type === "date"
          ? _c("el-date-picker", {
              attrs: { type: "date" },
              model: {
                value: _vm.default_value["value"],
                callback: function($$v) {
                  _vm.$set(_vm.default_value, "value", $$v)
                },
                expression: "default_value['value']"
              }
            })
          : _vm.type === "datetime"
            ? _c("el-date-picker", {
                attrs: { type: "datetime" },
                model: {
                  value: _vm.default_value["value"],
                  callback: function($$v) {
                    _vm.$set(_vm.default_value, "value", $$v)
                  },
                  expression: "default_value['value']"
                }
              })
            : _vm.type === "textarea"
              ? _c("el-input", {
                  attrs: { type: "textarea", rows: 2 },
                  model: {
                    value: _vm.default_value["value"],
                    callback: function($$v) {
                      _vm.$set(_vm.default_value, "value", $$v)
                    },
                    expression: "default_value['value']"
                  }
                })
              : _c("el-input", {
                  model: {
                    value: _vm.default_value["value"],
                    callback: function($$v) {
                      _vm.$set(_vm.default_value, "value", $$v)
                    },
                    expression: "default_value['value']"
                  }
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
    require("vue-hot-reload-api")      .rerender("data-v-c3e5249c", module.exports)
  }
}

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("36183e17", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e9665af\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./field-form.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e9665af\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./field-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n", ""]);

// exports


/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__field__);
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
  components: { FieldItem: __WEBPACK_IMPORTED_MODULE_1__field___default.a },
  props: {
    fields: {
      type: Array,
      default: {}
    },
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    rules: function rules() {
      var required_fields = this.fields.filter(function (el) {
        return el.required;
      });

      var fields = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["b" /* schema */].Entity("fields", undefined, {
        idAttribute: "alias",
        processStrategy: function processStrategy(entity) {
          return _.pick(entity, "required");
        }
      });
      var normalize_list = Object(__WEBPACK_IMPORTED_MODULE_0_normalizr__["a" /* normalize */])(required_fields, [fields]);
      return normalize_list.entities["fields"];
    }
  }
});

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "field-data",
      attrs: { model: _vm.data, rules: _vm.rules, "label-position": "top" }
    },
    _vm._l(_vm.fields, function(field, $index) {
      return _c(
        "el-form-item",
        { key: field.id, attrs: { prop: field.alias, label: field.title } },
        [
          _c("FieldItem", {
            attrs: { type: field.type, data: _vm.data[field.id] },
            on: {
              "update:data": function($event) {
                _vm.$set(_vm.data, field.id, $event)
              }
            }
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
    require("vue-hot-reload-api")      .rerender("data-v-1e9665af", module.exports)
  }
}

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_editor__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cps_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cps_media_input__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cps_media_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cps_media_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mixins_edit_mixin__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mixins_cms_edit_mixin__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_field_form__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_field_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_field_form__);
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
  name: "item-edit",
  components: { Editor: __WEBPACK_IMPORTED_MODULE_1_cps_editor___default.a, MediaInput: __WEBPACK_IMPORTED_MODULE_2_cps_media_input___default.a, FieldForm: __WEBPACK_IMPORTED_MODULE_6__components_field_form___default.a },
  mixins: [__WEBPACK_IMPORTED_MODULE_3_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        category_id: {
          list: this.$store.getters.item_article_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        extrafield_group_id: {
          list: this.$store.getters.extrafield_group_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        access: {
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        language: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      },
      default_value: {
        title: "",
        alias: "",
        link: "",
        introtext: "",
        description: "",
        tags: [],
        category_id: 0,
        state: 1,
        featured: 0,
        language: "",
        access: 1,
        metadesc: "",
        metakeywords: "",
        introimage: "",
        image: "",
        image_sameas_introimage: false,
        ordering: "",
        publish_up: "",
        publish_down: "",
        extrafield_group_id: "",
        extrafields: []
      },
      new_tag_value: ""
    };
  },

  watch: {
    "default_value.image_sameas_introimage": function default_valueImage_sameas_introimage(v) {
      if (v) {
        this.default_value.image = this.default_value.introimage;
      } else {
        this.default_value.image = "";
      }
    }
  },
  created: function created() {
    this.$getFieldList({
      item_article_category: "category_id",
      extrafield_group: "extrafield_group_id",
      language: "language",
      viewlevel: "access"
    });
  },

  methods: {
    queryTagSearch: function queryTagSearch(queryString, callback) {
      this.$$api_tag_list({
        data: {
          search: queryString
        },
        fn: function fn(_ref) {
          var data = _ref.data;

          callback(data.items);
        }
      });
      this.queryString;
    },
    handleTagClose: function handleTagClose(tag) {
      this.default_value.tags.splice(this.default_value.tags.indexOf(tag), 1);
    },
    handleTagConfirm: function handleTagConfirm(item) {
      var _this = this;

      if (item.type === "keyup") {
        this.$$api_tag_save({
          data: {
            title: this.new_tag_value,
            state: 1
          },
          fn: function fn(_ref2) {
            var data = _ref2.data;

            _this.default_value.tags.push(data.items);
            _this.new_tag_value = "";
          }
        });
      } else {
        this.default_value.tags.push(item);
        this.new_tag_value = "";
      }
    },
    onTrash: function onTrash() {
      var _this2 = this;

      this.$$api_item_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: function fn(_ref3) {
          var msg = _ref3.msg;

          _this2.$message.success(msg);
          _this2.$onCancel();
        }
      });
    },
    handleSubmit: function handleSubmit(_ref4) {
      var _this3 = this;

      var submit_data = _ref4.submit_data,
          type = _ref4.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_item_save({
        data: submit_data,
        fn: function fn(_ref5) {
          var data = _ref5.data,
              msg = _ref5.msg;

          _this3.$message.success(msg);

          if (data) {
            submit_data.id = data.items.id;
          }
          _this3.$onSubmitFinish({ type: type, query: { id: submit_data.id } });
        }
      });
    },
    onGetView: function onGetView() {
      var _this4 = this;

      this.$$api_item_get({
        pathVar: this.params.id,
        fn: function fn(_ref6) {
          var data = _ref6.data;

          Object.keys(_this4.default_value).forEach(function (field) {
            return _this4.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "alias",
                            label: _vm.$t("FIELD_ALIAS_LABEL") /*別名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "alias", $$v)
                              },
                              expression: "default_value.alias"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "introtext",
                            label: _vm.$t("FIELD_INTRO_TEXT_LABEL") /*摘要文字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.introtext,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "introtext", $$v)
                              },
                              expression: "default_value.introtext"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "description",
                            label: _vm.$t(
                              "FIELD_ITEM_DESCRIPTION_LABEL"
                            ) /*內容文字*/
                          }
                        },
                        [
                          _c("Editor", {
                            staticClass: "form-item__inner",
                            attrs: {
                              SubmitData: _vm.default_value,
                              Field: "description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t(
                      "GLOBAL_FIELDSET_METADATA_OPTIONS"
                    ) /*Metadata*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metadesc",
                            label: _vm.$t(
                              "FIELD_META_DESCRIPTION_LABEL"
                            ) /*Meta 說明*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metadesc,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metadesc", $$v)
                              },
                              expression: "default_value.metadesc"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metakeywords",
                            label: _vm.$t(
                              "FIELD_META_KEYWORDS_LABEL"
                            ) /*Meta 關鍵字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metakeywords,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metakeywords", $$v)
                              },
                              expression: "default_value.metakeywords"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_IMAGE_OPTIONS") /*圖片*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "introimage",
                            label: _vm.$t(
                              "CONTENT_FIELD_INTRO_IMAGE_LABEL"
                            ) /*摘要圖片*/
                          }
                        },
                        [
                          _c("MediaInput", {
                            attrs: { Data: _vm.default_value.introimage },
                            on: {
                              onSelect: function(value) {
                                return (_vm.default_value.introimage = value)
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "image",
                            label: _vm.$t(
                              "CONTENT_FIELD_MAIN_IMAGE_LABEL"
                            ) /*主要圖片*/
                          }
                        },
                        [
                          _c("el-switch", {
                            attrs: {
                              "active-text": _vm.$t(
                                "FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL"
                              ) /*與摘要圖片相同*/
                            },
                            model: {
                              value: _vm.default_value.image_sameas_introimage,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.default_value,
                                  "image_sameas_introimage",
                                  $$v
                                )
                              },
                              expression:
                                "default_value.image_sameas_introimage"
                            }
                          }),
                          _vm._v(" "),
                          _c("MediaInput", {
                            attrs: { Data: _vm.default_value.image },
                            on: {
                              onSelect: function(value) {
                                return (_vm.default_value.image = value)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_FIELDS_OPTIONS") /*附加欄位*/
                  }
                },
                [
                  _c(
                    "el-form",
                    { ref: "form-data", attrs: { model: _vm.default_value } },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "language",
                            label: _vm.$t("OPTION_FIELD_GROUP") /*欄位群組*/
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              attrs: { clearable: "" },
                              model: {
                                value: _vm.default_value.extrafield_group_id,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.default_value,
                                    "extrafield_group_id",
                                    $$v
                                  )
                                },
                                expression: "default_value.extrafield_group_id"
                              }
                            },
                            _vm._l(
                              _vm.fields.extrafield_group_id.list,
                              function(option) {
                                return _c("el-option", {
                                  key:
                                    option[
                                      _vm.fields.category_id.custom_attrs.value
                                    ],
                                  attrs: {
                                    label:
                                      option[
                                        _vm.fields.extrafield_group_id
                                          .custom_attrs.label
                                      ],
                                    value:
                                      option[
                                        _vm.fields.category_id.custom_attrs
                                          .value
                                      ]
                                  }
                                })
                              }
                            )
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.fields.extrafield_group_id.list[
                    _vm.default_value.extrafield_group_id
                  ] &&
                  "extrafields" in
                    _vm.fields.extrafield_group_id.list[
                      _vm.default_value.extrafield_group_id
                    ]
                    ? [
                        _c("FieldForm", {
                          attrs: {
                            fields:
                              _vm.fields.extrafield_group_id.list[
                                _vm.default_value.extrafield_group_id
                              ]["extrafields"],
                            data: _vm.default_value.extrafields
                          }
                        })
                      ]
                    : _vm._e()
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-aside", { attrs: { width: "400px" } }, [
        _c("div", { staticClass: "content-aside__header" }, [
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*選項*/))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-aside__content" },
          [
            _c(
              "el-form",
              {
                ref: "form-data",
                attrs: { "label-position": "top", model: _vm.default_value }
              },
              [
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "state",
                      label: _vm.$t("OPTION_STATE" /*狀態*/)
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.state,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "state", $$v)
                          },
                          expression: "default_value.state"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("PUBLISHED") /*發佈的*/,
                            value: 1
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("UNPUBLISHED") /*停止發佈的*/,
                            value: 0
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "category_id",
                      label: _vm.$t("OPTION_CATEGORY") /*分類*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.category_id,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "category_id", $$v)
                          },
                          expression: "default_value.category_id"
                        }
                      },
                      _vm._l(_vm.fields.category_id.list, function(option) {
                        return _c("el-option", {
                          key:
                            option[_vm.fields.category_id.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.category_id.custom_attrs.label],
                            value:
                              option[_vm.fields.category_id.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "featured",
                      label: _vm.$t("OPTION_FEATURED") /*精選*/
                    }
                  },
                  [
                    _c(
                      "el-radio-group",
                      {
                        model: {
                          value: _vm.default_value.featured,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "featured", $$v)
                          },
                          expression: "default_value.featured"
                        }
                      },
                      [
                        _c(
                          "el-radio-button",
                          { attrs: { label: "1", name: "type" } },
                          [_vm._v(_vm._s(_vm.$t("YES") /*是*/))]
                        ),
                        _vm._v(" "),
                        _c(
                          "el-radio-button",
                          { attrs: { label: "0", name: "type" } },
                          [_vm._v(_vm._s(_vm.$t("NO") /*否*/))]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "access",
                      label: _vm.$t("FIELD_ACCESS_LEVEL") /*存取層級*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.access,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "access", $$v)
                          },
                          expression: "default_value.access"
                        }
                      },
                      _vm._l(_vm.fields.access.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.access.custom_attrs.value],
                          attrs: {
                            label: option[_vm.fields.access.custom_attrs.label],
                            value: option[_vm.fields.access.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "language",
                      label: _vm.$t("OPTION_LANGUAGE") /*語言*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.language,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "language", $$v)
                          },
                          expression: "default_value.language"
                        }
                      },
                      _vm._l(_vm.fields.language.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.language.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.language.custom_attrs.label],
                            value:
                              option[_vm.fields.language.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "publish_up",
                      label: _vm.$t("FIELD_PUBLISH_UP_DATE")
                    }
                  },
                  [
                    _c("el-date-picker", {
                      attrs: { type: "datetime" },
                      model: {
                        value: _vm.default_value.publish_up,
                        callback: function($$v) {
                          _vm.$set(_vm.default_value, "publish_up", $$v)
                        },
                        expression: "default_value.publish_up"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "publish_down",
                      label: _vm.$t("FIELD_PUBLISH_DOWN_DATE")
                    }
                  },
                  [
                    _c("el-date-picker", {
                      attrs: { type: "datetime" },
                      model: {
                        value: _vm.default_value.publish_down,
                        callback: function($$v) {
                          _vm.$set(_vm.default_value, "publish_down", $$v)
                        },
                        expression: "default_value.publish_down"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-61a40bfb", module.exports)
  }
}

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__ = __webpack_require__(235);
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
  name: "item-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      sort: {
        show: true
      },
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable",
        width: 300
      }, {
        key: "featured",
        label: this.$t("OPTION_FEATURED"),
        type: "icon",
        width: "80",
        formatter: function formatter(item) {
          return {
            style: {
              color: item === 1 ? "#fdd034" : "#cfd3da"
            },
            icon: ["fas", "star"]
          };
        }
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "label",
        width: "120",
        formatter: function formatter(item) {
          var item_text = {
            "1": "PUBLISHED",
            "0": "UNPUBLISHED",
            "-1": "ARCHIVED",
            "-2": "TRASHED",
            "2": "PENDING",
            "3": "EXPIRED"
          };
          return {
            text: _this.$t(item_text[item]),
            color: "item_state_" + item + "_color"
          };
        }
      }, {
        key: "category_title",
        label: this.$t("OPTION_CATEGORY"),
        width: "120"
      }, {
        key: "creator",
        label: this.$t("LIST_DATA_AUTHOR_LABEL")
      }, {
        key: "updater",
        label: this.$t("LIST_DATA_MODIFIED_BY_LABEL"),
        width: "100"
      }, {
        key: "created_at",
        label: this.$t("LIST_DATA_CREATED_DATE_LABEL")
      }, {
        key: "updated_at",
        label: this.$t("LIST_DATA_MODIFIED_DATE_LABEL")
      }, {
        key: "hits",
        label: this.$t("LIST_DATA_HITS_LABEL")
      }, {
        key: "introimage",
        label: this.$t("LIST_DATA_INTRO_IMAGE_LABEL"),
        type: "icon",
        sort: false,
        formatter: function formatter(item) {
          return {
            icon: item ? ["fal", "image"] : ""
          };
        }
      }, {
        key: "image",
        label: this.$t("LIST_DATA_IMAGE_LABEL"),
        type: "icon",
        sort: false,
        formatter: function formatter(item) {
          return {
            icon: item ? ["fal", "image"] : ""
          };
        }
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        width: "100",
        formatter: function formatter(item) {
          return item.language === "*" ? _this.$t("ALL_LANGUAGE") : item.language_title;
        }
      }, {
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID"),
        width: "60"
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          fn: function fn(_ref) {
            var ids = _ref.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }, {
          text: this.$t("TOOLBAR_FEATURED"),
          method: "updateFeatured",
          fn: function fn(_ref3) {
            var ids = _ref3.ids;

            _this.onClickBtnUpdatFeatured({ ids: ids, featured: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNFEATURED"),
          method: "updateFeatured",
          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdatFeatured({ ids: ids, featured: 0 });
          }
        }, {
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref5) {
            var ids = _ref5.ids;

            _this.onClickBtnCheckout({ ids: ids });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "featured",
          type: "select",
          desc: this.$t("OPTION_FEATURED"),
          list: [{
            value: "1",
            text: this.$t("FEATURED")
          }, {
            value: "0",
            text: this.$t("NOT_FEATURED")
          }]
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }, {
          key: "category_id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          list: this.$store.getters.item_article_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        }, {
          key: "language",
          type: "select",
          desc: this.$t("OPTION_LANGUAGE"),
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }, {
          key: "access",
          type: "select",
          desc: this.$t("FIELD_ACCESS_LEVEL"),
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        }],
        default_value: {
          search: "",
          state: "",
          featured: "",
          category_id: "",
          language: "",
          access: ""
        }
      }
    };
  },
  created: function created() {
    this.$getFieldList({
      item_article_category: 2,
      language: 3,
      viewlevel: 4
    }, "searchbar");
  },

  methods: {
    /**
     * list actions
     */
    onClickBtnCheckout: function onClickBtnCheckout(_ref6) {
      var _this2 = this;

      var data = _ref6.data,
          ids = _ref6.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_item_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onOrderChange: function onOrderChange(_ref8) {
      var _this3 = this;

      var id = _ref8.id,
          index_diff = _ref8.index_diff;

      this.$$api_item_ordering({
        data: {
          id: id,
          index_diff: index_diff
        },
        fn: function fn(_ref9) {
          var msg = _ref9.msg;

          _this3.$message.success(msg);
        }
      });
    },
    onSortChange: function onSortChange(order) {
      this.$onGetList({
        where: { order_by: "ordering", order: order.replace("ending", "") }
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdatFeatured: function onClickBtnUpdatFeatured(_ref10) {
      var _this4 = this;

      var ids = _ref10.ids,
          featured = _ref10.featured;

      this.$$api_item_updateFeatured({
        data: {
          ids: ids,
          featured: featured
        },
        fn: function fn(_ref11) {
          var msg = _ref11.msg;

          _this4.$message.success(msg);
          _this4.$onGetList();
        }
      });
    },
    onClickBtnBatchTrash: function onClickBtnBatchTrash(_ref12) {
      var ids = _ref12.ids,
          state = _ref12.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnBatchRestore: function onClickBtnBatchRestore(_ref13) {
      var ids = _ref13.ids,
          state = _ref13.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref14) {
      var _this5 = this;

      var ids = _ref14.ids,
          state = _ref14.state;

      this.$$api_item_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref15) {
          var msg = _ref15.msg;

          _this5.$message.success(msg);
          _this5.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref16) {
      var _this6 = this;

      var ids = _ref16.ids,
          datas = _ref16.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this6.$$api_item_delete({
          data: { ids: ids },
          fn: function fn(_ref17) {
            var data = _ref17.data;

            _this6.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref18) {
      var data = _ref18.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this7 = this;

      var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref19.page_data,
          _fn = _ref19.fn;

      this.$$api_item_list({
        data: page_data,
        fn: function fn(_ref20) {
          var data = _ref20.data;

          _this7.list_loading.flag = false;
          _this7.list = data.items;
          _this7.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Sort: _vm.sort,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset,
          onOrderChange: _vm.onOrderChange,
          onSortChange: _vm.onSortChange
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-525be48f", module.exports)
  }
}

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(419);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("f98e9034", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d324484e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./media.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d324484e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./media.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cps_media__);
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Media: __WEBPACK_IMPORTED_MODULE_0_cps_media___default.a }
});

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Media")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d324484e", module.exports)
  }
}

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(423);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("7e36d609", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c815b6fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c815b6fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./search.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n", ""]);

// exports


/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
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
  name: "search-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    return {
      list: [],
      fields: [{
        key: "keyword",
        label: this.$t("FIELD_SEARCH_KEYWORD")
      }, {
        key: "count",
        label: this.$t("FIELD_SEARCH_COUNT")
      }],
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "start_date",
          type: "date",
          desc: this.$t("FIELD_SEARCH_START_DATE"),
          date_attrs: {
            "value-format": "yyyy-MM-dd" // default is Date() will cause error
          }
        }, {
          key: "end_date",
          type: "date",
          desc: this.$t("FIELD_SEARCH_END_DATE"),
          date_attrs: {
            "value-format": "yyyy-MM-dd" // default is Date() will cause error
          }
        }],
        default_value: {
          search: "",
          start_date: "",
          end_date: ""
        }
      }
    };
  },

  methods: {
    handleGetList: function handleGetList() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref.page_data,
          _fn = _ref.fn;

      this.$$api_observer_searchList({
        data: page_data,
        fn: function fn(_ref2) {
          var data = _ref2.data;

          _this.list_loading.flag = false;
          _this.list = data.items;
          _this.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          List: _vm.list,
          FieldList: _vm.fields,
          Searchbar: _vm.searchbar
        },
        on: {
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-c815b6fa", module.exports)
  }
}

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__ = __webpack_require__(236);
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
  name: "tag-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      default_value: {
        title: "",
        alias: "",
        state: 1,
        access: 1,
        language: "*",
        ordering: "",
        parent_id: 1,
        metadesc: "",
        metakeywords: ""
      }
    };
  },

  methods: {
    handleSubmit: function handleSubmit(_ref) {
      var _this = this;

      var submit_data = _ref.submit_data,
          type = _ref.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_tag_save({
        data: submit_data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          if (data) {
            submit_data.id = data.items.id;
          }
          _this.$onSubmitFinish({ type: type, query: { id: submit_data.id } });
        }
      });
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_tag_get({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "alias",
                            label: _vm.$t("FIELD_ALIAS_LABEL") /*別名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "alias", $$v)
                              },
                              expression: "default_value.alias"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t(
                      "GLOBAL_FIELDSET_METADATA_OPTIONS"
                    ) /*Metadata*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metadesc",
                            label: _vm.$t(
                              "FIELD_META_DESCRIPTION_LABEL"
                            ) /*Meta 說明*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metadesc,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metadesc", $$v)
                              },
                              expression: "default_value.metadesc"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metakeywords",
                            label: _vm.$t(
                              "FIELD_META_KEYWORDS_LABEL"
                            ) /*Meta 關鍵字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metakeywords,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metakeywords", $$v)
                              },
                              expression: "default_value.metakeywords"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-aside", { attrs: { width: "400px" } }, [
        _c("div", { staticClass: "content-aside__header" }, [
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*選項*/))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-aside__content" },
          [
            _c(
              "el-form",
              {
                ref: "form-data",
                attrs: { "label-position": "top", model: _vm.default_value }
              },
              [
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "state",
                      label: _vm.$t("OPTION_STATE" /*狀態*/)
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.state,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "state", $$v)
                          },
                          expression: "default_value.state"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("PUBLISHED") /*發佈的*/,
                            value: 1
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("UNPUBLISHED") /*停止發佈的*/,
                            value: 0
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-73c7b5fa", module.exports)
  }
}

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__ = __webpack_require__(235);
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
  name: "tag-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        formatter: function formatter(item) {
          return item.language === "*" ? _this.$t("ALL_LANGUAGE") : item.language_title;
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }, {
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref5) {
            var ids = _ref5.ids;

            _this.onClickBtnCheckout({ ids: ids });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }],
        default_value: {
          search: "",
          state: ""
        }
      }
    };
  },

  methods: {
    /**
     * list actions
     */
    onClickBtnCheckout: function onClickBtnCheckout(_ref6) {
      var _this2 = this;

      var data = _ref6.data,
          ids = _ref6.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_tag_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },

    /**
     * Toolbar
     */
    onClickBtnBatchTrash: function onClickBtnBatchTrash(_ref8) {
      var ids = _ref8.ids,
          state = _ref8.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnBatchRestore: function onClickBtnBatchRestore(_ref9) {
      var ids = _ref9.ids,
          state = _ref9.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref10) {
      var _this3 = this;

      var ids = _ref10.ids,
          state = _ref10.state;

      this.$$api_tag_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref11) {
          var msg = _ref11.msg;

          _this3.$message.success(msg);
          _this3.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref12) {
      var _this4 = this;

      var ids = _ref12.ids,
          datas = _ref12.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this4.$$api_tag_delete({
          data: { ids: ids },
          fn: function fn(_ref13) {
            var data = _ref13.data;

            _this4.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref14) {
      var data = _ref14.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this5 = this;

      var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref15.page_data,
          _fn = _ref15.fn;

      this.$$api_tag_list({
        data: page_data,
        fn: function fn(_ref16) {
          var data = _ref16.data;

          _this5.list_loading.flag = false;
          _this5.list = data.items;
          _this5.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-647f8e8e", module.exports)
  }
}

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(431);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("06582982", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69d70d76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-69d70d76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_edit_mixin__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_cms_edit_mixin__ = __webpack_require__(236);
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
  name: "menu-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        parent_id: {
          list: this.$store.getters.menu_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        category_id: {
          list: this.$store.getters.menu_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        access: {
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        language: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        },
        host: {
          list: this.$store.getters.site_list,
          custom_attrs: {
            label: "title",
            value: "url"
          }
        },
        module_ids: {
          list: this.$store.getters.module_list
        }
      },
      default_value: {
        parent_id: "",
        category_id: "",
        title: "",
        alias: "",
        description: "",
        host: "",
        state: 1,
        access: 1,
        language: "",
        params: {
          module_ids: []
        }
      }
    };
  },
  created: function created() {
    this.$getFieldList({
      menu: "parent_id",
      menu_category: "category_id",
      module: "module_ids",
      language: "language",
      viewlevel: "access",
      site: "host"
    });
  },

  methods: {
    handleSubmit: function handleSubmit(_ref) {
      var _this = this;

      var submit_data = _ref.submit_data,
          type = _ref.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_menu_save({
        data: submit_data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          if (data) {
            submit_data.id = data.items.id;
          }
          _this.$onSubmitFinish({ type: type, query: { id: submit_data.id } });
        }
      });
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_menu_get({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "alias",
                            label: _vm.$t("FIELD_ALIAS_LABEL") /*別名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "alias", $$v)
                              },
                              expression: "default_value.alias"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "host",
                            label: _vm.$t("MENU_FIELD_SITE_NAME_LABEL") /*網站*/
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              model: {
                                value: _vm.default_value.host,
                                callback: function($$v) {
                                  _vm.$set(_vm.default_value, "host", $$v)
                                },
                                expression: "default_value.host"
                              }
                            },
                            _vm._l(_vm.fields.host.list, function(option) {
                              return _c("el-option", {
                                key: option.id,
                                attrs: {
                                  label:
                                    option[_vm.fields.host.custom_attrs.label],
                                  value:
                                    option[_vm.fields.host.custom_attrs.value]
                                }
                              })
                            })
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "description",
                            label: _vm.$t(
                              "FIELD_ITEM_DESCRIPTION_LABEL"
                            ) /*內容文字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.description,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "description", $$v)
                              },
                              expression: "default_value.description"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "module_ids",
                            label: _vm.$t(
                              "FIELD_MENU_CHOOSE_MODULE"
                            ) /*選擇模組*/
                          }
                        },
                        [
                          _c(
                            "el-checkbox-group",
                            {
                              model: {
                                value: _vm.default_value.params.module_ids,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.default_value.params,
                                    "module_ids",
                                    $$v
                                  )
                                },
                                expression: "default_value.params.module_ids"
                              }
                            },
                            _vm._l(_vm.fields.module_ids.list, function(ref) {
                              var id = ref.id
                              var title = ref.title
                              return _c(
                                "el-checkbox",
                                { key: id, attrs: { label: id } },
                                [_vm._v(_vm._s(title))]
                              )
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-aside", { attrs: { width: "400px" } }, [
        _c("div", { staticClass: "content-aside__header" }, [
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*選項*/))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-aside__content" },
          [
            _c(
              "el-form",
              {
                ref: "form-data",
                attrs: { "label-position": "top", model: _vm.default_value }
              },
              [
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "state",
                      label: _vm.$t("OPTION_STATE" /*狀態*/)
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.state,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "state", $$v)
                          },
                          expression: "default_value.state"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("PUBLISHED") /*發佈的*/,
                            value: 1
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("UNPUBLISHED") /*停止發佈的*/,
                            value: 0
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "parent_id",
                      label: _vm.$t("OPTION_PARENT_MENU") /*上層選單*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.parent_id,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "parent_id", $$v)
                          },
                          expression: "default_value.parent_id"
                        }
                      },
                      _vm._l(_vm.fields.parent_id.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.parent_id.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.parent_id.custom_attrs.label],
                            value:
                              option[_vm.fields.parent_id.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "category_id",
                      label: _vm.$t("OPTION_CATEGORY") /*分類*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.category_id,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "category_id", $$v)
                          },
                          expression: "default_value.category_id"
                        }
                      },
                      _vm._l(_vm.fields.category_id.list, function(option) {
                        return _c("el-option", {
                          key:
                            option[_vm.fields.category_id.custom_attrs.value],
                          attrs: {
                            label:
                              option[_vm.fields.category_id.custom_attrs.label],
                            value:
                              option[_vm.fields.category_id.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "access",
                      label: _vm.$t("FIELD_ACCESS_LEVEL") /*存取層級*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.access,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "access", $$v)
                          },
                          expression: "default_value.access"
                        }
                      },
                      _vm._l(_vm.fields.access.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.access.custom_attrs.value],
                          attrs: {
                            label: option[_vm.fields.access.custom_attrs.label],
                            value: option[_vm.fields.access.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "language",
                      label: _vm.$t("OPTION_LANGUAGE") /*語言*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.language,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "language", $$v)
                          },
                          expression: "default_value.language"
                        }
                      },
                      _vm._l(_vm.fields.language.list, function(option) {
                        return _c("el-option", {
                          key: option.id,
                          attrs: {
                            label:
                              option[_vm.fields.language.custom_attrs.label],
                            value:
                              option[_vm.fields.language.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-69d70d76", module.exports)
  }
}

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(435);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("9276126a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-88675c4e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-88675c4e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__ = __webpack_require__(235);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "menu-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this,
        _ref2;

    return _ref2 = {
      sort: {
        show: true
      },
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref) {
            var ids = _ref.ids;

            _this.onClickBtnCheckout({ ids: ids });
          }
        }]
      },
      fields: [{
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }, {
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "alias",
        label: this.$t("FIELD_ALIAS_LABEL")
      }, {
        key: "category_title",
        label: this.$t("OPTION_CATEGORY")
      }, {
        key: "host",
        label: this.$t("SITE_FIELD_URL_LABEL")
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        key: "access_title",
        label: this.$t("FIELD_ACCESS_LEVEL")
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        formatter: function formatter(item) {
          return item.language === "*" ? _this.$t("ALL_LANGUAGE") : item.language_title;
        }
      }]
    }, _defineProperty(_ref2, "toolbar", {
      type: "list",
      custom: []
    }), _defineProperty(_ref2, "searchbar", {
      fields: [{
        key: "search",
        desc: this.$t("TOOLBAR_KEYWORDS"),
        clearable: true
      }, {
        key: "state",
        type: "select",
        desc: this.$t("OPTION_STATE"),
        list: [{
          value: "1",
          text: this.$t("PUBLISHED")
        }, {
          value: "0",
          text: this.$t("UNPUBLISHED")
        }, {
          value: "-1",
          text: this.$t("ARCHIVED")
        }, {
          value: "-2",
          text: this.$t("TRASHED")
        }]
      }, {
        key: "category_id",
        type: "select",
        desc: this.$t("OPTION_CATEGORY"),
        list: this.$store.getters.menu_category_list,
        custom_attrs: {
          label: "tree_list_title",
          value: "id"
        }
      }, {
        key: "language",
        type: "select",
        desc: this.$t("OPTION_LANGUAGE"),
        list: this.$store.getters.language_list,
        custom_attrs: {
          label: "title",
          value: "sef"
        }
      }, {
        key: "access",
        type: "select",
        desc: this.$t("FIELD_ACCESS_LEVEL"),
        list: this.$store.getters.viewlevel_list,
        custom_attrs: {
          label: "title",
          value: "id"
        }
      }],
      default_value: {
        search: "",
        state: "",
        category_id: "",
        language: "",
        access: ""
      }
    }), _ref2;
  },
  created: function created() {
    this.$getFieldList({ menu_category: 2, language: 3, viewlevel: 4 }, "searchbar");
  },

  methods: {
    /**
     * list actions
     */
    onClickBtnCheckout: function onClickBtnCheckout(_ref3) {
      var _this2 = this;

      var data = _ref3.data,
          ids = _ref3.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_menu_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref4) {
          var msg = _ref4.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref5) {
      var _this3 = this;

      var ids = _ref5.ids,
          datas = _ref5.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_menu_delete({
          data: { ids: ids },
          fn: function fn(_ref6) {
            var data = _ref6.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref7) {
      var data = _ref7.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref8.page_data,
          _fn = _ref8.fn;

      this.$$api_menu_list({
        data: page_data,
        fn: function fn(_ref9) {
          var data = _ref9.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-88675c4e", module.exports)
  }
}

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(439);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("a727779c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-655249c0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./params-form.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-655249c0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./params-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n", ""]);

// exports


/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_views_content_item_list__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_views_content_item_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_views_content_item_list__);
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */]],
  components: { ItemList: __WEBPACK_IMPORTED_MODULE_1_views_content_item_list___default.a },
  props: {
    moduleType: {
      type: String,
      default: ""
    },
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      item_list_dialogVisible: false,
      fields: {
        order_by: {
          list: [{
            label: "文章排序",
            value: "ordering"
          }, {
            label: "精選文章排序",
            value: "featured_ordering"
          }, {
            label: "ID",
            value: "id"
          }]
        },
        order: {
          list: [{
            label: "降冪",
            value: "desc"
          }, {
            label: "升冪",
            value: "asc"
          }]
        },
        category_ids: {
          list: this.$store.getters.item_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        menu_ids: {
          list: this.$store.getters.menu_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        }
      },

      default_value: {
        "selected-items": {
          item_ids: []
        },
        "categories-items": {
          category_ids: [],
          limit: ""
        },
        categories: {
          category_ids: []
        },
        menus: {
          menu_ids: []
        }
      },
      params: {
        order_by: "",
        order: "desc"
      }
    };
  },

  watch: {
    data: function data(v) {
      var _this = this;

      if (v) {
        Object.keys(this.default_value[this.moduleType]).forEach(function (field) {
          return _this.default_value[_this.moduleType][field] = _this.data[field];
        });
        Object.keys(this.params).forEach(function (param) {
          return _this.params[param] = _this.data[param];
        });
      }
    }
  },
  created: function created() {
    this.$getFieldList({
      item_category: "category_ids",
      menu: "menu_ids",
      viewlevel: "access"
    });
  },

  methods: {
    handleMenuConfirm: function handleMenuConfirm(item) {
      this.default_value[this.moduleType]["menu_ids"].push(item);
    },
    handleMenuClose: function handleMenuClose(item) {
      this.default_value[this.moduleType]["menu_ids"].splice(this.default_value[this.moduleType]["menu_ids"].indexOf(item), 1);
    },
    queryMenuSearch: function queryMenuSearch(queryString, callback) {
      var results = queryString ? this.fields.menu_ids.list.filter(this.createTitleFilter(queryString)) : this.fields.menu_ids.list;

      callback(results);
    },
    handleCategoryConfirm: function handleCategoryConfirm(item) {
      this.default_value[this.moduleType]["category_ids"].push(item);
    },
    handleCategoryClose: function handleCategoryClose(item) {
      this.default_value[this.moduleType]["category_ids"].splice(this.default_value[this.moduleType]["category_ids"].indexOf(item), 1);
    },
    queryCategorySearch: function queryCategorySearch(queryString, callback) {
      var results = queryString ? this.fields.category_ids.list.filter(this.createTitleFilter(queryString)) : this.fields.category_ids.list;

      callback(results);
    },
    createTitleFilter: function createTitleFilter(queryString) {
      return function (item) {
        return item.tree_list_title.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    }
  }
});

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    { attrs: { "label-position": "top", model: _vm.data } },
    [
      _vm.moduleType === "categories" || _vm.moduleType === "categories-items"
        ? _c(
            "el-form-item",
            {
              attrs: {
                label: _vm.$t("OPTION_CATEGORY") /*分類*/,
                prop: "category_ids"
              }
            },
            [
              _c("div", { staticClass: "form-item__inner" }, [
                _c(
                  "div",
                  { staticClass: "form-item-tags__wrapper" },
                  [
                    _vm._l(
                      _vm.default_value[_vm.moduleType]["category_ids"],
                      function(tag) {
                        return _c(
                          "el-tag",
                          {
                            key: tag.id,
                            attrs: {
                              "disable-transitions": false,
                              closable: ""
                            },
                            on: {
                              close: function($event) {
                                _vm.handleCategoryClose(tag)
                              }
                            }
                          },
                          [_vm._v(_vm._s(tag.tree_list_title))]
                        )
                      }
                    ),
                    _vm._v(" "),
                    _c("el-autocomplete", {
                      attrs: {
                        "value-key": "tree_list_title",
                        "fetch-suggestions": _vm.queryCategorySearch
                      },
                      on: { select: _vm.handleCategoryConfirm }
                    })
                  ],
                  2
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.moduleType === "menus"
        ? _c(
            "el-form-item",
            {
              attrs: { label: _vm.$t("OPTION_MENU") /*選單*/, prop: "menu_ids" }
            },
            [
              _c("div", { staticClass: "form-item__inner" }, [
                _c(
                  "div",
                  { staticClass: "form-item-tags__wrapper" },
                  [
                    _vm._l(
                      _vm.default_value[_vm.moduleType]["menu_ids"],
                      function(tag) {
                        return _c(
                          "el-tag",
                          {
                            key: tag.id,
                            attrs: {
                              "disable-transitions": false,
                              closable: ""
                            },
                            on: {
                              close: function($event) {
                                _vm.handleMenuClose(tag)
                              }
                            }
                          },
                          [_vm._v(_vm._s(tag.title))]
                        )
                      }
                    ),
                    _vm._v(" "),
                    _c("el-autocomplete", {
                      attrs: {
                        "value-key": "title",
                        "fetch-suggestions": _vm.queryMenuSearch
                      },
                      on: { select: _vm.handleMenuConfirm }
                    })
                  ],
                  2
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.moduleType === "selected-items"
        ? _c(
            "el-form-item",
            {
              attrs: { label: _vm.$t("OPTION_ITEM") /*項目*/, prop: "item_ids" }
            },
            [
              _c(
                "el-input",
                { attrs: { clearable: "" } },
                [
                  _c(
                    "template",
                    { slot: "append" },
                    [
                      _c(
                        "el-button",
                        {
                          on: {
                            click: function($event) {
                              _vm.item_list_dialogVisible = true
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("SELECT") /*選擇*/))]
                      )
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "ul",
                _vm._l(_vm.default_value[_vm.moduleType]["item_ids"], function(
                  ref
                ) {
                  var title = ref.title
                  return _c("li", [_vm._v(_vm._s(title))])
                })
              ),
              _vm._v(" "),
              _c(
                "el-dialog",
                {
                  attrs: { width: "80%", visible: _vm.item_list_dialogVisible },
                  on: {
                    "update:visible": function($event) {
                      _vm.item_list_dialogVisible = $event
                    }
                  }
                },
                [
                  _c("ItemList"),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "dialog-footer",
                      attrs: { slot: "footer" },
                      slot: "footer"
                    },
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: {
                            click: function($event) {
                              _vm.item_list_dialogVisible = false
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("SELECT") /*選擇*/))]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: _vm.$t("OPTION_ORDER_BY"), prop: "order_by" } },
        [
          _c(
            "el-select",
            {
              model: {
                value: _vm.params.order_by,
                callback: function($$v) {
                  _vm.$set(_vm.params, "order_by", $$v)
                },
                expression: "params.order_by"
              }
            },
            _vm._l(_vm.fields.order_by.list, function(option) {
              return _c("el-option", {
                key: option.value,
                attrs: { label: option.label, value: option.value }
              })
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { attrs: { label: _vm.$t("OPTION_ORDER"), prop: "order" } },
        [
          _c(
            "el-select",
            {
              model: {
                value: _vm.params.order,
                callback: function($$v) {
                  _vm.$set(_vm.params, "order", $$v)
                },
                expression: "params.order"
              }
            },
            _vm._l(_vm.fields.order.list, function(option) {
              return _c("el-option", {
                key: option.value,
                attrs: { label: option.label, value: option.value }
              })
            })
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-655249c0", module.exports)
  }
}

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(443);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("0be1eb42", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1843d618\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1843d618\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_normalizr__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_edit_mixin__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mixins_cms_edit_mixin__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_params_form__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_params_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_params_form__);
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
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "module-edit",
  components: { ParamsForm: __WEBPACK_IMPORTED_MODULE_4__components_params_form___default.a },
  mixins: [__WEBPACK_IMPORTED_MODULE_1_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        category_id: {
          list: this.$store.getters.module_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        },
        access: {
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        },
        language: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      },
      default_value: {
        category_id: 4,
        title: "",
        alias: "",
        description: "",
        state: 1,
        access: 1,
        language: "",
        params: {}
      }
    };
  },

  computed: {
    normalize_category: function normalize_category() {
      var types = new __WEBPACK_IMPORTED_MODULE_0_normalizr__["b" /* schema */].Entity("types");
      var normalize_list = Object(__WEBPACK_IMPORTED_MODULE_0_normalizr__["a" /* normalize */])(this.$store.getters.module_category_list, [types]);
      return normalize_list.entities["types"];
    }
  },
  created: function created() {
    this.$getFieldList({
      module_category: "category_id",
      language: "language",
      viewlevel: "access"
    });
  },

  methods: {
    handleSubmit: function handleSubmit(_ref) {
      var _this = this;

      var submit_data = _ref.submit_data,
          type = _ref.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_module_save({
        data: submit_data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          if (data) {
            submit_data.id = data.items.id;
          }
          _this.$onSubmitFinish({ type: type, query: { id: submit_data.id } });
        }
      });
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_module_get({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "alias",
                            label: _vm.$t("FIELD_ALIAS_LABEL") /*別名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.alias,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "alias", $$v)
                              },
                              expression: "default_value.alias"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "description",
                            label: _vm.$t(
                              "FIELD_ITEM_DESCRIPTION_LABEL"
                            ) /*內容文字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.description,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "description", $$v)
                              },
                              expression: "default_value.description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_PARAMS_OPTIONS") /*參數*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "category_id",
                            label: _vm.$t("OPTION_TYPE") /*類型*/
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              model: {
                                value: _vm.default_value.category_id,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.default_value,
                                    "category_id",
                                    $$v
                                  )
                                },
                                expression: "default_value.category_id"
                              }
                            },
                            _vm._l(_vm.fields.category_id.list, function(
                              option
                            ) {
                              return _c("el-option", {
                                key:
                                  option[
                                    _vm.fields.category_id.custom_attrs.value
                                  ],
                                attrs: {
                                  label:
                                    option[
                                      _vm.fields.category_id.custom_attrs.label
                                    ],
                                  value:
                                    option[
                                      _vm.fields.category_id.custom_attrs.value
                                    ]
                                }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("ParamsForm", {
                    attrs: {
                      moduleType:
                        _vm.normalize_category[_vm.default_value.category_id][
                          "alias"
                        ],
                      data: _vm.default_value.params
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-aside", { attrs: { width: "400px" } }, [
        _c("div", { staticClass: "content-aside__header" }, [
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*選項*/))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-aside__content" },
          [
            _c(
              "el-form",
              {
                ref: "form-data",
                attrs: { "label-position": "top", model: _vm.default_value }
              },
              [
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "state",
                      label: _vm.$t("OPTION_STATE" /*狀態*/)
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.state,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "state", $$v)
                          },
                          expression: "default_value.state"
                        }
                      },
                      [
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("PUBLISHED") /*發佈的*/,
                            value: 1
                          }
                        }),
                        _vm._v(" "),
                        _c("el-option", {
                          attrs: {
                            label: _vm.$t("UNPUBLISHED") /*停止發佈的*/,
                            value: 0
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "access",
                      label: _vm.$t("FIELD_ACCESS_LEVEL") /*存取層級*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.access,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "access", $$v)
                          },
                          expression: "default_value.access"
                        }
                      },
                      _vm._l(_vm.fields.access.list, function(option) {
                        return _c("el-option", {
                          key: option[_vm.fields.access.custom_attrs.value],
                          attrs: {
                            label: option[_vm.fields.access.custom_attrs.label],
                            value: option[_vm.fields.access.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    attrs: {
                      prop: "language",
                      label: _vm.$t("OPTION_LANGUAGE") /*語言*/
                    }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        model: {
                          value: _vm.default_value.language,
                          callback: function($$v) {
                            _vm.$set(_vm.default_value, "language", $$v)
                          },
                          expression: "default_value.language"
                        }
                      },
                      _vm._l(_vm.fields.language.list, function(option) {
                        return _c("el-option", {
                          key: option.id,
                          attrs: {
                            label:
                              option[_vm.fields.language.custom_attrs.label],
                            value:
                              option[_vm.fields.language.custom_attrs.value]
                          }
                        })
                      })
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1843d618", module.exports)
  }
}

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(447);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("09e7f294", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08fbaeac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08fbaeac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__ = __webpack_require__(235);
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
  name: "module-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_option_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "alias",
        label: this.$t("FIELD_ALIAS_LABEL")
      }, {
        key: "category_title",
        label: this.$t("OPTION_CATEGORY")
      }, {
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        key: "access_title",
        label: this.$t("FIELD_ACCESS_LEVEL")
      }, {
        key: "language_title",
        label: this.$t("OPTION_LANGUAGE"),
        formatter: function formatter(item) {
          return item.language === "*" ? _this.$t("ALL_LANGUAGE") : item.language_title;
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_CHECKOUT"),
          method: "checkout",
          fn: function fn(_ref) {
            var ids = _ref.ids;

            _this.onClickBtnCheckout({ ids: ids });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }, {
          key: "category_id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          list: this.$store.getters.module_category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        }, {
          key: "language",
          type: "select",
          desc: this.$t("OPTION_LANGUAGE"),
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }, {
          key: "access",
          type: "select",
          desc: this.$t("FIELD_ACCESS_LEVEL"),
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
            value: "id"
          }
        }],
        default_value: {
          search: "",
          state: "",
          category_id: "",
          language: "",
          access: ""
        }
      }
    };
  },
  created: function created() {
    this.$getFieldList({ module_category: 2, language: 3, viewlevel: 4 }, "searchbar");
  },

  methods: {
    /**
     * list actions
     */
    onClickBtnCheckout: function onClickBtnCheckout(_ref2) {
      var _this2 = this;

      var data = _ref2.data,
          ids = _ref2.ids;

      var checkout_data = ids ? ids : [data.id];
      this.$$api_module_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref3) {
          var msg = _ref3.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref4) {
      var _this3 = this;

      var ids = _ref4.ids,
          datas = _ref4.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_module_delete({
          data: { ids: ids },
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref6) {
      var data = _ref6.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref7.page_data,
          _fn = _ref7.fn;

      this.$$api_module_list({
        data: page_data,
        fn: function fn(_ref8) {
          var data = _ref8.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-08fbaeac", module.exports)
  }
}

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__ = __webpack_require__(236);
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
  name: "language-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      default_value: {
        title: "",
        code: "",
        sef: "",
        description: "",
        state: 1,
        ordering: ""
      }
    };
  },

  methods: {
    onTrash: function onTrash() {
      var _this = this;

      this.$$api_language_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.onCancel();
        }
      });
    },
    handleSubmit: function handleSubmit(_ref2) {
      var _this2 = this;

      var submit_data = _ref2.submit_data,
          type = _ref2.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_language_save({
        data: submit_data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$message.success(msg);
          if (data) {
            submit_data.id = data.items.id;
          }
          _this2.$onSubmitFinish({ type: type, query: { id: submit_data.id } });
        }
      });
    },
    onGetView: function onGetView() {
      var _this3 = this;

      this.$$api_language_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          Object.keys(_this3.default_value).forEach(function (field) {
            return _this3.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "code",
                            label: _vm.$t(
                              "LANGUAGE_FIELD_LANG_TAG_LABEL"
                            ) /*語言標籤*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.code,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "code", $$v)
                              },
                              expression: "default_value.code"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "sef",
                            label: _vm.$t(
                              "LANGUAGE_FIELD_LANG_CODE_LABEL"
                            ) /*網址語言代碼*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.sef,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "sef", $$v)
                              },
                              expression: "default_value.sef"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "description",
                            label: _vm.$t("FIELD_DESCRIPTION_LABEL") /*描述*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.description,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "description", $$v)
                              },
                              expression: "default_value.description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-5ae037c6", module.exports)
  }
}

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__ = __webpack_require__(235);
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
  name: "language-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "state",
        label: this.$t("OPTION_STATE"),
        type: "icon-label",
        width: "90",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "code",
        label: this.$t("LANGUAGE_FIELD_LANG_TAG_LABEL")
      }, {
        key: "sef",
        label: this.$t("LANGUAGE_FIELD_LANG_CODE_LABEL")
      }, {
        key: "type",
        label: this.$t("LANGUAGE_FIELD_TYPE_LABEL"),
        formatter: function formatter(item) {
          return item.type === "system" ? _this.$t("LANGUAGE_FIELD_TYPE_SYSTEM") : _this.$t("LANGUAGE_FIELD_TYPE_CONTENT");
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }, {
          key: "type",
          type: "select",
          desc: this.$t("OPTION_TYPE"),
          list: [{
            value: "content",
            text: this.$t("LANGUAGE_FIELD_TYPE_CONTENT")
          }, {
            value: "system",
            text: this.$t("LANGUAGE_FIELD_TYPE_SYSTEM")
          }]
        }],
        default_value: {
          search: "",
          state: "",
          type: ""
        }
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnBatchTrash: function onClickBtnBatchTrash(_ref5) {
      var ids = _ref5.ids,
          state = _ref5.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnBatchRestore: function onClickBtnBatchRestore(_ref6) {
      var ids = _ref6.ids,
          state = _ref6.state;

      this.onClickBtnUpdateState({ ids: ids, state: state });
    },
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref7) {
      var _this2 = this;

      var ids = _ref7.ids,
          state = _ref7.state;

      this.$$api_language_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref8) {
          var msg = _ref8.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref9) {
      var _this3 = this;

      var ids = _ref9.ids,
          datas = _ref9.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_language_delete({
          data: { ids: ids },
          fn: function fn(_ref10) {
            var data = _ref10.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref11) {
      var data = _ref11.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref12.page_data,
          _fn = _ref12.fn;

      this.$$api_language_list({
        data: page_data,
        fn: function fn(_ref13) {
          var data = _ref13.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-4b98105a", module.exports)
  }
}

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("351f3728", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f3df1f5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f3df1f5\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 456 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "setting-edit",
  data: function data() {
    return {
      fields: [{
        key: "sitename",
        label: this.$t("SETTING_FIELD_SITE_NAME_LABEL") /*網站名稱*/
      }, {
        key: "metadesc",
        label: this.$t("FIELD_META_DESCRIPTION_LABEL") /*Meta 說明*/
      }, {
        key: "metakeywords",
        label: this.$t("FIELD_META_KEYWORDS_LABEL") /*Meta 關鍵字*/
      }, {
        key: "locale",
        type: "select",
        label: this.$t("SETTING_FIELD_SITE_LANG_LABEL") /*網站語言*/
        , desc: this.$t("OPTION_LANGUAGE"),
        list: this.$store.getters.language_list,
        custom_attrs: {
          label: "title",
          value: "sef"
        }
      }, {
        key: "locale_admin",
        type: "select",
        label: this.$t("SETTING_FIELD_ADMIN_LANG_LABEL") /*管理區語言*/
        , desc: this.$t("OPTION_LANGUAGE"),
        list: this.$store.getters.language_list,
        custom_attrs: {
          label: "title",
          value: "sef"
        }
      }],
      toolbar: {
        type: ["save"]
      },
      default_value: {
        sitename: "",
        metadesc: "",
        metakeywords: "",
        locale: "",
        locale_admin: ""
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

      this.$$api_setting_save({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path
              });
              break;
          }
        }
      });
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_setting_get({
        fn: function fn(_ref3) {
          var data = _ref3.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
        }
      });
    },
    init: function init() {
      this.onGetView();
    }
  }

});

/***/ }),
/* 457 */
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
        on: { onSubmit: _vm.onSubmit }
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
    require("vue-hot-reload-api")      .rerender("data-v-3f3df1f5", module.exports)
  }
}

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__ = __webpack_require__(236);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "site-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        sef: {
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }
      },
      default_value: _defineProperty({
        title: "",
        url: "",
        sef: "",
        sitename: "",
        metakeywords: "",
        metadesc: ""
      }, "sef", "")
    };
  },

  methods: {
    onTrash: function onTrash() {
      var _this = this;

      this.$$api_site_updateState({
        data: {
          ids: [this.params.id],
          state: "-2"
        },
        fn: function fn(_ref) {
          var msg = _ref.msg;

          _this.$message.success(msg);
          _this.onCancel();
        }
      });
    },
    handleSubmit: function handleSubmit(_ref2) {
      var _this2 = this;

      var submit_data = _ref2.submit_data,
          type = _ref2.type;

      if (this.params.id) {
        submit_data.id = this.params.id;
      }
      this.$$api_site_save({
        data: submit_data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$message.success(msg);
          if (data) {
            submit_data.id = data.items.id;
          }
          _this2.$onSubmitFinish({ type: type, query: { id: submit_data.id } });
        }
      });
    },
    onGetView: function onGetView() {
      var _this3 = this;

      this.$$api_site_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          Object.keys(_this3.default_value).forEach(function (field) {
            return _this3.default_value[field] = data.items[field];
          });
        }
      });
    }
  }
});

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("GLOBAL_FIELDSET_BASIC_OPTIONS") /*基本*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "title",
                            label: _vm.$t("FIELD_TITLE_LABEL" /*標題*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.title,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "title", $$v)
                              },
                              expression: "default_value.title"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "url",
                            label: _vm.$t("SITE_FIELD_URL_LABEL") /*網址*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.url,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "url", $$v)
                              },
                              expression: "default_value.url"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "sef",
                            label: _vm.$t("OPTION_LANGUAGE") /*語言*/
                          }
                        },
                        [
                          _c(
                            "el-select",
                            {
                              model: {
                                value: _vm.default_value.sef,
                                callback: function($$v) {
                                  _vm.$set(_vm.default_value, "sef", $$v)
                                },
                                expression: "default_value.sef"
                              }
                            },
                            _vm._l(_vm.fields.sef.list, function(option) {
                              return _c("el-option", {
                                key: option.id,
                                attrs: {
                                  label:
                                    option[_vm.fields.sef.custom_attrs.label],
                                  value:
                                    option[_vm.fields.sef.custom_attrs.value]
                                }
                              })
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t(
                      "LANGUAGE_TAB_SITE_NAME_AND_METADATA"
                    ) /*網站名稱&Metadata*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "sitename",
                            label: _vm.$t(
                              "LANGUAGE_FIELD_CUSTOM_SITE_NAME_LABEL"
                            ) /*自訂網站名稱*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.sitename,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "sitename", $$v)
                              },
                              expression: "default_value.sitename"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metakeywords",
                            label: _vm.$t(
                              "FIELD_META_KEYWORDS_LABEL"
                            ) /*Meta 關鍵字*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metakeywords,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metakeywords", $$v)
                              },
                              expression: "default_value.metakeywords"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "metadesc",
                            label: _vm.$t(
                              "FIELD_META_DESCRIPTION_LABEL"
                            ) /*Meta 說明*/
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { type: "textarea", rows: 2 },
                            model: {
                              value: _vm.default_value.metadesc,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "metadesc", $$v)
                              },
                              expression: "default_value.metadesc"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-8554d192", module.exports)
  }
}

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__ = __webpack_require__(235);
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
  name: "site-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1_mixins_cms_list_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: [{
        key: "title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        key: "url",
        label: this.$t("SITE_FIELD_URL_LABEL")
      }, {
        key: "language",
        label: this.$t("OPTION_LANGUAGE")
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list"
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "state",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "1",
            text: this.$t("PUBLISHED")
          }, {
            value: "0",
            text: this.$t("UNPUBLISHED")
          }, {
            value: "-1",
            text: this.$t("ARCHIVED")
          }, {
            value: "-2",
            text: this.$t("TRASHED")
          }]
        }],
        default_value: {
          search: "",
          state: ""
        }
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref) {
      var _this = this;

      var ids = _ref.ids,
          datas = _ref.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this.$$api_site_delete({
          data: { ids: ids },
          fn: function fn(_ref2) {
            var data = _ref2.data;

            _this.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref3) {
      var data = _ref3.data;

      this.$onClickBntEdit({
        id: data.id
      });
    },
    handleGetList: function handleGetList() {
      var _this2 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref4.page_data,
          _fn = _ref4.fn;

      this.$$api_site_list({
        data: page_data,
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this2.list_loading.flag = false;
          _this2.list = data.items;
          _this2.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-a3e5206a", module.exports)
  }
}

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(233);
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
  name: "user-edit",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__["a" /* default */]],
  data: function data() {
    return {
      fields: {
        group_ids: {
          list: [],
          custom_attrs: {
            children: "children",
            label: "title"
          }
        }
      },
      default_value: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        block: "",
        reset_password: "0",
        group_ids: []
      }
    };
  },
  created: function created() {
    var _this = this;

    this.$$eventBus.$on("onClickUSERFormDataToolbar", function (opts) {
      switch (opts.type) {
        case "cancel":
          _this.onCancel();
          break;
        case "save":
        case "savenclose":
        case "savenadd":
          _this.onSubmit({
            ref: "form-data",
            type: opts.type,
            data: _this.default_value
          });
          break;
        case "trash":
          _this.onTrash();
          break;
      }
    });
    this.onUpdateFieldList();
  },
  mounted: function mounted() {
    this.$$eventBus.$emit("onInitToolbar", {
      name: "USERFormData",
      data: this.toolbar
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.$$eventBus.$off("onClickUSERFormDataToolbar");
  },

  methods: {
    onCheckGroupChange: function onCheckGroupChange() {
      this.default_value.group_ids = this.$refs.groupTree.getCheckedKeys();
    },
    onSubmit: function onSubmit(_ref) {
      var _this2 = this;

      var data = _ref.data,
          info = _ref.info,
          type = _ref.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_user_save({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this2.$message.success(msg);
          _this2.$onSubmitFinish({
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
      var _this3 = this;

      this.$$api_user_get({
        pathVar: this.params.id,
        fn: function fn(_ref3) {
          var data = _ref3.data;

          Object.keys(_this3.default_value).forEach(function (field) {
            if (field === "group_ids") {
              _this3.default_value[field] = data.items["groups"].map(function (item) {
                return item.id;
              });
            } else {
              _this3.default_value[field] = data.items[field];
            }
          });
        }
      });
    },
    onUpdateFieldList: function onUpdateFieldList() {
      var _this4 = this;

      this.$$api_user_listTreeGroup({
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this4.fields.group_ids.list = data.items;
        }
      });
    }
  }
});

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-container",
    [
      _c(
        "el-main",
        [
          _c(
            "el-tabs",
            { attrs: { type: "border-card" } },
            [
              _c(
                "el-tab-pane",
                { attrs: { label: _vm.$t("USER_TAB_DETAIL") /*會員資料*/ } },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "first_name",
                            label: _vm.$t("USER_FIELD_FIRST_NAME" /*姓*/)
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.first_name,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "first_name", $$v)
                              },
                              expression: "default_value.first_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "last_name",
                            label: _vm.$t("USER_FIELD_LAST_NAME") /*名*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.last_name,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "last_name", $$v)
                              },
                              expression: "default_value.last_name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "email",
                            label: _vm.$t("USER_FIELD_EMAIL") /*Email*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.email,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "email", $$v)
                              },
                              expression: "default_value.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "password",
                            label: _vm.$t("USER_FIELD_PASSWORD") /*密碼*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.password,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "password", $$v)
                              },
                              expression: "default_value.password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "password_confirmation",
                            label: _vm.$t(
                              "USER_FIELD_PASSWORD_CONFIRMATION"
                            ) /*再次輸入密碼*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.password_confirmation,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.default_value,
                                  "password_confirmation",
                                  $$v
                                )
                              },
                              expression: "default_value.password_confirmation"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-tab-pane",
                {
                  attrs: {
                    label: _vm.$t("USER_TAB_ASSIGN_GROUP") /*指定會員群組*/
                  }
                },
                [
                  _c(
                    "el-form",
                    {
                      ref: "form-data",
                      attrs: {
                        "label-position": "top",
                        model: _vm.default_value
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { prop: "group_ids" } },
                        [
                          _c("el-tree", {
                            ref: "groupTree",
                            attrs: {
                              data: _vm.fields.group_ids.list,
                              "default-checked-keys":
                                _vm.default_value.group_ids,
                              "default-expanded-keys":
                                _vm.default_value.group_ids,
                              props: _vm.fields.group_ids.custom_attrs,
                              "node-key": "id",
                              "check-strictly": "",
                              "show-checkbox": ""
                            },
                            on: { "check-change": _vm.onCheckGroupChange }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-dc05c74e", module.exports)
  }
}

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin__ = __webpack_require__(233);
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

          Object.keys(_this2.default_value).forEach(function (field) {
            return _this2.default_value[field] = data.items[field];
          });
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
/* 465 */
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

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
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
  name: "user-group-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      toolbar: {
        type: "list"
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }],
        default_value: {
          search: ""
        }
      },
      list_actions: {
        btns: [{
          text: this.$t("COM_USERS_GROUPS_ASSIGN_ASSET_TITLE"),
          type: "primary",
          method: "grant_asset",
          fn: function fn(_ref) {
            var data = _ref.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/asset",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }, {
          text: this.$t("COM_USERS_GROUPS_ASSIGN_API_TITLE"),
          type: "primary",
          method: "grant_api",
          fn: function fn(_ref2) {
            var data = _ref2.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/api",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }]
      }
    };
  },

  methods: {
    /**
     * Toolbar
     */
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref3) {
      var _this2 = this;

      var ids = _ref3.ids,
          datas = _ref3.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this2.$$api_user_deleteGroup({
          data: { ids: ids },
          fn: function fn(_ref4) {
            var data = _ref4.data;

            _this2.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref5) {
      var data = _ref5.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this3 = this;

      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref6.page_data,
          _fn = _ref6.fn;

      this.$$api_user_listGroup({
        data: page_data,
        fn: function fn(_ref7) {
          var data = _ref7.data;

          _this3.list_loading.flag = false;
          _this3.list = data.items;
          _this3.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-5810993d", module.exports)
  }
}

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
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
  name: "user-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      fields: [{
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }, {
        key: "first_name",
        label: this.$t("USER_FIELD_FIRST_NAME"),
        type: "editable"
      }, {
        key: "last_name",
        label: this.$t("USER_FIELD_LAST_NAME"),
        type: "editable"
      }, {
        key: "block",
        label: this.$t("USER_OPTION_ENABLED") /*已啟用*/
        , type: "icon-label",
        width: "120",
        formatter: function formatter(item) {
          item = item !== 1 ? 1 : 0;
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item !== 1 ? "times" : "check"]
          };
        }
      }, {
        key: "activation",
        label: this.$t("USER_OPTION_ACTIVE") /*啟用狀態*/
        , type: "icon-label",
        width: "120",
        formatter: function formatter(item) {
          return {
            color: "item_state_" + item + "_color",
            icon: ["fal", item === 1 ? "check" : "times"]
          };
        }
      }, {
        key: "groups",
        label: this.$t("OPTION_GROUP"),
        formatter: function formatter(item) {
          return item.groups.length > 2 ? "Multiple Groups" : item.groups.map(function (el) {
            return el.title;
          }).join(", ");
        }
      }, {
        key: "email",
        label: this.$t("USER_FIELD_EMAIL")
      }],
      toolbar: {
        type: "list",
        custom: [{
          text: this.$t("TOOLBAR_PUBLISH"),
          method: "updateState",
          condition: function condition(_ref) {
            var data = _ref.data;

            return data.state === 0 && data.parent_id !== null;
          },

          fn: function fn(_ref2) {
            var ids = _ref2.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 1 });
          }
        }, {
          text: this.$t("TOOLBAR_UNPUBLISH"),
          method: "updateState",
          condition: function condition(_ref3) {
            var data = _ref3.data;

            return data.state === 1 && data.parent_id !== null;
          },

          fn: function fn(_ref4) {
            var ids = _ref4.ids;

            _this.onClickBtnUpdateState({ ids: ids, state: 0 });
          }
        }]
      },
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "block",
          type: "select",
          desc: this.$t("OPTION_STATE"),
          list: [{
            value: "0",
            text: this.$t("ENABLED")
          }, {
            value: "1",
            text: this.$t("DISABLED")
          }]
        }, {
          key: "activation",
          type: "select",
          desc: this.$t("USER_OPTION_ACTIVE"),
          list: [{
            value: "1",
            text: this.$t("USER_ACTIVATED")
          }, {
            value: "0",
            text: this.$t("USER_UNACTIVATED")
          }]
        }, {
          key: "groups",
          type: "select",
          desc: this.$t("OPTION_GROUP"),
          list: [],
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        }],
        default_value: {
          search: "",
          block: "",
          activation: ""
        }
      },
      list_actions: {
        btns: [{
          text: "Assign Group",
          type: "primary",
          method: "grant_group",
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/group",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }, {
          text: "Assign Role",
          type: "primary",
          method: "grant_role",
          fn: function fn(_ref6) {
            var data = _ref6.data;

            _this.$router.push({
              path: _this.$route.path + "/grant/role",
              query: {
                id: data.id,
                name: data.full_name
              }
            });
          }
        }]
      }
    };
  },


  methods: {
    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref7) {
      var _this2 = this;

      var ids = _ref7.ids,
          state = _ref7.state;

      this.$$api_user_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref8) {
          var msg = _ref8.msg;

          _this2.$message.success(msg);
          _this2.$onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref9) {
      var _this3 = this;

      var ids = _ref9.ids,
          datas = _ref9.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_user_delete({
          data: { ids: ids },
          fn: function fn(_ref10) {
            var data = _ref10.data;

            _this3.$onGetList();
          }
        });
      });
    },
    handleEditQuery: function handleEditQuery(_ref11) {
      var data = _ref11.data;

      this.$onClickBntEdit({
        id: data.id,
        pid: data.parent_id,
        name: data.name
      });
    },
    handleGetList: function handleGetList() {
      var _this4 = this;

      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref12.page_data,
          _fn = _ref12.fn;

      this.$$api_user_list({
        data: page_data,
        fn: function fn(_ref13) {
          var data = _ref13.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    },
    onUpdateParams: function onUpdateParams() {
      var _this5 = this;

      this.$$api_user_listOptionGroup({
        fn: function fn(_ref14) {
          var data = _ref14.data;

          _this5.searchbar.fields[3].list = data.items;
        }
      });
    },
    $initList: function $initList() {
      this.onUpdateParams();
      this.$onGetList();
    }
  }
});

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          List: _vm.list,
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          Toolbar: _vm.toolbar,
          Searchbar: _vm.searchbar,
          FieldList: _vm.fields
        },
        on: {
          onClickBtnAdd: _vm.$onClickBtnAdd,
          onClickBtnEdit: _vm.handleEditQuery,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-fa961626", module.exports)
  }
}

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(471);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("4628d8e6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ece8df76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./log.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ece8df76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./log.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n", ""]);

// exports


/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__ = __webpack_require__(232);
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
  name: "admin-log-list",
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin__["a" /* default */]],
  data: function data() {
    return {
      list: [],
      fields: [{
        key: "creator",
        label: this.$t("LIST_DATA_AUTHOR_LABEL")
      }, {
        key: "created_at",
        label: this.$t("LIST_DATA_CREATED_DATE_LABEL")
      }, {
        key: "type",
        label: this.$t("OPTION_TYPE")
      }, {
        key: "action",
        label: this.$t("LIST_DATA_ACTIONS_LABEL")
      }],
      searchbar: {
        fields: [{
          key: "search",
          desc: this.$t("TOOLBAR_KEYWORDS"),
          clearable: true
        }, {
          key: "start_date",
          type: "date",
          desc: this.$t("FIELD_SEARCH_START_DATE"),
          date_attrs: {
            "value-format": "yyyy-MM-dd" // default is Date() will cause error
          }
        }, {
          key: "end_date",
          type: "date",
          desc: this.$t("FIELD_SEARCH_END_DATE"),
          date_attrs: {
            "value-format": "yyyy-MM-dd" // default is Date() will cause error
          }
        }],
        default_value: {
          search: "",
          start_date: "",
          end_date: ""
        }
      }
    };
  },

  methods: {
    handleGetList: function handleGetList() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page_data = _ref.page_data,
          _fn = _ref.fn;

      this.$$api_observer_log({
        data: page_data,
        fn: function fn(_ref2) {
          var data = _ref2.data;

          _this.list_loading.flag = false;
          _this.list = data.items;
          _this.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  }
});

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("ListData", {
        ref: "list-data",
        attrs: {
          ListLoading: _vm.list_loading,
          Pagination: _vm.paginations,
          List: _vm.list,
          FieldList: _vm.fields,
          Searchbar: _vm.searchbar
        },
        on: {
          onChangeCurrentPage: _vm.$onChangeCurrentPage,
          onChangePageSize: _vm.$onChangePageSize,
          onSearch: _vm.$onSearch,
          onSearchReset: _vm.$onSearchReset
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-ece8df76", module.exports)
  }
}

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(475);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("3a18ffcb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74c593a9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74c593a9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 476 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74c593a9", module.exports)
  }
}

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(479);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(222)("a62c9e98", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-657d6c3d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-657d6c3d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(221)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-657d6c3d", module.exports)
  }
}

/***/ })
]));