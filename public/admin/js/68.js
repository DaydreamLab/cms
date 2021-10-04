webpackJsonp([68],{

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(431)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(433)
/* template */
var __vue_template__ = __webpack_require__(438)
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

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(432);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(250)("6aa020aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-380105b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-380105b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/dist/cjs.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"D:\\\\code\\\\cms-frontend\\\\resources\\\\assets\\\\admin\\\\styles\\\\_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(249)(false);
// imports


// module
exports.push([module.i, "\n.content-container .el-main.media-main{min-height:500px;padding:10px\n}\n.content-container .el-aside.media-aside{padding:10px\n}\n.content-container .el-tree-node .el-tree-node__content{position:relative;padding-right:2rem\n}\n.content-container .el-tree-node .el-tree-node__content .media-tree-node{width:100%\n}\n.content-container .el-tree-node .el-tree-node__content .media-tree-node__label{width:100%;overflow:hidden;text-overflow:ellipsis;display:block\n}\n.media-container{background:#fff\n}\n.media-container .el-header,.media-container .el-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.media-container .el-header{border-bottom:1px solid #e6e6e6\n}\n.media-container .el-footer{border-top:1px solid #e6e6e6;color:#999\n}\n.media-container .el-aside{border-right:1px solid #e6e6e6\n}\n.media-toolbar__item{margin-right:10px\n}\n.media-create__item{margin-bottom:10px\n}\n.media-footer{width:100%\n}\n.file-list__table .el-table__row{cursor:default\n}\n.file-list__table .el-table__row .file-item__thumb{width:1em;height:1em;display:inline-block;vertical-align:middle;background-size:cover;background-color:#e6e6e6\n}\n.file-list__icon{color:#606266;padding:10px\n}\n.file-list__icon:before,.file-list__icon:after{content:\"\";display:table\n}\n.file-list__icon .file-item__inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n.file-list__icon .file-item__type{width:3em;height:3em\n}\n.file-list__icon .file-item__icon{font-size:3em\n}\n.file-list__icon .file-item__thumb{width:100%;height:100%;background-size:cover;background-color:#e6e6e6\n}\n.file-list__icon .file-item__name{margin-top:10px;padding:2px 4px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-height:2.4em;line-height:1.3em;white-space:pre-line;overflow:hidden;overflow-wrap:break-word;word-break:break-word;text-align:center\n}\n.file-item{width:120px;height:80px;float:left;padding-right:1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.file-item__checkbox{opacity:0;position:absolute\n}\n.file-item.is-selected .file-item__name{background:#2f3855;color:#fff;border-radius:4px;max-height:3.8em;-webkit-line-clamp:initial;z-index:1\n}\n", ""]);

// exports


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(434);
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Media",
  data: function data() {
    return {
      params: {
        dir: "/",
        path: this.filePath,
        total: ""
      },
      view: "list",
      folders: [],
      files: [],
      loading: false,
      loadingFolder: false,
      selected: [],
      newFolderName: "",
      showCreateFolderBtn: false,
      showRenameFolderBtn: false,
      showUploadFileBtn: false,
      folderTreeProps: {
        label: "name",
        children: "children"
      }
    };
  },

  components: {
    popoverMenu: function popoverMenu() {
      return __webpack_require__.e/* import() */(78).then(__webpack_require__.bind(null, 435));
    }
  },
  props: {
    filePath: {
      type: String,
      default: ""
    }
  },
  computed: {
    lastSelect: function lastSelect() {
      return this.selected.length > 0 ? this.selected[this.selected.length - 1] : {};
    }
  },
  watch: {
    selected: function selected(value) {
      this.$emit("change", value);

      if (value.length > 0) {
        this.showRenameFolderBtn = false;
      }
    },
    "params.dir": function paramsDir(v) {
      this.$refs.folderTree.setCurrentKey(v);
    },
    filePath: function filePath(v) {
      this.params.path = v;
    },
    view: function view(v) {
      this.selected = [];
    }
  },
  created: function created() {
    this.initMedia();
  },

  methods: {
    handleDeleteFile: function handleDeleteFile() {
      var _this = this;

      var postPaths = this.selected.map(function (item) {
        return item.path;
      });

      this.$$api_media_delete({
        data: {
          paths: postPaths
        },
        fn: function fn() {
          _this.handleGetFolders();
          _this.resetSelectedFiles();
        }
      });
    },
    handleRename: function handleRename() {
      var _this2 = this;

      var postDir = this.lastSelect.path || '';
      var postName = postDir.replace('/', '');
      var postType = this.lastSelect.type.toLowerCase();

      this.$$api_media_rename({
        data: {
          dir: postDir,
          name: postName,
          rename: this.newFolderName,
          type: postType
        },
        fn: function fn() {
          _this2.newFolderName = "";
          _this2.showRenameFolderBtn = false;
          _this2.handleGetFolders();
          _this2.resetSelectedFiles();
        }
      });
    },
    updateSelectedFiles: function updateSelectedFiles(value) {
      this.selected = value.map(function (el) {
        return {
          path: el.path,
          type: el.type
        };
      });
    },
    resetSelectedFiles: function resetSelectedFiles() {
      this.selected = [];
      this.handleGetFiles();
    },
    onDoubleClickItem: function onDoubleClickItem(item) {
      item.type === "Folder" ? this.updateParamDir(item) : this.updateParamPath(item);
    },
    updateParamPath: function updateParamPath(file) {
      this.params.path = file.path;
      // this.$emit("onDbClickFile", this.params.path);
    },
    updateParamDir: function updateParamDir(folder) {
      this.params.dir = folder.path;
      this.resetSelectedFiles();
    },
    handleUploadFile: function handleUploadFile() {
      this.$refs.fileUpload.submit();
    },
    handleUploadFiles: function handleUploadFiles(params) {
      var _this3 = this;

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

          _this3.$message.success(msg);
          params.onSuccess();
          _this3.$refs.fileUpload.clearFiles();
          _this3.showUploadFileBtn = false;
          _this3.handleGetFiles();
        },
        errFn: function errFn(msg) {
          _this3.$message.error(msg);
          params.onError();
        }
      });
    },
    handleCreateFolder: function handleCreateFolder() {
      var _this4 = this;

      this.$$api_media_createFolder({
        data: {
          dir: this.params.dir,
          name: this.newFolderName
        },
        fn: function fn(_ref2) {
          var data = _ref2.data;

          _this4.newFolderName = "";
          _this4.showCreateFolderBtn = false;
          _this4.handleGetFiles();
          _this4.handleGetFolders();
        }
      });
    },
    handleGetFolders: function handleGetFolders() {
      var _this5 = this;

      this.loadingFolder = true;
      this.$$api_media_listFolder({
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this5.loadingFolder = false;
          data.items[0].name = '/';
          _this5.folders = data.items;
        }
      });
    },
    handleGetFiles: function handleGetFiles() {
      var _this6 = this;

      this.loading = true;
      this.$$api_media_listFile({
        data: {
          dir: this.params.dir
        },
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this6.files = data.items;
          _this6.params.total = data.records;
          _this6.loading = false;
        }
      });
    },
    formatItemDate: function formatItemDate(row) {
      return this.$options.filters.displayDateFormat(row.modified);
    },
    initMedia: function initMedia() {
      this.handleGetFolders();
      if (this.params.path) {
        // FIXME: replace /storage/media ??
        this.params.dir = __WEBPACK_IMPORTED_MODULE_0_path___default.a.dirname(this.params.path) || this.params.dir;
        this.selected.push({
          path: this.params.path,
          type: ''
        });
      }
      this.handleGetFiles();
    }
  }
});

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
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

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(112)))

/***/ }),

/***/ 438:
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
                  attrs: { type: _vm.showUploadFileBtn ? "info" : "success" },
                  on: {
                    click: function($event) {
                      _vm.showUploadFileBtn = !_vm.showUploadFileBtn
                    }
                  }
                },
                [
                  _vm.showUploadFileBtn
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
                  attrs: { type: _vm.showCreateFolderBtn ? "info" : "" },
                  on: {
                    click: function($event) {
                      _vm.showCreateFolderBtn = !_vm.showCreateFolderBtn
                      _vm.showRenameFolderBtn = false
                    }
                  }
                },
                [
                  _vm.showCreateFolderBtn
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
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: {
                    type: _vm.showRenameFolderBtn ? "info" : "",
                    disabled:
                      _vm.selected.length !== 1 ||
                      _vm.lastSelect.type !== "Folder"
                  },
                  on: {
                    click: function($event) {
                      _vm.showRenameFolderBtn = !_vm.showRenameFolderBtn
                      _vm.showCreateFolderBtn = false
                    }
                  }
                },
                [
                  _vm.showRenameFolderBtn
                    ? [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fal", "times"] }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.$t("TOOLBAR_CANCEL") /*取消*/ +
                                _vm.$t("TOOLBAR_RENAME_DIR") /*新增資料夾*/
                            ) +
                            "\n        "
                        )
                      ]
                    : [
                        _c("font-awesome-icon", {
                          attrs: { icon: ["fal", "edit"] }
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(
                              _vm.$t("TOOLBAR_RENAME_DIR") /*重新命名資料夾*/
                            ) +
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
                  attrs: { disabled: _vm.selected.length <= 0 },
                  on: { click: _vm.handleDeleteFile }
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
                  props: _vm.folderTreeProps,
                  "expand-on-click-node": false,
                  indent: 8,
                  "default-expand-all": "",
                  "highlight-current": ""
                },
                on: { "node-click": _vm.updateParamDir },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var node = ref.node
                      var data = ref.data
                      return _c("span", { staticClass: "media-tree-node" }, [
                        _c(
                          "span",
                          {
                            staticClass: "media-tree-node__label",
                            attrs: { title: node.label }
                          },
                          [_vm._v(_vm._s(node.label))]
                        )
                      ])
                    }
                  }
                ])
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
                  _vm.showCreateFolderBtn
                    ? _c(
                        "el-input",
                        {
                          staticClass: "media-create__item",
                          model: {
                            value: _vm.newFolderName,
                            callback: function($$v) {
                              _vm.newFolderName = $$v
                            },
                            expression: "newFolderName"
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
                              on: { click: _vm.handleCreateFolder },
                              slot: "append"
                            },
                            [_vm._v(_vm._s(_vm.$t("MEDIA_CREATE") /*建立*/))]
                          )
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.showRenameFolderBtn
                    ? _c(
                        "el-input",
                        {
                          staticClass: "media-create__item",
                          model: {
                            value: _vm.newFolderName,
                            callback: function($$v) {
                              _vm.newFolderName = $$v
                            },
                            expression: "newFolderName"
                          }
                        },
                        [
                          _c(
                            "el-button",
                            {
                              attrs: { slot: "append" },
                              on: { click: _vm.handleRename },
                              slot: "append"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.$t("MEDIA_RENAME") /*重新命名*/)
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.showUploadFileBtn
                    ? _c(
                        "el-upload",
                        {
                          ref: "fileUpload",
                          staticClass: "media-create__item",
                          attrs: {
                            multiple: "",
                            action: "string",
                            "http-request": _vm.handleUploadFiles,
                            "auto-upload": false
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
                      on: { "selection-change": _vm.updateSelectedFiles }
                    },
                    [
                      _c("el-table-column", {
                        attrs: { type: "selection", width: "55" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "name",
                          label: _vm.$t("MEDIA_NAME") /*名稱*/,
                          width: "350"
                        },
                        scopedSlots: _vm._u(
                          [
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
                                          return _vm.onDoubleClickItem(
                                            scope.row
                                          )
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
                                                attrs: {
                                                  icon: ["fal", "folder"]
                                                }
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
                          ],
                          null,
                          false,
                          1307195990
                        )
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
                          key: item,
                          staticClass: "file-item",
                          class: { "is-selected": _vm.selected.includes(item) }
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.selected,
                                expression: "selected"
                              }
                            ],
                            staticClass: "file-item__checkbox",
                            attrs: { type: "checkbox" },
                            domProps: {
                              value: item,
                              checked: Array.isArray(_vm.selected)
                                ? _vm._i(_vm.selected, item) > -1
                                : _vm.selected
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.selected,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = item,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.selected = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.selected = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.selected = $$c
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
                                  return _vm.onDoubleClickItem(item)
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
                    }),
                    0
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
                _vm._v(_vm._s(_vm.lastSelect.path))
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