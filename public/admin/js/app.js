webpackJsonp([66],[
/* 0 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_configs_translation__ = __webpack_require__(152);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n___default.a);

// 引入 language 預設數值


var messages = {};
__WEBPACK_IMPORTED_MODULE_2_configs_translation__["c" /* SUPPORTED_LANGUAGES */].forEach(function (lang) {
    messages[lang.code] = Object.assign(__webpack_require__(153)("./" + lang.code).default, __webpack_require__(156)("./" + lang.code).default);
});
var i18n = new __WEBPACK_IMPORTED_MODULE_1_vue_i18n___default.a({
    locale: __WEBPACK_IMPORTED_MODULE_2_configs_translation__["a" /* DEFAULT_LANGUAGE */], // set locale
    fallbackLocale: __WEBPACK_IMPORTED_MODULE_2_configs_translation__["b" /* FALLBACK_LANGUAGE */],
    messages: messages // set locale messages
});

/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var files = __webpack_require__(154);
var locales = {};
files.keys().forEach(function (key) {
    locales = Object.assign(locales, files(key));
});

/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var files = __webpack_require__(155);
var locales = {};
files.keys().forEach(function (key) {
    locales = Object.assign(locales, files(key));
});

/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_configs_global__ = __webpack_require__(183);
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
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(180);





var requireModule = __webpack_require__(181);
var modules = {};
requireModule.keys().forEach(function (fileName) {
    var moduleName = fileName.split(".")[1].split("/")[1];
    modules[moduleName] = requireModule(fileName).default;
});

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
    modules: modules,
    getters: __WEBPACK_IMPORTED_MODULE_2__getters__["a" /* default */]
}));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(163)
/* template */
var __vue_template__ = __webpack_require__(164)
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export resetRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils___ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_router_routes__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store___ = __webpack_require__(10);






var userRoutes = __WEBPACK_IMPORTED_MODULE_2_utils___["a" /* Storage */].get("user_routes") || [];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var createRouter = function createRouter() {
    return new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
        base: "/dashboard",
        mode: "history",
        scrollBehavior: function scrollBehavior() {
            return { y: 0 };
        },
        routes: __WEBPACK_IMPORTED_MODULE_3_router_routes__["a" /* default */].concat(Object(__WEBPACK_IMPORTED_MODULE_2_utils___["c" /* formatRoutes */])(userRoutes)),
        linkActiveClass: "active"
    });
};

var router = createRouter();

function resetRouter() {
    var newRouter = createRouter();
    router.matcher = newRouter.matcher; //重置 Routes
}

var routeWhiteList = ["/login"];

router.beforeEach(function (to, from, next) {
    if (__WEBPACK_IMPORTED_MODULE_5_store___["a" /* default */].state.user.user_token) {
        to.path === "/login" ? next({ path: "/" }) : next();
    } else {
        routeWhiteList.includes(to.path) ? next() : next({ path: "/login" });
    }
});

router.afterEach(function (to) {
    if (to.name) document.title = __WEBPACK_IMPORTED_MODULE_4__lang___["default"].t(to.name) + " - " + __WEBPACK_IMPORTED_MODULE_5_store___["a" /* default */].state.global.site_name;
    if (window.innerWidth <= 1024) __WEBPACK_IMPORTED_MODULE_5_store___["a" /* default */].commit("left_menu", "close");
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_routes__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ajax__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__format_routes__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__storage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__ajax__["a"]; });






/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {"YES":"是","NO":"否","ALL":"所有","ALL_LANGUAGE":"所有","LOGIN":"登入","LOGOUT":"登出","PUBLISHED":"發佈的","UNPUBLISHED":"停止發佈的","ARCHIVED":"封存","TRASHED":"刪除至回收桶中","TOOLBAR_ADD":"新增","TOOLBAR_EDIT":"編輯","TOOLBAR_TRASH":"回收","TOOLBAR_DELETE":"刪除","TOOLBAR_RESTORE":"恢復","TOOLBAR_SAVE":"儲存","TOOLBAR_SAVE_AND_ADD":"儲存&新增","TOOLBAR_SAVE_AND_CLOSE":"儲存&關閉","TOOLBAR_CANCEL":"取消","TOOLBAR_PUBLISH":"發佈","TOOLBAR_UNPUBLISH":"停止發佈","TOOLBAR_FEATURED":"精選","TOOLBAR_UNFEATURED":"取消精選","TOOLBAR_CHECKOUT":"回存","TOOLBAR_KEYWORDS":"輸入關鍵字"}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {"MOD_GLOBAL_MENU_CONTROL_PANEL":"控制台","MOD_GLOBAL_MENU_SYSTEM":"系統","MOD_GLOBAL_MENU_PAGE":"頁面"}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {"CONTENT_FIELD_INTRO_IMAGE_LABEL":"摘要圖片","CONTENT_FIELD_MAIN_IMAGE_LABEL":"主要圖片"}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"COM_CONTENT":"內容","COM_CONTENT_ITEM_MANAGER_TITLE":"項目","COM_CONTENT_ITEM_EDIT_TITLE":"編輯項目","COM_CONTENT_CATEGORY_MANAGER_TITLE":"分類","COM_CONTENT_CATEGORY_EDIT_TITLE":"編輯分類","COM_CONTENT_TAG_MANAGER_TITLE":"標籤","COM_CONTENT_TAG_EDIT_TITLE":"編輯標籤","COM_CONTENT_EXTRAFIELD_MANAGER_TITLE":"附加欄位","COM_CONTENT_EXTRAFIELD_EDIT_TITLE":"編輯附加欄位","COM_CONTENT_EXTRAFIELD_GROUP_MANAGER_TITLE":"附加欄位群組","COM_CONTENT_EXTRAFIELD_GROUP_EDIT_TITLE":"編輯附加欄位群組","COM_CONTENT_MEDIA_MANAGER_TITLE":"媒體管理","COM_CONTENT_SEARCH_STATISTICS_TITLE":"全站搜尋統計"}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {"COM_DEV":"開發人員","COM_DEV_APIS_TITLE":"APIs","COM_DEV_API_MANAGER_TITLE":"API管理","COM_DEV_API_EDIT_TITLE":"編輯API","COM_DEV_ASSETS_TITLE":"資源","COM_DEV_ASSET_MANAGER_TITLE":"資源管理","COM_DEV_ASSET_EDIT_TITLE":"編輯資源","COM_DEV_ASSET_ASSIGN_GROUP_TITLE":"指定群組","COM_DEV_ASSET_ASSIGN_API_TITLE":"指定API","COM_DEV_ASSET_GROUP_MANAGER_TITLE":"資源群組","COM_DEV_ASSET_GROUP_EDIT_TITLE":"編輯資源群組"}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {"ERROR_INPUT_IDS":"請至少勾選一個項目","ERROR_INPUT_GROUP_IDS":"請至少指定一個會員群組","ERROR_INPUT_EMAIL":"請輸入Email","ERROR_INPUT_FIRST_NAME":"請輸入姓氏","ERROR_INPUT_LAST_NAME":"請輸入名字","ERROR_INPUT_TITLE":"請填寫標題","ERROR_INPUT_CATEGORY_ID":"請選擇分類","ERROR_INPUT_LANGUAGE":"請選擇語言","ERROR_INPUT_STATE":"請選擇狀態","ERROR_INPUT_FEATURED":"請選擇是否精選","ERROR_INPUT_PASSWORD":"請輸入正確的密碼","ERROR_INPUT_PASSWORD_CONFIRMATION":"請輸入相同的密碼"}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {"YES":"是","NO":"否","ALL":"所有","ALL_LANGUAGE":"所有","NONE":"無","LOGIN":"登入","LOGIN_LOADING":"登入中⋯⋯","LOGOUT":"登出","PUBLISHED":"發佈的","UNPUBLISHED":"停止發佈的","PENDING":"待上架","EXPIRED":"已下架","ARCHIVED":"封存","TRASHED":"刪除至回收桶中","FEATURED":"精選","NOT_FEATURED":"非精選","DISABLED":"停用","SELECT":"選擇","TOOLBAR_ADD":"新增","TOOLBAR_EDIT":"編輯","TOOLBAR_TRASH":"回收","TOOLBAR_DELETE":"刪除","TOOLBAR_RENAME":"重新命名","TOOLBAR_RENAME_DIR":"重新命名資料夾","TOOLBAR_RESTORE":"恢復","TOOLBAR_SAVE":"儲存","TOOLBAR_SAVE_AND_ADD":"儲存&新增","TOOLBAR_SAVE_AND_CLOSE":"儲存&關閉","TOOLBAR_CANCEL":"取消","TOOLBAR_PUBLISH":"發佈","TOOLBAR_UNPUBLISH":"停止發佈","TOOLBAR_FEATURED":"精選","TOOLBAR_UNFEATURED":"取消精選","TOOLBAR_CHECKOUT":"回存","TOOLBAR_BLOCK":"封鎖","TOOLBAR_UNBLOCK":"解除封鎖","TOOLBAR_KEYWORDS":"輸入關鍵字","SEARCHBAR_SEARCH":"搜尋","SEARCHBAR_RESET":"重置","LIST_DATA_HEADING_ID":"ID","LIST_DATA_HEADING_LANGUAGE":"語言","LIST_DATA_IMAGE_LABEL":"圖片","LIST_DATA_INTRO_IMAGE_LABEL":"摘要圖片","LIST_DATA_AUTHOR_LABEL":"作者","LIST_DATA_MODIFIED_DATE_LABEL":"修改日期","LIST_DATA_MODIFIED_BY_LABEL":"最後修改者","LIST_DATA_CREATED_DATE_LABEL":"建立日期","LIST_DATA_HITS_LABEL":"點擊","LIST_DATA_ACTIONS_LABEL":"操作","LIST_DATA_LOADING_TEXT":"載入中⋯⋯","OPTION_ORDER_BY":"排序依據","OPTION_ORDER":"排序方式","OPTION_ITEM_COUNT":"顯示項目總數量","OPTION_ITEM_SPLIT_ITEMS":"是否依照分類區隔資料？","OPTION_FEATURED_DISPLAY":"精選項目","OPTION_FEATURED_SPLIT_ITEMS":"是否置頂？","OPTION_FEATURED_COUNT":"精選項目數量","OPTION_FEATURED_ORDER_BY":"精選排序依據","OPTION_FEATURED_ORDER":"精選排序方式","OPTION_SELECT":"- 選擇{name} -","OPTION_NONE":"- 無 -","OPTION_STATE":"狀態","OPTION_BLOCK":"封鎖狀態","OPTION_ITEM":"項目","OPTION_CATEGORY":"分類","OPTION_PARENT_CATEGORY":"上層分類","OPTION_LANGUAGE":"語言","OPTION_FEATURED":"精選","OPTION_REQUIRED":"必填","OPTION_TAG":"標籤","OPTION_TYPE":"類型","OPTION_GROUP":"群組","OPTION_PARENT_GROUP":"上層群組","OPTION_USER_REDIRECT":"登入後頁面","OPTION_MENU":"選單","OPTION_PARENT_MENU":"上層選單","OPTION_EXTENSION":"擴充類型","OPTION_EXTENSION_MENU":"選單","OPTION_EXTENSION_MODULE":"模組","OPTION_EXTENSION_ITEM":"項目","OPTION_CONTENT_TYPE":"內容類型","OPTION_CONTENT_TYPE_ARTICLE":"文章","OPTION_CONTENT_TYPE_MENU":"菜單","OPTION_CONTENT_TYPE_TIMELINE":"時間軸","OPTION_CONTENT_TYPE_SLIDESHOW":"Slideshow","OPTION_CONTENT_TYPE_LINK":"連結","OPTION_CONTENT_TYPE_SIMPLE_ITEM":"簡單項目","OPTION_EXTRAFIELD_GROUP":"欄位群組","OPTION_ITEM_EXTRAFIELD_GROUP":"項目欄位群組","OPTION_EXTRAFIELD_TYPE":"欄位類型","OPTION_EXTRAFIELD_TYPE_TEXT":"文字欄位","OPTION_EXTRAFIELD_TYPE_TEXTAREA":"文字區","OPTION_EXTRAFIELD_TYPE_SELECT":"下拉選擇","OPTION_EXTRAFIELD_TYPE_MULTIPLESELECT":"多選列表","OPTION_EXTRAFIELD_TYPE_RADIO":"單選按鈕","OPTION_EXTRAFIELD_TYPE_LINK":"連結","OPTION_EXTRAFIELD_TYPE_DATE":"日期","OPTION_EXTRAFIELD_TYPE_DATETIME":"日期時間","OPTION_EXTRAFIELD_TYPE_IMAGE":"圖片","OPTION_EXTRAFIELD_TYPE_COLOR":"顏色選擇器","FIELD_TITLE_LABEL":"標題","FIELD_ALIAS_LABEL":"別名","FIELD_INTRO_TEXT_LABEL":"摘要文字","FIELD_DESCRIPTION_LABEL":"描述","FIELD_ITEM_DESCRIPTION_LABEL":"內容文字","FIELD_CATEGORY_DESCRIPTION_LABEL":"分類描述","FIELD_LANGUAGE_LABEL":"語言","FIELD_ACCESS_LEVEL":"存取層級","FIELD_PUBLISH_UP_DATE":"起始發佈日期","FIELD_PUBLISH_DOWN_DATE":"結束發佈日期","FIELD_META_DESCRIPTION_LABEL":"Meta 說明","FIELD_META_KEYWORDS_LABEL":"Meta 關鍵字","FIELD_MAIN_IMAGE_SAME_AS_INTRO_IMAGE_LABEL":"套用摘要圖片路徑","FIELD_MEDIA_PREVIEW_SELECTED_IMAGE":"預覽","FIELD_MEDIA_PREVIEW_EMPTY":"沒有選擇圖片","FIELD_MENU_CHOOSE_MODULE":"選擇模組","FIELD_SEARCH_KEYWORD":"搜尋關鍵字","FIELD_SEARCH_COUNT":"次數","FIELD_SEARCH_START_DATE":"起始日期","FIELD_SEARCH_END_DATE":"結束日期","FIELD_EXTRAFIELD_DEFAULT_VALUE":"預設值","FIELD_EXTRAFIELD_DISPLAY_NULL_OPTION":"顯示空選項","FIELD_EXTRAFIELD_TEXTAREA_ROWS":"列數","FIELD_EXTRAFIELD_TEXTAREA_USE_EDITOR":" 使用編輯器","FIELD_EXTRAFIELD_DATE_DISPLAY_FORMAT":"顯示格式","LANGUAGE_TAB_SITE_NAME_AND_METADATA":"網站名稱 & Metadata","LANGUAGE_FIELD_LANG_TAG_LABEL":"語言標籤","LANGUAGE_FIELD_LANG_CODE_LABEL":"網址語言代碼","LANGUAGE_FIELD_TYPE_LABEL":"語言類型","LANGUAGE_FIELD_TYPE_SYSTEM":"系統","LANGUAGE_FIELD_TYPE_CONTENT":"內容","LANGUAGE_FIELD_CUSTOM_SITE_NAME_LABEL":"自訂網站名稱","EXTRAFIELD_TYPE_TEXT":"文字欄位","EXTRAFIELD_TYPE_TEXTAREA":"文字區","EXTRAFIELD_TYPE_SELECT":"下拉選單","EXTRAFIELD_TYPE_MULTIPLESELECT":"多選列表","EXTRAFIELD_TYPE_RADIO":"單選按鈕","EXTRAFIELD_TYPE_LINK":"連結","EXTRAFIELD_TYPE_DATE":"日期","EXTRAFIELD_TYPE_DATETIME":"日期時間","EXTRAFIELD_TYPE_IMAGE":"圖片","EXTRAFIELD_TYPE_LINK_TEXT":"連結文字","EXTRAFIELD_TYPE_LINK_URL":"網址","EXTRAFIELD_TYPE_LINK_OPEN_IN":"開啟於","EXTRAFIELD_TYPE_LINK_OPEN_IN_SAME_WINDOW":"相同視窗","EXTRAFIELD_TYPE_LINK_OPEN_IN_NEW_WINDOW":"新視窗","MENU_FIELD_SITE_NAME_LABEL":"網站","SITE_FIELD_URL_LABEL":"網址","MEDIA_LIST_VIEW":"列表","MEDIA_THUMB_VIEW":"縮圖","MEDIA_UPLOAD_FILE":"上傳檔案","MEDIA_UPLOAD_FILE_LIMIT":"最大大小: 10MB","MEDIA_ITEMS":"項目:","MEDIA_UPLOAD":"上傳","MEDIA_SELECT_FILE":"選擇檔案","MEDIA_CREATE_DIR":"新增資料夾","MEDIA_CREATE":"建立","MEDIA_RENAME":"重新命名","MEDIA_NAME":"名稱","MEDIA_SIZE":"大小","MEDIA_TYPE":"種類","MEDIA_MODIFIED_DATE":"修改日期","EDITOR_CHOOSE_IMAGE_FROM_MEDIA":"從媒體選擇圖片","USER_OPTION_BLOCK":"已封鎖","USER_OPTION_ACTIVE":"啟用狀態","USER_ACTIVATED":"已啟用","USER_UNACTIVATED":"未啟用","USER_BLOCKED":"已封鎖","USER_TAB_DETAIL":"會員資料","USER_TAB_ASSIGN_GROUP":"指定會員群組","USER_FIELD_FIRST_NAME":"姓氏","USER_FIELD_LAST_NAME":"名字","USER_FIELD_EMAIL":"Email","USER_FIELD_PASSWORD":"密碼","USER_FIELD_PASSWORD_CONFIRMATION":"再次輸入密碼","SETTING_FIELD_SITE_NAME_LABEL":"網站名稱","SETTING_FIELD_SITE_LANG_LABEL":"網站語言","SETTING_FIELD_ADMIN_LANG_LABEL":"管理區語言","GLOBAL_FIELDSET_OPTIONS":"選項","GLOBAL_FIELDSET_BASIC_OPTIONS":"基本","GLOBAL_FIELDSET_METADATA_OPTIONS":"Metadata","GLOBAL_FIELDSET_IMAGE_OPTIONS":"圖片","GLOBAL_FIELDSET_PARAMS_OPTIONS":"參數","GLOBAL_FIELDSET_EXTRAFIELD_OPTIONS":"附加欄位","GLOBAL_FIELDSET_CONTENT_MANAGE_PREFIX":"項目管理：{name}","GLOBAL_USERNAME":"帳號","GLOBAL_PASSWORD":"密碼","GLOBAL_REMEMBER_ME":"記住帳號","GLOBAL_ROOT":"根","GLOBAL_VIEW_SITE":"預覽網站","GLOBAL_HOMEPAGE":"首頁","GLOBAL_CONFIRM_DELETE":"你確定想要移除？確認後將永久刪除選定的項目！","GLOBAL_CONFIRM_LOGOUT":"你確定要登出？","GLOBAL_LOGIN_SUCCESS":"登入成功","GLOBAL_LOGOUT_SUCCESS":"成功登出","ERROR":"錯誤","ERROR_PLEASE_ENTER_USER_NAME":"請輸入帳號","ERROR_PLEASE_ENTER_VALID_EMAIL":"請輸入有效的Email","ERROR_PLEASE_ENTER_PASSWORD":"請輸入密碼","ERROR_PLEASE_ENTER_PASSWORD_CONFIRMATION":"請輸入相同的密碼","ERROR_PLEASE_ENTER_VALID_PASSWORD":"請輸入有效的密碼: 8~16碼英文或數字","ERROR_PLEASE_LOGIN":"請先登入"}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {"COM_MENUS":"選單","COM_MENUS_ITEM_MANAGER_TITLE":"選單管理","COM_MENUS_ITEM_EDIT_TITLE":"編輯選單"}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {"MOD_GLOBAL_MENU_CONTROL_PANEL":"控制台","MOD_GLOBAL_MENU_SYSTEM":"系統","MOD_GLOBAL_MENU_PAGE":"頁面"}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {"COM_MODULES":"模組","COM_MODULES_ITEM_MANAGER_TITLE":"模組管理","COM_MODULES_ITEM_EDIT_TITLE":"編輯模組"}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {"COM_SYSTEM_SETTINGS_TITLE":"全站設定","COM_SYSTEM_LANGUAGE_MANAGER_TITLE":"語言","COM_SYSTEM_LANGUAGE_EDIT_TITLE":"編輯語言","COM_SYSTEM_SITE_MANAGER_TITLE":"多網站","COM_SYSTEM_SITE_EDIT_TITLE":"編輯網站"}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {"COM_USERS":"會員","COM_USERS_USER_MANAGER_TITLE":"管理","COM_USERS_USER_EDIT_TITLE":"編輯會員","COM_USERS_GROUPS_MANAGER_TITLE":"群組管理","COM_USERS_GROUPS_EDIT_TITLE":"編輯會員群組","COM_USERS_VIEWLEVEL_MANAGER_TITLE":"存取層級","COM_USERS_VIEWLEVEL_EDIT_TITLE":"編輯存取層級","COM_USERS_LOG":"會員歷程紀錄"}

/***/ }),
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
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UPDATE_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_USER_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UPDATE_USER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return REMOVE_USER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPDATE_REMEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REMOVE_REMEMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UPDATE_USER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REMOVE_USER_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UPDATE_USER_ACCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_USER_ACCESS; });
/* unused harmony export UPDATE_ROLES */
/* unused harmony export UPDATE_ASSETS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_ERROR_LOGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UPDATE_OPTION_RELATED_LIST; });
/**
 * user
 */

var UPDATE_USER_INFO = "UPDATE_USER_INFO";
var REMOVE_USER_INFO = "REMOVE_USER_INFO";

var UPDATE_USER_TOKEN = "UPDATE_USER_TOKEN";
var REMOVE_USER_TOKEN = "REMOVE_USER_TOKEN";

var UPDATE_REMEMBER = "UPDATE_REMEMBER";
var REMOVE_REMEMBER = "REMOVE_REMEMBER";

var UPDATE_USER_ROUTES = "UPDATE_USER_ROUTES";
var REMOVE_USER_ROUTES = "REMOVE_USER_ROUTES";

var UPDATE_USER_ACCESS = "UPDATE_USER_ACCESS";
var REMOVE_USER_ACCESS = "REMOVE_USER_ACCESS";

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
/* 93 */,
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150);
module.exports = __webpack_require__(248);


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_vue_fontawesome__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_svg_core__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_pro_light_svg_icons__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_App__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_router___ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_store___ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register__ = __webpack_require__(194);



// Using Element UI

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_element_ui___default.a, {
    i18n: function i18n(key, value) {
        return __WEBPACK_IMPORTED_MODULE_1__lang__["default"].t(key, value);
    }
});

// Using FontAwesome

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component("font-awesome-icon", __WEBPACK_IMPORTED_MODULE_3__fortawesome_vue_fontawesome__["a" /* FontAwesomeIcon */]);



// import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";

__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_svg_core__["c" /* library */].add(__WEBPACK_IMPORTED_MODULE_5__fortawesome_pro_light_svg_icons__["a" /* fal */], __webpack_require__(161).definition, __webpack_require__(162).definition);





// import "./icons";


// Remove the productionTip in dev tool console
if (false) {
    Vue.config.productionTip = false;
    Vue.config.devtools = false;
}
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: "#app",
    i18n: __WEBPACK_IMPORTED_MODULE_1__lang__["default"],
    router: __WEBPACK_IMPORTED_MODULE_7_router___["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_8_store___["a" /* default */],
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_6__views_App___default.a);
    }
});

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = VueI18n;

/***/ }),
/* 152 */
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 1,
	"./en": 5,
	"./en/": 5,
	"./en/content.json": 25,
	"./en/global.json": 26,
	"./en/index": 5,
	"./en/index.js": 5,
	"./en/mod_menu.json": 27,
	"./index": 1,
	"./index.js": 1,
	"./zh-TW": 6,
	"./zh-TW/": 6,
	"./zh-TW/content.json": 28,
	"./zh-TW/content.sys.json": 29,
	"./zh-TW/develop.sys.json": 30,
	"./zh-TW/error.json": 31,
	"./zh-TW/global.json": 32,
	"./zh-TW/index": 6,
	"./zh-TW/index.js": 6,
	"./zh-TW/menu.sys.json": 33,
	"./zh-TW/mod_menu.json": 34,
	"./zh-TW/module.sys.json": 35,
	"./zh-TW/system.sys.json": 36,
	"./zh-TW/user.sys.json": 37
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
webpackContext.id = 153;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content.json": 25,
	"./global.json": 26,
	"./mod_menu.json": 27
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
webpackContext.id = 154;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./content.json": 28,
	"./content.sys.json": 29,
	"./develop.sys.json": 30,
	"./error.json": 31,
	"./global.json": 32,
	"./menu.sys.json": 33,
	"./mod_menu.json": 34,
	"./module.sys.json": 35,
	"./system.sys.json": 36,
	"./user.sys.json": 37
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
webpackContext.id = 155;

/***/ }),
/* 156 */,
/* 157 */
/***/ (function(module, exports) {

module.exports = ELEMENT;

/***/ }),
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  watch: {
    "$store.state.user.user_token": function $storeStateUserUser_token(value) {
      var _this = this;

      if (value) {
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
      }
    }
  }
});

/***/ }),
/* 164 */
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
/* 165 */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatRoutes;
function formatRoutes(routers) {
    //簡單檢查是否是可以處理的數據
    if (!(routers instanceof Array)) {
        return false;
    }
    //處理後的容器
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
        //如果有子組件，遞歸處理
        if (children && children instanceof Array) {
            children = formatRoutes(children);
        }
        var fmRouter = {
            path: full_path || path,
            component: function component() {
                //拚出相對路徑，由於component無法識別變量
                //利用Webpack 的 Code-Splitting 功能
                return _component === "layout" ? __webpack_require__.e/* import() */(45).then(__webpack_require__.bind(null, 252)) : __webpack_require__(167)("./" + _component);
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": [
		23,
		6
	],
	"./App": [
		11
	],
	"./App.vue": [
		11
	],
	"./api/edit": [
		114,
		28
	],
	"./api/edit.vue": [
		114,
		28
	],
	"./api/list": [
		115,
		43
	],
	"./api/list.vue": [
		115,
		43
	],
	"./asset/assign/group": [
		116,
		35
	],
	"./asset/assign/group.vue": [
		116,
		35
	],
	"./asset/edit": [
		117,
		27
	],
	"./asset/edit.vue": [
		117,
		27
	],
	"./asset/group/edit": [
		118,
		44
	],
	"./asset/group/edit.vue": [
		118,
		44
	],
	"./asset/group/list": [
		119,
		42
	],
	"./asset/group/list.vue": [
		119,
		42
	],
	"./asset/list": [
		120,
		41
	],
	"./asset/list.vue": [
		120,
		41
	],
	"./content/category/components/item": [
		110,
		4
	],
	"./content/category/components/item-list": [
		109,
		5
	],
	"./content/category/components/item-list.vue": [
		109,
		5
	],
	"./content/category/components/item.vue": [
		110,
		4
	],
	"./content/category/edit": [
		122,
		23
	],
	"./content/category/edit.vue": [
		122,
		23
	],
	"./content/category/list": [
		123,
		17
	],
	"./content/category/list.vue": [
		123,
		17
	],
	"./content/field/components/type-form": [
		111,
		1
	],
	"./content/field/components/type-form.vue": [
		111,
		1
	],
	"./content/field/edit": [
		124,
		22
	],
	"./content/field/edit.vue": [
		124,
		22
	],
	"./content/field/group/edit": [
		125,
		34
	],
	"./content/field/group/edit.vue": [
		125,
		34
	],
	"./content/field/group/list": [
		126,
		33
	],
	"./content/field/group/list.vue": [
		126,
		33
	],
	"./content/field/list": [
		127,
		13
	],
	"./content/field/list.vue": [
		127,
		13
	],
	"./content/item/edit": [
		128,
		21
	],
	"./content/item/edit.vue": [
		128,
		21
	],
	"./content/item/list": [
		103,
		16
	],
	"./content/item/list.vue": [
		103,
		16
	],
	"./content/media": [
		129,
		32
	],
	"./content/media.vue": [
		129,
		32
	],
	"./content/search": [
		130,
		25
	],
	"./content/search.vue": [
		130,
		25
	],
	"./content/tag/edit": [
		131,
		39
	],
	"./content/tag/edit.vue": [
		131,
		39
	],
	"./content/tag/list": [
		132,
		37
	],
	"./content/tag/list.vue": [
		132,
		37
	],
	"./error": [
		4,
		0
	],
	"./error/": [
		4,
		0
	],
	"./error/401": [
		20,
		8
	],
	"./error/401.vue": [
		20,
		8
	],
	"./error/404": [
		21,
		3
	],
	"./error/404.vue": [
		21,
		3
	],
	"./error/500": [
		22,
		7
	],
	"./error/500.vue": [
		22,
		7
	],
	"./error/index": [
		4,
		0
	],
	"./error/index.vue": [
		4,
		0
	],
	"./index": [
		23,
		6
	],
	"./index.vue": [
		23,
		6
	],
	"./login": [
		24,
		2
	],
	"./login.vue": [
		24,
		2
	],
	"./menu/edit": [
		133,
		20
	],
	"./menu/edit.vue": [
		133,
		20
	],
	"./menu/list": [
		134,
		12
	],
	"./menu/list.vue": [
		134,
		12
	],
	"./module/components/params-form": [
		108,
		9
	],
	"./module/components/params-form.vue": [
		108,
		9
	],
	"./module/edit": [
		135,
		14
	],
	"./module/edit.vue": [
		135,
		14
	],
	"./module/list": [
		136,
		11
	],
	"./module/list.vue": [
		136,
		11
	],
	"./system/language/edit": [
		137,
		38
	],
	"./system/language/edit.vue": [
		137,
		38
	],
	"./system/language/list": [
		138,
		36
	],
	"./system/language/list.vue": [
		138,
		36
	],
	"./system/setting": [
		139,
		31
	],
	"./system/setting.vue": [
		139,
		31
	],
	"./system/site/edit": [
		140,
		19
	],
	"./system/site/edit.vue": [
		140,
		19
	],
	"./system/site/list": [
		141,
		15
	],
	"./system/site/list.vue": [
		141,
		15
	],
	"./user/edit": [
		142,
		18
	],
	"./user/edit.vue": [
		142,
		18
	],
	"./user/group/edit": [
		143,
		10
	],
	"./user/group/edit.vue": [
		143,
		10
	],
	"./user/group/list": [
		144,
		40
	],
	"./user/group/list.vue": [
		144,
		40
	],
	"./user/list": [
		145,
		26
	],
	"./user/list.vue": [
		145,
		26
	],
	"./user/log": [
		146,
		24
	],
	"./user/log.vue": [
		146,
		24
	],
	"./user/viewlevel/edit": [
		147,
		30
	],
	"./user/viewlevel/edit.vue": [
		147,
		30
	],
	"./user/viewlevel/list": [
		148,
		29
	],
	"./user/viewlevel/list.vue": [
		148,
		29
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),
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
/* 179 */
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ }),
/* 180 */
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
    },
    user_group_list: function user_group_list(state) {
        return state.sys.user_group_list;
    }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./global.js": 182,
	"./sys.js": 184,
	"./user.js": 185
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
webpackContext.id = 181;

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_storage__ = __webpack_require__(7);


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
        if (option === "open") {
            state.left_open = true;
            __WEBPACK_IMPORTED_MODULE_0_utils_storage__["a" /* default */].set("left_open", true);
        } else if (option === "close") {
            state.left_open = false;
            __WEBPACK_IMPORTED_MODULE_0_utils_storage__["a" /* default */].set("left_open", false);
        } else if (option === "toggle") {
            state.left_open = !state.left_open;
            __WEBPACK_IMPORTED_MODULE_0_utils_storage__["a" /* default */].set("left_open", state.left_open);
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({
    state: state,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DB_PREFIX; });
var DB_PREFIX = "ddrmlab_admin_";

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_storage__ = __webpack_require__(7);
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
    extrafield_group_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("extrafield_group_list") || "",
    user_group_list: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_group_list") || ""
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

        var params = ["item_category", "item_article_category", "menu_category", "language", "viewlevel", "extrafield_group", "site", "user_group"];
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

/* harmony default export */ __webpack_exports__["default"] = ({
    state: state,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_storage__ = __webpack_require__(7);
var _mutations;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




var defaults = {
    user_token: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_token") || "",
    user_info: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_info") || {},

    // 登入成功後，使用者可走訪的路由與可看到的按鈕
    user_routes: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_routes") || [],
    user_access: __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].get("user_access") || {},

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
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* UPDATE_USER_INFO */], user_info);
            commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_USER_TOKEN */], user_info.token);
            resolve();
        });
    },
    remove_userinfo: function remove_userinfo(_ref2) {
        var commit = _ref2.commit;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* REMOVE_USER_INFO */]);
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* REMOVE_USER_TOKEN */]);
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* REMOVE_USER_ROUTES */]);
        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* REMOVE_USER_ACCESS */]);
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

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["k" /* UPDATE_USER_ROUTES */], { routes: routes, redirect: redirect });
        // return new Promise(resolve => {
        //     commit(types.UPDATE_USER_ROUTES, { routes, redirect });
        //     resolve();
        // });
    },
    update_user_access: function update_user_access(_ref8, access) {
        var commit = _ref8.commit;

        commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* UPDATE_USER_ACCESS */], access);
    }
};

var mutations = (_mutations = {}, _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["l" /* UPDATE_USER_TOKEN */], function (state, user_token) {
    state.user_token = user_token;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_token", state.user_token);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* REMOVE_USER_TOKEN */], function (state) {
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("user_token");
    state.user_token = "";
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["j" /* UPDATE_USER_INFO */], function (state, user_info) {
    state.user_info = user_info;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_info", state.user_info);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* REMOVE_USER_INFO */], function (state) {
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
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["k" /* UPDATE_USER_ROUTES */], function (state, _ref9) {
    var routes = _ref9.routes,
        redirect = _ref9.redirect;

    var routeIncludeIndex = routes.filter(function (route) {
        return route.path === "/";
    });
    // fix user doesn't have dashboard asset
    if (routeIncludeIndex.length === 0) {
        routes = [].concat(_toConsumableArray(routes), [{
            path: "/",
            redirect: redirect,
            enabled: 1,
            showNav: false
        }]);
    }
    // ensure error page would be the last one
    routes = [].concat(_toConsumableArray(routes), [{
        path: "*",
        redirect: "/error/404",
        enabled: 1,
        showNav: false
    }]);
    state.user_routes = routes;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_routes", routes);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["d" /* REMOVE_USER_ROUTES */], function (state) {
    state.user_routes = [];
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("user_routes");
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* UPDATE_USER_ACCESS */], function (state, access) {
    state.user_access = access;
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].set("user_access", access);
}), _defineProperty(_mutations, __WEBPACK_IMPORTED_MODULE_0__mutation_types__["b" /* REMOVE_USER_ACCESS */], function (state) {
    state.user_access = {};
    __WEBPACK_IMPORTED_MODULE_1_utils_storage__["a" /* default */].remove("user_access");
}), _mutations);
/* harmony default export */ __webpack_exports__["default"] = ({
    state: state,
    actions: actions,
    mutations: mutations
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_configs_ajax__ = __webpack_require__(192);
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
            if (__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["a" /* errorHandler */].statusError[err_res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_status_code_field]]) {
                __WEBPACK_IMPORTED_MODULE_4_configs_ajax__["a" /* errorHandler */].statusError[err_res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_status_code_field]].call(_this, err_res_data);
            } else {
                if (errFn) {
                    errFn.call(_this, err_res_data[__WEBPACK_IMPORTED_MODULE_4_configs_ajax__["b" /* setting */].response_message_field]);
                } else {
                    __WEBPACK_IMPORTED_MODULE_4_configs_ajax__["a" /* errorHandler */].requestError.call(_this, err.response);
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
/* 187 */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lang___ = __webpack_require__(1);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var env = Object({"MIX_PUSHER_APP_KEY":"","MIX_PUSHER_APP_CLUSTER":"mt1","NODE_ENV":"development"});

var setting = {
    host: "/api",
    response_status_code_field: "code",
    response_status_code_success_value: 200,
    response_data_field: "data",
    response_message_field: "message"
};

var errorHandler = {
    errorFlag: false,
    get getErrorFlag() {
        return this.errorFlag;
    },
    set setErrorFlag(flag) {
        this.errorFlag = flag;
    },
    statusError: {
        400: function _(err) {
            var msgArray = [];

            Object.keys(err.data).forEach(function (key) {
                msgArray = [].concat(_toConsumableArray(msgArray), [__WEBPACK_IMPORTED_MODULE_0_lang___["default"].t("ERROR_INPUT_" + key.toUpperCase())]);
            });

            this.$message({
                showClose: true,
                message: msgArray.join(", "),
                type: "error"
            });
        },
        // 未登錄、沒有權限
        401: function _() {
            var _this = this;

            if (!this.errorFlag) {
                this.setErrorFlag = true;
                this.$store.dispatch("remove_userinfo").then(function () {
                    _this.setErrorFlag = false;
                    _this.$router.replace({
                        path: "/login"
                        // query: {
                        //     redirect: this.$route.path
                        // }
                    });
                });
            }
        }
    },
    requestError: function requestError(err) {
        var errMsg = "Request Error";

        if (err) {
            var _err$data = err.data,
                code = _err$data.code,
                message = _err$data.message;

            errMsg = "Request Error: " + code + ", " + message;
        }

        this.$message({
            showClose: true,
            message: errMsg,
            type: "error"
        });
    }
};



/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([{
    path: "/login",
    component: function component(resolve) {
        return __webpack_require__.e/* require */(2/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(24)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    name: "LOGIN",
    meta: {
        showNav: 0
    }
}, {
    path: "/error",
    component: function component(resolve) {
        return __webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(4)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
    },
    name: "ERROR",
    meta: {
        showNav: 0
    },
    children: [{
        path: "401",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(8/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(20)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "401",
        meta: {
            showNav: 0
        }
    }, {
        path: "404",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(3/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(21)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "404",
        meta: {
            showNav: 0
        }
    }, {
        path: "500",
        component: function component(resolve) {
            return __webpack_require__.e/* require */(7/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(22)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        name: "500",
        meta: {
            showNav: 0
        }
    }]
}]);

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_each__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugin__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixin__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directive__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(243);











/**
 * 把一些全局对象和一些全局方法，注册到Vue原型上
 */
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use({
    install: function install(Vue, options) {
        Vue.mixin(__WEBPACK_IMPORTED_MODULE_4__mixin__["a" /* default */]);

        //注册全局方法，如常用的接口方法，工具方法等。
        __WEBPACK_IMPORTED_MODULE_1_lodash_each___default()(__WEBPACK_IMPORTED_MODULE_3__plugin__["a" /* default */], function (item, key) {
            Vue.prototype["$$" + key] = item;
        });

        __WEBPACK_IMPORTED_MODULE_1_lodash_each___default()(__WEBPACK_IMPORTED_MODULE_5__directive__["a" /* default */], function (item, key) {
            Vue.directive(key, item);
        });
    }
});

__WEBPACK_IMPORTED_MODULE_1_lodash_each___default()(__WEBPACK_IMPORTED_MODULE_6__filter__["a" /* default */], function (item, key) {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.filter(key, item);
});

__WEBPACK_IMPORTED_MODULE_1_lodash_each___default()(__WEBPACK_IMPORTED_MODULE_2__component__["a" /* default */], function (item, key) {
    var cpName = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    if (cpName && cpName[0] === "-") {
        cpName = cpName.replace("-", "");
    }

    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(key, item);
});

/***/ }),
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cps_list_data__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cps_form_data__ = __webpack_require__(215);



/* harmony default export */ __webpack_exports__["a"] = ({
    ListData: __WEBPACK_IMPORTED_MODULE_0_cps_list_data__["a" /* default */],
    FormData: __WEBPACK_IMPORTED_MODULE_1_cps_form_data__["a" /* default */]
});

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListData_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListData_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ListData_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__ListData_vue___default.a);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(207)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(208)
/* template */
var __vue_template__ = __webpack_require__(214)
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
/* 207 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListData_js__ = __webpack_require__(209);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sortablejs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DdlTableHeader_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DdlTableHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DdlTableHeader_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/* harmony default export */ __webpack_exports__["a"] = ({
    name: "ListData",
    components: { DdlTableHeader: __WEBPACK_IMPORTED_MODULE_1__DdlTableHeader_vue___default.a },
    data: function data() {
        return {
            table_id: "table-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""), //拖曳表格ID 避免全部的表格都是相同
            batch: {
                flag: false,
                datas: [],
                ids: []
            },
            loading: this.listLoading, //列表載入
            list_btns: this.listBtns, //資料表內自訂按鈕
            fields: this.fieldList, //字段數組
            sort_enabled: false
        };
    },

    props: {
        list: {
            type: Array,
            required: true
        },
        listLoading: {
            type: Object,
            default: function _default() {
                return {
                    flag: false,
                    text: ""
                };
            }
        },
        listBtns: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        fieldList: {
            type: Array,
            required: true
        },
        //是否顯示排序
        sort: {
            type: Object,
            default: function _default() {
                return {
                    show: false,
                    enabled: false,
                    data: ""
                };
            }
        },
        // 工具列：新增編輯按鈕等
        toolbar: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        //搜尋、篩選列
        searchbar: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        pagination: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    watch: {
        "batch.flag": function batchFlag(v) {
            this.$$eventBus.$emit("onListDataSelectChange", v);
        },

        listLoading: {
            deep: true,
            handler: function handler(v) {
                this.loading = v;
            }
        },
        listBtns: function listBtns(v) {
            this.list_btns = v;
        },
        fieldList: function fieldList(v) {
            if (v) {
                this.fields = v;
            }
        },

        toolbar: {
            deep: true,
            handler: function handler(v) {
                this.initToolbar(v);
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.initToolbar(this.toolbar);
        this.$$eventBus.$on("onClickListDataToolbar", function (btnOpts) {
            _this.onBtnEvent(btnOpts);
        });
        this.initSortable();
    },
    beforeDestroy: function beforeDestroy() {
        this.initToolbar();
        this.$$eventBus.$off("onClickListDataToolbar");
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
         * 表格列表觸發CheckBox的事件
         * @param  {array} val 當前選中的用戶信息數組，每個元素是用戶信息對象
         */
        onSelectionChange: function onSelectionChange(val) {
            var _this2 = this;

            this.batch.datas = val;
            this.batch.ids = [];
            if (val.length) {
                this.batch.flag = true;
                val.forEach(function (el, index) {
                    return _this2.batch.ids.push(val[index].id);
                });
            } else {
                this.batch.flag = false;
            }

            /**
             * 改變CheckBox事件，第一個參數是ID數組，第二個參數二維數組，每個數組是選中的對象
             */
            this.$emit("selection-change", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
        },


        /**
         * 搜尋事件
         * @param {Object} submit_data 搜尋表單的值
         */
        onSearch: function onSearch(submit_data) {
            this.$emit("search", submit_data);
        },
        onSearchReset: function onSearchReset() {
            this.$emit("search-reset");
        },

        /**
         * 刪除事件
         * @param  {object || boolean} user  當前信息對象或者為佈爾值,為佈爾值時，代表是批量刪除
         * @param  {number} index 當前列表索引
         */

        onBatchDelete: function onBatchDelete() {
            this.$emit("click-batch-delete", {
                ids: this.batch.ids,
                datas: this.batch.datas
            });
        },
        onBatchTrash: function onBatchTrash() {
            this.$emit("click-batch-trash", {
                ids: this.batch.ids,
                state: -2
            });
        },
        onBatchRestore: function onBatchRestore() {
            this.$emit("click-batch-restore", {
                ids: this.batch.ids,
                state: 1
            });
        },

        /**
         * 點擊按鈕事件
         * @param opts  組裝的返回參數
         * @param.attr  opts.type   string  按鈕類型，內置四個(添加，查看，修改，刪除)
         * @param.attr  opts.data   object  當點擊列表中的按鈕時，此值為當前行數據
         */
        onBtnEvent: function onBtnEvent(opts) {
            var type = opts.type;

            switch (type) {
                case "add":
                    this.$emit("click-add");
                    break;
                case "edit":
                    var editData = this.batch.flag ? _extends({}, opts, {
                        data: this.batch.datas[0]
                    }) : opts;

                    this.$emit("click-edit", editData);
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
                    this.$emit("click-checkout", opts);
                    break;
                case "custom":
                    this.onCustomBtnEvent(opts);
                    break;
                default:
                    this.$emit("on-click-btn", opts);
            }
        },


        /**
         * 自定義按鈕事件
         * @param opts
         */
        onCustomBtnEvent: function onCustomBtnEvent(opts) {
            if (opts.btn.fn) {
                opts.btn.fn(_extends({}, opts, {
                    ids: this.batch.ids,
                    datas: this.batch.datas
                }));
            } else {
                this.$emit("on-click-btn", opts);
            }
        },


        /**
         * 改變當前頁碼事件
         * @param  {number} page 當前頁麵
         */
        onChangeCurrentPage: function onChangeCurrentPage(page) {
            this.$emit("change-current-page", page);
        },


        /**
         * 改變每頁顯示的數量事件
         * @param  {number} page_size 每頁顯示的數量
         */
        onChangePageSize: function onChangePageSize(pageSize) {
            this.$emit("change-page-size", pageSize);
        },
        onSortChange: function onSortChange(_ref2) {
            var prop = _ref2.prop,
                order = _ref2.order;

            if (prop === "ordering" && order) {
                this.sort_enabled = true;
                this.sort.ordering = order;
                this.$emit("on-sort-change", order);
            }
            if (!order) {
                this.sort_enabled = false;
                this.sort.ordering = "";
            }
        },
        initToolbar: function initToolbar() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.$$eventBus.$emit("onInitToolbar", {
                name: "ListData",
                data: data
            });
        },

        /**
         * 表格列表觸發 sortable-handler 的事件
         * @param {String} id 當前移動的對象 id
         * @param {String} index_diff 當前移動的對象 index 的變化
         * @param order 當前排序 asc/desc
         */
        initSortable: function initSortable() {
            var _this3 = this;

            var el = document.querySelectorAll("#" + this.table_id + " .el-table__body-wrapper > table > tbody")[0];
            __WEBPACK_IMPORTED_MODULE_0_sortablejs__["a" /* default */].create(el, {
                handle: ".sortable-handler",
                filter: ".sortable-disabled",
                draggable: ".sortable-enabled",
                preventOnFilter: true,
                onChoose: function onChoose(_ref3) {
                    var oldIndex = _ref3.oldIndex;
                },
                onStart: function onStart(_ref4) {
                    var oldIndex = _ref4.oldIndex;

                    _this3.sort.data = _this3.list[oldIndex];
                },
                onEnd: function onEnd(_ref5) {
                    var newIndex = _ref5.newIndex,
                        oldIndex = _ref5.oldIndex;

                    var targetRow = _this3.list.splice(oldIndex, 1)[0];
                    _this3.list.splice(newIndex, 0, targetRow);
                    _this3.$emit("on-order-change", {
                        id: _this3.list[newIndex].id,
                        index_diff: newIndex - oldIndex,
                        order: _this3.sort.ordering.replace("ending", "")
                    });

                    _this3.sort.data = "";
                },
                onMove: function onMove(event) {
                    return !event.related.classList.contains("sortable-disabled");
                }
            });
        }
    }
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(211)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(212)
/* template */
var __vue_template__ = __webpack_require__(213)
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
/* 211 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 212 */
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
  props: {
    search: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      disabled: true
    };
  },

  computed: {
    defaultValue: function defaultValue() {
      return this.search.defaultValue || {};
    },
    fields: function fields() {
      return this.search.fields || [];
    },
    setting: function setting() {
      return this.search.setting || { inline: true, type: "search" };
    }
  },
  methods: {
    onSearch: function onSearch(_ref) {
      var submit_data = _ref.submit_data;

      this.$emit("search", submit_data);
    },
    onSearchReset: function onSearchReset() {
      this.$emit("search-reset");
    }
  }
});

/***/ }),
/* 213 */
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
                    "default-value": _vm.defaultValue,
                    "field-list": _vm.fields,
                    setting: _vm.setting
                  },
                  on: {
                    "on-submit": _vm.onSearch,
                    "on-reset": _vm.onSearchReset
                  }
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
/* 214 */
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
          attrs: { search: _vm.searchbar },
          on: { search: _vm.onSearch, "search-reset": _vm.onSearchReset }
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
              value: _vm.loading.flag,
              expression: "loading.flag"
            }
          ],
          staticStyle: { width: "100%" },
          attrs: {
            id: _vm.table_id,
            data: _vm.list,
            "element-loading-text":
              _vm.loading.text || _vm.$t("LIST_DATA_LOADING_TEXT") /*載入中⋯⋯*/,
            "row-class-name": _vm.handelRowClass,
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
          _vm.sort && _vm.sort.show
            ? _c("el-table-column", {
                attrs: { sortable: "custom", width: "45", prop: "ordering" },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c(
                            "el-button",
                            {
                              staticClass: "caret-wrapper sortable-handler",
                              attrs: {
                                type: "text",
                                disabled: !_vm.sort_enabled
                              }
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
                  ],
                  null,
                  false,
                  3714561438
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c("el-table-column", { attrs: { type: "selection", width: "55" } }),
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
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(scope) {
                            return [
                              _c("img", {
                                attrs: {
                                  src:
                                    (field.host || "") + scope.row[field.key],
                                  alt: ""
                                }
                              })
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
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
                    scopedSlots: _vm._u(
                      [
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
                      ],
                      null,
                      true
                    )
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
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(scope) {
                              return [
                                scope.column.formatter(scope.row[field.key])
                                  .icon
                                  ? _c("font-awesome-icon", {
                                      style: scope.column.formatter(
                                        scope.row[field.key]
                                      ).style,
                                      attrs: {
                                        icon: scope.column.formatter(
                                          scope.row[field.key]
                                        ).icon
                                      }
                                    })
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
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
                    scopedSlots: _vm._u(
                      [
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
                                  ).color
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      scope.column.formatter(
                                        scope.row[field.key]
                                      ).text
                                    )
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
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
                    scopedSlots: _vm._u(
                      [
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
                                  ).color
                                },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: {
                                      icon: scope.column.formatter(
                                        scope.row[field.key]
                                      ).icon
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                : _vm._e(),
              _vm._v(" "),
              field.type && field.type === "publish-label"
                ? _c("el-table-column", {
                    attrs: {
                      prop: field.key,
                      label: field.label,
                      align: field.align || "center",
                      sortable: field.sort || true,
                      formatter: field.formatter,
                      width: field.width
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
                                  staticClass: "text-label",
                                  class: scope.column.formatter(scope.row).color
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      scope.column.formatter(scope.row).text
                                    )
                                  )
                                ]
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
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
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(scope) {
                            return _c(
                              "span",
                              {},
                              [
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
                                              _vm.$t(
                                                "TOOLBAR_CHECKOUT"
                                              ) /*回存*/
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
                                            _vm._s(
                                              _vm._f("displayDateFormat")(
                                                scope.row["locked_at"]
                                              )
                                            ) +
                                            "\n            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    scope.row.locked_by
                                      ? _c(
                                          "el-button",
                                          {
                                            staticClass: "btn--checkout",
                                            attrs: { size: "mini" },
                                            on: {
                                              click: function($event) {
                                                return _vm.onBtnEvent({
                                                  type: "checkout",
                                                  data: scope.row
                                                })
                                              }
                                            }
                                          },
                                          [
                                            _c("font-awesome-icon", {
                                              attrs: {
                                                icon: ["fal", "lock-alt"]
                                              }
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
                                            return _vm.onBtnEvent({
                                              type: "edit",
                                              data: scope.row
                                            })
                                          }
                                        }
                                      })
                                    : _c("span", [
                                        _c("span", {
                                          domProps: {
                                            innerHTML: _vm._s(
                                              scope.row[field.key]
                                            )
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
                                      value: ["edit", "editOwn", "editOther"],
                                      expression:
                                        "['edit', 'editOwn', 'editOther']",
                                      arg: "not"
                                    }
                                  ],
                                  domProps: {
                                    innerHTML: _vm._s(scope.row[field.key])
                                  }
                                })
                              ],
                              2
                            )
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                : _vm._e()
            ]
          }),
          _vm._v(" "),
          "btns" in _vm.list_btns
            ? _c("el-table-column", {
                attrs: {
                  label:
                    _vm.list_btns.label ||
                    _vm.$t("LIST_DATA_ACTIONS_LABEL") /*操作*/,
                  context: _vm._self
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(scope) {
                        return _vm._l(_vm.list_btns.btns, function(btn, index) {
                          return _vm.list_btns.btns &&
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
                                      return _vm.onCustomBtnEvent({
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
                  ],
                  null,
                  false,
                  2307452654
                )
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
                  "page-size": _vm.pagination.page_size,
                  "page-sizes": _vm.pagination.page_sizes,
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
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormData_vue__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormData_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormData_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__FormData_vue___default.a);

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(217)
/* template */
var __vue_template__ = __webpack_require__(220)
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
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormData_js__ = __webpack_require__(218);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields___ = __webpack_require__(219);


/* harmony default export */ __webpack_exports__["a"] = ({
    components: __WEBPACK_IMPORTED_MODULE_0__fields___["a" /* default */],
    name: "FormData",
    props: {
        defaultValue: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        fieldList: {
            type: Array,
            required: true,
            default: function _default() {
                return [];
            }
        },
        rules: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        setting: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        toolbar: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    data: function data() {
        return {
            fields: this.fieldList,
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
            temp_field_obj: {},
            submit_info: {}
        };
    },

    computed: {
        submit_data: function submit_data() {
            return this.defaultValue;
        }
    },
    /**
     * 监控参数
     * @type {Object}
     */
    watch: {
        fieldList: {
            deep: true,
            handler: function handler(v) {
                if (v) {
                    this.fields = v;
                }
            }
        },
        setting: function setting(v) {
            this.setting = v;
        },
        toolbar: function toolbar(v) {
            this.initToolbar(v);
        }
    },
    mounted: function mounted() {
        var _this = this;

        if (this.setting && this.setting.type !== "search") {
            this.initToolbar(this.toolbar);
            this.$$eventBus.$on("onClickFormDataToolbar", function (btnOpts) {
                _this.onBtnEvent(btnOpts);
            });
        }
    },
    beforeDestroy: function beforeDestroy() {
        if (this.setting && this.setting.type !== "search") {
            this.initToolbar();
            this.$$eventBus.$off("onClickFormDataToolbar");
        }
    },

    methods: {
        onSubmit: function onSubmit() {
            var _this2 = this;

            var btnType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

            var submitData = {
                submit_data: this.submit_data,
                btn_type: btnType
            };
            if (this.rules) {
                this.$refs["form-data"].validate(function (valid) {
                    if (valid) {
                        _this2.$emit("on-submit", submitData);
                    }
                });
            } else {
                this.$emit("on-submit", submitData);
            }
        },
        onReset: function onReset() {
            this.$refs["form-data"].resetFields();
            this.$emit("on-reset");
        },
        onCancel: function onCancel() {
            this.$emit("on-cancel");
        },
        onBtnEvent: function onBtnEvent(opts) {
            var type = opts.type;

            switch (type) {
                case "cancel":
                    this.onCancel();
                    break;
                case "save":
                case "savenclose":
                case "savenadd":
                    this.onSubmit(type);
                    break;
            }
        },
        initToolbar: function initToolbar() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.$$eventBus.$emit("onInitToolbar", {
                name: "FormData",
                data: data
            });
        }
    }
});

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    DdlInput: function DdlInput() {
        return __webpack_require__.e/* import() */(47).then(__webpack_require__.bind(null, 253));
    },
    DdlTextarea: function DdlTextarea() {
        return __webpack_require__.e/* import() */(46).then(__webpack_require__.bind(null, 254));
    },
    DdlCheckbox: function DdlCheckbox() {
        return __webpack_require__.e/* import() */(63).then(__webpack_require__.bind(null, 255));
    },
    DdlRadio: function DdlRadio() {
        return __webpack_require__.e/* import() */(55).then(__webpack_require__.bind(null, 256));
    },
    DdlSelect: function DdlSelect() {
        return __webpack_require__.e/* import() */(54).then(__webpack_require__.bind(null, 257));
    },
    DdlSwitch: function DdlSwitch() {
        return __webpack_require__.e/* import() */(53).then(__webpack_require__.bind(null, 258));
    },
    DdlCascader: function DdlCascader() {
        return __webpack_require__.e/* import() */(64).then(__webpack_require__.bind(null, 259));
    },
    DdlDate: function DdlDate() {
        return __webpack_require__.e/* import() */(62).then(__webpack_require__.bind(null, 260));
    },
    DdlDateRange: function DdlDateRange() {
        return __webpack_require__.e/* import() */(60).then(__webpack_require__.bind(null, 261));
    },
    DdlDateYear: function DdlDateYear() {
        return __webpack_require__.e/* import() */(56).then(__webpack_require__.bind(null, 262));
    },
    DdlDateMonth: function DdlDateMonth() {
        return __webpack_require__.e/* import() */(61).then(__webpack_require__.bind(null, 263));
    },
    DdlDateWeek: function DdlDateWeek() {
        return __webpack_require__.e/* import() */(57).then(__webpack_require__.bind(null, 264));
    },
    DdlTime: function DdlTime() {
        return __webpack_require__.e/* import() */(52).then(__webpack_require__.bind(null, 265));
    },
    DdlTimeRange: function DdlTimeRange() {
        return __webpack_require__.e/* import() */(49).then(__webpack_require__.bind(null, 266));
    },
    DdlTimeFixed: function DdlTimeFixed() {
        return __webpack_require__.e/* import() */(51).then(__webpack_require__.bind(null, 267));
    },
    DdlTimeFixedRange: function DdlTimeFixedRange() {
        return __webpack_require__.e/* import() */(50).then(__webpack_require__.bind(null, 268));
    },
    DdlDateTime: function DdlDateTime() {
        return __webpack_require__.e/* import() */(59).then(__webpack_require__.bind(null, 269));
    },
    DdlDateTimeRange: function DdlDateTimeRange() {
        return __webpack_require__.e/* import() */(58).then(__webpack_require__.bind(null, 270));
    },
    DdlTree: function DdlTree() {
        return __webpack_require__.e/* import() */(48).then(__webpack_require__.bind(null, 271));
    }
});

/***/ }),
/* 220 */
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
      _vm._l(_vm.fields, function(field, $index) {
        return !field.condition ||
          typeof field.condition !== "function" ||
          (typeof field.condition === "function" &&
            field.condition({ data: _vm.submit_data }) === true)
          ? _c(
              "el-form-item",
              _vm._b(
                {
                  key: $index,
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
                    "field-data": field,
                    "submit-data": _vm.submit_data,
                    "submit-info": _vm.submit_info,
                    "temp-field-obj": _vm.temp_field_obj
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
                  on: { click: _vm.onSubmit }
                },
                [_vm._v(_vm._s(_vm.$t("SEARCHBAR_SEARCH") /*搜尋*/))]
              ),
              _vm._v(" "),
              _c("el-button", { on: { click: _vm.onReset } }, [
                _vm._v(_vm._s(_vm.$t("SEARCHBAR_RESET") /*重置*/))
              ])
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
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils___ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apis___ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





var plugins = {};

__WEBPACK_IMPORTED_MODULE_1__apis___["a" /* default */].forEach(function (mod, $i) {
    if ((typeof mod === "undefined" ? "undefined" : _typeof(mod)) === "object" && mod.list && Array.isArray(mod.list)) {
        mod.list.forEach(function (api, $j) {
            plugins["api_" + mod.module + "_" + api.method] = function (n, m) {
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
            }($i, $j);
        });
    }
});

plugins["eventBus"] = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a();

/* harmony default export */ __webpack_exports__["a"] = (plugins);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var requireFile = __webpack_require__(223);
var requests = [];
requireFile.keys().forEach(function (fileName) {
    requests.push({
        module: fileName.split(".")[1].split("/")[1],
        list: requireFile(fileName).default
    });
});

/* harmony default export */ __webpack_exports__["a"] = (requests);

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./api.js": 224,
	"./asset.js": 225,
	"./category.js": 226,
	"./field.js": 227,
	"./item.js": 228,
	"./language.js": 229,
	"./media.js": 230,
	"./menu.js": 231,
	"./module.js": 232,
	"./observer.js": 233,
	"./option.js": 234,
	"./setting.js": 235,
	"./site.js": 236,
	"./tag.js": 237,
	"./user.js": 238,
	"./viewlevel.js": 239
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
webpackContext.id = 223;

/***/ }),
/* 224 */
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
/* 225 */
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
    method: "assignGroup",
    path: "/admin/asset/group/map/store",
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
/* 226 */
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
/* 227 */
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
    name: "修改一至多個欄位回存狀態",
    method: "checkout",
    path: "/admin/extrafield/checkout",
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
/* 228 */
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
/* 229 */
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
/* 230 */
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
}, {
    name: "重新命名資料夾或檔案",
    method: "rename",
    path: "/admin/media/rename",
    type: "post"
}]);

/***/ }),
/* 231 */
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
    name: "修改一至多個選單發布狀態",
    method: "updateState",
    path: "/admin/menu/state",
    type: "post"
}, {
    name: "修改一至多個選單回存狀態",
    method: "checkout",
    path: "/admin/menu/checkout",
    type: "post"
}]);

/***/ }),
/* 232 */
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
/* 233 */
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
/* 234 */
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
/* 235 */
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
/* 236 */
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
}, {
    name: "修改一至多個網站回存狀態",
    method: "checkout",
    path: "/admin/site/checkout",
    type: "post"
}]);

/***/ }),
/* 237 */
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
/* 238 */
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
    name: "取得會員可走訪頁面列表與接口列表",
    method: "getPages",
    path: "/admin/user/page",
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
    name: "修改一至多個會員封鎖狀態",
    method: "updateBlock",
    path: "/admin/user/block",
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
}, {
    name: "取得單一會員群組可走訪頁面列表(樹狀結構)與接口列表",
    method: "groupPages",
    path: "/admin/user/group/*/page",
    type: "get"
}]);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ([{
    name: "取得所有存取層級列表",
    method: "list",
    path: "/admin/viewlevel/search",
    type: "post"
}, {
    name: "取得單一存取層級資訊",
    method: "get",
    path: "/admin/viewlevel/*",
    type: "get"
}, {
    name: "新增/修改單一存取層級",
    method: "save",
    path: "/admin/viewlevel/store",
    type: "post"
}, {
    name: "修改單一存取層級排序",
    method: "ordering",
    path: "/admin/viewlevel/ordering",
    type: "post"
}, {
    name: "刪除一至多個存取層級",
    method: "delete",
    path: "/admin/viewlevel/remove",
    type: "post"
}]);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    watch: {
        "$store.getters.language": function $storeGettersLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
});

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_directives_can__ = __webpack_require__(242);


/* harmony default export */ __webpack_exports__["a"] = ({
    Can: __WEBPACK_IMPORTED_MODULE_0_directives_can__["a" /* default */]
});

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store___ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router___ = __webpack_require__(18);



/* harmony default export */ __webpack_exports__["a"] = ({
    inserted: function inserted(el, binding) {
        var userAssetAccess = __WEBPACK_IMPORTED_MODULE_0_store___["a" /* default */].state.user.user_access[__WEBPACK_IMPORTED_MODULE_1_router___["a" /* default */].currentRoute.meta.id];

        var checkPermission = function checkPermission(access, userAccess) {
            if (Array.isArray(access)) {
                var comparingArrays = [access, userAccess];
                var duplicateValueArray = comparingArrays.reduce(function (a, b) {
                    return a.filter(function (c) {
                        return b.includes(c);
                    });
                });
                return duplicateValueArray.length > 0;
            } else {
                return userAccess.includes(access);
            }
        };

        var hasPermission = userAssetAccess ? checkPermission(binding.value, userAssetAccess) : true;

        var forNoPermission = binding.arg === "not";

        if (hasPermission && forNoPermission || !hasPermission && !forNoPermission) {
            el.parentNode && el.parentNode.removeChild(el);
        }
    }
});

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_format_date__ = __webpack_require__(244);


/* harmony default export */ __webpack_exports__["a"] = ({
    displayDateFormat: __WEBPACK_IMPORTED_MODULE_0_utils_format_date__["a" /* displayDateFormat */],
    storeDateFormat: __WEBPACK_IMPORTED_MODULE_0_utils_format_date__["b" /* storeDateFormat */]
});

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = displayDateFormat;
/* harmony export (immutable) */ __webpack_exports__["b"] = storeDateFormat;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment_timezone__);

function displayDateFormat(date) {
    var localTimezone = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.tz.guess();

    if (date) return __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.tz(__WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.utc(date), localTimezone).format("YYYY-MM-DD HH:mm:ss");
}

function storeDateFormat(date) {
    var localTimezone = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.tz.guess();
    var localTime = __WEBPACK_IMPORTED_MODULE_0_moment_timezone___default.a.tz(date, "YYYY-MM-DD HH:mm:ss", localTimezone);

    if (date) return localTime.utc().format("YYYY-MM-DD HH:mm:ss");
}

/***/ }),
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[149]);