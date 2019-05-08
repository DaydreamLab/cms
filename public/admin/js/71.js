webpackJsonp([71],{

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(452)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(454)
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

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(453);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(262)("79d520da", content, false, {});
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

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(261)(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.content-container .el-main.media-main {\n  min-height: 500px;\n  padding: 10px;\n}\n.content-container .el-aside.media-aside {\n  padding: 10px;\n}\n.media-container {\n  background: #fff;\n}\n.media-container .el-header, .media-container .el-footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.media-container .el-header {\n    border-bottom: 1px solid #e6e6e6;\n}\n.media-container .el-footer {\n    border-top: 1px solid #e6e6e6;\n    color: #999999;\n}\n.media-container .el-aside {\n    border-right: 1px solid #e6e6e6;\n}\n.media-toolbar__item {\n  margin-right: 10px;\n}\n.media-create__item {\n  margin-bottom: 10px;\n}\n.media-footer {\n  width: 100%;\n}\n.file-list__table .el-table__row {\n  cursor: default;\n}\n.file-list__table .el-table__row .file-item__thumb {\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    vertical-align: middle;\n    background-size: cover;\n    background-color: #e6e6e6;\n}\n.file-list__icon {\n  color: #606266;\n  padding: 10px;\n}\n.file-list__icon:before, .file-list__icon:after {\n    content: \"\";\n    display: table;\n}\n.file-list__icon .file-item__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.file-list__icon .file-item__type {\n    width: 3em;\n    height: 3em;\n}\n.file-list__icon .file-item__icon {\n    font-size: 3em;\n}\n.file-list__icon .file-item__thumb {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    background-color: #e6e6e6;\n}\n.file-list__icon .file-item__name {\n    margin-top: 10px;\n    padding: 2px 4px;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    max-height: 2.4em;\n    line-height: 1.3em;\n    white-space: pre-line;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-break: break-word;\n    text-align: center;\n}\n.file-item {\n  width: 120px;\n  height: 80px;\n  float: left;\n  padding-right: 1.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.file-item__checkbox {\n    opacity: 0;\n    position: absolute;\n}\n.file-item.is-selected_filepath .file-item__name {\n    background: #2f3855;\n    color: #fff;\n    border-radius: 4px;\n    max-height: 3.8em;\n    -webkit-line-clamp: initial;\n    z-index: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(455);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FilePath: {
      type: String,
      default: ""
    }
  },
  watch: {
    selected_filepath: function selected_filepath(value) {
      this.$emit("onChangeSelection", value);
    },
    "params.dir": function paramsDir() {
      this.$refs.folderTree.setCurrentKey(this.params.dir);
    },
    FilePath: function FilePath(v) {
      this.params.path = v;
    }
  },
  created: function created() {
    this.initMedia();
  },

  methods: {
    formatItemDate: function formatItemDate(row) {
      return this.$options.filters.displayDateFormat(row.modified);
    },
    onChangeSelection: function onChangeSelection(value) {
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
        errFn: function errFn(msg) {
          _this2.$message.error(msg);
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

/***/ 455:
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(456)))

/***/ }),

/***/ 456:
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

/***/ 457:
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
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("MEDIA_THUMB_VIEW") /*縮圖*/) +
                      "\n      "
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-radio-button",
                { attrs: { label: "list" } },
                [
                  _c("font-awesome-icon", { attrs: { icon: ["fal", "bars"] } }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$t("MEDIA_LIST_VIEW") /*列表*/) +
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
                  attrs: { type: _vm.file_upload.show ? "info" : "success" },
                  on: {
                    click: function($event) {
                      _vm.file_upload.show = !_vm.file_upload.show
                    }
                  }
                },
                [
                  _vm.file_upload.show
                    ? [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fal", "times"] }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.$t("TOOLBAR_CANCEL") /*取消*/ +
                                _vm.$t("MEDIA_UPLOAD") /*上傳檔案*/
                            ) +
                            "\n        "
                        )
                      ]
                    : [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fal", "upload"] }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("MEDIA_UPLOAD") /*上傳檔案*/) +
                            "\n        "
                        )
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: _vm.folder_create.show ? "info" : "" },
                  on: {
                    click: function($event) {
                      _vm.folder_create.show = !_vm.folder_create.show
                    }
                  }
                },
                [
                  _vm.folder_create.show
                    ? [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fal", "times"] }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.$t("TOOLBAR_CANCEL") /*取消*/ +
                                _vm.$t("MEDIA_CREATE_DIR") /*新增資料夾*/
                            ) +
                            "\n        "
                        )
                      ]
                    : [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fal", "plus"] }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("MEDIA_CREATE_DIR") /*新增資料夾*/) +
                            "\n        "
                        )
                      ]
                ],
                2
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
                      on: { "selection-change": _vm.onChangeSelection }
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
                                                backgroundImage:
                                                  "url('" +
                                                  scope.row.thumb +
                                                  "')"
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
                          label: _vm.$t("MEDIA_MODIFIED_DATE") /*修改日期*/,
                          formatter: _vm.formatItemDate
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
                                          backgroundImage:
                                            "url('" + item.thumb + "')"
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

/***/ })

});