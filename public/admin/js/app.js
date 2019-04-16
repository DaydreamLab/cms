webpackJsonp([7],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by sailengsi on 2017/7/2.
 */

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
        methods: {
            /**
             * 处理表单控件值复数类型，比如，获取的值和显示的文本不同时，除了返回需要提交表单的value值，还需要返回显示的文本，以防不时之需
             * @author    赛冷思
             * @date    2017-7-2
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
        },
        created: function created() {
            this.setDefaultFieldByNoDefaultValue();
            this.setArrayValue();
        },
        mounted: function mounted() {
            this.init();
        },

        watch: {
            $route: function $route() {
                this.init();
            }
        }
    };
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_configs_translation__ = __webpack_require__(79);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n___default.a);

// 引入 language 預設數值


var messages = {};
__WEBPACK_IMPORTED_MODULE_2_configs_translation__["c" /* SUPPORTED_LANGUAGES */].forEach(function (lang) {
    messages[lang.code] = Object.assign(__webpack_require__(80)("./" + lang.code).default, __webpack_require__(83)("./" + lang.code).default);
});
var i18n = new __WEBPACK_IMPORTED_MODULE_1_vue_i18n___default.a({
    locale: __WEBPACK_IMPORTED_MODULE_2_configs_translation__["a" /* DEFAULT_LANGUAGE */], // set locale
    fallbackLocale: __WEBPACK_IMPORTED_MODULE_2_configs_translation__["b" /* FALLBACK_LANGUAGE */],
    messages: messages // set locale messages
});

/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var files = __webpack_require__(81);
var locales = {};
files.keys().forEach(function (key) {
    locales = Object.assign(locales, files(key));
});

/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var files = __webpack_require__(82);
var locales = {};
files.keys().forEach(function (key) {
    locales = Object.assign(locales, files(key));
});

/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_configs_global__ = __webpack_require__(95);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Store = function () {
    function Store() {
        _classCallCheck(this, Store);

        this.store = window.localStorage;
        this.prefix = __WEBPACK_IMPORTED_MODULE_0_configs_global__["a" /* DB_PREFIX */];
    }

    _createClass(Store, [{
        key: "set",
        value: function set(key, value, fn) {
            try {
                value = JSON.stringify(value);
            } catch (e) {}

            this.store.setItem(this.prefix + key, value);

            fn && fn();
        }
    }, {
        key: "get",
        value: function get(key) {
            if (!key) {
                throw new Error("没有找到key。");
            }
            if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
                throw new Error("key不能是一个对象。");
            }
            var value = this.store.getItem(this.prefix + key);
            if (value !== null) {
                try {
                    value = JSON.parse(value);
                } catch (e) {}
            }
            return value;
        }
    }, {
        key: "remove",
        value: function remove(key) {
            this.store.removeItem(this.prefix + key);
        }
    }]);

    return Store;
}();

/* harmony default export */ __webpack_exports__["a"] = (new Store());

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_global__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_user__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_sys__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getters__ = __webpack_require__(107);









__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var Modules = {
    global: __WEBPACK_IMPORTED_MODULE_2__modules_global__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_3__modules_user__["a" /* default */],
    sys: __WEBPACK_IMPORTED_MODULE_4__modules_sys__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    modules: Modules,
    getters: __WEBPACK_IMPORTED_MODULE_5__getters__["a" /* default */]
}));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_routes__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajax__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__format_routes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__storage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__ajax__["a"]; });






/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"YES":"是","NO":"否","ALL":"所有","ALL_LANGUAGE":"所有","LOGIN":"登入","LOGOUT":"登出","PUBLISHED":"發佈的","UNPUBLISHED":"停止發佈的","ARCHIVED":"封存","TRASHED":"刪除至回收桶中","ENABLED":"啟用","DISABLED":"停用","TOOLBAR_ADD":"新增","TOOLBAR_EDIT":"編輯","TOOLBAR_TRASH":"回收","TOOLBAR_DELETE":"刪除","TOOLBAR_RESTORE":"恢復","TOOLBAR_SAVE":"儲存","TOOLBAR_SAVE_AND_ADD":"儲存&新增","TOOLBAR_SAVE_AND_CLOSE":"儲存&關閉","TOOLBAR_CANCEL":"取消","TOOLBAR_PUBLISH":"發佈","TOOLBAR_UNPUBLISH":"停止發佈","TOOLBAR_FEATURED":"精選","TOOLBAR_UNFEATURED":"取消精選","TOOLBAR_CHECKOUT":"回存","TOOLBAR_KEYWORDS":"輸入關鍵字"}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    PUBLISHED: "發佈的",
    UNPUBLISHED: "停止發佈的",
    ARCHIVED: "封存",
    TRASHED: "刪除至回收桶中",
    ENABLED: "啟用",
    DISABLED: "停用",
    YES: "是",
    NO: "否",
    ALL: "所有",
    ALL_LANGUAGE: "所有語言",
    LOGIN: "登入",
    LOGOUT: "登出",
    LOGIN_LOADING_TEXT: "登入中⋯⋯",
    GLOBAL_USERNAME: "帳號",
    GLOBAL_PASSWORD: "密碼",
    GLOBAL_REMEMBER_ME: "記住帳號",
    GLOBAL_ROOT: "根",
    CONFIRM_DELETE: "你確定想要移除？確認後將永久刪除選定的項目！",
    CONFIRM_LOGOUT: "你確定要登出？",
    ERROR_PLEASE_ENTER_USER_NAME: "請輸入帳號",
    ERROR_PLEASE_ENTER_VALID_EMAIL: "請輸入有效的Email",
    ERROR_PLEASE_ENTER_PASSWORD: "請輸入密碼",
    TOOLBAR_ADD: "新增",
    TOOLBAR_EDIT: "編輯",
    TOOLBAR_TRASH: "回收",
    TOOLBAR_DELETE: "刪除",
    TOOLBAR_RESTORE: "恢復",
    TOOLBAR_SAVE: "儲存",
    TOOLBAR_SAVE_AND_ADD: "儲存&新增",
    TOOLBAR_SAVE_AND_CLOSE: "儲存&關閉",
    TOOLBAR_CANCEL: "取消",
    TOOLBAR_PUBLISH: "發佈",
    TOOLBAR_UNPUBLISH: "停止發佈",
    TOOLBAR_FEATURED: "精選",
    TOOLBAR_UNFEATURED: "取消精選",
    TOOLBAR_CHECKOUT: "回存",
    TOOLBAR_KEYWORDS: "輸入關鍵字",
    SEARCHBAR_SEARCH: "搜尋",
    SEARCHBAR_RESET: "重置",
    SELECT: "選擇",
    OPTION_SELECT: "- 選擇{name} -",
    OPTION_STATE: "狀態",
    OPTION_CATEGORY: "分類",
    OPTION_PARENT_CATEGORY: "上層分類",
    OPTION_LANGUAGE: "語言",
    OPTION_FEATURED: "精選",
    OPTION_TAG: "標籤",
    OPTION_CONTENT_TYPE: "內容類型",
    OPTION_CONTENT_TYPE_ARTICLE: "文章",
    OPTION_CONTENT_TYPE_MENU: "選單",
    OPTION_CONTENT_TYPE_TIMELINE: "時間軸",
    OPTION_CONTENT_TYPE_SLIDESHOW: "Slideshow",
    OPTION_ACCESS_LEVEL: "存取層級",
    LIST_DATA_ID_LABEL: "ID",
    LIST_DATA_IMAGE_LABEL: "圖片",
    LIST_DATA_INTRO_IMAGE_LABEL: "摘要圖片",
    LIST_DATA_AUTHOR_LABEL: "作者",
    LIST_DATA_MODIFIED_DATE_LABEL: "修改日期",
    LIST_DATA_MODIFIED_BY_LABEL: "最後修改者",
    LIST_DATA_CREATED_DATE_LABEL: "建立日期",
    LIST_DATA_HITS_LABEL: "點擊",
    LIST_DATA_ACTIONS_LABEL: "操作",
    LIST_DATA_LOADING_TEXT: "載入中⋯⋯",
    // CONTENT_TAB_BASIC: "基本",
    // CONTENT_TAB_METADATA: "Metadata",
    // CONTENT_TAB_IMAGE: "圖片",
    CONTENT_ASIDE_SETTINGS: "設定",
    FIELD_TITLE_LABEL: "標題",
    FIELD_ALIAS_LABEL: "別名",
    FIELD_INTRO_TEXT_LABEL: "摘要文字",
    FIELD_DESCRIPTION_LABEL: "描述",
    FIELD_ITEM_DESCRIPTION_LABEL: "內容文字",
    FIELD_CATEGORY_DESCRIPTION_LABEL: "分類描述",
    FIELD_META_DESCRIPTION_LABEL: "Meta 說明",
    FIELD_META_KEYWORDS_LABEL: "Meta 關鍵字",
    FIELD_INTRO_IMAGE_LABEL: "摘要圖片",
    FIELD_MAIN_IMAGE_LABEL: "主要圖片",
    LANGUAGE_TAB_SITE_NAME_AND_METADATA: "網站名稱 & Metadata",
    LANGUAGE_FIELD_LANG_TAG_LABEL: "語言標籤",
    LANGUAGE_FIELD_LANG_CODE_LABEL: "網址語言代碼",
    LANGUAGE_FIELD_SITE_LABEL: "自訂網站名稱",
    MEDIA_UPLOAD_FILE: "上傳檔案",
    MEDIA_UPLOAD_FILE_LIMIT: "最大大小: 10MB",
    MEDIA_UPLOAD: "上傳",
    MEDIA_SELECT_FILE: "選擇檔案",
    MEDIA_CREATE_DIR: "新增資料夾",
    MEDIA_CREATE: "建立",
    MEDIA_NAME: "名稱",
    MEDIA_SIZE: "大小",
    MEDIA_TYPE: "種類",
    MEDIA_MODIFIED: "修改日期",
    USER_OPTION_ACTIVE: "啟用狀態",
    USER_OPTION_GROUP: "群組",
    USER_ACTIVATED: "已啟動",
    USER_UNACTIVATED: "未啟動",
    ASSET_SEPARATOR_SYSTEM_TITLE: "System",
    ASSET_SEPARATOR_FEATURES_TITLE: "Features",
    ASSET_USER_DASHBOARD_TITLE: "Dashboard",
    ASSET_USER_APIS_TITLE: "APIs",
    ASSET_USER_API_MANAGE_TITLE: "API Manage",
    ASSET_USER_API_EDIT_TITLE: "Edit API",
    ASSET_USER_ASSETS_TITLE: "Assets",
    ASSET_USER_ASSET_MANAGE_TITLE: "Asset Manage",
    ASSET_USER_ASSET_EDIT_TITLE: "Edit Asset",
    ASSET_USER_ASSET_ASSIGN_GROUP_TITLE: "Assign Group for Asset",
    ASSET_USER_ASSET_ASSIGN_API_TITLE: "Assign API for Asset",
    ASSET_USER_ASSET_GROUPS_TITLE: "Asset Groups",
    ASSET_USER_ASSET_GROUP_EDIT_TITLE: "Edit Asset Group",
    ASSET_USER_ROLES_TITLE: "Roles",
    ASSET_USER_ROLE_MANAGE_TITLE: "Role Manage",
    ASSET_USER_ROLE_ASSIGN_ASSET_TITLE: "Assign Asset for Role",
    ASSET_USER_ROLE_ASSIGN_API_TITLE: "Assign API for Role",
    ASSET_USER_ROLE_EDIT_TITLE: "Edit Role",
    ASSET_USER_USERS_TITLE: "Users",
    ASSET_USER_USER_MANAGE_TITLE: "User Manage",
    ASSET_USER_USER_EDIT_TITLE: "Edit User",
    ASSET_USER_USER_GROUPS_TITLE: "User Groups",
    ASSET_USER_USER_GROUP_EDIT_TITLE: "Edit User Group",
    ASSET_CMS_CONTENTS_TITLE: "Contents",
    ASSET_CMS_ITEMS_TITLE: "Items",
    ASSET_CMS_ITEM_EDIT_TITLE: "Edit Item",
    ASSET_CMS_CATEGORIES_TITLE: "Categories",
    ASSET_CMS_CATEGORY_EDIT_TITLE: "Edit Category",
    ASSET_CMS_TAGS_TITLE: "Tags",
    ASSET_CMS_TAG_EDIT_TITLE: "Edit Tag",
    ASSET_CMS_LANGUAGES_TITLE: "Languages",
    ASSET_CMS_LANGUAGE_EDIT_TITLE: "Edit Language",
    ASSET_CMS_MEDIA_MANAGER_TITLE: "Media Manager",
    ASSET_CMS_SETTINGS_TITLE: "Settings",
    ASSET_CMS_SITES_TITLE: "Sites",
    ASSET_CMS_SITE_EDIT_TITLE: "Edit Site"
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {"CONTENT_FIELD_INTRO_IMAGE_LABEL":"摘要圖片","CONTENT_FIELD_MAIN_IMAGE_LABEL":"主要圖片"}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"COM_CONTENT":"內容","COM_CONTENT_ITEM_MANAGER_TITLE":"項目","COM_CONTENT_ITEM_EDIT_TITLE":"編輯項目","COM_CONTENT_CATEGORY_MANAGER_TITLE":"分類","COM_CONTENT_CATEGORY_EDIT_TITLE":"編輯分類","COM_CONTENT_TAG_MANAGER_TITLE":"標籤","COM_CONTENT_TAG_EDIT_TITLE":"編輯標籤","COM_CONTENT_EXTRAFIELD_MANAGER_TITLE":"附加欄位","COM_CONTENT_EXTRAFIELD_EDIT_TITLE":"編輯附加欄位","COM_CONTENT_EXTRAFIELD_GROUP_MANAGER_TITLE":"附加欄位群組","COM_CONTENT_EXTRAFIELD_GROUP_EDIT_TITLE":"編輯附加欄位群組","COM_CONTENT_MEDIA_MANAGER_TITLE":"媒體管理","COM_CONTENT_SEARCH_STATISTICS_TITLE":"全站搜尋統計"}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"COM_DEV":"開發人員","COM_DEV_APIS_TITLE":"APIs","COM_DEV_API_MANAGER_TITLE":"API管理","COM_DEV_API_EDIT_TITLE":"編輯API","COM_DEV_ASSETS_TITLE":"資源","COM_DEV_ASSET_MANAGER_TITLE":"資源管理","COM_DEV_ASSET_EDIT_TITLE":"編輯資源","COM_DEV_ASSET_ASSIGN_GROUP_TITLE":"指定群組","COM_DEV_ASSET_ASSIGN_API_TITLE":"指定API","COM_DEV_ASSET_GROUP_MANAGER_TITLE":"資源群組","COM_DEV_ASSET_GROUP_EDIT_TITLE":"編輯資源群組"}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"YES":"是","NO":"否","ALL":"所有","ALL_LANGUAGE":"所有","NONE":"無","LOGIN":"登入","LOGIN_LOADING":"登入中⋯⋯","LOGOUT":"登出","PUBLISHED":"發佈的","UNPUBLISHED":"停止發佈的","PENDING":"待上架","EXPIRED":"已下架","ARCHIVED":"封存","TRASHED":"刪除至回收桶中","FEATURED":"精選","NOT_FEATURED":"非精選","ENABLED":"啟用","DISABLED":"停用","SELECT":"選擇","TOOLBAR_ADD":"新增","TOOLBAR_EDIT":"編輯","TOOLBAR_TRASH":"回收","TOOLBAR_DELETE":"刪除","TOOLBAR_RESTORE":"恢復","TOOLBAR_SAVE":"儲存","TOOLBAR_SAVE_AND_ADD":"儲存&新增","TOOLBAR_SAVE_AND_CLOSE":"儲存&關閉","TOOLBAR_CANCEL":"取消","TOOLBAR_PUBLISH":"發佈","TOOLBAR_UNPUBLISH":"停止發佈","TOOLBAR_FEATURED":"精選","TOOLBAR_UNFEATURED":"取消精選","TOOLBAR_CHECKOUT":"回存","TOOLBAR_KEYWORDS":"輸入關鍵字","SEARCHBAR_SEARCH":"搜尋","SEARCHBAR_RESET":"重置","LIST_DATA_HEADING_ID":"ID","LIST_DATA_HEADING_LANGUAGE":"語言","LIST_DATA_IMAGE_LABEL":"圖片","LIST_DATA_INTRO_IMAGE_LABEL":"摘要圖片","LIST_DATA_AUTHOR_LABEL":"作者","LIST_DATA_MODIFIED_DATE_LABEL":"修改日期","LIST_DATA_MODIFIED_BY_LABEL":"最後修改者","LIST_DATA_CREATED_DATE_LABEL":"建立日期","LIST_DATA_HITS_LABEL":"點擊","LIST_DATA_ACTIONS_LABEL":"操作","LIST_DATA_LOADING_TEXT":"載入中⋯⋯","OPTION_ORDER_BY":"排序依據","OPTION_ORDER":"排序方式","OPTION_SELECT":"- 選擇{name} -","OPTION_STATE":"狀態","OPTION_ITEM":"項目","OPTION_CATEGORY":"分類","OPTION_PARENT_CATEGORY":"上層分類","OPTION_LANGUAGE":"語言","OPTION_FEATURED":"精選","OPTION_TAG":"標籤","OPTION_TYPE":"類型","OPTION_GROUP":"群組","OPTION_PARENT_GROUP":"上層群組","OPTION_MENU":"選單","OPTION_PARENT_MENU":"上層選單","OPTION_EXTENSION":"擴充類型","OPTION_EXTENSION_MENU":"選單","OPTION_EXTENSION_MODULE":"模組","OPTION_EXTENSION_ITEM":"項目","OPTION_CONTENT_TYPE":"內容類型","OPTION_CONTENT_TYPE_ARTICLE":"文章","OPTION_CONTENT_TYPE_MENU":"菜單","OPTION_CONTENT_TYPE_TIMELINE":"時間軸","OPTION_CONTENT_TYPE_SLIDESHOW":"Slideshow","OPTION_CONTENT_TYPE_LINK":"連結","OPTION_FIELD_GROUP":"欄位群組","FIELD_TITLE_LABEL":"標題","FIELD_ALIAS_LABEL":"別名","FIELD_INTRO_TEXT_LABEL":"摘要文字","FIELD_DESCRIPTION_LABEL":"描述","FIELD_ITEM_DESCRIPTION_LABEL":"內容文字","FIELD_CATEGORY_DESCRIPTION_LABEL":"分類描述","FIELD_LANGUAGE_LABEL":"語言","FIELD_ACCESS_LEVEL":"存取層級","FIELD_PUBLISH_UP_DATE":"起始發佈日期","FIELD_PUBLISH_DOWN_DATE":"結束發佈日期","FIELD_META_DESCRIPTION_LABEL":"Meta 說明","FIELD_META_KEYWORDS_LABEL":"Meta 關鍵字","FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL":"與摘要圖片相同","FIELD_MEDIA_PREVIEW_SELECTED_IMAGE":"預覽","FIELD_MEDIA_PREVIEW_EMPTY":"沒有選擇圖片","FIELD_MENU_CHOOSE_MODULE":"選擇模組","FIELD_SEARCH_KEYWORD":"搜尋關鍵字","FIELD_SEARCH_COUNT":"次數","FIELD_SEARCH_START_DATE":"起始日期","FIELD_SEARCH_END_DATE":"結束日期","LANGUAGE_TAB_SITE_NAME_AND_METADATA":"網站名稱 & Metadata","LANGUAGE_FIELD_LANG_TAG_LABEL":"語言標籤","LANGUAGE_FIELD_LANG_CODE_LABEL":"網址語言代碼","LANGUAGE_FIELD_TYPE_LABEL":"語言類型","LANGUAGE_FIELD_TYPE_SYSTEM":"系統","LANGUAGE_FIELD_TYPE_CONTENT":"內容","LANGUAGE_FIELD_CUSTOM_SITE_NAME_LABEL":"自訂網站名稱","FIELD_TYPE_TEXTFIELD":"文字欄位","FIELD_TYPE_TEXTAREA":"文字區","FIELD_TYPE_SELECT":"下拉選單","FIELD_TYPE_MULTIPLESELECT":"多選列表","FIELD_TYPE_RADIO":"單選按鈕","FIELD_TYPE_LINK":"連結","FIELD_TYPE_DATE":"日期","FIELD_TYPE_IMAGE":"圖片","FIELD_TYPE_LINK_TEXT":"連結文字","FIELD_TYPE_LINK_OPEN_IN":"開啟於","FIELD_TYPE_LINK_OPEN_IN_SAME_WINDOW":"相同視窗","FIELD_TYPE_LINK_OPEN_IN_NEW_WINDOW":"新視窗","MENU_FIELD_SITE_NAME_LABEL":"網站","SITE_FIELD_URL_LABEL":"網址","MEDIA_UPLOAD_FILE":"上傳檔案","MEDIA_UPLOAD_FILE_LIMIT":"最大大小: 10MB","MEDIA_ITEMS":"項目:","MEDIA_UPLOAD":"上傳","MEDIA_SELECT_FILE":"選擇檔案","MEDIA_CREATE_DIR":"新增資料夾","MEDIA_CREATE":"建立","MEDIA_NAME":"名稱","MEDIA_SIZE":"大小","MEDIA_TYPE":"種類","MEDIA_MODIFIED":"修改日期","EDITOR_CHOOSE_IMAGE_FROM_MEDIA":"從媒體選擇圖片","USER_OPTION_ENABLED":"已啟用","USER_OPTION_ACTIVE":"啟用狀態","USER_ACTIVATED":"已啟動","USER_UNACTIVATED":"未啟動","USER_TAB_DETAIL":"會員資料","USER_TAB_ASSIGN_GROUP":"指定會員群組","USER_FIELD_FIRST_NAME":"姓氏","USER_FIELD_LAST_NAME":"名字","USER_FIELD_EMAIL":"Email","USER_FIELD_PASSWORD":"密碼","USER_FIELD_PASSWORD_CONFIRMATION":"再次輸入密碼","SETTING_FIELD_SITE_NAME_LABEL":"網站名稱","SETTING_FIELD_SITE_LANG_LABEL":"網站語言","SETTING_FIELD_ADMIN_LANG_LABEL":"管理區語言","GLOBAL_FIELDSET_OPTIONS":"選項","GLOBAL_FIELDSET_BASIC_OPTIONS":"基本","GLOBAL_FIELDSET_METADATA_OPTIONS":"Metadata","GLOBAL_FIELDSET_IMAGE_OPTIONS":"圖片","GLOBAL_FIELDSET_PARAMS_OPTIONS":"參數","GLOBAL_FIELDSET_FIELDS_OPTIONS":"附加欄位","GLOBAL_FIELDSET_CONTENT_MANAGE_PREFIX":"項目管理：{name}","GLOBAL_USERNAME":"帳號","GLOBAL_PASSWORD":"密碼","GLOBAL_REMEMBER_ME":"記住帳號","GLOBAL_ROOT":"根","GLOBAL_VIEW_SITE":"預覽網站","GLOBAL_HOMEPAGE":"首頁","GLOBAL_CONFIRM_DELETE":"你確定想要移除？確認後將永久刪除選定的項目！","GLOBAL_CONFIRM_LOGOUT":"你確定要登出？","ERROR":"錯誤","ERROR_PLEASE_ENTER_USER_NAME":"請輸入帳號","ERROR_PLEASE_ENTER_VALID_EMAIL":"請輸入有效的Email","ERROR_PLEASE_ENTER_PASSWORD":"請輸入密碼","ERROR_PLEASE_LOGIN":"請先登入"}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"COM_MENUS":"選單","COM_MENUS_ITEM_MANAGER_TITLE":"選單管理","COM_MENUS_ITEM_EDIT_TITLE":"編輯選單"}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"MOD_GLOBAL_MENU_CONTROL_PANEL":"控制台","MOD_GLOBAL_MENU_SYSTEM":"系統","MOD_GLOBAL_MENU_PAGE":"頁面"}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"COM_MODULES":"模組","COM_MODULES_ITEM_MANAGER_TITLE":"模組管理","COM_MODULES_ITEM_EDIT_TITLE":"編輯模組"}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"COM_SYSTEM_SETTINGS_TITLE":"全站設定","COM_SYSTEM_LANGUAGE_MANAGER_TITLE":"語言","COM_SYSTEM_LANGUAGE_EDIT_TITLE":"編輯語言","COM_SYSTEM_SITE_MANAGER_TITLE":"多網站","COM_SYSTEM_SITE_EDIT_TITLE":"編輯網站"}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {"COM_USERS":"會員","COM_USERS_USER_MANAGER_TITLE":"管理","COM_USERS_USER_EDIT_TITLE":"編輯會員","COM_USERS_GROUPS_MANAGER_TITLE":"群組管理","COM_USERS_GROUPS_EDIT_TITLE":"編輯會員群組","COM_USERS_GROUPS_ASSIGN_ASSET_TITLE":"指定資源","COM_USERS_GROUPS_ASSIGN_API_TITLE":"指定API","COM_USERS_LOG":"會員歷程紀錄"}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
    PUBLISHED: "發佈的",
    UNPUBLISHED: "停止發佈的",
    ARCHIVED: "封存",
    TRASHED: "刪除至回收桶中",
    ENABLED: "啟用",
    DISABLED: "停用",
    SYSTEM: "系統",
    CONTENT: "內容",
    YES: "是",
    NO: "否",
    ALL: "所有",
    ALL_LANGUAGE: "所有",
    LOGIN: "登入",
    LOGOUT: "登出",
    LOGIN_LOADING_TEXT: "登入中⋯⋯",

    ERROR: "錯誤",
    ERROR_PLEASE_ENTER_USER_NAME: "請輸入帳號",
    ERROR_PLEASE_ENTER_VALID_EMAIL: "請輸入有效的Email",
    ERROR_PLEASE_ENTER_PASSWORD: "請輸入密碼",
    ERROR_PLEASE_LOGIN: "請先登入",
    // TOOLBAR_ADD: "新增",
    // TOOLBAR_EDIT: "編輯",
    // TOOLBAR_TRASH: "回收",
    // TOOLBAR_DELETE: "刪除",
    // TOOLBAR_RESTORE: "恢復",
    // TOOLBAR_SAVE: "儲存",
    // TOOLBAR_SAVE_AND_ADD: "儲存&新增",
    // TOOLBAR_SAVE_AND_CLOSE: "儲存&關閉",
    // TOOLBAR_CANCEL: "取消",
    // TOOLBAR_PUBLISH: "發佈",
    // TOOLBAR_UNPUBLISH: "停止發佈",
    // TOOLBAR_FEATURED: "精選",
    // TOOLBAR_UNFEATURED: "取消精選",
    // TOOLBAR_CHECKOUT: "回存",
    // TOOLBAR_KEYWORDS: "輸入關鍵字",

    SELECT: "選擇",
    OPTION_SELECT: "- 選擇{name} -",
    OPTION_STATE: "狀態",
    OPTION_CATEGORY: "分類",
    OPTION_PARENT_CATEGORY: "上層分類",
    OPTION_LANGUAGE: "語言",
    OPTION_FEATURED: "精選",
    OPTION_TAG: "標籤",
    OPTION_TYPE: "類型",
    OPTION_CONTENT_TYPE: "內容類型",
    OPTION_CONTENT_TYPE_ARTICLE: "文章",
    OPTION_CONTENT_TYPE_MENU: "菜單",
    OPTION_CONTENT_TYPE_TIMELINE: "時間軸",
    OPTION_CONTENT_TYPE_SLIDESHOW: "Slideshow",
    OPTION_ACCESS_LEVEL: "存取層級",
    LIST_DATA_ID_LABEL: "ID",
    LIST_DATA_IMAGE_LABEL: "圖片",
    LIST_DATA_INTRO_IMAGE_LABEL: "摘要圖片",
    LIST_DATA_AUTHOR_LABEL: "作者",
    LIST_DATA_MODIFIED_DATE_LABEL: "修改日期",
    LIST_DATA_MODIFIED_BY_LABEL: "最後修改者",
    LIST_DATA_CREATED_DATE_LABEL: "建立日期",
    LIST_DATA_HITS_LABEL: "點擊",
    LIST_DATA_ACTIONS_LABEL: "操作",
    LIST_DATA_LOADING_TEXT: "載入中⋯⋯",
    // CONTENT_TAB_BASIC: "基本",
    // CONTENT_TAB_METADATA: "Metadata",
    // CONTENT_TAB_IMAGE: "圖片",
    // CONTENT_ASIDE_SETTINGS: "設定",
    FIELD_TITLE_LABEL: "標題",
    FIELD_ALIAS_LABEL: "別名",
    FIELD_INTRO_TEXT_LABEL: "摘要文字",
    FIELD_DESCRIPTION_LABEL: "描述",
    FIELD_ITEM_DESCRIPTION_LABEL: "內容文字",
    FIELD_CATEGORY_DESCRIPTION_LABEL: "分類描述",
    // FIELD_META_DESCRIPTION_LABEL: "Meta 說明",
    // FIELD_META_KEYWORDS_LABEL: "Meta 關鍵字",
    // FIELD_INTRO_IMAGE_LABEL: "摘要圖片",
    // FIELD_MAIN_IMAGE_LABEL: "主要圖片",
    FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL: "與摘要圖片相同",
    FIELD_MEDIA_PREVIEW_SELECTED_IMAGE: "預覽",
    FIELD_MEDIA_PREVIEW_EMPTY: "沒有選擇圖片",
    LANGUAGE_TAB_SITE_NAME_AND_METADATA: "網站名稱 & Metadata",
    LANGUAGE_FIELD_LANG_TAG_LABEL: "語言標籤",
    LANGUAGE_FIELD_LANG_CODE_LABEL: "網址語言代碼",
    LANGUAGE_FIELD_TYPE_LABEL: "語言類型",
    LANGUAGE_FIELD_CUSTOM_SITE_NAME_LABEL: "自訂網站名稱",
    SITE_FIELD_URL_LABEL: "網址",
    MEDIA_UPLOAD_FILE: "上傳檔案",
    MEDIA_UPLOAD_FILE_LIMIT: "最大大小: 10MB",
    MEDIA_ITEMS: "項目:",
    MEDIA_UPLOAD: "上傳",
    MEDIA_SELECT_FILE: "選擇檔案",
    MEDIA_CREATE_DIR: "新增資料夾",
    MEDIA_CREATE: "建立",
    MEDIA_NAME: "名稱",
    MEDIA_SIZE: "大小",
    MEDIA_TYPE: "種類",
    MEDIA_MODIFIED: "修改日期",
    USER_OPTION_ENABLED: "已啟用",
    USER_OPTION_ACTIVE: "啟用狀態",
    USER_OPTION_GROUP: "群組",
    USER_ACTIVATED: "已啟動",
    USER_UNACTIVATED: "未啟動",
    USER_TAB_DETAIL: "會員資料",
    USER_TAB_ASSIGN_GROUP: "指定會員群組",
    USER_FIELD_FIRST_NAME: "姓氏",
    USER_FIELD_LAST_NAME: "名字",
    USER_FIELD_EMAIL: "Email",
    USER_FIELD_PASSWORD: "密碼",
    USER_FIELD_PASSWORD_CONFIRMATION: "再次輸入密碼",
    SETTING_FIELD_SITE_NAME_LABEL: "網站名稱",
    SETTING_FIELD_SITE_LANG_LABEL: "網站語言",
    SETTING_FIELD_ADMIN_LANG_LABEL: "管理區語言"
    //     ASSET_SEPARATOR_SYSTEM_TITLE: "系統",
    //     ASSET_SEPARATOR_FEATURES_TITLE: "功能",
    //     ASSET_USER_DASHBOARD_TITLE: "控制台",
    //     ASSET_USER_APIS_TITLE: "APIs",
    //     ASSET_USER_API_MANAGE_TITLE: "API 管理",
    //     ASSET_USER_API_EDIT_TITLE: "編輯API",
    //     ASSET_USER_ASSETS_TITLE: "資源",
    //     ASSET_USER_ASSET_MANAGE_TITLE: "資源管理",
    //     ASSET_USER_ASSET_EDIT_TITLE: "編輯資源",
    //     ASSET_USER_ASSET_ASSIGN_GROUP_TITLE: "指定群組",
    //     ASSET_USER_ASSET_ASSIGN_API_TITLE: "指定API",
    //     ASSET_USER_ASSET_GROUPS_TITLE: "資源群組",
    //     ASSET_USER_ASSET_GROUP_EDIT_TITLE: "編輯資源群組",
    //     ASSET_USER_ROLES_TITLE: "角色",
    //     ASSET_USER_ROLE_MANAGE_TITLE: "角色管理",
    //     ASSET_USER_ROLE_ASSIGN_ASSET_TITLE: "指定資源",
    //     ASSET_USER_ROLE_ASSIGN_API_TITLE: "指定API",
    //     ASSET_USER_ROLE_EDIT_TITLE: "編輯角色",
    //     ASSET_USER_USERS_TITLE: "會員",
    //     ASSET_USER_USER_MANAGE_TITLE: "會員管理",
    //     ASSET_USER_USER_EDIT_TITLE: "編輯會員",
    //     ASSET_USER_USER_GROUPS_TITLE: "會員群組",
    //     ASSET_USER_USER_GROUP_EDIT_TITLE: "編輯會員群組",
    //     ASSET_CMS_CONTENTS_TITLE: "內容",
    //     ASSET_CMS_ITEMS_TITLE: "項目",
    //     ASSET_CMS_ITEM_EDIT_TITLE: "編輯項目",
    //     ASSET_CMS_CATEGORIES_TITLE: "分類",
    //     ASSET_CMS_CATEGORY_EDIT_TITLE: "編輯分類",
    //     ASSET_CMS_TAGS_TITLE: "標籤",
    //     ASSET_CMS_TAG_EDIT_TITLE: "編輯標籤",
    //     ASSET_CMS_LANGUAGES_TITLE: "語言",
    //     ASSET_CMS_LANGUAGE_EDIT_TITLE: "編輯語言",
    //     ASSET_CMS_MEDIA_MANAGER_TITLE: "媒體管理",
    //     ASSET_CMS_SETTINGS_TITLE: "全站設定",
    //     ASSET_CMS_SITES_TITLE: "多網站",
    //     ASSET_CMS_SITE_EDIT_TITLE: "編輯網站"
});

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_router_routes__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_utils___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store___ = __webpack_require__(8);








var user_routes = __WEBPACK_IMPORTED_MODULE_3_utils___["a" /* Storage */].get("user_routes") || [];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
    base: "/dashboard",
    mode: "history",
    scrollBehavior: function scrollBehavior() {
        return { y: 0 };
    },
    routes: __WEBPACK_IMPORTED_MODULE_2_router_routes__["a" /* default */].concat(Object(__WEBPACK_IMPORTED_MODULE_3_utils___["c" /* formatRoutes */])(user_routes)),
    linkActiveClass: "active"
});

var route_whiteList = ["/login"];

router.beforeEach(function (to, from, next) {
    if (__WEBPACK_IMPORTED_MODULE_5_store___["a" /* default */].state.user.user_token) {
        if (to.path === "/login") {
            next({ path: "/" });
        } else {
            next();
        }
    } else {
        if (route_whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next({ path: "/login" });
        }
    }
});

router.afterEach(function (to, from) {
    if (to.name) {
        document.title = __WEBPACK_IMPORTED_MODULE_4__lang___["default"].t(to.name) + " - " + __WEBPACK_IMPORTED_MODULE_5_store___["a" /* default */].state.global.site_name;

        if (window.innerWidth <= 1024) {
            __WEBPACK_IMPORTED_MODULE_5_store___["a" /* default */].commit("left_menu", "close");
        }
    }
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 70 */,
/* 71 */,
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATE_USERINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_USERINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UPDATE_USERTOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_USERTOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPDATE_REMEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REMOVE_REMEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UPDATE_USER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_USER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UPDATE_USER_APIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REMOVE_USER_APIS; });
/* unused harmony export UPDATE_ROLES */
/* unused harmony export UPDATE_ASSETS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_ERROR_LOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UPDATE_OPTION_RELATED_LIST; });
/**
 * user
 */

var UPDATE_USERINFO = "UPDATE_USERINFO";
var REMOVE_USERINFO = "REMOVE_USERINFO";

var UPDATE_USERTOKEN = "UPDATE_USERTOKEN";
var REMOVE_USERTOKEN = "REMOVE_USERTOKEN";

var UPDATE_REMEMBER = "UPDATE_REMEMBER";
var REMOVE_REMEMBER = "REMOVE_REMEMBER";

var UPDATE_USER_ROUTES = "UPDATE_USER_ROUTES";
var REMOVE_USER_ROUTES = "REMOVE_USER_ROUTES";

var UPDATE_USER_APIS = "UPDATE_USER_APIS";
var REMOVE_USER_APIS = "REMOVE_USER_APIS";

var UPDATE_ROLES = "UPDATE_ROLES";

/**
 * asset
 */
var UPDATE_ASSETS = "UPDATE_ASSETS";

var UPDATE_ERROR_LOGS = "UPDATE_ERROR_LOGS";

/**
 * sys
 */
var UPDATE_OPTION_RELATED_LIST = "UPDATE_OPTION_RELATED_LIST";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by sailengsi on 2017/7/2.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
	name: '',
	computed: {
		attrs: function attrs() {
			return this.Data.attrs || {};
		}
	},

	methods: {
		onClick: function onClick(e) {
			this.events.click && this.events.click(e);
		},
		onBlur: function onBlur(e) {
			this.events.blur && this.events.blur(e);
		},
		onFocus: function onFocus(e) {
			this.events.focus && this.events.focus(e);
		},
		onChange: function onChange(value) {
			this.events.change && this.events.change(value);
		}
	}
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(89)
/* template */
var __vue_template__ = __webpack_require__(90)
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
Component.options.__file = "resources/assets/admin/views/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3298454c", Component.options)
  } else {
    hotAPI.reload("data-v-3298454c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
module.exports = __webpack_require__(219);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_vue_fontawesome__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_vue_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_vue_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_svg_core__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_pro_light_svg_icons__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_free_solid_svg_icons_faStar__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fortawesome_free_solid_svg_icons_faStar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__fortawesome_free_solid_svg_icons_faStar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_free_solid_svg_icons_faCaretDown__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fortawesome_free_solid_svg_icons_faCaretDown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__fortawesome_free_solid_svg_icons_faCaretDown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_App__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__views_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_router___ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_store___ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icons__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register__ = __webpack_require__(117);



// Using Element UI

// import "../../../theme/reset.css";
// import "../../../theme/index.css";
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_element_ui___default.a, {
    i18n: function i18n(key, value) {
        return __WEBPACK_IMPORTED_MODULE_1__lang__["default"].t(key, value);
    }
});

// Using FontAwesome

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("font-awesome-icon", __WEBPACK_IMPORTED_MODULE_3__fortawesome_vue_fontawesome__["FontAwesomeIcon"]);






__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_svg_core__["library"].add(__WEBPACK_IMPORTED_MODULE_5__fortawesome_pro_light_svg_icons__["a" /* fal */], __WEBPACK_IMPORTED_MODULE_6__fortawesome_free_solid_svg_icons_faStar__["faStar"], __WEBPACK_IMPORTED_MODULE_7__fortawesome_free_solid_svg_icons_faCaretDown__["faCaretDown"]);








// Remove the productionTip in dev tool console
if (false) {
    Vue.config.productionTip = false;
    Vue.config.devtools = false;
}
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: "#app",
    i18n: __WEBPACK_IMPORTED_MODULE_1__lang__["default"],
    router: __WEBPACK_IMPORTED_MODULE_9_router___["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_10_store___["a" /* default */],
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_8__views_App___default.a);
    }
});

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = VueI18n;

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FALLBACK_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SUPPORTED_LANGUAGES; });
var DEFAULT_LANGUAGE = "zh-TW"; // 預設語言
var FALLBACK_LANGUAGE = "zh-TW"; // 當某個語言不存在時，提供一個默認的語言去處理

var SUPPORTED_LANGUAGES = [{
    code: "en",
    title: "English"
}, {
    code: "zh-TW",
    title: "繁體中文"
}];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 3,
	"./en": 4,
	"./en/": 4,
	"./en/content.json": 10,
	"./en/global.json": 11,
	"./en/index": 4,
	"./en/index.js": 4,
	"./en_us": 12,
	"./en_us.js": 12,
	"./index": 3,
	"./index.js": 3,
	"./zh-TW": 5,
	"./zh-TW/": 5,
	"./zh-TW/content.json": 13,
	"./zh-TW/content.sys.json": 14,
	"./zh-TW/develop.sys.json": 15,
	"./zh-TW/global.json": 16,
	"./zh-TW/index": 5,
	"./zh-TW/index.js": 5,
	"./zh-TW/menu.sys.json": 17,
	"./zh-TW/mod_menu.json": 18,
	"./zh-TW/module.sys.json": 19,
	"./zh-TW/system.sys.json": 20,
	"./zh-TW/user.sys.json": 21,
	"./zh_tw": 22,
	"./zh_tw.js": 22
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
webpackContext.id = 80;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content.json": 10,
	"./global.json": 11
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
webpackContext.id = 81;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content.json": 13,
	"./content.sys.json": 14,
	"./develop.sys.json": 15,
	"./global.json": 16,
	"./menu.sys.json": 17,
	"./mod_menu.json": 18,
	"./module.sys.json": 19,
	"./system.sys.json": 20,
	"./user.sys.json": 21
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
webpackContext.id = 82;

/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

module.exports = ELEMENT;

/***/ }),
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  watch: {
    "$store.state.user.user_token": function $storeStateUserUser_token() {
      var _this = this;

      // 取得後台語言設定
      this.$$api_setting_get({
        fn: function fn(_ref) {
          var data = _ref.data;

          _this.$store.commit("set_language", data.items.locale_admin);
        }
      });
      // 取得後台管理網站列表
      this.$$api_site_list({
        fn: function fn(_ref2) {
          var data = _ref2.data;

          _this.$store.commit("update_site_list", data.items);
        }
      });
      // 取得用戶 apis
      this.$$api_user_getAPIs({
        fn: function fn(_ref3) {
          var data = _ref3.data;

          _this.$store.dispatch("update_user_apis", data.items);
        }
      });
    }
  }
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3298454c", module.exports)
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
    path: "/login",
    component: function component(resolve) {
        return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(224)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    name: "LOGIN",
    meta: {
        showNav: 0
    }
}, {
    path: "/error",
    component: function component(resolve) {
        return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(223)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    name: "ERROR",
    meta: {
        showNav: 0
    },
    children: [{
        path: "401",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(225)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "401",
        meta: {
            showNav: 0
        }
    }, {
        path: "404",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(226)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "404",
        meta: {
            showNav: 0
        }
    }, {
        path: "500",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(227)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "500",
        meta: {
            showNav: 0
        }
    }]
}]);

/***/ }),
/* 93 */,
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatRoutes;
function formatRoutes(routers) {
    //简单检查是否是可以处理的数据
    if (!(routers instanceof Array)) {
        return false;
    }
    //处理后的容器
    var fmRouters = [];
    routers.forEach(function (router) {
        // 取得 router 內變數
        var path = router.path,
            full_path = router.full_path,
            _component = router.component,
            title = router.title,
            redirect = router.redirect,
            children = router.children,
            icon = router.icon,
            showNav = router.showNav,
            type = router.type,
            id = router.id;


        _component = _component ? _component : "layout";
        //如果有子组件，递归处理
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        var fmRouter = {
            path: full_path || path,
            component: function component(resolve) {
                //拼出相对路径，由于component无法识别变量
                //利用Webpack 的 Code-Splitting 功能
                if (_component === "layout") {
                    __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(228)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                } else {
                    __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(229)("./" + _component)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
                }
            },

            name: title,
            children: children,
            meta: {
                icon: icon,
                showNav: showNav,
                type: type,
                id: id
            }
        };
        if (redirect) {
            fmRouter.redirect = redirect;
        }
        fmRouters.push(fmRouter);
    });
    return fmRouters;
}

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DB_PREFIX; });
var DB_PREFIX = "ddrmlab_admin_";

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_configs_ajax__ = __webpack_require__(102);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_1_axios___default.a);

// 導入封裝的回調函數與設定


var csrf_token = document.head.querySelector('meta[name="csrf-token"]');

if (csrf_token) {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common["X-CSRF-TOKEN"] = csrf_token.content;
} else {
    console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token");
}

// 動態設置本機與線上接口域名
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.baseURL = __WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].host;

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       請求的接口URL
 * @param  {object}   data      傳的參數，沒有則傳空對象
 * @param  {Function} fn        成功的回調函數
 * @param  {Function} errFn     錯誤的回調函數
 * @param  {Function} finalFn   不論成功與否的回調函數
 * @param  {boolean}  tokenFlag 是否需要攜帶token參數。true，不需要；false，需要
 */

/**
 * 要新增參數也要在 register/plugin.js 新增
 */
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        type = _ref.type,
        path = _ref.path,
        _ref$pathVar = _ref.pathVar,
        pathVar = _ref$pathVar === undefined ? "" : _ref$pathVar,
        data = _ref.data,
        fn = _ref.fn,
        errFn = _ref.errFn,
        finalFn = _ref.finalFn,
        tokenFlag = _ref.tokenFlag,
        headers = _ref.headers,
        opts = _ref.opts;

    /**
     * 若 path 裡面有包含 * 則以 pathVar 取代
     */
    path = path.replace(/\*/g, pathVar);

    var options = {
        method: type,
        url: path,
        headers: headers && (typeof headers === "undefined" ? "undefined" : _typeof(headers)) === "object" ? headers : {}
    };

    options[type === "get" ? "params" : "data"] = headers && headers["Content-Type"] ? data : __WEBPACK_IMPORTED_MODULE_3_qs___default.a.stringify(data);

    if (!tokenFlag) {
        options.headers["Authorization"] = "Bearer " + this.$store.state.user.user_token;
    }

    //axios 參數
    if (opts && (typeof opts === "undefined" ? "undefined" : _typeof(opts)) === "object") {
        for (var f in opts) {
            options[f] = opts[f];
        }
    }

    //發送請求
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios(options).then(function (res) {
        var res_data = res.data;
        if (res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_data_field]) {
            // 若是 data 內有值
            fn({
                data: res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_data_field],
                msg: res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_message_field]
            });
        } else {
            // 若是 data 為空
            fn({ msg: res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_message_field] });
        }
    }).catch(function (err) {
        try {
            var err_res_data = err.response.data;
            // 若有設定特定狀態碼處理
            if (__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["a" /* error_handler */].statusError[err_res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_status_code_field]]) {
                __WEBPACK_IMPORTED_MODULE_4_configs_ajax__["a" /* error_handler */].statusError[err_res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_status_code_field]].call(_this, err_res_data);
            } else {
                if (errFn) {
                    errFn.call(_this, err_res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_message_field]);
                } else {
                    __WEBPACK_IMPORTED_MODULE_4_configs_ajax__["a" /* error_handler */].requestError.call(_this, err.response);
                }
            }
        } catch (error) {
            console.log(err);
        }
    }).finally(function () {
        if (finalFn) return finalFn.call(_this);
    });
});

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return error_handler; });
var env = Object({"MIX_PUSHER_APP_KEY":"","MIX_PUSHER_APP_CLUSTER":"mt1","NODE_ENV":"development"});

var setting = {
    host: "/api",
    response_status_code_field: "code",
    response_status_code_success_value: 200,
    response_data_field: "data",
    response_message_field: "message"
};

var error_flag = false;

var error_handler = {
    get errorFlag() {
        return error_flag;
    },
    set errorFlag(flag) {
        error_flag = flag;
    },
    statusError: {
        // 未登錄、沒有權限
        401: function _() {
            var _this = this;

            if (!error_handler.errorFlag) {
                error_handler.errorFlag = true;
                this.$store.dispatch("remove_userinfo").then(function () {
                    error_handler.errorFlag = false;
                    _this.$router.replace({
                        path: "/login",
                        query: {
                            redirect: _this.$route.path
                        }
                    });
                });
            }
        },
        // token 過期
        403: function _() {}
    },
    requestError: function requestError(err) {
        console.log(err);

        this.$message({
            showClose: true,
            message: "Request Error: " + (err ? err.data.code : "") + "," + (err ? err.data.message : "")
        });
    }
};



/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_storage__ = __webpack_require__(6);


var defaults = {
    site_name: "Daydream Lab CMS",
    author_name: "Daydream Lab Intl.",
    author_link: "http://www.daydream-lab.com/",
    left_open: __WEBPACK_IMPORTED_MODULE_0_utils_storage__["a" /* default */].get("left_open") || true,
    is_login_refresh: false // for refreshing routes
};

var state = defaults;

var actions = {};

var mutations = {
    left_menu: function left_menu(state, option) {
        if (option == "open") {
            state.left_open = true;
            __WEBPACK_IMPORTED_MODULE_0_utils_storage__["a" /* default */].set("left_open", true);
        } else if (option == "close") {
            state.left_open = false;
            __WEBPACK_IMPORTED_MODULE_0_utils_storage__["a" /* default */].set("left_open", false);
        } else if (option == "toggle") {
            state.left_open = !state.left_open;
            __WEBPACK_IMPORTED_MODULE_0_utils_storage__["a" /* default */].set("left_open", state.left_open);
        }
    },
    update_login_refresh: function update_login_refresh(state, type) {
        state.is_login_refresh = type;
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    state: state,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_storage__ = __webpack_require__(6);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var defaults = {
    user_token: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_token") || "",
    user_info: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_info") || {},

    // 登入成功後，使用者可走訪的路由
    user_routes: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_routes") || [],
    user_apis: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_apis") || {},

    remember: {
        remember_flag: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("remember_flag") ? true : false,
        remember_login_info: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("remember_login_info") || {
            email: "",
            token: ""
        }
    }
};

var state = defaults;

var actions = {
    update_userinfo: function update_userinfo(_ref, user_info) {
        var commit = _ref.commit;

        return new Promise(function (resolve, reject) {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* UPDATE_USERINFO */], user_info);
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* UPDATE_USERTOKEN */], user_info.token);
            resolve();
        });
    },
    remove_userinfo: function remove_userinfo(_ref2) {
        var commit = _ref2.commit;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* REMOVE_USERINFO */]);
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* REMOVE_USERTOKEN */]);
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* REMOVE_USER_ROUTES */]);
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* REMOVE_USER_APIS */]);
    },
    update_remember: function update_remember(_ref3, _ref4) {
        var commit = _ref3.commit;
        var remember_flag = _ref4.remember_flag,
            remember_login_info = _ref4.remember_login_info;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* UPDATE_REMEMBER */], {
            remember_flag: remember_flag,
            remember_login_info: remember_login_info
        });
    },
    remove_remember: function remove_remember(_ref5) {
        var commit = _ref5.commit;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* REMOVE_REMEMBER */]);
    },

    update_user_routes: function update_user_routes(_ref6, _ref7) {
        var commit = _ref6.commit;
        var routes = _ref7.routes,
            redirect = _ref7.redirect;

        return new Promise(function (resolve) {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_USER_ROUTES */], { routes: routes, redirect: redirect });
            resolve();
        });
    },
    update_user_apis: function update_user_apis(_ref8, apis) {
        var commit = _ref8.commit;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["k" /* UPDATE_USER_APIS */], apis);
    }
};

var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* UPDATE_USERTOKEN */], function (state, user_token) {
    state.user_token = user_token;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_token", state.user_token);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* REMOVE_USERTOKEN */], function (state) {
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("user_token");
    state.user_token = "";
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* UPDATE_USERINFO */], function (state, user_info) {
    state.user_info = user_info;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_info", state.user_info);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* REMOVE_USERINFO */], function (state) {
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("user_info");
    state.user_info = {};
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* UPDATE_REMEMBER */], function (state, user_info) {
    state.remember.remember_flag = user_info.remember_flag;
    state.remember.remember_login_info = user_info.remember_login_info;

    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("remember_flag", state.remember.remember_flag);
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("remember_login_info", state.remember.remember_login_info);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* REMOVE_REMEMBER */], function (state) {
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("remember_flag");
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("remember_login_info");

    state.remember.remember_flag = false;
    state.remember.remember_login_info = {
        email: "",
        token: ""
    };
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_USER_ROUTES */], function (state, _ref9) {
    var routes = _ref9.routes,
        redirect = _ref9.redirect;

    var include_index = routes.filter(function (route) {
        return route.path === "/";
    });
    // fix user doesn't have dashboard asset
    if (include_index.length === 0) {
        routes.push({
            path: "/",
            redirect: redirect,
            enabled: 1,
            showNav: false
        });
    }
    // ensure error page would be the last one
    routes.push({
        path: "*",
        redirect: "/error/404",
        enabled: 1,
        showNav: false
    });
    state.user_routes = routes;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_routes", routes);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* REMOVE_USER_ROUTES */], function (state) {
    state.user_routes = [];
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("user_routes");
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["k" /* UPDATE_USER_APIS */], function (state, apis) {
    state.user_apis = apis;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_apis", apis);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* REMOVE_USER_APIS */], function (state) {
    state.user_apis = {};
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("user_apis");
}), _mutations);
/* harmony default export */ __webpack_exports__["a"] = ({
    state: state,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_storage__ = __webpack_require__(6);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var defaults = {
    errorlog_list: [],
    language: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("language") || "tw",
    site_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("site_list") || "",
    asset_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("asset_list") || "",
    menu_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("menu_list") || "",
    module_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("module_list") || "",
    viewlevel_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("viewlevel_list") || "",
    item_category_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("item_category_list") || "",
    item_article_category_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("item_article_category_list") || "",
    language_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("language_list") || "",
    menu_category_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("menu_category_list") || "",
    module_category_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("module_category_list") || "",
    content_type_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("content_type_list") || "",
    extrafield_group_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("extrafield_group_list") || ""
};

var state = defaults;

var actions = {
    update_error_logs: function update_error_logs(_ref, data) {
        var commit = _ref.commit;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* UPDATE_ERROR_LOGS */], data);
    },
    update_option_related_list: function update_option_related_list(_ref2, _ref3) {
        var commit = _ref2.commit;
        var type = _ref3.type,
            data = _ref3.data;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* UPDATE_OPTION_RELATED_LIST */], { type: type, data: data });
    },
    remove_option_related_list: function remove_option_related_list(_ref4) {
        var commit = _ref4.commit;

        var params = ["item_category", "menu_category", "language", "viewlevel"];
        params.forEach(function (param) {
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* UPDATE_OPTION_RELATED_LIST */], { type: param, data: "" });
        });
    }
};

var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["f" /* UPDATE_ERROR_LOGS */], function (state, data) {
    state.errorlog_list.push(data);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["g" /* UPDATE_OPTION_RELATED_LIST */], function (state, _ref5) {
    var type = _ref5.type,
        data = _ref5.data;

    state[type + "_list"] = data;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set(type + "_list", state[type + "_list"]);
}), _defineProperty(_mutations, "set_language", function set_language(state, language) {
    state.language = language;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("language", state.language);
}), _defineProperty(_mutations, "update_site_list", function update_site_list(state, sites) {
    state.site_list = sites;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("site_list", state.site_list);
}), _mutations);

/* harmony default export */ __webpack_exports__["a"] = ({
    state: state,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
    language: function language(state) {
        return state.sys.language;
    },
    site_list: function site_list(state) {
        return state.sys.site_list;
    },
    asset_list: function asset_list(state) {
        return state.sys.asset_list;
    },
    menu_list: function menu_list(state) {
        return state.sys.menu_list;
    },
    module_list: function module_list(state) {
        return state.sys.module_list;
    },
    viewlevel_list: function viewlevel_list(state) {
        return state.sys.viewlevel_list;
    },
    item_category_list: function item_category_list(state) {
        return state.sys.item_category_list;
    },
    item_article_category_list: function item_article_category_list(state) {
        return state.sys.item_article_category_list;
    },
    language_list: function language_list(state) {
        return state.sys.language_list;
    },
    menu_category_list: function menu_category_list(state) {
        return state.sys.menu_category_list;
    },
    module_category_list: function module_category_list(state) {
        return state.sys.module_category_list;
    },
    content_type_list: function content_type_list(state) {
        return state.sys.content_type_list;
    },
    extrafield_group_list: function extrafield_group_list(state) {
        return state.sys.extrafield_group_list;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_svg_icon__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_svg_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cps_svg_icon__);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("SvgIcon", __WEBPACK_IMPORTED_MODULE_1_cps_svg_icon___default.a);

var req = __webpack_require__(113);

var requireAll = function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
};
var iconMap = requireAll(req);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(111)
/* template */
var __vue_template__ = __webpack_require__(112)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3559be4a"
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
Component.options.__file = "resources/assets/admin/components/svg-icon/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3559be4a", Component.options)
  } else {
    hotAPI.reload("data-v-3559be4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName: function iconName() {
      return "#icon-" + this.iconClass;
    },
    svgClass: function svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    }
  }
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("svg", { class: _vm.svgClass, attrs: { "aria-hidden": "" } }, [
    _c("use", { attrs: { href: _vm.iconName } })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3559be4a", module.exports)
  }
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./logo.svg": 114
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
webpackContext.id = 113;

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build__);


var symbol = new __WEBPACK_IMPORTED_MODULE_0_svg_baker_runtime_browser_symbol___default.a({
  "id": "icon-logo",
  "use": "icon-logo-usage",
  "viewBox": "0 0 1457.3 337.1",
  "content": "<symbol viewBox=\"0 0 1457.3 337.1\" id=\"icon-logo\">\n<path id=\"icon-logo_XMLID_6_\" d=\"M217.2,75.1v147.7H110.5L217.2,75.1z M232.5,78.7h84.3v144.2h-5.2v-34.2L232.5,78.7z M362.2,78.7\n\tc39.6,0,71.9,32.8,71.9,72.2c0,40.2-32.3,71.9-71.9,71.9h-20V78.7H362.2z M555.1,224.8l-51.7-71.7l-49.5,70V78.7h101.5l-49,69.8\n\tl52.8,73.3L555.1,224.8z M585.2,217.7h100.4v5.2H581.3V78.7h104.2l-48.1,66.8h35v5.2h-38.6L585.2,217.7z M798,75.1v147.7H691.3\n\tL798,75.1z M1025,222.9H823.4V75.1L918.6,207V75.1L1025,222.9z M1229.8,217.7v5.2h-105.4v-192h5.2v186.8H1229.8z M1343.5,75.1v147.7\n\th-106.7L1343.5,75.1z M1457.3,175.8c0,25.7-21.1,47.1-47.3,47.1h-41V78.7h35.8c21.9,0,38.8,17.2,38.8,38.8c0,7.7-2.5,14.5-6,20.2\n\tC1449.3,146.5,1457.3,160.2,1457.3,175.8z M60.1,37.2c1.9,2.3,3.2,5.1,3.2,8.4c0,7.4-6,13.5-13.5,13.5s-13.5-6-13.5-13.5\n\tc0-5.9,3.9-10.8,9.2-12.6c-6.1-1.2-12.4-1.9-18.9-1.9H0v192h26.5c53.3,0,96-42.7,96-96C122.6,86,96.7,50.8,60.1,37.2z M71,77.3\n\tc0,2.5-2.1,4.6-4.6,4.6h-0.1v90.8c0,9.8-8,17.9-17.9,17.9h-0.4c-9.8,0-17.8-8-17.8-17.9V81.9h-0.1c-2.5,0-4.6-2.1-4.6-4.6v-1.1\n\tc0-2.6,2.1-4.6,4.6-4.6h36.2c2.6,0,4.6,2.1,4.6,4.6V77.3z M78.6,0c-6.7,0-12.1,5.5-12.1,12.2c0,6.7,5.5,12.1,12.1,12.1\n\tc6.7,0,12.2-5.4,12.2-12.1C90.8,5.5,85.3,0,78.6,0z M53.2,10.8c-3.4,0-6.1,2.7-6.1,6.1c0,3.4,2.7,6.1,6.1,6.1c3.4,0,6.1-2.7,6.1-6.1\n\tC59.3,13.5,56.6,10.8,53.2,10.8z M25.9,314.9l8-53.3h16.4v75H39.2v-53.8l-8.1,53.8H19.9l-8.8-53.1v53.1H0.8v-75h16.4L25.9,314.9z\n\t M122.2,336.7h-11.9l-2-13.6H93.8l-2,13.6H81l12-75h17.3L122.2,336.7z M95.3,312.9h11.4l-5.7-37.9L95.3,312.9z M168.1,306.8\n\tl-3.6,6.9v23h-11.8v-75h11.8v32.7l15.4-32.7h11.8l-16.4,33.4l16.4,41.6h-12.1L168.1,306.8z M221.4,261.6h11.8v75h-11.8V261.6z\n\t M275.9,282.3v54.3h-10.6v-75h14.8l12.1,44.9v-44.9h10.5v75h-12.1L275.9,282.3z M350.5,294.9h16.5v23.8c0,12-6,18.9-17.6,18.9\n\tc-11.6,0-17.6-6.9-17.6-18.9v-39c0-12,6-18.9,17.6-18.9c11.6,0,17.6,6.9,17.6,18.9v7.3h-11.1v-8c0-5.4-2.4-7.4-6.1-7.4\n\tc-3.8,0-6.1,2-6.1,7.4v40.5c0,5.4,2.4,7.3,6.1,7.3c3.8,0,6.1-1.9,6.1-7.3v-13.8h-5.4V294.9z M444.3,261.6h18.7\n\tc11.8,0,17.6,6.5,17.6,18.5v37.9c0,12-5.8,18.5-17.6,18.5h-18.7V261.6z M456,272.4v53.6h6.6c3.8,0,6-1.9,6-7.3v-39\n\tc0-5.4-2.3-7.3-6-7.3H456z M533.5,336.7c-0.6-1.9-1.1-3.1-1.1-9.2v-11.8c0-7-2.4-9.5-7.7-9.5h-4.1v30.6h-11.8v-75h17.8\n\tc12.2,0,17.5,5.7,17.5,17.3v5.9c0,7.7-2.5,12.8-7.7,15.2c5.9,2.5,7.8,8.1,7.8,16v11.6c0,3.6,0.1,6.3,1.3,9.1H533.5z M520.7,272.4v23\n\th4.6c4.4,0,7.1-1.9,7.1-7.9v-7.4c0-5.4-1.8-7.7-6-7.7H520.7z M585.7,293.3h16.2V304h-16.2v22H606v10.7h-32.2v-75H606v10.7h-20.4\n\tV293.3z M676.4,336.7h-11.9l-2-13.6H648l-2,13.6h-10.8l12-75h17.3L676.4,336.7z M649.5,312.9h11.4l-5.7-37.9L649.5,312.9z\n\t M732.3,314.9l8-53.3h16.4v75h-11.1v-53.8l-8.1,53.8h-11.1l-8.8-53.1v53.1h-10.3v-75h16.4L732.3,314.9z M805.2,260.8\n\tc11.5,0,17.4,6.9,17.4,18.9v2.4h-11.1v-3.1c0-5.4-2.1-7.4-5.9-7.4c-3.8,0-5.9,2-5.9,7.4c0,15.4,23,18.3,23,39.8\n\tc0,12-6,18.9-17.6,18.9s-17.6-6.9-17.6-18.9v-4.6h11.1v5.4c0,5.4,2.4,7.3,6.1,7.3c3.8,0,6.1-1.9,6.1-7.3c0-15.4-23-18.3-23-39.8\n\tC787.8,267.6,793.7,260.8,805.2,260.8z M933.6,308.7v10c0,12-6,18.9-17.6,18.9c-11.6,0-17.6-6.9-17.6-18.9v-39\n\tc0-12,6-18.9,17.6-18.9c11.6,0,17.6,6.9,17.6,18.9v7.3h-11.1v-8c0-5.4-2.4-7.4-6.1-7.4c-3.8,0-6.1,2-6.1,7.4v40.5\n\tc0,5.4,2.4,7.3,6.1,7.3c3.8,0,6.1-1.9,6.1-7.3v-10.7H933.6z M963.8,279.6c0-12,6.3-18.9,17.9-18.9c11.6,0,17.9,6.9,17.9,18.9v39\n\tc0,12-6.3,18.9-17.9,18.9c-11.6,0-17.9-6.9-17.9-18.9V279.6z M975.6,319.4c0,5.4,2.4,7.4,6.1,7.4c3.8,0,6.1-2,6.1-7.4v-40.5\n\tc0-5.4-2.4-7.4-6.1-7.4c-3.8,0-6.1,2-6.1,7.4V319.4z M1053.5,314.9l8-53.3h16.4v75h-11.1v-53.8l-8.1,53.8h-11.1l-8.8-53.1v53.1\n\th-10.3v-75h16.4L1053.5,314.9z M1117.4,293.3h16.2V304h-16.2v22h20.4v10.7h-32.2v-75h32.2v10.7h-20.4V293.3z M1215.6,261.2h36.4\n\tv10.7h-12.3v64.3h-11.8v-64.3h-12.3V261.2z M1308.3,336.6c-0.6-1.9-1.1-3.1-1.1-9.2v-11.8c0-7-2.4-9.5-7.7-9.5h-4.1v30.6h-11.8v-75\n\th17.8c12.2,0,17.5,5.7,17.5,17.3v5.9c0,7.7-2.5,12.8-7.7,15.2c5.9,2.5,7.8,8.1,7.8,16v11.6c0,3.6,0.1,6.3,1.3,9.1H1308.3z\n\t M1295.4,272.2v23h4.6c4.4,0,7.1-1.9,7.1-7.9V280c0-5.4-1.8-7.7-6-7.7H1295.4z M1363.8,261.5v57.9c0,5.4,2.4,7.3,6.1,7.3\n\tc3.8,0,6.1-1.9,6.1-7.3v-57.9h11.1v57.1c0,12-6,18.9-17.6,18.9s-17.6-6.9-17.6-18.9v-57.1H1363.8z M1430.6,293.2h16.2v10.7h-16.2v22\n\th20.4v10.7h-32.2v-75h32.2v10.7h-20.4V293.2z\" />\n</symbol>"
});
var result = __WEBPACK_IMPORTED_MODULE_1_svg_sprite_loader_runtime_browser_sprite_build___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plugin__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mixin__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directive__ = __webpack_require__(217);











/**
 * 把一些全局对象和一些全局方法，注册到Vue原型上
 */
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use({
    install: function install(Vue, options) {
        Vue.mixin(__WEBPACK_IMPORTED_MODULE_5__mixin__["a" /* default */]);

        //注册第三方库
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_2__lib__["a" /* default */], function (item, key) {
            Vue.prototype["$$" + key] = item;
        });

        //注册全局方法，如常用的接口方法，工具方法等。
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_4__plugin__["a" /* default */], function (item, key) {
            Vue.prototype["$$" + key] = item;
        });

        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_6__directive__["a" /* default */], function (item, key) {
            Vue.directive(key, item);
        });
    }
});

__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_3__component__["a" /* default */], function (item, key) {
    var cpName = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    if (cpName && cpName[0] === "-") {
        cpName = cpName.replace("-", "");
    }

    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(key, item);
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


/* harmony default export */ __webpack_exports__["a"] = ({
  lib__: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a
});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_list_data__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_form_data__ = __webpack_require__(131);



/* harmony default export */ __webpack_exports__["a"] = ({
    ListData: __WEBPACK_IMPORTED_MODULE_0_cps_list_data__["a" /* default */],
    FormData: __WEBPACK_IMPORTED_MODULE_1_cps_form_data__["a" /* default */]
});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListData_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListData_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ListData_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__ListData_vue___default.a);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(123)
/* template */
var __vue_template__ = __webpack_require__(130)
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
Component.options.__file = "resources/assets/admin/components/list-data/ListData.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef00903a", Component.options)
  } else {
    hotAPI.reload("data-v-ef00903a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListData_js__ = __webpack_require__(124);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__ListData_js__["a" /* default */]);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DdlTableHeader_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DdlTableHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DdlTableHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sortablejs__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sortablejs__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* harmony default export */ __webpack_exports__["a"] = ({
    name: "list-data",
    components: { DdlTableHeader: __WEBPACK_IMPORTED_MODULE_0__DdlTableHeader_vue___default.a },
    data: function data() {
        return {
            table_id: "table-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""), //拖曳表格ID 避免全部的表格都是相同
            batch: {
                flag: false,
                datas: [],
                ids: []
            },
            list: this.List, //列表数组
            list_loading: this.ListLoading, //列表載入
            fields: this.FieldList, //字段数组
            expand: this.Expand, //折叠
            sort: this.Sort, //拖曳排序
            sort_enabled: false,

            btn_info: this.BtnInfo, //按钮信息

            toolbar: this.Toolbar, //工具列
            searchbar: this.Searchbar, //搜尋、篩選列
            list_actions: this.ListActions, //資料表內自訂按鈕

            pagination: this.Pagination // 分页
        };
    },
    beforeDestroy: function beforeDestroy() {
        this.$$eventBus.$off("onClickListDataToolbar");
    },
    mounted: function mounted() {
        var _this = this;

        this.initToolbar();
        this.initSortable();
        this.$$eventBus.$on("onClickListDataToolbar", function (opts) {
            _this.onBtnEvent(opts);
        });
    },

    methods: {
        handelRowClass: function handelRowClass(_ref) {
            var row = _ref.row,
                rowIndex = _ref.rowIndex;

            if (this.sort.data) {
                return row.parent_id === this.sort.data.parent_id ? "sortable-enabled" : "sortable-disabled";
            } else {
                return "sortable-enabled";
            }
        },

        /**
         * 表格列表触发CheckBox的事件
         * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
         */
        onSelectionChange: function onSelectionChange(val) {
            this.batch.datas = val;
            this.batch.ids = [];
            if (val.length) {
                this.batch.flag = true;
                for (var i = 0; i < val.length; i++) {
                    this.batch.ids.push(val[i].id);
                }
            } else {
                this.batch.flag = false;
            }

            /**
             * 改变CheckBox事件，第一个参数是ID数组，第二个参数二维数组，每个数组是选中的对象
             */
            this.$emit("onSelectionChange", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
            this.$emit("onSelectionChangeObj", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
        },


        /**
         * 搜索事件
         * @param data    搜索表单的值
         */
        onSearch: function onSearch(opts) {
            this.$emit("onSearch", opts);
        },
        onSearchReset: function onSearchReset() {
            this.$emit("onSearchReset");
        },

        /**
         * 删除事件
         * @param  {object || boolean} user  当前信息对象或者为布尔值,为布尔值时，代表是批量删除
         * @param  {number} index 当前列表索引
         */

        onBatchDelete: function onBatchDelete() {
            this.$emit("onClickBtnBatchDelete", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
        },
        onBatchTrash: function onBatchTrash() {
            this.$emit("onClickBtnBatchTrash", {
                ids: this.batch.ids,
                state: -2
            });
        },
        onBatchRestore: function onBatchRestore() {
            this.$emit("onClickBtnBatchRestore", {
                ids: this.batch.ids,
                state: 1
            });
        },

        /**
         * 点击按钮事件
         * @param opts  组装的返回参数
         * @param.attr  opts.type   string      按钮类型，内置四个(添加，查看，修改，删除)
         * @param.attr  opts.index  number      当点击列表中的按钮时，此值为当前行的索引
         * @param.attr  opts.data   object      当点击列表中的按钮时，此值为当前行数据
         * @param.attr  opts.list   array       当点击列别中的按钮时，此值为当前列表数据
         */
        onBtnEvent: function onBtnEvent(opts) {
            switch (opts.type) {
                case "add":
                    this.$emit("onClickBtnAdd", opts);
                    break;
                case "edit":
                    var data = this.batch.flag ? _extends({}, opts, {
                        data: this.batch.datas[0]
                    }) : opts;
                    this.$emit("onClickBtnEdit", data);
                    break;

                case "trash":
                    this.onBatchTrash();
                    break;
                case "delete":
                    this.onBatchDelete();
                    break;
                case "restore":
                    this.onBatchRestore();
                    break;
                case "checkout":
                    this.$emit("onClickBtnCheckout", opts);
                    break;
                case "custom":
                    this.onCustomBtnEvent(opts);
                    break;
                default:
                    this.$emit("onClickBtn", opts);
            }
        },


        /**
         * 自定义按钮事件
         * @param opts
         */
        onCustomBtnEvent: function onCustomBtnEvent(opts) {
            if (opts.btn.fn) {
                opts.btn.fn(_extends({}, opts, {
                    ids: this.batch.ids,
                    datas: this.batch.datas
                }));
            } else {
                this.$emit("onClickBtn", opts);
            }
        },


        /**
         * 改变当前页码事件
         * @param  {number} page 当前页面
         */
        onChangeCurrentPage: function onChangeCurrentPage(page) {
            this.$emit("onChangeCurrentPage", page);
        },


        /**
         * 改变每页显示的数量事件
         * @param  {number} page_size 每页显示的数量
         */
        onChangePageSize: function onChangePageSize(pageSize) {
            this.$emit("onChangePageSize", pageSize);
        },
        initToolbar: function initToolbar() {
            this.$$eventBus.$emit("onInitToolbar", {
                name: "ListData",
                data: this.toolbar
            });
        },
        onSortChange: function onSortChange(_ref2) {
            var prop = _ref2.prop,
                order = _ref2.order;

            if (prop === "ordering" && order) {
                this.sort_enabled = true;
                this.$emit("onSortChange", order);
            }
            if (!order) {
                this.sort_enabled = false;
            }
        },

        /**
         * 表格列表觸發 sortable-handler 的事件
         * @param id 當前移動的對象 id
         * @param index_diff 當前移動的對象 index 的變化
         */
        initSortable: function initSortable() {
            var _this2 = this;

            var el = document.querySelectorAll("#" + this.table_id + " .el-table__body-wrapper > table > tbody")[0];
            __WEBPACK_IMPORTED_MODULE_1_sortablejs___default.a.create(el, {
                handle: ".sortable-handler",
                filter: ".sortable-disabled",
                draggable: ".sortable-enabled",
                preventOnFilter: true,
                onChoose: function onChoose(_ref3) {
                    var oldIndex = _ref3.oldIndex;

                    console.log("onChoose");
                },
                onStart: function onStart(_ref4) {
                    var oldIndex = _ref4.oldIndex;

                    console.log("onStart");
                    _this2.sort.data = _this2.list[oldIndex];
                    console.log(_this2.sort.data);
                },
                onEnd: function onEnd(_ref5) {
                    var newIndex = _ref5.newIndex,
                        oldIndex = _ref5.oldIndex;

                    var targetRow = _this2.list.splice(oldIndex, 1)[0];
                    _this2.list.splice(newIndex, 0, targetRow);
                    console.log("onEnd");
                    console.log(_this2.list[newIndex].id);
                    _this2.$emit("onOrderChange", {
                        id: _this2.list[newIndex].id,
                        index_diff: newIndex - oldIndex
                    });

                    _this2.sort.data = "";
                },
                onMove: function onMove(event) {
                    return !event.related.classList.contains("sortable-disabled");
                }
            });
        }
    },

    /**
     * 接收参数
     * @type {Object}
     */
    props: {
        List: {
            type: Array,
            required: true
        },
        ListLoading: {
            type: Object,
            default: function _default() {
                return {
                    flag: false,
                    text: ""
                };
            }
        },
        FieldList: {
            type: Array,
            required: true
        },
        BtnInfo: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        Toolbar: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        Searchbar: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        ListActions: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        Selection: {
            type: Boolean,
            default: false
        },
        Expand: {
            type: Object,
            default: function _default() {
                return {
                    show: false,
                    position: "left"
                };
            }
        },
        Sort: {
            type: Object,
            default: function _default() {
                return {
                    show: false,
                    enabled: false,
                    data: ""
                };
            }
        },
        Pagination: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    /**
     * 监控参数
     * @type {Object}
     */
    watch: {
        "batch.flag": function batchFlag(v) {
            this.$$eventBus.$emit("onSelectListDataChange", v);
        },
        List: function List(v) {
            if (v) {
                this.list = v;
            }
        },

        ListLoading: {
            deep: true,
            handler: function handler(v) {
                this.list_loading = v;
            }
        },
        FieldList: function FieldList(v) {
            if (v) {
                this.fields = v;
            }
        },
        Selection: function Selection(v) {
            this.selection = v;
        },
        Expand: function Expand(v) {
            this.expand = v;
        },
        Sort: function Sort(v) {
            this.sort = v;
            console.log(this.sort);
        },
        BtnInfo: function BtnInfo(v) {
            this.btn_info = v;
        },

        Toolbar: {
            deep: true,
            handler: function handler(v) {
                this.toolbar = v;
                this.initToolbar();
            }
        },
        Searchbar: function Searchbar(v) {
            this.searchbar = v;
        },
        ListActions: function ListActions(v) {
            this.list_actions = v;
        },
        Pagination: function Pagination(v) {
            this.pagination = v;
        }
    }
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(127)
/* template */
var __vue_template__ = __webpack_require__(128)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d41c12a"
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
Component.options.__file = "resources/assets/admin/components/list-data/DdlTableHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d41c12a", Component.options)
  } else {
    hotAPI.reload("data-v-3d41c12a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      disabled: true
    };
  },

  computed: {
    fields: function fields() {
      return this.Search.fields || [];
    },
    default_value: function default_value() {
      return this.Search.default_value || {};
    },
    setting: function setting() {
      return this.Search.setting || { inline: true, type: "search" };
    }
  },
  props: {
    Search: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    onSearch: function onSearch(opts) {
      this.$emit("onSearch", opts);
    },
    onSearchReset: function onSearchReset() {
      this.$emit("onSearchReset");
    }
  }
});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-row",
    { attrs: { type: "flex", justify: "space-between" } },
    [
      _c("el-col", { attrs: { span: 4 } }, [
        _c(
          "div",
          { staticClass: "list-header" },
          [_vm._t("ddl-header-before")],
          2
        )
      ]),
      _vm._v(" "),
      _c("el-col", { staticClass: "list-searchbar", attrs: { span: 20 } }, [
        _vm.fields && _vm.fields.length
          ? _c(
              "div",
              [
                _c("FormData", {
                  attrs: {
                    Setting: _vm.setting,
                    FieldList: _vm.fields,
                    DefaultValue: _vm.default_value
                  },
                  on: { onSubmit: _vm.onSearch, onReset: _vm.onSearchReset }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "list-header" },
          [_vm._t("ddl-header-after")],
          2
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
    require("vue-hot-reload-api")      .rerender("data-v-3d41c12a", module.exports)
  }
}

/***/ }),
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "list-data" },
    [
      _c(
        "ddl-table-header",
        {
          attrs: { Search: _vm.searchbar },
          on: {
            onSearch: _vm.onSearch,
            onSearchReset: _vm.onSearchReset,
            onBtnEvent: _vm.onBtnEvent
          }
        },
        [
          _c(
            "span",
            { attrs: { slot: "ddl-header-after" }, slot: "ddl-header-after" },
            [_vm._t("header-after")],
            2
          ),
          _vm._v(" "),
          _c(
            "span",
            { attrs: { slot: "ddl-header-before" }, slot: "ddl-header-before" },
            [
              _c("h2", [
                _vm._v(
                  _vm._s(
                    _vm.$t(
                      _vm.$route.matched[_vm.$route.matched.length - 1].name
                    )
                  )
                )
              ]),
              _vm._v(" "),
              _vm._t("header-before")
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.list_loading.flag,
              expression: "list_loading.flag"
            }
          ],
          staticStyle: { width: "100%" },
          attrs: {
            data: _vm.list,
            "element-loading-text":
              _vm.list_loading.text ||
              _vm.$t("LIST_DATA_LOADING_TEXT") /*載入中⋯⋯*/,
            "row-class-name": _vm.handelRowClass,
            id: _vm.table_id,
            "row-key": "id",
            border: "",
            align: "center"
          },
          on: {
            "selection-change": _vm.onSelectionChange,
            "sort-change": _vm.onSortChange
          }
        },
        [
          _vm.expand &&
          _vm.expand.show &&
          _vm.expand.show === true &&
          (!_vm.expand.position || _vm.expand.position === "left")
            ? _c("el-table-column", {
                attrs: { type: "expand" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm._t("expand", null, {
                          data: scope.row,
                          index: scope.$index
                        })
                      ]
                    }
                  }
                ])
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.sort && _vm.sort.show
            ? _c("el-table-column", {
                attrs: { sortable: "custom", width: "45", prop: "ordering" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            staticClass: "caret-wrapper sortable-handler",
                            attrs: { type: "text", disabled: !_vm.sort_enabled }
                          },
                          [
                            _c("font-awesome-icon", {
                              attrs: { icon: ["fal", "ellipsis-v"] }
                            })
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.btn_info.batch !== false
            ? _c("el-table-column", {
                attrs: { type: "selection", width: "55" }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.fields, function(field, index) {
            return [
              !field.type
                ? _c("el-table-column", {
                    style: field.style,
                    attrs: {
                      prop: field.key,
                      label: field.label,
                      align: field.align || "left",
                      sortable: field.sort || true,
                      formatter: field.formatter,
                      filters: field.filter_list,
                      "filter-method": field.filter_method,
                      "filter-multiple": field.filter_multiple,
                      width: field.width
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              field.type && field.type === "image"
                ? _c("el-table-column", {
                    attrs: {
                      prop: field.key,
                      label: field.label,
                      align: field.align || "left",
                      width: field.width
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c("img", {
                              attrs: {
                                src: (field.host || "") + scope.row[field.key],
                                alt: ""
                              }
                            })
                          ]
                        }
                      }
                    ])
                  })
                : _vm._e(),
              _vm._v(" "),
              field.type && field.type === "link"
                ? _c("el-table-column", {
                    attrs: {
                      prop: field.key,
                      label: field.label,
                      sortable: field.sort || true,
                      align: field.align || "left",
                      width: field.width
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c(
                              "a",
                              {
                                attrs: {
                                  target: field.link_target || "_self",
                                  href: scope.row[field.key]
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    field.link_text || scope.row[field.key]
                                  )
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ])
                  })
                : _vm._e(),
              _vm._v(" "),
              field.type && field.type === "icon"
                ? _c(
                    "el-table-column",
                    {
                      attrs: {
                        prop: field.key,
                        label: field.label,
                        align: field.align || "center",
                        sortable: field.sort || true,
                        formatter: field.formatter,
                        width: field.width
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              scope.column.formatter(scope.row[field.key])[
                                "icon"
                              ]
                                ? _c("font-awesome-icon", {
                                    style: scope.column.formatter(
                                      scope.row[field.key]
                                    )["style"],
                                    attrs: {
                                      icon: scope.column.formatter(
                                        scope.row[field.key]
                                      )["icon"]
                                    }
                                  })
                                : _vm._e()
                            ]
                          }
                        }
                      ])
                    },
                    [_vm._v("\n        " + _vm._s(field.sort) + "\n        ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              field.type && field.type === "label"
                ? _c("el-table-column", {
                    attrs: {
                      prop: field.key,
                      label: field.label,
                      align: field.align || "center",
                      sortable: field.sort || true,
                      formatter: field.formatter,
                      width: field.width
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c(
                              "div",
                              {
                                staticClass: "text-label",
                                class: scope.column.formatter(
                                  scope.row[field.key]
                                )["color"]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    scope.column.formatter(
                                      scope.row[field.key]
                                    )["text"]
                                  )
                                )
                              ]
                            )
                          ]
                        }
                      }
                    ])
                  })
                : _vm._e(),
              _vm._v(" "),
              field.type && field.type === "icon-label"
                ? _c("el-table-column", {
                    attrs: {
                      prop: field.key,
                      label: field.label,
                      align: field.align || "center",
                      sortable: field.sort || true,
                      formatter: field.formatter,
                      width: field.width
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c(
                              "div",
                              {
                                staticClass: "text-label",
                                class: scope.column.formatter(
                                  scope.row[field.key]
                                )["color"]
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: {
                                    icon: scope.column.formatter(
                                      scope.row[field.key]
                                    )["icon"]
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  })
                : _vm._e(),
              _vm._v(" "),
              field.type && field.type === "editable"
                ? _c("el-table-column", {
                    attrs: {
                      prop: field.key,
                      label: field.label,
                      align: field.align || "left",
                      sortable: field.sort || true,
                      formatter: field.formatter,
                      width: field.width
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c(
                              "el-tooltip",
                              { attrs: { placement: "top" } },
                              [
                                _c(
                                  "div",
                                  {
                                    attrs: { slot: "content" },
                                    slot: "content"
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("TOOLBAR_CHECKOUT") /*回存*/
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(scope.row["locker"]) +
                                        "\n              "
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(scope.row["locked_at"]) +
                                        "\n            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                scope.row["locked_by"] &&
                                scope.row["locked_by"] ===
                                  _vm.$store.state.user.user_info.id
                                  ? _c(
                                      "el-button",
                                      {
                                        staticClass: "btn--checkout",
                                        attrs: { size: "mini" },
                                        on: {
                                          click: function($event) {
                                            _vm.onBtnEvent({
                                              type: "checkout",
                                              data: scope.row,
                                              dataIndex: scope.$index,
                                              list: _vm.list
                                            })
                                          }
                                        }
                                      },
                                      [
                                        _c("font-awesome-icon", {
                                          attrs: { icon: ["fal", "lock-alt"] }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            [
                              !scope.row["locked_by"] ||
                              scope.row["locked_by"] ===
                                _vm.$store.state.user.user_info.id
                                ? _c("span", {
                                    staticClass: "editable_title",
                                    domProps: {
                                      innerHTML: _vm._s(
                                        (scope.column.formatter &&
                                          scope.column.formatter(
                                            scope.row[field.key]
                                          )) ||
                                          scope.row[field.key]
                                      )
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.onBtnEvent({
                                          type: "edit",
                                          data: scope.row,
                                          dataIndex: scope.$index,
                                          list: _vm.list
                                        })
                                      }
                                    }
                                  })
                                : _c("span", [
                                    _c("span", {
                                      domProps: {
                                        innerHTML: _vm._s(scope.row[field.key])
                                      }
                                    })
                                  ])
                            ],
                            _vm._v(" "),
                            _c("span", {
                              directives: [
                                {
                                  name: "can",
                                  rawName: "v-can:not",
                                  value: "edit",
                                  expression: "'edit'",
                                  arg: "not"
                                }
                              ],
                              domProps: {
                                innerHTML: _vm._s(scope.row[field.key])
                              }
                            })
                          ]
                        }
                      }
                    ])
                  })
                : _vm._e()
            ]
          }),
          _vm._v(" "),
          "btns" in _vm.list_actions
            ? _c("el-table-column", {
                attrs: {
                  label:
                    _vm.list_actions.label ||
                    _vm.$t("LIST_DATA_ACTIONS_LABEL") /*操作*/,
                  context: _vm._self
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return _vm._l(_vm.list_actions.btns, function(
                        btn,
                        index
                      ) {
                        return _vm.list_actions.btns &&
                          (!btn.condition ||
                            typeof btn.condition !== "function" ||
                            (typeof btn.condition === "function" &&
                              btn.condition({
                                list: _vm.list,
                                data: scope.row,
                                dataIndex: scope.$index,
                                btnIndex: index,
                                btn: btn
                              }) === true))
                          ? _c(
                              "el-button",
                              {
                                key: index,
                                attrs: {
                                  type: btn.type || "info",
                                  size: "mini"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.onCustomBtnEvent({
                                      list: _vm.list,
                                      data: scope.row,
                                      dataIndex: scope.$index,
                                      btnIndex: index,
                                      btn: btn
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n          " +
                                    _vm._s(
                                      typeof btn.text === "string"
                                        ? btn.text
                                        : typeof btn.text === "function"
                                          ? btn.text({
                                              list: _vm.list,
                                              data: scope.row,
                                              dataIndex: scope.$index,
                                              btnIndex: index,
                                              btn: btn
                                            })
                                          : ""
                                    ) +
                                    "\n        "
                                )
                              ]
                            )
                          : _vm._e()
                      })
                    }
                  }
                ])
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.expand &&
          _vm.expand.show &&
          _vm.expand.show === true &&
          _vm.expand.position &&
          _vm.expand.position === "right"
            ? _c("el-table-column", {
                attrs: { type: "expand", context: _vm._self },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _vm._t("expand", null, {
                          data: scope.row,
                          index: scope.$index
                        })
                      ]
                    }
                  }
                ])
              })
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "list-pagination" },
        [
          _vm.pagination &&
          ((_vm.pagination.total !== undefined && _vm.pagination.total > 0) ||
            (_vm.pagination["page-count"] !== undefined &&
              _vm.pagination["page-count"] > 0))
            ? _c("el-pagination", {
                attrs: {
                  "page-sizes": _vm.pagination.page_sizes,
                  "page-size": _vm.pagination.page_size,
                  "page-count": _vm.pagination["page-count"],
                  layout: _vm.pagination.layout,
                  total: _vm.pagination.total,
                  "current-page": _vm.pagination.current_page
                },
                on: {
                  "current-change": _vm.onChangeCurrentPage,
                  "size-change": _vm.onChangePageSize
                }
              })
            : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-ef00903a", module.exports)
  }
}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormData_vue__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormData_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormData_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__FormData_vue___default.a);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(133)
/* template */
var __vue_template__ = __webpack_require__(196)
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
Component.options.__file = "resources/assets/admin/components/form-data/FormData.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72b26caf", Component.options)
  } else {
    hotAPI.reload("data-v-72b26caf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormData_js__ = __webpack_require__(134);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__FormData_js__["a" /* default */]);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields___ = __webpack_require__(135);


/* harmony default export */ __webpack_exports__["a"] = ({
    components: __WEBPACK_IMPORTED_MODULE_0__fields___["a" /* default */],
    name: "form-data",
    data: function data() {
        return {
            setting: this.Setting,
            primary_key: this.PrimaryKey,
            fields: this.FieldList,
            components: {
                input: "DdlInput",
                textarea: "DdlTextarea",
                select: "DdlSelect",
                radio: "DdlRadio",
                switch: "DdlSwitch",
                cascader: "DdlCascader",
                checkbox: "DdlCheckbox",
                date: "DdlDate",
                daterange: "DdlDateRange",
                year: "DdlDateYear",
                month: "DdlDateMonth",
                week: "DdlDateWeek",
                time: "DdlTime",
                timerange: "DdlTimeRange",
                timefixed: "DdlTimeFixed",
                timefixedrange: "DdlTimeFixedRange",
                datetime: "DdlDateTime",
                datetimerange: "DdlDateTimeRange",
                editor: "DdlEditor",
                tree: "DdlTree"
            },
            cur_component: "",
            temp_field_obj: {},
            submit_data: this.DefaultValue,
            submit_info: {},
            rules: this.Rules || {},
            toolbar: this.Toolbar // 工具列
        };
    },

    methods: {
        /**
         * 表单提交事件
         */
        onSubmit: function onSubmit(_ref) {
            var _this = this;

            var ref = _ref.ref,
                type = _ref.type;

            var data = {
                data: this.submit_data,
                info: this.submit_info,
                type: type
            };
            if (this.rules) {
                this.$refs[ref].validate(function (valid) {
                    if (valid) {
                        _this.$emit("onSubmit", data);
                    }
                });
            } else {
                this.$emit("onSubmit", data);
            }
        },
        onReset: function onReset(ref) {
            this.$refs[ref].resetFields();
            this.$emit("onReset");
        },
        onCancel: function onCancel() {
            this.$emit("onCancel");
        },
        onBtnEvent: function onBtnEvent(opts) {
            switch (opts.type) {
                case "cancel":
                    this.onCancel();
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    this.onSubmit({ ref: "form-data", type: opts.type });
                    break;
            }
        },
        initToolbar: function initToolbar() {
            this.$$eventBus.$emit("onInitToolbar", {
                name: "FormData",
                data: this.toolbar
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.initToolbar();
        if (this.setting && this.setting.type !== "search") {
            this.$$eventBus.$on("onClickFormDataToolbar", function (opts) {
                _this2.onBtnEvent(opts);
            });
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.setting && this.setting.type !== "search") {
            this.$$eventBus.$off("onClickFormDataToolbar");
        }
    },

    props: {
        FieldList: {
            type: Array,
            required: true,
            default: function _default() {
                return [];
            }
        },
        Editor: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        Rules: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        DefaultValue: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        Setting: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        PrimaryKey: {
            type: String,
            default: "id"
        },
        Toolbar: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    /**
     * 监控参数
     * @type {Object}
     */
    watch: {
        FieldList: {
            deep: true,
            handler: function handler(v) {
                if (v) {
                    this.fields = v;
                }
            }
        },
        submit_data: {
            deep: true,
            handler: function handler(v) {}
        },
        DefaultValue: {
            deep: true,
            handler: function handler(v) {
                this.default_value = v;
            }
        },

        wangeditor_update: function wangeditor_update(v) {},
        Setting: function Setting(v) {
            this.setting = v;
        },
        PrimaryKey: function PrimaryKey(v) {
            this.primary_key = v;
        },
        Toolbar: function Toolbar(v) {
            this.toolbar = v;
            this.initToolbar();
        }
    }
});

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DdlInput_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DdlInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DdlInput_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DdlTextarea_vue__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DdlTextarea_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DdlTextarea_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DdlCheckbox_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DdlCheckbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__DdlCheckbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DdlRadio_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DdlRadio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__DdlRadio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DdlSelect_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DdlSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__DdlSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DdlSwitch_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DdlSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__DdlSwitch_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DdlCascader_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DdlCascader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__DdlCascader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DdlDate_vue__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DdlDate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__DdlDate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DdlDateRange_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DdlDateRange_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__DdlDateRange_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DdlDateYear_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DdlDateYear_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__DdlDateYear_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DdlDateMonth_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DdlDateMonth_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__DdlDateMonth_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__DdlDateWeek_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__DdlDateWeek_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__DdlDateWeek_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__DdlTime_vue__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__DdlTime_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__DdlTime_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__DdlTimeRange_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__DdlTimeRange_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__DdlTimeRange_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__DdlTimeFixed_vue__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__DdlTimeFixed_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__DdlTimeFixed_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__DdlTimeFixedRange_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__DdlTimeFixedRange_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__DdlTimeFixedRange_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__DdlDateTime_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__DdlDateTime_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__DdlDateTime_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__DdlDateTimeRange_vue__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__DdlDateTimeRange_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__DdlDateTimeRange_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__DdlEditor_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__DdlEditor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__DdlEditor_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__DdlTree_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__DdlTree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__DdlTree_vue__);
/**
 * Created by sailengsi on 2017/7/1.
 */






















/* harmony default export */ __webpack_exports__["a"] = ({
    DdlInput: __WEBPACK_IMPORTED_MODULE_0__DdlInput_vue___default.a,
    DdlTextarea: __WEBPACK_IMPORTED_MODULE_1__DdlTextarea_vue___default.a,
    DdlCheckbox: __WEBPACK_IMPORTED_MODULE_2__DdlCheckbox_vue___default.a,
    DdlRadio: __WEBPACK_IMPORTED_MODULE_3__DdlRadio_vue___default.a,
    DdlSelect: __WEBPACK_IMPORTED_MODULE_4__DdlSelect_vue___default.a,
    DdlSwitch: __WEBPACK_IMPORTED_MODULE_5__DdlSwitch_vue___default.a,
    DdlCascader: __WEBPACK_IMPORTED_MODULE_6__DdlCascader_vue___default.a,
    DdlDate: __WEBPACK_IMPORTED_MODULE_7__DdlDate_vue___default.a,
    DdlDateRange: __WEBPACK_IMPORTED_MODULE_8__DdlDateRange_vue___default.a,
    DdlDateYear: __WEBPACK_IMPORTED_MODULE_9__DdlDateYear_vue___default.a,
    DdlDateMonth: __WEBPACK_IMPORTED_MODULE_10__DdlDateMonth_vue___default.a,
    DdlDateWeek: __WEBPACK_IMPORTED_MODULE_11__DdlDateWeek_vue___default.a,
    DdlTime: __WEBPACK_IMPORTED_MODULE_12__DdlTime_vue___default.a,
    DdlTimeRange: __WEBPACK_IMPORTED_MODULE_13__DdlTimeRange_vue___default.a,
    DdlTimeFixed: __WEBPACK_IMPORTED_MODULE_14__DdlTimeFixed_vue___default.a,
    DdlTimeFixedRange: __WEBPACK_IMPORTED_MODULE_15__DdlTimeFixedRange_vue___default.a,
    DdlDateTime: __WEBPACK_IMPORTED_MODULE_16__DdlDateTime_vue___default.a,
    DdlDateTimeRange: __WEBPACK_IMPORTED_MODULE_17__DdlDateTimeRange_vue___default.a,
    DdlEditor: __WEBPACK_IMPORTED_MODULE_18__DdlEditor_vue___default.a,
    DdlTree: __WEBPACK_IMPORTED_MODULE_19__DdlTree_vue___default.a
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(137)
/* template */
var __vue_template__ = __webpack_require__(138)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dae2dffa", Component.options)
  } else {
    hotAPI.reload("data-v-dae2dffa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_InputTextarea__ = __webpack_require__(74);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])("sls-input");
Js.mixins = [__WEBPACK_IMPORTED_MODULE_1__js_InputTextarea__["a" /* default */]];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 138 */
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
        _vm._b(
          {
            attrs: {
              type: "input",
              placeholder: _vm.data.desc,
              clearable: _vm.data.clearable ? true : false
            },
            on: { blur: _vm.onBlur, focus: _vm.onFocus, change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-input",
          _vm.attrs,
          false
        ),
        [
          _vm.data.prepend && _vm.data.prepend_value
            ? _c("template", { slot: "prepend" }, [
                _vm._v(_vm._s(_vm.data.prepend_value))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.data.append && _vm.data.append_value
            ? _c("template", { slot: "append" }, [
                _vm._v(_vm._s(_vm.data.append_value))
              ])
            : _vm._e()
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-dae2dffa", module.exports)
  }
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(140)
/* template */
var __vue_template__ = __webpack_require__(141)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlTextarea.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c05b291", Component.options)
  } else {
    hotAPI.reload("data-v-5c05b291", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_InputTextarea__ = __webpack_require__(74);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-textarea');
Js.mixins = [__WEBPACK_IMPORTED_MODULE_1__js_InputTextarea__["a" /* default */]];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 141 */
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
        _vm._b(
          {
            attrs: { type: "textarea", placeholder: _vm.data.desc },
            on: { blur: _vm.onBlur, focus: _vm.onFocus, change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-input",
          _vm.attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-5c05b291", module.exports)
  }
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(143)
/* template */
var __vue_template__ = __webpack_require__(144)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlCheckbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70a5aa9a", Component.options)
  } else {
    hotAPI.reload("data-v-70a5aa9a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])("sls-checkbox");
Js.mixins = [{
  computed: {
    checkbox_group_attrs: function checkbox_group_attrs() {
      return this.Data.checkbox_group_attrs || {};
    },
    checkbox_attrs: function checkbox_attrs() {
      return this.Data.checkbox_attrs || {};
    }
  },
  methods: {
    onChange: function onChange(v) {
      var _this = this;

      if (Array.isArray(v)) {
        this.submit_info[this.data.key] = [];
        v.forEach(function (item) {
          _this.submit_info[_this.data.key].push(_this.temp_field_obj[_this.data.key][item]);
        });
      }
      this.events.change && this.events.change({
        value: v,
        info: this.submit_info[this.data.key]
      });
    }
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-checkbox-group",
        _vm._b(
          {
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-checkbox-group",
          _vm.checkbox_group_attrs,
          false
        ),
        _vm._l(_vm.data.list, function(checkbox, index) {
          return _c(
            "el-checkbox",
            _vm._b(
              { key: index, attrs: { label: checkbox[_vm.value_attr] } },
              "el-checkbox",
              _vm.checkbox_attrs,
              false
            ),
            [
              _vm._v(
                _vm._s(checkbox[_vm.label_attr] || checkbox[_vm.value_attr])
              )
            ]
          )
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-70a5aa9a", module.exports)
  }
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(146)
/* template */
var __vue_template__ = __webpack_require__(147)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlRadio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a086898", Component.options)
  } else {
    hotAPI.reload("data-v-1a086898", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-radio');
Js.mixins = [{
								computed: {
																radio_group_attrs: function radio_group_attrs() {
																								return this.Data.radio_group_attrs || {};
																},
																radio_attrs: function radio_attrs() {
																								return this.Data.radio_attrs || {};
																}
								},
								methods: {
																onChange: function onChange(v) {
																								this.submit_info[this.data.key] = '';
																								this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][v];
																								this.events.change && this.events.change({ value: v, info: this.submit_info[this.data.key] });
																}
								}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-radio-group",
        _vm._b(
          {
            attrs: { placeholder: _vm.data.desc },
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-radio-group",
          _vm.radio_group_attrs,
          false
        ),
        _vm._l(_vm.data.list, function(item, index) {
          return _c(
            "el-radio-button",
            _vm._b(
              { key: index, attrs: { label: item.value } },
              "el-radio-button",
              _vm.radio_attrs,
              false
            ),
            [_vm._v(_vm._s(item.text || item.value) + "\n        ")]
          )
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-1a086898", module.exports)
  }
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(149)
/* template */
var __vue_template__ = __webpack_require__(150)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c88e313", Component.options)
  } else {
    hotAPI.reload("data-v-0c88e313", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])("sls-select");
Js.mixins = [{
  data: function data() {
    return {};
  },

  computed: {
    select_attrs: function select_attrs() {
      return this.Data.select_attrs || {};
    },
    option_attrs: function option_attrs() {
      return this.Data.option_attrs || {};
    }
  },
  methods: {
    onChange: function onChange(v) {
      var _this = this;

      if (v) {
        if (Array.isArray(v)) {
          this.submit_info[this.data.key] = [];
          v.forEach(function (item) {
            _this.submit_info[_this.data.key].push(_this.temp_field_obj[_this.data.key][item]);
          });
        } else {
          this.submit_info[this.data.key] = "";
          this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][v];
        }
      }

      this.events.change && this.events.change({
        value: v,
        info: this.submit_info[this.data.key]
      });
    },
    onVisibleChange: function onVisibleChange() {
      this.events["visible-change"] && this.events["visible-change"]();
    },
    onRemoveTag: function onRemoveTag() {
      this.events["remove-tag"] && this.events["remove-tag"]();
    },
    onClear: function onClear() {
      this.events.clear && this.events.clear();
    }
  },
  created: function created() {}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-select",
        _vm._b(
          {
            attrs: {
              multiple: _vm.data.multiple ? true : false,
              placeholder: _vm.$t("OPTION_SELECT", { name: _vm.data.desc }),
              clearable: _vm.data.clearable ? true : false
            },
            on: {
              change: _vm.onChange,
              "visible-change": _vm.onVisibleChange,
              "remove-tag": _vm.onRemoveTag,
              clear: _vm.onClear
            },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-select",
          _vm.select_attrs,
          false
        ),
        _vm._l(_vm.data.list, function(item, index) {
          return _c(
            "el-option",
            _vm._b(
              {
                key: index,
                attrs: {
                  value: item[_vm.value_attr],
                  label: item[_vm.label_attr]
                }
              },
              "el-option",
              _vm.option_attrs,
              false
            )
          )
        })
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
    require("vue-hot-reload-api")      .rerender("data-v-0c88e313", module.exports)
  }
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(152)
/* template */
var __vue_template__ = __webpack_require__(153)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlSwitch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a89894b", Component.options)
  } else {
    hotAPI.reload("data-v-5a89894b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-switch');
Js.mixins = [{
	computed: {
		switch_attrs: function switch_attrs() {
			return this.Data.switch_attrs || {};
		}
	},
	methods: {
		onChange: function onChange(v) {
			this.submit_info[this.data.key] = '';
			this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][v ? 'on' : 'off'];

			this.events.change && this.events.change({
				value: v,
				info: this.submit_info[this.data.key]
			});
		}
	},
	created: function created() {
		this.temp_field_obj[this.data.key] = {};
		this.temp_field_obj[this.data.key].on = this.data.value.on;
		this.temp_field_obj[this.data.key].off = this.data.value.off;

		this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][this.submit_data[this.data.key] ? 'on' : 'off'];
	},
	mounted: function mounted() {}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-switch",
        _vm._b(
          {
            attrs: {
              "active-text": _vm.data.value.on,
              "inactive-text": _vm.data.value.off
            },
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-switch",
          _vm.switch_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-5a89894b", module.exports)
  }
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(155)
/* template */
var __vue_template__ = __webpack_require__(156)
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
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
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
  data: function data() {
    return {};
  },

  computed: {
    cascader_attrs: function cascader_attrs() {
      return this.Data.cascader_attrs || {};
    }
  },
  methods: {
    /**
     * 根据数组的长度，来决定需要递归几次，最终取出需要的结果，我曹，没法解释，解释不清的玩意。
     * @param  {array} 	areas 地区列表，无线分类结构
     * @param  {array} 	temps 一维数组,如果只有一个，代表取顶级;如果两个，取顶级的子级；如果三个，顶级的子级的子级....以此类推
     * @param  {number} k     递归次数，当这个值等于temps的长度时，就代表结束了
     * @return {string}       地区名称
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
     * 最后一级选择完后触发
     * @param v 选中的值数组，根据这个数组取出对应的文本
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
     * 每选择一项时就触发这个
     * 场景：当选择的条件不允许继续选择时，可以使用这个事件
     * @param v 选中的值数组，根据这个数组取出对应的文本
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
  },
  mounted: function mounted() {}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
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
    require("vue-hot-reload-api")      .rerender("data-v-0404a995", module.exports)
  }
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(158)
/* template */
var __vue_template__ = __webpack_require__(159)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlDate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-326e4885", Component.options)
  } else {
    hotAPI.reload("data-v-326e4885", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-date');
Js.mixins = [{
	computed: {
		date_attrs: function date_attrs() {
			return this.Data.date_attrs || {};
		}
	},
	methods: {
		onChange: function onChange(v) {
			this.events.change && this.events.change(v);
		}
	},
	created: function created() {}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-date-picker",
        _vm._b(
          {
            attrs: { type: "date", placeholder: _vm.data.desc },
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
          _vm.date_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-326e4885", module.exports)
  }
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(161)
/* template */
var __vue_template__ = __webpack_require__(162)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlDateRange.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65c38930", Component.options)
  } else {
    hotAPI.reload("data-v-65c38930", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-date-range');
Js.mixins = [{
	computed: {
		date_attrs: function date_attrs() {
			return this.Data.date_range_attrs || {};
		},


		/**
            * 范围分隔符，默认为 ' - '
   * @returns {*|string}
   */
		range_separator: function range_separator() {
			return this.Data.date_range_attrs['range-separator'] || ' - ';
		}
	},
	methods: {
		onChange: function onChange(v) {
			this.submit_info[this.data.key] = v.split(this.range_separator);
			this.events.change && this.events.change({ value: v, info: this.submit_info[this.data.key] });
		},


		/**
            * 如果传的默认值为字符串，自动转为数组
   */
		setValueStringToArray: function setValueStringToArray() {
			//传了默认值且为字符串再处理
			if (typeof this.submit_data[this.data.key] === 'string' && this.submit_data[this.data.key]) {
				//默认值必须包含分隔符
				if (this.submit_data[this.data.key].indexOf(this.range_separator) !== -1) {
					this.submit_data[this.data.key] = this.submit_data[this.data.key].split(this.range_separator);
				} else {
					console.error('日期范围默认值为数组。如果设置成了字符串，范围分隔符必须和设置的一样，默认分隔符为 " - "！');
				}
			}
		}
	},
	created: function created() {
		this.setValueStringToArray();
	}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-date-picker",
        _vm._b(
          {
            attrs: { type: "daterange", placeholder: _vm.data.desc },
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
          _vm.date_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-65c38930", module.exports)
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(164)
/* template */
var __vue_template__ = __webpack_require__(165)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlDateYear.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17920fe2", Component.options)
  } else {
    hotAPI.reload("data-v-17920fe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-date-year');
Js.mixins = [{
	computed: {
		date_attrs: function date_attrs() {
			return this.Data.date_attrs || {};
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-date-picker",
        _vm._b(
          {
            attrs: { type: "year", placeholder: _vm.data.desc },
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
          _vm.date_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-17920fe2", module.exports)
  }
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(167)
/* template */
var __vue_template__ = __webpack_require__(168)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlDateMonth.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a71c69aa", Component.options)
  } else {
    hotAPI.reload("data-v-a71c69aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-date-month');
Js.mixins = [{
	computed: {
		date_attrs: function date_attrs() {
			return this.Data.date_attrs || {};
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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-date-picker",
        _vm._b(
          {
            attrs: { type: "month", placeholder: _vm.data.desc },
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
          _vm.date_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-a71c69aa", module.exports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(170)
/* template */
var __vue_template__ = __webpack_require__(171)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlDateWeek.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e407419", Component.options)
  } else {
    hotAPI.reload("data-v-4e407419", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-date-week');
Js.mixins = [{
	computed: {
		date_attrs: function date_attrs() {
			return this.Data.date_attrs || {};
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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-date-picker",
        _vm._b(
          {
            attrs: { type: "week", placeholder: _vm.data.desc },
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
          _vm.date_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-4e407419", module.exports)
  }
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(173)
/* template */
var __vue_template__ = __webpack_require__(174)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlTime.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bc10424", Component.options)
  } else {
    hotAPI.reload("data-v-4bc10424", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-time');
Js.mixins = [{
	computed: {
		time_attrs: function time_attrs() {
			return this.Data.time_attrs || {};
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-time-picker",
        _vm._b(
          {
            attrs: { placeholder: _vm.data.desc },
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-time-picker",
          _vm.time_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-4bc10424", module.exports)
  }
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(176)
/* template */
var __vue_template__ = __webpack_require__(177)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlTimeRange.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3eca29ae", Component.options)
  } else {
    hotAPI.reload("data-v-3eca29ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-time');
Js.mixins = [{
	computed: {
		time_attrs: function time_attrs() {
			return this.Data.time_attrs || {};
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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-time-picker",
        _vm._b(
          {
            attrs: { "is-range": "", placeholder: _vm.data.desc },
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-time-picker",
          _vm.time_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-3eca29ae", module.exports)
  }
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(179)
/* template */
var __vue_template__ = __webpack_require__(180)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlTimeFixed.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-39f5a5e0", Component.options)
  } else {
    hotAPI.reload("data-v-39f5a5e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-time');
Js.mixins = [{
	computed: {
		time_attrs: function time_attrs() {
			return this.Data.time_attrs || {};
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-time-select",
        _vm._b(
          {
            attrs: { placeholder: _vm.data.desc },
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-time-select",
          _vm.time_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-39f5a5e0", module.exports)
  }
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(182)
/* template */
var __vue_template__ = __webpack_require__(183)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlTimeFixedRange.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a01c0226", Component.options)
  } else {
    hotAPI.reload("data-v-a01c0226", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-time');
Js.mixins = [{
	computed: {
		time_attrs: function time_attrs() {
			return this.Data.time_attrs || {};
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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-time-select",
        _vm._b(
          {
            attrs: { placeholder: _vm.data.desc },
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-time-select",
          _vm.time_attrs,
          false
        )
      ),
      _vm._v(" "),
      _c(
        "el-time-select",
        _vm._b(
          {
            attrs: { placeholder: _vm.data.desc },
            on: { change: _vm.onChange },
            model: {
              value: _vm.submit_data[_vm.data.key],
              callback: function($$v) {
                _vm.$set(_vm.submit_data, _vm.data.key, $$v)
              },
              expression: "submit_data[data.key]"
            }
          },
          "el-time-select",
          _vm.time_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-a01c0226", module.exports)
  }
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(185)
/* template */
var __vue_template__ = __webpack_require__(186)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlDateTime.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-10efdb1c", Component.options)
  } else {
    hotAPI.reload("data-v-10efdb1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-date-time');
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-date-picker",
        _vm._b(
          {
            attrs: { type: "datetime", placeholder: _vm.data.desc },
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
    require("vue-hot-reload-api")      .rerender("data-v-10efdb1c", module.exports)
  }
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(188)
/* template */
var __vue_template__ = __webpack_require__(189)
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
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
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
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
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
    require("vue-hot-reload-api")      .rerender("data-v-3bb2c4ca", module.exports)
  }
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(191)
/* template */
var __vue_template__ = __webpack_require__(192)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlEditor.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12782f04", Component.options)
  } else {
    hotAPI.reload("data-v-12782f04", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//

// import wangEditor from 'wangeditor';

var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])('sls-textarea');
Js.mixins = [{
	data: function data() {
		return {
			is_init: true,

			editor: null,

			id: '',

			menus: ['head', // 标题
			'bold', // 粗体
			'italic', // 斜体
			'underline', // 下划线
			'strikeThrough', // 删除线
			'foreColor', // 文字颜色
			'backColor', // 背景颜色
			'link', // 插入链接
			'list', // 列表
			'justify', // 对齐方式
			'quote', // 引用
			'emoticon', // 表情
			'image', // 插入图片
			'table', // 表格
			'video', // 插入视频
			'code', // 插入代码
			'undo', // 撤销
			'redo' // 重复
			],

			attrs: {
				zIndex: 90,

				uploadImgShowBase64: false, // 使用 base64 保存图片
				uploadImgServer: '', // 上传图片到服务器
				showLinkImg: true, //隐藏“网络图片”tab
				uploadImgMaxSize: 5 * 1024 * 1024, //默认限制图片大小是 5M
				uploadImgMaxLength: 10000, //限制一次最多能传几张图片,默认为 10000 张（即不限制），需要限制可自己配置
				uploadImgParams: {}, //上传图片时可自定义传递一些參數，例如传递验证的token等。这些參數会拼接到 url 的參數中，也会被添加到formdata中。
				uploadFileName: '', //上传图片时，可自定义filename，即在使用formdata.append(name, file)添加图片文件时，自定义第一个參數。
				uploadImgHeaders: {}, //上传图片时刻自定义设置 header
				withCredentials: false, //跨域上传中如果需要传递 cookie 需设置 withCredentials
				uploadImgTimeout: 5000 //默认的 timeout 时间是 5 秒钟
			},

			event: {
				// 图片上传之前触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
				//before: function (xhr, editor, files) {},


				// 图片上传并返回结果，图片插入成功之后触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				//success: function (xhr, editor, result) {},


				// 图片上传并返回结果，但图片插入错误时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
				//fail: function (xhr, editor, result) {},


				// 图片上传出错时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				//error: function (xhr, editor) {},


				// 图片上传超时时触发
				// xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
				//timeout: function (xhr, editor) {},


				// 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
				// （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
				// 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
				// insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
				// 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
				// result 必须是一个 JSON 格式字符串！！！否则报错
				/*customInsert: function (insertImg, result, editor) {
     var url = result.url
     insertImg(url)
     //						}*/
			}
		};
	},

	computed: {
		config: function config() {
			return this.Data.config || {};
		}
	},
	methods: {
		/**
   * 初始化參數
   */
		initParams: function initParams() {
			var _this = this;

			this.id = this.data.id || this.data.key;

			if (this.config.show_menus && Array.isArray(this.config.show_menus)) {
				this.menus = this.menus.filter(function (item) {
					return _this.config.show_menus.indexOf(item) !== -1;
				});
			} else {
				if (this.config.hide_menus && Array.isArray(this.config.hide_menus)) {
					this.menus = this.menus.filter(function (item) {
						return _this.config.hide_menus.indexOf(item) === -1;
					});
				}
			}
		},


		/**
   * 初始化实例编辑器
   */
		initWangEditor: function initWangEditor() {
			var _this2 = this;

			this.editor = new wangEditor('#' + this.id);
			this.editor.customConfig = {};
			this.editor.customConfig.menus = this.menus;
			this.editor.customConfig = Object.assign(this.editor.customConfig, this.attrs, this.config.attrs);
			this.editor.customConfig.uploadImgHooks = {};
			this.editor.customConfig.uploadImgHooks = Object.assign(this.editor.customConfig.uploadImgHooks, this.config.events);
			this.editor.customConfig.onchange = function (html) {
				_this2.submit_data[_this2.data.key] = html;
				_this2.submit_info[_this2.data.key] = _this2.editor.txt.text();
				_this2.config.onchange && _this2.config.onchange({
					value: _this2.submit_data[_this2.data.key],
					info: _this2.submit_info[_this2.data.key]
				});
			};
			this.editor.create();
		}
	},
	created: function created() {
		this.initParams();
	},
	mounted: function mounted() {
		// this.initWangEditor();
	},

	watch: {
		submit_data: {
			deep: true,
			handler: function handler(v) {
				/*this.submit_data = v;
    if (this.editor && this.is_init === true) {
    	this.is_init = false;
    	this.editor.txt.html(this.submit_data[this.data.key]);
    }*/
			}
		}
	}
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticStyle: { width: "1100px" }, attrs: { id: _vm.id } })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12782f04", module.exports)
  }
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(194)
/* template */
var __vue_template__ = __webpack_require__(195)
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
Component.options.__file = "resources/assets/admin/components/form-data/fields/DdlTree.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a325475", Component.options)
  } else {
    hotAPI.reload("data-v-1a325475", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_Common__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Js = Object(__WEBPACK_IMPORTED_MODULE_0__js_Common__["a" /* default */])("sls-tree");
Js.mixins = [{
  data: function data() {
    return {};
  },

  computed: {
    tree_attrs: function tree_attrs() {
      return this.Data.tree_attrs || {};
    }
  },
  methods: {
    onCheckChange: function onCheckChange() {
      this.submit_data[this.data.key] = this.$refs.tree.getCheckedKeys();
    }
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (Js);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-tree",
        _vm._b(
          {
            ref: "tree",
            attrs: {
              "node-key": "id",
              data: _vm.data.list,
              "default-checked-keys": _vm.submit_data[_vm.data.key],
              "default-expanded-keys": _vm.submit_data[_vm.data.key],
              props: _vm.custom_attrs,
              "show-checkbox": "",
              "auto-expand-parent": ""
            },
            on: { "check-change": _vm.onCheckChange }
          },
          "el-tree",
          _vm.tree_attrs,
          false
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-1a325475", module.exports)
  }
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    {
      ref: "form-data",
      staticClass: "form-data",
      attrs: {
        "label-width": "100px",
        inline: _vm.setting.inline,
        rules: _vm.rules,
        model: _vm.submit_data
      }
    },
    [
      _vm._l(_vm.fields, function(field, index) {
        return !field.condition ||
          typeof field.condition !== "function" ||
          (typeof field.condition === "function" &&
            field.condition({ data: _vm.submit_data }) === true)
          ? _c(
              "el-form-item",
              _vm._b(
                {
                  key: index,
                  staticClass: "edit-form",
                  attrs: { label: field.label, prop: field.key }
                },
                "el-form-item",
                field.attrs || {},
                false
              ),
              [
                _c(_vm.components[field.type] || "DdlInput", {
                  tag: "component",
                  attrs: {
                    Data: field,
                    SubmitData: _vm.submit_data,
                    SubmitInfo: _vm.submit_info,
                    TempFieldObj: _vm.temp_field_obj
                  }
                })
              ],
              1
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.setting.type === "search"
        ? _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary", icon: "fal fa-search" },
                  on: {
                    click: function($event) {
                      _vm.onSubmit({ ref: "form-data" })
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("SEARCHBAR_SEARCH") /*搜尋*/) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.onReset("form-data")
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.$t("SEARCHBAR_RESET") /*重置*/))]
              )
            ],
            1
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-72b26caf", module.exports)
  }
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apis___ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var plugins = {};
for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */].length; i++) {
    if (_typeof(__WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][i]) === "object" && __WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][i].list && Array.isArray(__WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][i].list)) {
        for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][i].list.length; j++) {
            plugins["api_" + __WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][i].module + "_" + __WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][i].list[j].method] = function (n, m) {
                return function () {
                    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                        _ref$type = _ref.type,
                        type = _ref$type === undefined ? __WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][n].list[m].type : _ref$type,
                        _ref$path = _ref.path,
                        path = _ref$path === undefined ? __WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */][n].list[m].path : _ref$path,
                        data = _ref.data,
                        fn = _ref.fn,
                        errFn = _ref.errFn,
                        finalFn = _ref.finalFn,
                        headers = _ref.headers,
                        opts = _ref.opts,
                        pathVar = _ref.pathVar,
                        tokenFlag = _ref.tokenFlag;

                    //request[n].list[m].type, request[n].list[m].path, data, fn, opts
                    __WEBPACK_IMPORTED_MODULE_0_utils___["b" /* ajax */].call(this, {
                        type: type,
                        path: path,
                        data: data,
                        fn: fn,
                        errFn: errFn,
                        finalFn: finalFn,
                        headers: headers,
                        opts: opts,
                        pathVar: pathVar,
                        tokenFlag: tokenFlag
                    });
                };
            }(i, j);
        }
    }
}

plugins["eventBus"] = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a();

/* harmony default export */ __webpack_exports__["a"] = (plugins);

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var files = __webpack_require__(199);
var requests = [];
files.keys().forEach(function (key) {
    requests.push({
        module: key.split(".")[1].split("/")[1],
        list: files(key).default
    });
});

/* harmony default export */ __webpack_exports__["a"] = (requests);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./api.js": 200,
	"./asset.js": 201,
	"./category.js": 202,
	"./field.js": 203,
	"./item.js": 204,
	"./language.js": 205,
	"./media.js": 206,
	"./menu.js": 207,
	"./module.js": 208,
	"./observer.js": 209,
	"./option.js": 210,
	"./role.js": 211,
	"./setting.js": 212,
	"./site.js": 213,
	"./tag.js": 214,
	"./user.js": 215
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
webpackContext.id = 199;

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有接口列表",
    method: "list",
    path: "/admin/asset/api/search",
    type: "post"
}, {
    name: "新增/修改單一接口",
    method: "save",
    path: "/admin/asset/api/store",
    type: "post"
}, {
    name: "刪除一至多個接口",
    method: "delete",
    path: "/admin/asset/api/remove",
    type: "post"
}, {
    name: "取得單一接口",
    method: "get",
    path: "/admin/asset/api/*",
    type: "get"
}]);

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有資源列表",
    method: "list",
    path: "/admin/asset/search",
    type: "post"
}, {
    name: "新增/修改單一資源",
    method: "save",
    path: "/admin/asset/store",
    type: "post"
}, {
    name: "刪除一至多個資源",
    method: "delete",
    path: "/admin/asset/remove",
    type: "post"
}, {
    name: "取得單一資源",
    method: "get",
    path: "/admin/asset/*",
    type: "get"
}, {
    name: "修改單一資源排序",
    method: "ordering",
    path: "/admin/asset/ordering",
    type: "post"
}, {
    name: "修改一至多個資源啟用狀態",
    method: "updateState",
    path: "/admin/asset/state",
    type: "post"
}, {
    name: "取得單一資源所屬的群組",
    method: "group",
    path: "/admin/asset/*/groups",
    type: "get"
}, {
    name: "修改單一資源所屬的群組",
    method: "grantGroup",
    path: "/admin/asset/group/map/store",
    type: "post"
}, {
    name: "取得單一資源接口資訊",
    method: "apis",
    path: "/admin/asset/*/apis",
    type: "get"
}, {
    name: "修改單一資源接口資訊",
    method: "grantAPIs",
    path: "/admin/asset/api/map/store",
    type: "post"
}, {
    name: "取得所有資源群組列表",
    method: "listGroup",
    path: "/admin/asset/group/search",
    type: "post"
}, {
    name: "刪除一至多個資源群組",
    method: "deleteGroup",
    path: "/admin/asset/group/remove",
    type: "post"
}, {
    name: "新增/修改單一資源群組",
    method: "saveGroup",
    path: "/admin/asset/group/store",
    type: "post"
}, {
    name: "取得單一資源群組",
    method: "getGroup",
    path: "/admin/asset/group/*",
    type: "get"
}, {
    name: "修改一至多個資源群組發布狀態",
    method: "updateGroupState",
    path: "/admin/asset/group/state",
    type: "post"
}]);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有分類列表",
    method: "list",
    path: "/admin/category/search",
    type: "post"
}, {
    name: "取得單一分類資訊",
    method: "get",
    path: "/admin/category/*",
    type: "get"
}, {
    name: "新增/修改單一分類",
    method: "save",
    path: "/admin/category/store",
    type: "post"
}, {
    name: "修改單一分類排序",
    method: "ordering",
    path: "/admin/category/ordering",
    type: "post"
}, {
    name: "刪除一至多個分類",
    method: "delete",
    path: "/admin/category/remove",
    type: "post"
}, {
    name: "修改一至多個分類發布狀態",
    method: "updateState",
    path: "/admin/category/state",
    type: "post"
}, {
    name: "修改一至多個分類回存狀態",
    method: "checkout",
    path: "/admin/category/checkout",
    type: "post"
}]);

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有欄位列表",
    method: "list",
    path: "/admin/extrafield/search",
    type: "post"
}, {
    name: "新增/修改單一欄位",
    method: "save",
    path: "/admin/extrafield/store",
    type: "post"
}, {
    name: "刪除一至多個欄位",
    method: "delete",
    path: "/admin/extrafield/remove",
    type: "post"
}, {
    name: "取得單一欄位",
    method: "get",
    path: "/admin/extrafield/*",
    type: "get"
}, {
    name: "取得所有欄位群組列表",
    method: "listGroup",
    path: "/admin/extrafield/group/search",
    type: "post"
}, {
    name: "刪除一至多個欄位群組",
    method: "deleteGroup",
    path: "/admin/extrafield/group/remove",
    type: "post"
}, {
    name: "新增/修改單一欄位群組",
    method: "saveGroup",
    path: "/admin/extrafield/group/store",
    type: "post"
}, {
    name: "取得單一欄位群組",
    method: "getGroup",
    path: "/admin/extrafield/group/*",
    type: "get"
}]);

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有項目列表",
    method: "list",
    path: "/admin/item/search",
    type: "post"
}, {
    name: "取得單一項目資訊",
    method: "get",
    path: "/admin/item/*",
    type: "get"
}, {
    name: "新增/修改單一項目",
    method: "save",
    path: "/admin/item/store",
    type: "post"
}, {
    name: "修改單一項目排序",
    method: "ordering",
    path: "/admin/item/ordering",
    type: "post"
}, {
    name: "刪除一至多個項目",
    method: "delete",
    path: "/admin/item/remove",
    type: "post"
}, {
    name: "修改一至多個項目發布狀態",
    method: "updateState",
    path: "/admin/item/state",
    type: "post"
}, {
    name: "修改一至多個項目精選狀態",
    method: "updateFeatured",
    path: "/admin/item/featured",
    type: "post"
}, {
    name: "修改一至多個項目回存狀態",
    method: "checkout",
    path: "/admin/item/checkout",
    type: "post"
}]);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有語言列表",
    method: "list",
    path: "/admin/language/search",
    type: "post"
}, {
    name: "取得所有語言列表(下拉選單用)",
    method: "listOption",
    path: "/admin/language/list",
    type: "get"
}, {
    name: "新增/修改單一語言",
    method: "save",
    path: "/admin/language/store",
    type: "post"
}, {
    name: "刪除一至多個語言",
    method: "delete",
    path: "/admin/language/remove",
    type: "post"
}, {
    name: "修改一至多個語言發布狀態",
    method: "updateState",
    path: "/admin/language/state",
    type: "post"
}, {
    name: "取得單一語言",
    method: "get",
    path: "/admin/language/*",
    type: "get"
}]);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有資料夾列表",
    method: "listFolder",
    path: "/admin/media/folder/all",
    type: "get"
}, {
    name: "新增單一資料夾",
    method: "createFolder",
    path: "/admin/media/folder/create",
    type: "post"
}, {
    name: "取得單一資料夾內檔案列表",
    method: "listFile",
    path: "/admin/media/folder/items",
    type: "post"
}, {
    name: "上傳一至多個檔案",
    method: "uploadFile",
    path: "/admin/media/upload",
    type: "post"
}, {
    name: "刪除一至多個檔案或資料夾",
    method: "delete",
    path: "/admin/media/remove",
    type: "post"
}, {
    name: "移動單一資料夾或檔案",
    method: "move",
    path: "/admin/media/move",
    type: "post"
}]);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有選單列表",
    method: "list",
    path: "/admin/menu/search",
    type: "post"
}, {
    name: "取得單一選單資訊",
    method: "get",
    path: "/admin/menu/*",
    type: "get"
}, {
    name: "新增/修改單一選單",
    method: "save",
    path: "/admin/menu/store",
    type: "post"
}, {
    name: "刪除一至多個選單",
    method: "delete",
    path: "/admin/menu/remove",
    type: "post"
}, {
    name: "修改一至多個選單回存狀態",
    method: "checkout",
    path: "/admin/menu/checkout",
    type: "post"
}]);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有模組列表",
    method: "list",
    path: "/admin/module/search",
    type: "post"
}, {
    name: "取得單一模組資訊",
    method: "get",
    path: "/admin/module/*",
    type: "get"
}, {
    name: "新增/修改單一模組",
    method: "save",
    path: "/admin/module/store",
    type: "post"
}, {
    name: "刪除一至多個模組",
    method: "delete",
    path: "/admin/module/remove",
    type: "post"
}, {
    name: "修改一至多個模組回存狀態",
    method: "checkout",
    path: "/admin/module/checkout",
    type: "post"
}]);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得關鍵字搜尋列表",
    method: "searchList",
    path: "/admin/search/keywordlist",
    type: "post"
}, {
    name: "取得操作紀錄",
    method: "log",
    path: "/admin/log/search",
    type: "post"
}]);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得CMS相關下拉選單列表",
    method: "list",
    path: "/admin/option/list",
    type: "post"
}]);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有角色列表",
    method: "list",
    path: "/admin/role/search",
    type: "post"
}, {
    name: "取得所有角色列表(樹狀結構)",
    method: "listTree",
    path: "/admin/role/tree",
    type: "get"
}, {
    name: "取得單一角色資訊",
    method: "get",
    path: "/admin/role/*",
    type: "get"
}, {
    name: "新增/修改單一角色",
    method: "save",
    path: "/admin/role/store",
    type: "post"
}, {
    name: "刪除一至多個角色",
    method: "delete",
    path: "/admin/role/remove",
    type: "post"
}, {
    name: "修改一至多個角色發布狀態",
    method: "updateState",
    path: "/admin/role/state",
    type: "post"
}, {
    name: "取得單一角色可走訪頁面列表(樹狀結構)",
    method: "pages",
    path: "/admin/role/*/page",
    type: "get"
}, {
    name: "取得單一角色資源權限(id 陣列)",
    method: "assets",
    path: "/admin/role/*/assetids",
    type: "get"
}, {
    name: "修改單一角色資源權限",
    method: "grantAssets",
    path: "/admin/role/asset/map/store",
    type: "get"
}, {
    name: "取得單一角色可走訪頁面對應的接口列表(樹狀結構)",
    method: "actions",
    path: "/admin/role/*/action",
    type: "get"
}, {
    name: "取得單一角色接口權限(id 陣列)",
    method: "apis",
    path: "/admin/role/*/apiids",
    type: "get"
}, {
    name: "修改單一角色接口權限",
    method: "grantAPIs",
    path: "/admin/role/api/map/store",
    type: "get"
}]);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得設定",
    method: "get",
    path: "/admin/setting",
    type: "get"
}, {
    name: "儲存設定",
    method: "save",
    path: "/admin/setting/store",
    type: "post"
}]);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有網站列表",
    method: "list",
    path: "/admin/site/search",
    type: "post"
}, {
    name: "新增/修改單一網站",
    method: "save",
    path: "/admin/site/store",
    type: "post"
}, {
    name: "取得單一網站",
    method: "get",
    path: "/admin/site/*",
    type: "get"
}]);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有標籤列表",
    method: "list",
    path: "/admin/tag/search",
    type: "post"
}, {
    name: "取得單一標籤資訊",
    method: "get",
    path: "/admin/tag/*",
    type: "get"
}, {
    name: "新增/修改單一標籤",
    method: "save",
    path: "/admin/tag/store",
    type: "post"
}, {
    name: "修改單一標籤排序",
    method: "ordering",
    path: "/admin/tag/ordering",
    type: "post"
}, {
    name: "刪除一至多個標籤",
    method: "delete",
    path: "/admin/tag/remove",
    type: "post"
}, {
    name: "修改一至多個標籤發布狀態",
    method: "updateState",
    path: "/admin/tag/state",
    type: "post"
}, {
    name: "修改一至多個標籤回存狀態",
    method: "checkout",
    path: "/admin/tag/checkout",
    type: "post"
}]);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "登入",
    method: "login",
    path: "/user/login",
    type: "post"
}, {
    name: "登出",
    method: "logout",
    path: "/user/logout",
    type: "get"
}, {
    name: "取得會員可走訪頁面列表",
    method: "getRoutes",
    path: "/admin/user/page",
    type: "get"
}, {
    name: "取得會員可用的接口列表",
    method: "getAPIs",
    path: "/admin/user/apis",
    type: "get"
}, {
    name: "取得所有會員列表",
    method: "list",
    path: "/admin/user/search",
    type: "post"
}, {
    name: "取得單一會員資訊",
    method: "get",
    path: "/admin/user/*",
    type: "get"
}, {
    name: "新增/修改單一會員",
    method: "save",
    path: "/admin/user/store",
    type: "post"
}, {
    name: "刪除一至多個會員",
    method: "delete",
    path: "/admin/user/remove",
    type: "post"
}, {
    name: "取得單一會員所屬角色",
    method: "grant",
    path: "/admin/user/*/grant",
    type: "get"
}, {
    name: "修改單一會員所屬角色",
    method: "grantUpdate",
    path: "/admin/user/role/map/store",
    type: "post"
}, {
    name: "取得所有會員群組列表",
    method: "listGroup",
    path: "/admin/user/group/search",
    type: "post"
}, {
    name: "取得所有會員群組列表(樹狀結構)",
    method: "listTreeGroup",
    path: "/admin/user/group/tree",
    type: "get"
}, {
    name: "取得所有會員群組列表(樹狀清單)",
    method: "listOptionGroup",
    path: "/admin/user/group/treeList",
    type: "get"
}, {
    name: "刪除一至多個會員群組",
    method: "deleteGroup",
    path: "/admin/user/group/remove",
    type: "post"
}, {
    name: "新增/修改單一會員群組",
    method: "saveGroup",
    path: "/admin/user/group/store",
    type: "post"
}, {
    name: "取得單一會員群組",
    method: "getGroup",
    path: "/admin/user/group/*",
    type: "get"
}, {
    name: "修改單一會員排序",
    method: "orderingGroup",
    path: "/admin/user/group/ordering",
    type: "post"
}]);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {};
    },

    methods: {},
    watch: {
        "$store.getters.language": function $storeGettersLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
});

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_directives_can__ = __webpack_require__(218);


/* harmony default export */ __webpack_exports__["a"] = ({
    Can: __WEBPACK_IMPORTED_MODULE_0_directives_can__["a" /* default */]
});

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store___ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router___ = __webpack_require__(69);



/* harmony default export */ __webpack_exports__["a"] = ({
    bind: function bind(el, binding, vnode) {
        var s = JSON.stringify;

        var user_apis = __WEBPACK_IMPORTED_MODULE_0_store___["a" /* default */].state.user.user_apis;
        var current_asset_id = __WEBPACK_IMPORTED_MODULE_1_router___["a" /* default */].currentRoute.meta.id;

        var hasPermission = user_apis[current_asset_id] ? user_apis[current_asset_id].includes(binding.value) : true;

        var forNoPermission = binding.arg === "not";

        if (!hasPermission && !forNoPermission || hasPermission && forNoPermission) {
            el.style.display = "none";
        }
    }
});

/***/ }),
/* 219 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[76]);