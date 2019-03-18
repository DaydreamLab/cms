webpackJsonp([0,2,3,4,5,6],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/components/editor/Editor.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editor: null
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
  methods: {
    initCKEditor: function initCKEditor() {
      var _this = this;

      ClassicEditor.create(document.querySelector("#" + this.id), {
        autosave: {
          save: function save(editor) {
            return _this.submit_data[_this.field] = editor.getData();
          }
        }
      }).then(function (editor) {
        _this.editor = editor;
      }).catch(function (error) {});
    }
  },

  mounted: function mounted() {
    this.initCKEditor();
  },

  watch: {
    submit_data: {
      deep: true,
      handler: function handler(v) {
        this.editor.setData(this.submit_data[this.field]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/components/media-input/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media__ = __webpack_require__("./resources/assets/admin/components/media/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Media: __WEBPACK_IMPORTED_MODULE_0_cps_media__["a" /* default */] },
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
      this.dialogVisible = false;
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/components/media/Media.vue":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var path = __webpack_require__("./node_modules/path-browserify/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
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
      formData.append("files[]", params.file, params.file.name);
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
      this.params.dir = path.dirname(this.params.path) !== "." ? path.dirname(this.params.path) : "/";
      this.onGetFiles();
      this.selected_filepath.push(this.params.path);
    },
    init: function init() {
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
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    selected_filepath: function selected_filepath(value) {
      this.$emit("onSelectionChange", value);
    },
    "params.dir": function paramsDir(value) {
      this.$refs.folderTree.setCurrentKey(this.params.dir);
    },
    FilePath: function FilePath(v) {
      this.params.path = v;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/api/edit.vue":
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
  name: "api-edit",
  data: function data() {
    return {
      params: {
        id: "",
        pid: 1
      },
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
      toolbar: {
        type: "edit"
      },
      default_value: {
        asset_id: 1,
        url: "",
        method: ""
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
      this.$$api_api_save({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path,
                query: {
                  id: data.items.id,
                  pid: data.items.parent_id
                }
              });
              break;
            case "savenclose":
              _this.onCancel();
              break;
            case "savenadd":
              _this.$router.push({
                path: _this.$route.path
              });
              _this.$router.go(0);
              break;
          }
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
    onUpdateParams: function onUpdateParams() {
      var _this3 = this;

      this.params.id = parseInt(this.$route.query.id) || "";

      this.$$api_asset_list({
        fn: function fn(_ref4) {
          var data = _ref4.data;

          _this3.fields[0].list = data.items;
        }
      });
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/api/list.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "api-list",
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
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
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
     * Searchbar
     */
    onSearch: function onSearch(_ref) {
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
    onSearchReset: function onSearchReset() {
      this.$router.push({
        path: this.$route.path
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref2) {
      var _this2 = this;

      var ids = _ref2.ids,
          state = _ref2.state;

      this.$$api_api_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref3) {
          var msg = _ref3.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref4) {
      var _this3 = this;

      var ids = _ref4.ids,
          datas = _ref4.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_api_delete({
          data: { ids: ids },
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this3.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref6) {
      var data = _ref6.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id,
          name: data.name
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this4 = this;

      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref7.page,
          pageSize = _ref7.pageSize,
          _fn = _ref7.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this4.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_api_list({
        data: data,
        fn: function fn(_ref8) {
          var data = _ref8.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    },
    init: function init() {
      this.onGetList();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/edit.vue":
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
  name: "asset-edit",
  data: function data() {
    var _this = this;

    return {
      params: {
        id: "",
        pid: 1
      },
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
              _this.fields[3].prepend_value = "pages/";
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
          switch (type) {
            case "save":
              _this2.$router.push({
                path: _this2.$route.path,
                query: {
                  id: data.items.id,
                  pid: data.items.parent_id
                }
              });
              break;
            case "savenclose":
              _this2.onCancel();
              break;
            case "savenadd":
              _this2.$router.push({
                path: _this2.$route.path
              });
              _this2.$router.go(0);
              break;
          }
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
    onUpdateParams: function onUpdateParams() {
      var _this5 = this;

      this.params.id = parseInt(this.$route.query.id) || "";
      this.params.pid = parseInt(this.$route.query.pid) || 1;

      // parent_id list

      if (this.params.pid === 1) {
        this.fields[3].prepend_value = "src/layout";
      } else {
        this.fields[3].prepend_value = "pages/";
      }

      if (!this.$store.getters.asset_list) {
        this.$$api_asset_listOption({
          fn: function fn(_ref7) {
            var data = _ref7.data;

            _this5.$store.dispatch("update_option_related_list", {
              type: "asset",
              data: data.items
            });
          }
        });
      }
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/grant/group.vue":
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
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              _this.onCancel();
              break;
            case "savenadd":
              _this.$router.push({
                path: _this.$route.path
              });
              _this.$router.go(0);
              break;
          }
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
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/group/edit.vue":
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
  name: "asset-group-edit",
  data: function data() {
    return {
      params: {
        id: "",
        pid: 1
      },
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
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path,
                query: {
                  id: data.items.id,
                  pid: data.items.parent_id
                }
              });
              break;
            case "savenclose":
              _this.onCancel();
              break;
            case "savenadd":
              _this.$router.push({
                path: _this.$route.path
              });
              _this.$router.go(0);
              break;
          }
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
    },
    onUpdateParams: function onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/group/list.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "asset-group-list",
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
      fields: [{
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }, {
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
      }],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
     * Searchbar
     */
    onSearch: function onSearch(_ref5) {
      var data = _ref5.data;

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
    onSearchReset: function onSearchReset() {
      this.$router.push({
        path: this.$route.path
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref6) {
      var _this2 = this;

      var ids = _ref6.ids,
          state = _ref6.state;

      this.$$api_asset_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref8) {
      var _this3 = this;

      var ids = _ref8.ids,
          datas = _ref8.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_asset_delete({
          data: { ids: ids },
          fn: function fn(_ref9) {
            var data = _ref9.data;

            _this3.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref10) {
      var data = _ref10.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id,
          name: data.name
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this4 = this;

      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref11.page,
          pageSize = _ref11.pageSize,
          _fn = _ref11.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this4.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_asset_listGroup({
        data: data,
        fn: function fn(_ref12) {
          var data = _ref12.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    },
    init: function init() {
      this.onGetList();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/list.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "asset-list",
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
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
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
     * Searchbar
     */
    onSearch: function onSearch(_ref8) {
      var data = _ref8.data;

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
    onSearchReset: function onSearchReset() {
      this.$router.push({
        path: this.$route.path
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref9) {
      var _this2 = this;

      var ids = _ref9.ids,
          state = _ref9.state;

      this.$$api_asset_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref10) {
          var msg = _ref10.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref11) {
      var _this3 = this;

      var ids = _ref11.ids,
          datas = _ref11.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_asset_delete({
          data: { ids: ids },
          fn: function fn(_ref12) {
            var data = _ref12.data;

            _this3.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref13) {
      var data = _ref13.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id,
          name: data.name
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this4 = this;

      var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref14.page,
          pageSize = _ref14.pageSize,
          _fn = _ref14.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this4.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_asset_list({
        data: data,
        fn: function fn(_ref15) {
          var data = _ref15.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    },
    init: function init() {
      this.onGetList();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/category/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_editor__ = __webpack_require__("./resources/assets/admin/components/editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mixins_edit_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/edit_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Editor: __WEBPACK_IMPORTED_MODULE_0_cps_editor__["a" /* default */] },
  mixins: [__WEBPACK_IMPORTED_MODULE_1_mixins_edit_mixin_js__["a" /* default */]],
  data: function data() {
    return {
      params: {
        id: "",
        pid: ""
      },
      toolbar: {
        type: "edit"
      },
      fields: {
        parent_id: {
          list: this.$store.getters.category_list,
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
        path: "",
        description: "",
        parent_id: 1,
        state: 1,
        access: 2,
        language: "",
        content_type: "article",
        updater: "",
        ordering: "",
        metadesc: "",
        metakeywords: ""
      }
    };
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
          _this.onCancel();
        }
      });
    },
    onSubmit: function onSubmit(_ref2) {
      var _this2 = this;

      var data = _ref2.data,
          info = _ref2.info,
          type = _ref2.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_category_save({
        data: data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$message.success(msg);
          switch (type) {
            case "save":
              _this2.$router.push({
                path: _this2.$route.path,
                query: {
                  id: data.items.id,
                  pid: data.items.parent_id
                }
              });
              break;
            case "savenadd":
              _this2.$router.push({
                path: _this2.$route.path
              });
              _this2.$router.go(0);
              break;
            case "savenclose":
              _this2.onCancel();
              break;
          }
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
    },
    onUpdateParams: function onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
      this.params.pid = parseInt(this.$route.query.pid) || "";

      this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/category/list.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/list_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
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
        key: "path",
        label: this.$t("FIELD_CATEGORY_URL_LABEL")
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
        key: "language",
        label: this.$t("OPTION_LANGUAGE"),
        formatter: function formatter(item) {
          if (item.language === "*") return _this.$t("ALL_LANGUAGE");
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
          key: "access",
          type: "select",
          desc: this.$t("FIELD_ACCESS_LEVEL"),
          list: this.$store.getters.viewlevel_list,
          custom_attrs: {
            label: "title",
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
          key: "id",
          type: "select",
          desc: this.$t("OPTION_CATEGORY"),
          list: this.$store.getters.category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
          }
        }],
        default_value: {
          search: "",
          state: "",
          id: "",
          access: "",
          language: ""
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

      var checkout_data = void 0;
      if (ids) {
        checkout_data = ids;
      } else {
        checkout_data = [data.id];
      }
      this.$$api_category_checkout({
        data: {
          ids: checkout_data
        },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
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
          _this3.onGetList();
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

            _this4.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref16) {
      var data = _ref16.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this5 = this;

      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref17.page,
          pageSize = _ref17.pageSize,
          _fn = _ref17.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        if (field === "id" || field === "access") {
          _this5.searchbar.default_value[field] = parseInt(query[field]);
        } else {
          _this5.searchbar.default_value[field] = query[field];
        }
        data[field] = query[field];
      });

      this.$$api_category_list({
        data: data,
        fn: function fn(_ref18) {
          var data = _ref18.data;

          _this5.list_loading.flag = false;
          _this5.list = data.items;
          _this5.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  },
  created: function created() {
    this.initSearchbarParams();
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/group/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/group/list.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/list.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/item/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_editor__ = __webpack_require__("./resources/assets/admin/components/editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_media_input__ = __webpack_require__("./resources/assets/admin/components/media-input/index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_media_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cps_media_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mixins_edit_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/edit_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Editor: __WEBPACK_IMPORTED_MODULE_0_cps_editor__["a" /* default */], MediaInput: __WEBPACK_IMPORTED_MODULE_1_cps_media_input___default.a },
  mixins: [__WEBPACK_IMPORTED_MODULE_2_mixins_edit_mixin_js__["a" /* default */]],
  data: function data() {
    return {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
      fields: {
        category_id: {
          list: this.$store.getters.category_list,
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
        parent_id: 1,
        title: "",
        alias: "",
        introtext: "",
        description: "",
        tags: [],
        state: 1,
        category_id: "",
        featured: 0,
        language: "",
        access: 2,
        metadesc: "",
        metakeywords: "",
        introimage: "",
        image: "",
        image_sameas_introimage: false,
        ordering: ""
      },
      new_tag_value: ""
    };
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
          _this2.onCancel();
        }
      });
    },
    onSubmit: function onSubmit(_ref4) {
      var _this3 = this;

      var data = _ref4.data,
          info = _ref4.info,
          type = _ref4.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_item_save({
        data: data,
        fn: function fn(_ref5) {
          var data = _ref5.data,
              msg = _ref5.msg;

          _this3.$message.success(msg);
          switch (type) {
            case "save":
              _this3.$router.push({
                path: _this3.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              _this3.onCancel();
              break;
            case "savenadd":
              _this3.$router.push({
                path: _this3.$route.path
              });
              _this3.$router.go(0);
              break;
          }
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
    },
    onUpdateParams: function onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
      this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    },
    "default_value.image_sameas_introimage": function default_valueImage_sameas_introimage(v) {
      if (v) {
        this.default_value.image = this.default_value.introimage;
      } else {
        this.default_value.image = "";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/item/list.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/list_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
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
        width: "120",
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
            "-2": "TRASHED"
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
        key: "language",
        label: this.$t("OPTION_LANGUAGE"),
        width: "100",
        formatter: function formatter(item) {
          if (item.language === "*") return _this.$t("ALL_LANGUAGE");
        }
      }, {
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID"),
        width: "60"
      }],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
          list: this.$store.getters.category_list,
          custom_attrs: {
            label: "tree_list_title",
            value: "id"
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
        }, {
          key: "language",
          type: "select",
          desc: this.$t("OPTION_LANGUAGE"),
          list: this.$store.getters.language_list,
          custom_attrs: {
            label: "title",
            value: "sef"
          }
        }],
        default_value: {
          search: "",
          state: "",
          category_id: "",
          language: ""
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

      var checkout_data = void 0;
      if (ids) {
        checkout_data = ids;
      } else {
        checkout_data = [data.id];
      }
      this.$$api_item_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
        }
      });
    },
    onOrderChange: function onOrderChange(_ref8) {
      var id = _ref8.id,
          index_diff = _ref8.index_diff;

      this.$$api_item_ordering({
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
    onClickBtnUpdatFeatured: function onClickBtnUpdatFeatured(_ref10) {
      var _this3 = this;

      var ids = _ref10.ids,
          featured = _ref10.featured;

      this.$$api_item_updateFeatured({
        data: {
          ids: ids,
          featured: featured
        },
        fn: function fn(_ref11) {
          var msg = _ref11.msg;

          _this3.$message.success(msg);
          _this3.onGetList();
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
      var _this4 = this;

      var ids = _ref14.ids,
          state = _ref14.state;

      this.$$api_item_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref15) {
          var msg = _ref15.msg;

          _this4.$message.success(msg);
          _this4.onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref16) {
      var _this5 = this;

      var ids = _ref16.ids,
          datas = _ref16.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this5.$$api_item_delete({
          data: { ids: ids },
          fn: function fn(_ref17) {
            var data = _ref17.data;

            _this5.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref18) {
      var data = _ref18.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this6 = this;

      var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref19.page,
          pageSize = _ref19.pageSize,
          _fn = _ref19.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this6.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_item_list({
        data: data,
        fn: function fn(_ref20) {
          var data = _ref20.data;

          _this6.list_loading.flag = false;
          _this6.list = data.items;
          _this6.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  },
  created: function created() {
    this.initSearchbarParams();
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/media.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_media__ = __webpack_require__("./resources/assets/admin/components/media/index.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Media: __WEBPACK_IMPORTED_MODULE_0_cps_media__["a" /* default */] }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/tag/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/edit_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin_js__["a" /* default */]],
  data: function data() {
    return {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
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
    onSubmit: function onSubmit(_ref) {
      var _this = this;

      var data = _ref.data,
          info = _ref.info,
          type = _ref.type;

      if (this.params.id) {
        data.id = this.params.id;
      }

      this.$$api_tag_save({
        data: data,
        fn: function fn(_ref2) {
          var data = _ref2.data,
              msg = _ref2.msg;

          _this.$message.success(msg);
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              _this.onCancel();
              break;
            case "savenadd":
              _this.$router.push({
                path: _this.$route.path
              });
              _this.$router.go(0);
              break;
          }
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
    },
    onUpdateParams: function onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/tag/list.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/list_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
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
        key: "language",
        label: this.$t("OPTION_LANGUAGE"),
        formatter: function formatter(item) {
          if (item.language === "*") return _this.$t("ALL_LANGUAGE");
        }
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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

      var checkout_data = void 0;
      if (ids) {
        checkout_data = ids;
      } else {
        checkout_data = [data.id];
      }
      this.$$api_tag_checkout({
        data: { ids: checkout_data },
        fn: function fn(_ref7) {
          var msg = _ref7.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
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
          _this3.onGetList();
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

            _this4.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref14) {
      var data = _ref14.data;

      this.$router.push({
        path: this.$router.push(this.$route.path + "/edit"),
        query: {
          id: data.id
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this5 = this;

      var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref15.page,
          pageSize = _ref15.pageSize,
          _fn = _ref15.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this5.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_tag_list({
        data: data,
        fn: function fn(_ref16) {
          var data = _ref16.data;

          _this5.list_loading.flag = false;
          _this5.list = data.items;
          _this5.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/401.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/404.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/500.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/index.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/index.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils___ = __webpack_require__("./resources/assets/admin/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                // 取得後台語言設定
                _this2.$$api_setting_get({
                  fn: function fn(_ref2) {
                    var data = _ref2.data;

                    _this2.$store.commit("set_language", data.items.locale_admin);
                  }
                });
                // 取得後台管理網站列表
                _this2.$$api_site_list({
                  fn: function fn(_ref3) {
                    var data = _ref3.data;

                    _this2.$store.commit("update_site_list", data.items);
                  }
                });
                // 取得用戶 apis
                _this2.$$api_user_getAPIs({
                  fn: function fn(_ref4) {
                    var data = _ref4.data;

                    _this2.$store.dispatch("update_user_apis", data.items);
                  }
                });
                // 取得用戶 routes
                _this2.$$api_user_getRoutes({
                  fn: function fn(_ref5) {
                    var data = _ref5.data;

                    _this2.login_loading = false;

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
              _this2.login_loading = false;
            },
            tokenFlag: true
          });
        }
      });
    }
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/menu/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/menu/list.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/module/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/module/list.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/role/edit.vue":
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
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path,
                query: {
                  id: data.items.id,
                  pid: data.items.parent_id
                }
              });
              break;
            case "savenclose":
              _this.onCancel();
              break;
            case "savenadd":
              _this.$router.push({
                path: _this.$route.path
              });
              _this.$router.go(0);
              break;
          }
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
    },
    onUpdateParams: function onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/role/list.vue":
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
      list: [],
      list_loading: {
        flag: false
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
      }],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
     * Searchbar
     */
    onSearch: function onSearch(_ref7) {
      var data = _ref7.data;

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
    onSearchReset: function onSearchReset() {
      this.$router.push({
        path: this.$route.path
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref8) {
      var _this2 = this;

      var ids = _ref8.ids,
          state = _ref8.state;

      this.$$api_role_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref9) {
          var msg = _ref9.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref10) {
      var _this3 = this;

      var ids = _ref10.ids,
          datas = _ref10.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_role_delete({
          data: { ids: ids },
          fn: function fn(_ref11) {
            var data = _ref11.data;

            _this3.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref12) {
      var data = _ref12.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id,
          name: data.name
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this4 = this;

      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref13.page,
          pageSize = _ref13.pageSize,
          _fn = _ref13.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this4.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_role_list({
        data: data,
        fn: function fn(_ref14) {
          var data = _ref14.data;

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
      this.onGetList();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/language/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/edit_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin_js__["a" /* default */]],
  data: function data() {
    return {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
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
    onSubmit: function onSubmit(_ref2) {
      var _this2 = this;

      var data = _ref2.data,
          info = _ref2.info,
          type = _ref2.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_language_save({
        data: data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$message.success(msg);
          switch (type) {
            case "save":
              _this2.$router.push({
                path: _this2.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              _this2.onCancel();
              break;
            case "savenadd":
              _this2.$router.push({
                path: _this2.$route.path
              });
              _this2.$router.go(0);
              break;
          }
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
    },
    onUpdateParams: function onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
      this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/language/list.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/list_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__["a" /* default */]],
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
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
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
          _this2.onGetList();
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

            _this3.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref11) {
      var data = _ref11.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this4 = this;

      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref12.page,
          pageSize = _ref12.pageSize,
          _fn = _ref12.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this4.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });
      this.$$api_language_list({
        data: data,
        fn: function fn(_ref13) {
          var data = _ref13.data;

          _this4.list_loading.flag = false;
          _this4.list = data.items;
          _this4.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/setting.vue":
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
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/site/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/edit_mixin.js");
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_edit_mixin_js__["a" /* default */]],
  data: function data() {
    return {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
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
    onSubmit: function onSubmit(_ref2) {
      var _this2 = this;

      var data = _ref2.data,
          info = _ref2.info,
          type = _ref2.type;

      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_site_save({
        data: data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this2.$message.success(msg);
          switch (type) {
            case "save":
              _this2.$router.push({
                path: _this2.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              _this2.onCancel();
              break;
            case "savenadd":
              _this2.$router.push({
                path: _this2.$route.path
              });
              _this2.$router.go(0);
              break;
          }
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
    },
    onUpdateParams: function onUpdateParams() {
      this.params.id = parseInt(this.$route.query.id) || "";
      this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/site/list.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__ = __webpack_require__("./resources/assets/admin/mixins/list_mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_0_mixins_list_mixin_js__["a" /* default */]],
  data: function data() {
    return {
      list: [],
      list_loading: {
        flag: false
      },
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
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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

            _this.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref3) {
      var data = _ref3.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this2 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref4.page,
          pageSize = _ref4.pageSize,
          _fn = _ref4.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this2.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });
      this.$$api_site_list({
        data: data,
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this2.list_loading.flag = false;
          _this2.list = data.items;
          _this2.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
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
  data: function data() {
    var _ref;

    return _ref = {
      params: {
        id: ""
      },
      toolbar: {
        type: "edit"
      },
      fields: {
        group_ids: {
          list: [],
          custom_attrs: {
            children: "children",
            label: "title"
          }
        },
        role_ids: {
          list: [],
          custom_attrs: {
            children: "children",
            label: "title"
          }
        }
      }

    }, _defineProperty(_ref, "toolbar", {
      type: "edit"
    }), _defineProperty(_ref, "default_value", {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      block: "",
      reset_password: "0",
      role_ids: [],
      group_ids: []
    }), _ref;
  },

  methods: {
    onSubmit: function onSubmit(_ref2) {
      var _this = this;

      var data = _ref2.data,
          info = _ref2.info,
          type = _ref2.type;

      console.log(data);
      if (this.params.id) {
        data.id = this.params.id;
      }
      this.$$api_user_save({
        data: data,
        fn: function fn(_ref3) {
          var data = _ref3.data,
              msg = _ref3.msg;

          _this.$message.success(msg);
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              _this.onCancel();
              break;
            case "savenadd":
              _this.$router.push({
                path: _this.$route.path
              });
              _this.$router.go(0);
              break;
          }
        }
      });
    },
    onCancel: function onCancel() {
      this.$router.push(this.$route.path.replace("/edit", ""));
    },
    onGetView: function onGetView() {
      var _this2 = this;

      this.$$api_user_get({
        pathVar: this.params.id,
        fn: function fn(_ref4) {
          var data = _ref4.data;

          Object.keys(_this2.default_value).forEach(function (field) {
            if (field === "group_ids") {
              _this2.default_value[field] = data.items["groups"].map(function (item) {
                return item.id;
              });
            } else if (field === "role_ids") {
              _this2.default_value[field] = data.items["roles"].map(function (item) {
                return item.id;
              });
            } else {
              _this2.default_value[field] = data.items[field];
            }
          });
        }
      });
    },
    onUpdateParams: function onUpdateParams() {
      var _this3 = this;

      this.params.id = parseInt(this.$route.query.id) || "";

      this.$set(this.toolbar, "type", this.params.id ? "edit" : "add");

      this.$$api_user_listTreeGroup({
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this3.fields.group_ids.list = data.items;
        }
      });

      this.$$api_role_listTree({
        fn: function fn(_ref6) {
          var data = _ref6.data;

          _this3.fields.role_ids.list = data.items;
        }
      });
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    var _this4 = this;

    this.$$eventBus.$on("onClickUSERFormDataToolbar", function (opts) {
      switch (opts.type) {
        case "cancel":
          _this4.onCancel();
          break;
        case "save":
        case "savenclose":
        case "savenadd":
          _this4.onSubmit({
            ref: "form-data",
            type: opts.type,
            data: _this4.default_value
          });
          break;
        case "trash":
          _this4.onTrash();
          break;
      }
    });
    this.init();
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

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/group/edit.vue":
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
  name: "user-group-edit",
  data: function data() {
    return {
      params: {
        id: ""
      },
      fields: [{
        key: "title",
        desc: "Please enter group title",
        label: this.$t("FIELD_TITLE_LABEL")
      }, {
        key: "parent_id",
        type: "select",
        desc: "Please choose parent group",
        label: "Parent Group",
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
          switch (type) {
            case "save":
              _this.$router.push({
                path: _this.$route.path,
                query: {
                  id: data.items.id
                }
              });
              break;
            case "savenclose":
              _this.onCancel();
              break;
            case "savenadd":
              _this.$router.push({
                path: _this.$route.path
              });
              _this.$router.go(0);
              break;
          }
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
    onUpdateParams: function onUpdateParams() {
      var _this3 = this;

      this.params.id = parseInt(this.$route.query.id) || "";

      this.$$api_user_listOptionGroup({
        fn: function fn(_ref5) {
          var data = _ref5.data;

          _this3.fields[1].list = data.items;
        }
      });
    },
    init: function init() {
      this.onUpdateParams();

      if (this.params.id) {
        this.onGetView();
      }
    }
  },
  created: function created() {
    this.init();
  },

  watch: {
    $route: function $route() {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/group/list.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "user-group-list",
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
      fields: [{
        key: "tree_title",
        label: this.$t("FIELD_TITLE_LABEL"),
        type: "editable"
      }, {
        width: "60",
        key: "id",
        label: this.$t("LIST_DATA_HEADING_ID")
      }],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
     * Searchbar
     */
    onSearch: function onSearch(_ref3) {
      var data = _ref3.data;

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
    onSearchReset: function onSearchReset() {
      this.$router.push({
        path: this.$route.path
      });
    },

    /**
     * Toolbar
     */
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref4) {
      var _this2 = this;

      var ids = _ref4.ids,
          datas = _ref4.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this2.$$api_user_deleteGroup({
          data: { ids: ids },
          fn: function fn(_ref5) {
            var data = _ref5.data;

            _this2.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref6) {
      var data = _ref6.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id,
          name: data.name
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this3 = this;

      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref7.page,
          pageSize = _ref7.pageSize,
          _fn = _ref7.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this3.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_user_listGroup({
        data: data,
        fn: function fn(_ref8) {
          var data = _ref8.data;

          _this3.list_loading.flag = false;
          _this3.list = data.items;
          _this3.paginations.total = data.pagination.total;

          _fn && _fn();
        }
      });
    },
    init: function init() {
      this.onGetList();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/list.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "user-list",
  data: function data() {
    var _this = this;

    return {
      list: [],
      list_loading: {
        flag: false
      },
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
        label: this.$t("USER_OPTION_GROUP"),
        formatter: function formatter(item) {
          return item.groups.length > 2 ? "Multiple Groups" : item.groups.map(function (el) {
            return el.title;
          }).join(", ");
        }
      }, {
        key: "email",
        label: this.$t("USER_FIELD_EMAIL")
      }],
      paginations: {
        current_page: 1,
        total: 0,
        page_size: 10,
        page_sizes: [10, 15, 20, 25],
        layout: "total, sizes, prev, pager, next, jumper"
      },
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
          desc: this.$t("USER_OPTION_GROUP"),
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
     * Searchbar
     */
    onSearch: function onSearch(_ref7) {
      var data = _ref7.data;

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
    onSearchReset: function onSearchReset() {
      this.$router.push({
        path: this.$route.path
      });
    },

    /**
     * Toolbar
     */
    onClickBtnUpdateState: function onClickBtnUpdateState(_ref8) {
      var _this2 = this;

      var ids = _ref8.ids,
          state = _ref8.state;

      this.$$api_user_updateState({
        data: {
          ids: ids,
          state: state
        },
        fn: function fn(_ref9) {
          var msg = _ref9.msg;

          _this2.$message.success(msg);
          _this2.onGetList();
        }
      });
    },
    onClickBtnBatchDelete: function onClickBtnBatchDelete(_ref10) {
      var _this3 = this;

      var ids = _ref10.ids,
          datas = _ref10.datas;

      this.$confirm(this.$t("GLOBAL_CONFIRM_DELETE")).then(function () {
        _this3.$$api_user_delete({
          data: { ids: ids },
          fn: function fn(_ref11) {
            var data = _ref11.data;

            _this3.onGetList();
          }
        });
      });
    },
    onClickBtnEdit: function onClickBtnEdit(_ref12) {
      var data = _ref12.data;

      this.$router.push({
        path: this.$route.path + "/edit",
        query: {
          id: data.id,
          pid: data.parent_id,
          name: data.name
        }
      });
    },
    onClickBtnAdd: function onClickBtnAdd() {
      this.$router.push(this.$route.path + "/edit");
    },
    onGetList: function onGetList() {
      var _this4 = this;

      var _ref13 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          page = _ref13.page,
          pageSize = _ref13.pageSize,
          _fn = _ref13.fn;

      this.list_loading.flag = true;

      var query = this.$route.query;

      this.paginations.current_page = page || parseInt(query.page) || 1;
      this.paginations.page_size = pageSize || parseInt(query.page_size) || this.paginations.page_size;

      var data = {
        page: this.paginations.current_page,
        limit: this.paginations.page_size
      };

      Object.keys(query).forEach(function (field) {
        _this4.searchbar.default_value[field] = query[field];
        data[field] = query[field];
      });

      this.$$api_user_list({
        data: data,
        fn: function fn(_ref14) {
          var data = _ref14.data;

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
        fn: function fn(_ref15) {
          var data = _ref15.data;

          _this5.searchbar.fields[3].list = data.items;
        }
      });
    },
    init: function init() {
      this.onUpdateParams();
      this.onGetList();
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    $route: function $route(to, from) {
      this.init();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue":
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1133600e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/asset/grant/group.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d279668\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/list.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1db45fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/login.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.login-wrapper[data-v-1db45fca] {\n  background: -webkit-gradient(linear, left top, right top, from(#3f6c95), to(#2f3855));\n  background: linear-gradient(to right, #3f6c95 0%, #2f3855 100%);\n  height: 100vh;\n}\n.login-form[data-v-1db45fca] {\n  position: absolute;\n  max-width: 600px;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: #fff;\n  border-radius: 4px;\n  padding: 30px;\n}\n.btn--help[data-v-1db45fca] {\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c6fbdd4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6fee58\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/list.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ff200df\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/system/setting.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38701f93\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a1fceac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.error-bg[data-v-3a1fceac] {\n  background-color: #2f3855;\n}\n.error-container[data-v-3a1fceac] {\n  min-height: 100vh;\n  color: #fff;\n}\n.error-content[data-v-3a1fceac] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3eb815c4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47b846ff\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496a1802\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/list.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-540cbcb3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58b23f6e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f2993a4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media/Media.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.content-container .el-main.media-main {\n  min-height: 500px;\n  padding: 10px;\n}\n.content-container .el-aside.media-aside {\n  padding: 10px;\n}\n.media-container {\n  background: #fff;\n}\n.media-container .el-header, .media-container .el-footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.media-container .el-header {\n    border-bottom: 1px solid #e6e6e6;\n}\n.media-container .el-footer {\n    border-top: 1px solid #e6e6e6;\n    color: #999999;\n}\n.media-container .el-aside {\n    border-right: 1px solid #e6e6e6;\n}\n.media-toolbar__item {\n  margin-right: 10px;\n}\n.media-create__item {\n  margin-bottom: 10px;\n}\n.media-footer {\n  width: 100%;\n}\n.file-list__table .el-table__row {\n  cursor: default;\n}\n.file-list__table .el-table__row .file-item__thumb {\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    vertical-align: middle;\n}\n.file-list__icon {\n  color: #606266;\n  padding: 10px;\n}\n.file-list__icon:before, .file-list__icon:after {\n    content: \"\";\n    display: table;\n}\n.file-list__icon .file-item__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.file-list__icon .file-item__type {\n    width: 3em;\n    height: 3em;\n}\n.file-list__icon .file-item__icon {\n    font-size: 3em;\n}\n.file-list__icon .file-item__thumb {\n    width: 100%;\n    height: 100%;\n}\n.file-list__icon .file-item__name {\n    margin-top: 10px;\n    padding: 2px 4px;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    line-height: initial;\n    max-height: 2.4em;\n    line-height: 1.2em;\n    white-space: pre-line;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    word-break: break-word;\n}\n.file-item {\n  width: 120px;\n  height: 80px;\n  float: left;\n  padding-right: 1.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.file-item__checkbox {\n    opacity: 0;\n    position: absolute;\n}\n.file-item.is-selected_filepath .file-item__name {\n    background: #2f3855;\n    color: #fff;\n    border-radius: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media-input/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e747af\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/media.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-905616dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/404.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Colors -------------------------- */\n/* Link -------------------------- */\n/* Background -------------------------- */\n/* Border -------------------------- */\n/* Navbar -------------------------- */\n/* Sidebar -------------------------- */\n/* Tab -------------------------- */\n/* Icon -------------------------- */\n/* Item -------------------------- */\n.error-code[data-v-905616dc] {\n  color: #E2C044;\n  font-size: 180px;\n}\n.error-type[data-v-905616dc] {\n  color: #D3D0CB;\n  font-size: 48px;\n}\n.error-desc[data-v-905616dc] {\n  color: #7A8092;\n  font-size: 24px;\n  margin-bottom: 60px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cccd7fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb5dcea2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/list.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1133600e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/asset/grant/group.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1133600e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/asset/grant/group.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("25596f48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1133600e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1133600e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./group.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d279668\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/list.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d279668\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/list.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("866cbfe6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d279668\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d279668\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1db45fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/login.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1db45fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/login.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("414ce1e4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1db45fca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1db45fca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c6fbdd4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c6fbdd4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("8fbe25be", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c6fbdd4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c6fbdd4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6fee58\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/list.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6fee58\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/list.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("62208ff8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6fee58\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6fee58\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ff200df\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/system/setting.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ff200df\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/system/setting.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("98ad2dcc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ff200df\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ff200df\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./setting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38701f93\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38701f93\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("25b2c6ed", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38701f93\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38701f93\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a1fceac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a1fceac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6029297e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a1fceac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a1fceac\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3eb815c4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3eb815c4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("77fc8346", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3eb815c4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3eb815c4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47b846ff\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47b846ff\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c26cbb4a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47b846ff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47b846ff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496a1802\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/list.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496a1802\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/list.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("858d628a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496a1802\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496a1802\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-540cbcb3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-540cbcb3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("74ab37a3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-540cbcb3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-540cbcb3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58b23f6e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58b23f6e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("5255c61f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58b23f6e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58b23f6e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f2993a4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media/Media.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f2993a4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media/Media.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7985fa14", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f2993a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Media.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f2993a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Media.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media-input/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media-input/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("25bf4ee5", content, false, {});
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

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e747af\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/media.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e747af\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/media.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("03da10eb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e747af\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./media.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e747af\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./media.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-905616dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/404.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-905616dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/404.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0b259eac", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-905616dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-905616dc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cccd7fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cccd7fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("545d53b3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cccd7fca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cccd7fca\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb5dcea2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/list.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb5dcea2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/list.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("61527efc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb5dcea2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb5dcea2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07b3b264\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/tag/edit.vue":
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
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*設定*/))
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
    require("vue-hot-reload-api")      .rerender("data-v-07b3b264", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f28ea10\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/tag/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-0f28ea10", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1133600e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/grant/group.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-1133600e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-11703778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/role/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-11703778", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1d279668\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/group/list.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-1d279668", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1db45fca\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/login.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-1db45fca", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-20b85ee4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/role/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-20b85ee4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-26fa5c62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/500.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-26fa5c62", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c6fbdd4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/group/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-2c6fbdd4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f6fee58\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/list.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-2f6fee58", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2ff200df\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/setting.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-2ff200df", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-337821a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/language/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-337821a0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38701f93\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-38701f93", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3a1fceac\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/index.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-3a1fceac", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3bef7565\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/item/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset,
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
    require("vue-hot-reload-api")      .rerender("data-v-3bef7565", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3eb815c4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-3eb815c4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41f96c35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/site/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-41f96c35", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47b846ff\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-47b846ff", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-496a1802\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/module/list.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-496a1802", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b379cd1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/item/edit.vue":
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
                            prop: "tags",
                            label: _vm.$t("OPTION_TAG") /*標籤*/
                          }
                        },
                        [
                          _c("div", { staticClass: "form-item__inner" }, [
                            _c(
                              "div",
                              { staticClass: "form-item-tags__wrapper" },
                              [
                                _vm._l(_vm.default_value.tags, function(tag) {
                                  return _c(
                                    "el-tag",
                                    {
                                      key: tag.id,
                                      attrs: {
                                        closable: "",
                                        "disable-transitions": false
                                      },
                                      on: {
                                        close: function($event) {
                                          _vm.handleTagClose(tag)
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(tag.title))]
                                  )
                                }),
                                _vm._v(" "),
                                _c("el-autocomplete", {
                                  attrs: {
                                    "value-key": "title",
                                    "fetch-suggestions": _vm.queryTagSearch,
                                    "trigger-on-focus": false
                                  },
                                  on: { select: _vm.handleTagConfirm },
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
                                      return _vm.handleTagConfirm($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.new_tag_value,
                                    callback: function($$v) {
                                      _vm.new_tag_value = $$v
                                    },
                                    expression: "new_tag_value"
                                  }
                                })
                              ],
                              2
                            )
                          ])
                        ]
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
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*設定*/))
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
                      _vm._l(_vm.fields.category_id.list, function(item) {
                        return _c("el-option", {
                          key: item[_vm.fields.category_id.custom_attrs.value],
                          attrs: {
                            label:
                              item[_vm.fields.category_id.custom_attrs.label],
                            value:
                              item[_vm.fields.category_id.custom_attrs.value]
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
                      _vm._l(_vm.fields.access.list, function(item) {
                        return _c("el-option", {
                          key: item[_vm.fields.access.custom_attrs.value],
                          attrs: {
                            label: item[_vm.fields.access.custom_attrs.label],
                            value: item[_vm.fields.access.custom_attrs.value]
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
                      _vm._l(_vm.fields.language.list, function(item) {
                        return _c("el-option", {
                          key: item.id,
                          attrs: {
                            label: item[_vm.fields.language.custom_attrs.label],
                            value: item[_vm.fields.language.custom_attrs.value]
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
    require("vue-hot-reload-api")      .rerender("data-v-4b379cd1", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5139bbc3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-5139bbc3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-514193a1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/site/edit.vue":
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
                            _vm._l(_vm.fields.sef.list, function(item) {
                              return _c("el-option", {
                                key: item.id,
                                attrs: {
                                  label:
                                    item[_vm.fields.sef.custom_attrs.label],
                                  value: item[_vm.fields.sef.custom_attrs.value]
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
    require("vue-hot-reload-api")      .rerender("data-v-514193a1", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52087078\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/language/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-52087078", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-540cbcb3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-card",
        [
          _c(
            "div",
            {
              staticClass: "clearfix",
              attrs: { slot: "header" },
              slot: "header"
            },
            [_c("span", [_vm._v("帳號密碼列表")])]
          ),
          _vm._v(" "),
          _c(
            "el-table",
            {
              staticStyle: { width: "100%" },
              attrs: { data: _vm.user_list, stripe: "" }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "email", label: "帳號" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "password", label: "密碼" }
              }),
              _vm._v(" "),
              _c("el-table-column", { attrs: { prop: "group", label: "群組" } })
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
    require("vue-hot-reload-api")      .rerender("data-v-540cbcb3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-58b23f6e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/module/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-58b23f6e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f2993a4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/components/media/Media.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-5f2993a4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6081e32f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/edit.vue":
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
                      _c("el-tree", {
                        attrs: {
                          data: _vm.fields.group_ids.list,
                          "show-checkbox": "",
                          "node-key": "id",
                          "default-checked-keys": _vm.default_value.group_ids,
                          "default-expanded-keys": _vm.default_value.group_ids,
                          props: _vm.fields.group_ids.custom_attrs,
                          "check-strictly": ""
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
                "el-tab-pane",
                {
                  directives: [
                    {
                      name: "can",
                      rawName: "v-can",
                      value: "grant_role",
                      expression: "'grant_role'"
                    }
                  ],
                  attrs: {
                    label: _vm.$t("USER_TAB_ASSIGN_ROLE") /*指定會員角色*/
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
                      _c("el-tree", {
                        attrs: {
                          data: _vm.fields.role_ids.list,
                          "show-checkbox": "",
                          "node-key": "id",
                          "default-checked-keys": _vm.default_value.role_ids,
                          props: _vm.fields.group_ids.custom_attrs,
                          "check-strictly": ""
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
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6081e32f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60d31bef\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/components/media-input/index.vue":
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f421a5a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/category/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onClickBtnCheckout: _vm.onClickBtnCheckout,
          onClickBtnBatchTrash: _vm.onClickBtnBatchTrash,
          onClickBtnBatchRestore: _vm.onClickBtnBatchRestore,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset,
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
    require("vue-hot-reload-api")      .rerender("data-v-6f421a5a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f998990\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-6f998990", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74e747af\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/media.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-74e747af", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7dde6793\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/group/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-7dde6793", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e8a41c6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/category/edit.vue":
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
                            prop: "path",
                            label: _vm.$t(
                              "FIELD_CATEGORY_URL_LABEL"
                            ) /*網站分類網址*/
                          }
                        },
                        [
                          _c("el-input", {
                            model: {
                              value: _vm.default_value.path,
                              callback: function($$v) {
                                _vm.$set(_vm.default_value, "path", $$v)
                              },
                              expression: "default_value.path"
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
          _vm._v(_vm._s(_vm.$t("GLOBAL_FIELDSET_OPTIONS") /*設定*/))
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
                      _vm._l(_vm.fields.parent_id.list, function(item) {
                        return _c("el-option", {
                          key: item[_vm.fields.parent_id.value],
                          attrs: {
                            label:
                              item[_vm.fields.parent_id.custom_attrs.label],
                            value: item[_vm.fields.parent_id.custom_attrs.value]
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
                            label: _vm.$t("OPTION_CONTENT_TYPE_MENU") /*選單*/,
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
                      _vm._l(_vm.fields.access.list, function(item) {
                        return _c("el-option", {
                          key: item[_vm.fields.access.custom_attrs.value],
                          attrs: {
                            label: item[_vm.fields.access.custom_attrs.label],
                            value: item[_vm.fields.access.custom_attrs.value]
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
                      _vm._l(_vm.fields.language.list, function(item) {
                        return _c("el-option", {
                          key: item.id,
                          attrs: {
                            label: item[_vm.fields.language.custom_attrs.label],
                            value: item[_vm.fields.language.custom_attrs.value]
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
    require("vue-hot-reload-api")      .rerender("data-v-7e8a41c6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8405f5e4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/api/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-8405f5e4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8e29d868\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset,
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
    require("vue-hot-reload-api")      .rerender("data-v-8e29d868", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8f4c730c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/components/editor/Editor.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "ckeditor" }, [
    _c("div", { attrs: { id: _vm.id } }, [
      _vm._v(_vm._s(this.submit_data[this.field]))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8f4c730c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-905616dc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/404.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-905616dc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-90aaa3e2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/401.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-90aaa3e2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a29644bc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/api/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-a29644bc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a6e40770\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/group/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-a6e40770", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c5745648\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/group/list.vue":
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
          onClickBtnAdd: _vm.onClickBtnAdd,
          onClickBtnEdit: _vm.onClickBtnEdit,
          onClickBtnBatchDelete: _vm.onClickBtnBatchDelete,
          onChangeCurrentPage: _vm.onChangeCurPage,
          onChangePageSize: _vm.onChangePageSize,
          onSearch: _vm.onSearch,
          onSearchReset: _vm.onSearchReset
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
    require("vue-hot-reload-api")      .rerender("data-v-c5745648", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cccd7fca\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/menu/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-cccd7fca", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5b2e202\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/group/edit.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-e5b2e202", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-eb5dcea2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/menu/list.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-eb5dcea2", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/admin/components/editor/Editor.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/components/editor/Editor.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8f4c730c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/components/editor/Editor.vue")
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
Component.options.__file = "resources/assets/admin/components/editor/Editor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8f4c730c", Component.options)
  } else {
    hotAPI.reload("data-v-8f4c730c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/components/editor/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Editor_vue__ = __webpack_require__("./resources/assets/admin/components/editor/Editor.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Editor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Editor_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Editor_vue___default.a);

/***/ }),

/***/ "./resources/assets/admin/components/media-input/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60d31bef\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media-input/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/components/media-input/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-60d31bef\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/components/media-input/index.vue")
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

/***/ "./resources/assets/admin/components/media/Media.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f2993a4\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/components/media/Media.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/components/media/Media.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f2993a4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/components/media/Media.vue")
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
Component.options.__file = "resources/assets/admin/components/media/Media.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f2993a4", Component.options)
  } else {
    hotAPI.reload("data-v-5f2993a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/components/media/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Media_vue__ = __webpack_require__("./resources/assets/admin/components/media/Media.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Media_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Media_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Media_vue___default.a);

/***/ }),

/***/ "./resources/assets/admin/mixins/edit_mixin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    created: function created() {
        var _this = this;

        this.$$eventBus.$on("onClickCMSFormDataToolbar", function (opts) {
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
    },
    mounted: function mounted() {
        this.$$eventBus.$emit("onInitToolbar", {
            name: "CMSFormData",
            data: this.toolbar
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.$$eventBus.$off("onClickCMSFormDataToolbar");
    },

    methods: {
        // onAfterSubmit({ type, pid }){
        // }
        onCancel: function onCancel() {
            this.$router.push(this.$route.path.replace("/edit", ""));
        }
    }
});

/***/ }),

/***/ "./resources/assets/admin/mixins/list_mixin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        /**
         * Searchbar
         */
        onSearch: function onSearch(_ref) {
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
        onSearchReset: function onSearchReset() {
            this.$router.push({
                path: this.$route.path
            });
        },
        initSearchbarParams: function initSearchbarParams() {
            var _this = this;

            var params = ["category", "language", "viewlevel"];
            if (!this.$store.getters.category_list || !this.$store.getters.language_list || !this.$store.getters.viewlevel_list) {
                this.$$api_option_list({
                    data: {
                        types: params
                    },
                    fn: function fn(_ref2) {
                        var data = _ref2.data;

                        params.forEach(function (param) {
                            if (param === "language") {
                                data.items[param].unshift({
                                    sef: "*",
                                    title: _this.$t("ALL_LANGUAGE")
                                });
                            }
                            _this.$store.dispatch("update_option_related_list", {
                                type: param,
                                data: data.items[param]
                            });

                            _this.searchbar.fields[2].list = _this.$store.getters.viewlevel_list;
                            _this.searchbar.fields[3].list = _this.$store.getters.language_list;
                            _this.searchbar.fields[4].list = _this.$store.getters.category_list;
                        });
                    }
                });
            }
        },
        init: function init() {
            this.$set(this.toolbar, "type", this.$route.query.state === "-2" ? "trash" : "list");
            this.onGetList();
        }
    }
});

/***/ }),

/***/ "./resources/assets/admin/pages recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./resources/assets/admin/pages/index.vue",
	"./App": "./resources/assets/admin/pages/App.vue",
	"./App.vue": "./resources/assets/admin/pages/App.vue",
	"./api/edit": "./resources/assets/admin/pages/api/edit.vue",
	"./api/edit.vue": "./resources/assets/admin/pages/api/edit.vue",
	"./api/list": "./resources/assets/admin/pages/api/list.vue",
	"./api/list.vue": "./resources/assets/admin/pages/api/list.vue",
	"./asset/edit": "./resources/assets/admin/pages/asset/edit.vue",
	"./asset/edit.vue": "./resources/assets/admin/pages/asset/edit.vue",
	"./asset/grant/group": "./resources/assets/admin/pages/asset/grant/group.vue",
	"./asset/grant/group.vue": "./resources/assets/admin/pages/asset/grant/group.vue",
	"./asset/group/edit": "./resources/assets/admin/pages/asset/group/edit.vue",
	"./asset/group/edit.vue": "./resources/assets/admin/pages/asset/group/edit.vue",
	"./asset/group/list": "./resources/assets/admin/pages/asset/group/list.vue",
	"./asset/group/list.vue": "./resources/assets/admin/pages/asset/group/list.vue",
	"./asset/list": "./resources/assets/admin/pages/asset/list.vue",
	"./asset/list.vue": "./resources/assets/admin/pages/asset/list.vue",
	"./content/category/edit": "./resources/assets/admin/pages/content/category/edit.vue",
	"./content/category/edit.vue": "./resources/assets/admin/pages/content/category/edit.vue",
	"./content/category/list": "./resources/assets/admin/pages/content/category/list.vue",
	"./content/category/list.vue": "./resources/assets/admin/pages/content/category/list.vue",
	"./content/field/edit": "./resources/assets/admin/pages/content/field/edit.vue",
	"./content/field/edit.vue": "./resources/assets/admin/pages/content/field/edit.vue",
	"./content/field/group/edit": "./resources/assets/admin/pages/content/field/group/edit.vue",
	"./content/field/group/edit.vue": "./resources/assets/admin/pages/content/field/group/edit.vue",
	"./content/field/group/list": "./resources/assets/admin/pages/content/field/group/list.vue",
	"./content/field/group/list.vue": "./resources/assets/admin/pages/content/field/group/list.vue",
	"./content/field/list": "./resources/assets/admin/pages/content/field/list.vue",
	"./content/field/list.vue": "./resources/assets/admin/pages/content/field/list.vue",
	"./content/item/edit": "./resources/assets/admin/pages/content/item/edit.vue",
	"./content/item/edit.vue": "./resources/assets/admin/pages/content/item/edit.vue",
	"./content/item/list": "./resources/assets/admin/pages/content/item/list.vue",
	"./content/item/list.vue": "./resources/assets/admin/pages/content/item/list.vue",
	"./content/media": "./resources/assets/admin/pages/content/media.vue",
	"./content/media.vue": "./resources/assets/admin/pages/content/media.vue",
	"./content/tag/edit": "./resources/assets/admin/pages/content/tag/edit.vue",
	"./content/tag/edit.vue": "./resources/assets/admin/pages/content/tag/edit.vue",
	"./content/tag/list": "./resources/assets/admin/pages/content/tag/list.vue",
	"./content/tag/list.vue": "./resources/assets/admin/pages/content/tag/list.vue",
	"./error": "./resources/assets/admin/pages/error/index.vue",
	"./error/": "./resources/assets/admin/pages/error/index.vue",
	"./error/401": "./resources/assets/admin/pages/error/401.vue",
	"./error/401.vue": "./resources/assets/admin/pages/error/401.vue",
	"./error/404": "./resources/assets/admin/pages/error/404.vue",
	"./error/404.vue": "./resources/assets/admin/pages/error/404.vue",
	"./error/500": "./resources/assets/admin/pages/error/500.vue",
	"./error/500.vue": "./resources/assets/admin/pages/error/500.vue",
	"./error/index": "./resources/assets/admin/pages/error/index.vue",
	"./error/index.vue": "./resources/assets/admin/pages/error/index.vue",
	"./index": "./resources/assets/admin/pages/index.vue",
	"./index.vue": "./resources/assets/admin/pages/index.vue",
	"./login": "./resources/assets/admin/pages/login.vue",
	"./login.vue": "./resources/assets/admin/pages/login.vue",
	"./menu/edit": "./resources/assets/admin/pages/menu/edit.vue",
	"./menu/edit.vue": "./resources/assets/admin/pages/menu/edit.vue",
	"./menu/list": "./resources/assets/admin/pages/menu/list.vue",
	"./menu/list.vue": "./resources/assets/admin/pages/menu/list.vue",
	"./module/edit": "./resources/assets/admin/pages/module/edit.vue",
	"./module/edit.vue": "./resources/assets/admin/pages/module/edit.vue",
	"./module/list": "./resources/assets/admin/pages/module/list.vue",
	"./module/list.vue": "./resources/assets/admin/pages/module/list.vue",
	"./role/edit": "./resources/assets/admin/pages/role/edit.vue",
	"./role/edit.vue": "./resources/assets/admin/pages/role/edit.vue",
	"./role/list": "./resources/assets/admin/pages/role/list.vue",
	"./role/list.vue": "./resources/assets/admin/pages/role/list.vue",
	"./system/language/edit": "./resources/assets/admin/pages/system/language/edit.vue",
	"./system/language/edit.vue": "./resources/assets/admin/pages/system/language/edit.vue",
	"./system/language/list": "./resources/assets/admin/pages/system/language/list.vue",
	"./system/language/list.vue": "./resources/assets/admin/pages/system/language/list.vue",
	"./system/setting": "./resources/assets/admin/pages/system/setting.vue",
	"./system/setting.vue": "./resources/assets/admin/pages/system/setting.vue",
	"./system/site/edit": "./resources/assets/admin/pages/system/site/edit.vue",
	"./system/site/edit.vue": "./resources/assets/admin/pages/system/site/edit.vue",
	"./system/site/list": "./resources/assets/admin/pages/system/site/list.vue",
	"./system/site/list.vue": "./resources/assets/admin/pages/system/site/list.vue",
	"./user/edit": "./resources/assets/admin/pages/user/edit.vue",
	"./user/edit.vue": "./resources/assets/admin/pages/user/edit.vue",
	"./user/group/edit": "./resources/assets/admin/pages/user/group/edit.vue",
	"./user/group/edit.vue": "./resources/assets/admin/pages/user/group/edit.vue",
	"./user/group/grant/api": "./resources/assets/admin/pages/user/group/grant/api.vue",
	"./user/group/grant/api.vue": "./resources/assets/admin/pages/user/group/grant/api.vue",
	"./user/group/grant/asset": "./resources/assets/admin/pages/user/group/grant/asset.vue",
	"./user/group/grant/asset.vue": "./resources/assets/admin/pages/user/group/grant/asset.vue",
	"./user/group/list": "./resources/assets/admin/pages/user/group/list.vue",
	"./user/group/list.vue": "./resources/assets/admin/pages/user/group/list.vue",
	"./user/list": "./resources/assets/admin/pages/user/list.vue",
	"./user/list.vue": "./resources/assets/admin/pages/user/list.vue",
	"./user/viewlevel/edit": "./resources/assets/admin/pages/user/viewlevel/edit.vue",
	"./user/viewlevel/edit.vue": "./resources/assets/admin/pages/user/viewlevel/edit.vue",
	"./user/viewlevel/list": "./resources/assets/admin/pages/user/viewlevel/list.vue",
	"./user/viewlevel/list.vue": "./resources/assets/admin/pages/user/viewlevel/list.vue"
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
webpackContext.id = "./resources/assets/admin/pages recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/assets/admin/pages/api/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/api/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8405f5e4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/api/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/api/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8405f5e4", Component.options)
  } else {
    hotAPI.reload("data-v-8405f5e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/api/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/api/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a29644bc\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/api/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/api/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a29644bc", Component.options)
  } else {
    hotAPI.reload("data-v-a29644bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/asset/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f998990\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/asset/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f998990", Component.options)
  } else {
    hotAPI.reload("data-v-6f998990", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/asset/grant/group.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1133600e\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/asset/grant/group.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/grant/group.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1133600e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/grant/group.vue")
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
Component.options.__file = "resources/assets/admin/pages/asset/grant/group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1133600e", Component.options)
  } else {
    hotAPI.reload("data-v-1133600e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/asset/group/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/group/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-a6e40770\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/group/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/asset/group/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a6e40770", Component.options)
  } else {
    hotAPI.reload("data-v-a6e40770", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/asset/group/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/group/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c5745648\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/group/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/asset/group/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5745648", Component.options)
  } else {
    hotAPI.reload("data-v-c5745648", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/asset/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/asset/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-8e29d868\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/asset/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/asset/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e29d868", Component.options)
  } else {
    hotAPI.reload("data-v-8e29d868", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/category/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/category/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7e8a41c6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/category/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/content/category/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e8a41c6", Component.options)
  } else {
    hotAPI.reload("data-v-7e8a41c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/category/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/category/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6f421a5a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/category/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/content/category/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f421a5a", Component.options)
  } else {
    hotAPI.reload("data-v-6f421a5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/field/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3eb815c4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3eb815c4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3eb815c4"
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
Component.options.__file = "resources/assets/admin/pages/content/field/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3eb815c4", Component.options)
  } else {
    hotAPI.reload("data-v-3eb815c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/field/group/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c6fbdd4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/group/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c6fbdd4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/group/edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c6fbdd4"
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
Component.options.__file = "resources/assets/admin/pages/content/field/group/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c6fbdd4", Component.options)
  } else {
    hotAPI.reload("data-v-2c6fbdd4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/field/group/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d279668\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/group/list.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/group/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1d279668\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/group/list.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d279668"
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
Component.options.__file = "resources/assets/admin/pages/content/field/group/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d279668", Component.options)
  } else {
    hotAPI.reload("data-v-1d279668", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/field/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6fee58\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/field/list.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/field/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2f6fee58\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/field/list.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f6fee58"
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
Component.options.__file = "resources/assets/admin/pages/content/field/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f6fee58", Component.options)
  } else {
    hotAPI.reload("data-v-2f6fee58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/item/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/item/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4b379cd1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/item/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/content/item/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b379cd1", Component.options)
  } else {
    hotAPI.reload("data-v-4b379cd1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/item/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/item/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3bef7565\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/item/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/content/item/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bef7565", Component.options)
  } else {
    hotAPI.reload("data-v-3bef7565", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/media.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74e747af\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/content/media.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/media.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74e747af\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/media.vue")
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
Component.options.__file = "resources/assets/admin/pages/content/media.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74e747af", Component.options)
  } else {
    hotAPI.reload("data-v-74e747af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/tag/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/tag/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07b3b264\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/tag/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/content/tag/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07b3b264", Component.options)
  } else {
    hotAPI.reload("data-v-07b3b264", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/content/tag/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/content/tag/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f28ea10\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/content/tag/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/content/tag/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f28ea10", Component.options)
  } else {
    hotAPI.reload("data-v-0f28ea10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/error/401.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/401.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-90aaa3e2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/401.vue")
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
Component.options.__file = "resources/assets/admin/pages/error/401.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90aaa3e2", Component.options)
  } else {
    hotAPI.reload("data-v-90aaa3e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/error/404.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-905616dc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/404.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/404.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-905616dc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/404.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-905616dc"
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
Component.options.__file = "resources/assets/admin/pages/error/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-905616dc", Component.options)
  } else {
    hotAPI.reload("data-v-905616dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/error/500.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/500.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-26fa5c62\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/500.vue")
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
Component.options.__file = "resources/assets/admin/pages/error/500.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26fa5c62", Component.options)
  } else {
    hotAPI.reload("data-v-26fa5c62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/error/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3a1fceac\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/error/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/error/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3a1fceac\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/error/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3a1fceac"
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
Component.options.__file = "resources/assets/admin/pages/error/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a1fceac", Component.options)
  } else {
    hotAPI.reload("data-v-3a1fceac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-540cbcb3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-540cbcb3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/index.vue")
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
Component.options.__file = "resources/assets/admin/pages/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-540cbcb3", Component.options)
  } else {
    hotAPI.reload("data-v-540cbcb3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1db45fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js?indentedSyntax!./node_modules/sass-resources-loader/lib/loader.js?{\"resources\":\"/Users/daydreamlab/cms-frontend/resources/assets/admin/styles/_variables.sass\"}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/login.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1db45fca\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/login.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1db45fca"
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
Component.options.__file = "resources/assets/admin/pages/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1db45fca", Component.options)
  } else {
    hotAPI.reload("data-v-1db45fca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/menu/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cccd7fca\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/menu/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cccd7fca\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/menu/edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cccd7fca"
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
Component.options.__file = "resources/assets/admin/pages/menu/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cccd7fca", Component.options)
  } else {
    hotAPI.reload("data-v-cccd7fca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/menu/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-eb5dcea2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/menu/list.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/menu/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-eb5dcea2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/menu/list.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb5dcea2"
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
Component.options.__file = "resources/assets/admin/pages/menu/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb5dcea2", Component.options)
  } else {
    hotAPI.reload("data-v-eb5dcea2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/module/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58b23f6e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/module/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-58b23f6e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/module/edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58b23f6e"
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
Component.options.__file = "resources/assets/admin/pages/module/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58b23f6e", Component.options)
  } else {
    hotAPI.reload("data-v-58b23f6e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/module/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-496a1802\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/module/list.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/module/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-496a1802\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/module/list.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-496a1802"
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
Component.options.__file = "resources/assets/admin/pages/module/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-496a1802", Component.options)
  } else {
    hotAPI.reload("data-v-496a1802", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/role/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/role/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-20b85ee4\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/role/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/role/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20b85ee4", Component.options)
  } else {
    hotAPI.reload("data-v-20b85ee4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/role/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/role/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-11703778\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/role/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/role/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11703778", Component.options)
  } else {
    hotAPI.reload("data-v-11703778", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/system/language/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/language/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-337821a0\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/language/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/system/language/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-337821a0", Component.options)
  } else {
    hotAPI.reload("data-v-337821a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/system/language/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/language/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-52087078\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/language/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/system/language/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52087078", Component.options)
  } else {
    hotAPI.reload("data-v-52087078", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/system/setting.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2ff200df\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/system/setting.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/setting.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2ff200df\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/setting.vue")
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
Component.options.__file = "resources/assets/admin/pages/system/setting.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ff200df", Component.options)
  } else {
    hotAPI.reload("data-v-2ff200df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/system/site/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/site/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-514193a1\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/site/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/system/site/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-514193a1", Component.options)
  } else {
    hotAPI.reload("data-v-514193a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/system/site/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/system/site/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41f96c35\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/system/site/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/system/site/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41f96c35", Component.options)
  } else {
    hotAPI.reload("data-v-41f96c35", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6081e32f\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/user/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6081e32f", Component.options)
  } else {
    hotAPI.reload("data-v-6081e32f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/group/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/group/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5b2e202\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/group/edit.vue")
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
Component.options.__file = "resources/assets/admin/pages/user/group/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5b2e202", Component.options)
  } else {
    hotAPI.reload("data-v-e5b2e202", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/group/grant/api.vue":
/***/ (function(module, exports, __webpack_require__) {

var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
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
Component.options.__file = "resources/assets/admin/pages/user/group/grant/api.vue"

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/group/grant/asset.vue":
/***/ (function(module, exports, __webpack_require__) {

var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
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
Component.options.__file = "resources/assets/admin/pages/user/group/grant/asset.vue"

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/group/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/group/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7dde6793\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/group/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/user/group/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7dde6793", Component.options)
  } else {
    hotAPI.reload("data-v-7dde6793", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5139bbc3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/list.vue")
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
Component.options.__file = "resources/assets/admin/pages/user/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5139bbc3", Component.options)
  } else {
    hotAPI.reload("data-v-5139bbc3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/viewlevel/edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47b846ff\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-47b846ff\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/viewlevel/edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47b846ff"
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
Component.options.__file = "resources/assets/admin/pages/user/viewlevel/edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47b846ff", Component.options)
  } else {
    hotAPI.reload("data-v-47b846ff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/admin/pages/user/viewlevel/list.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":2,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-38701f93\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-38701f93\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/admin/pages/user/viewlevel/list.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-38701f93"
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
Component.options.__file = "resources/assets/admin/pages/user/viewlevel/list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38701f93", Component.options)
  } else {
    hotAPI.reload("data-v-38701f93", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});