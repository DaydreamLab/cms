<?php

use DaydreamLab\Cms\Controllers\Brand\Admin\BrandAdminController;
use DaydreamLab\Cms\Controllers\Brand\Front\BrandFrontController;
use DaydreamLab\Cms\Controllers\Category\Front\CategoryFrontController;
use DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController;
use DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController;
use DaydreamLab\Cms\Controllers\Item\Front\ItemFrontController;
use DaydreamLab\Cms\Controllers\Form\Front\FormFrontController;
use DaydreamLab\Cms\Controllers\Form\Admin\FormAdminController;
use DaydreamLab\Cms\Controllers\Menu\Front\MenuFrontController;
use DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController;
use DaydreamLab\Cms\Controllers\Module\Front\ModuleFrontController;
use DaydreamLab\Cms\Controllers\Module\Admin\ModuleAdminController;
use DaydreamLab\Cms\Controllers\Newsletter\Admin\NewsletterAdminController;
use DaydreamLab\Cms\Controllers\NewsletterSubscription\Admin\NewsletterSubscriptionAdminController;
use DaydreamLab\Cms\Controllers\Product\Admin\ProductAdminController;
use DaydreamLab\Cms\Controllers\Product\Front\ProductFrontController;
use DaydreamLab\Cms\Controllers\ProductCategory\Admin\ProductCategoryAdminController;
use DaydreamLab\Cms\Controllers\Rma\RmaController;
use DaydreamLab\Cms\Controllers\Setting\Front\SettingFrontController;
use DaydreamLab\Cms\Controllers\Tag\Front\TagFrontController;
use DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController;
use DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController;
use DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController;
use DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController;
use DaydreamLab\Cms\Controllers\Setting\Admin\SettingAdminController;
use DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController;
use DaydreamLab\Cms\Controllers\Option\OptionController;
use DaydreamLab\Cms\Controllers\NewsletterSubscription\Front\NewsletterSubscriptionFrontController;
use DaydreamLab\Cms\Controllers\CustomerMessage\Admin\CustomerMessageAdminController;
use DaydreamLab\Cms\Controllers\CustomerMessage\Front\CustomerMessageFrontController;
use DaydreamLab\Cms\Controllers\CustomerMessageReply\Admin\CustomerMessageReplyAdminController;
use DaydreamLab\Cms\Controllers\Curation\Admin\CurationAdminController;
use DaydreamLab\Cms\Controllers\Curation\Front\CurationFrontController;

/*
 *
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/************************************  前台 API  ************************************/

# 關於零壹
# 投資人專區
Route::get('api/static/{alias}', [ItemFrontController::class, 'getStatic']);

Route::post('api/setting/search', [SettingFrontController::class, 'search']);
# 首頁內容
Route::get('api/homepage', [ItemFrontController::class, 'homepage']);
# 搜尋全站內容
Route::post('api/site/search', [ItemFrontController::class, 'searchSite']);

Route::post('api/category/search', [CategoryFrontController::class, 'search']);
Route::post('api/category/search/items', [CategoryFrontController::class, 'searchItems']);
Route::get('api/category/{alias}', [CategoryFrontController::class, 'getItemByAlias']);
Route::post('api/form/post', [FormFrontController::class, 'store']);
Route::post('api/item/search', [ItemFrontController::class, 'search']);
Route::get('api/item/{alias}', [ItemFrontController::class, 'getItemByAlias']);
Route::get('api/menu/getTree', [MenuFrontController::class, 'getTree']);
Route::get('api/menu/{path}', [MenuFrontController::class, 'getItem'])->where('path', '.*');
Route::get('api/module/{alias}', [ModuleFrontController::class, 'getItemByAlias']);
Route::get('api/setting/{locale}', [SettingFrontController::class, 'getItem']);
Route::post('api/tag/search', [TagFrontController::class, 'search']);
# 全站關鍵字搜尋
Route::post('api/tag/search/items', [TagFrontController::class, 'searchItems']);
Route::get('api/tag/{alias}', [TagFrontController::class, 'getItemByAlias']);

# 前台 option list
Route::post('api/option/list', [OptionController::class, 'frontOptionList']);

# 顧客留言
Route::post('api/customer/message/send', [CustomerMessageFrontController::class, 'store']);

# 電子報訂閱
Route::post('api/newsletter/subscribe', [NewsletterSubscriptionFrontController::class, 'store']);

# 品牌
Route::post('api/brand/search', [BrandFrontController::class, 'search']);
Route::get('api/brand/contact', [BrandFrontController::class, 'getContact']);
Route::get('api/brand/{alias}', [BrandFrontController::class, 'getBrandByAlias']);

# 產品
Route::post('api/product/search', [ProductFrontController::class, 'search']);
Route::get('api/product/{alias}', [ProductFrontController::class, 'getByAlias']);
# 解決方案
Route::post('api/item/solution/search', [ItemFrontController::class, 'searchSolution']);
# 成功案例
Route::post('api/item/case/search', [ItemFrontController::class, 'searchCase']);
# 最新消息
Route::post('api/item/bulletin/search', [ItemFrontController::class, 'searchBulletin']);
# 促銷消息
Route::post('api/item/promotion/search', [ItemFrontController::class, 'searchPromotion']);
# 01影片
Route::post('api/item/video/search', [ItemFrontController::class, 'searchVideo']);
# 大事紀
Route::get('api/item/memorabilia/list', [ItemFrontController::class, 'getMemorabilia']);
# 財務資訊
Route::get('api/item/finance/list', [ItemFrontController::class, 'getFinance']);
# 重要規章
Route::get('api/item/rules/list', [ItemFrontController::class, 'getRules']);
# 股東專欄
Route::get('api/item/stockholder/list', [ItemFrontController::class, 'getStockholder']);
#
Route::post('api/item/{content_type}/search', [ItemFrontController::class, 'searchContent']);
Route::get('api/item/{content_type}/{alias}', [ItemFrontController::class, 'getContentByAlias']);

# 報修
Route::post('api/rma/add', [RmaController::class, 'add']);
Route::post('api/rma/search', [RmaController::class, 'search']);

# 主題策展
Route::get('api/curation', [CurationFrontController::class, 'getIndex']);
Route::get('api/curation/{alias}', [CurationFrontController::class, 'getItemByAlias']);

/************************************  後台 API  ************************************/
# 關於零壹
# 投資人專區
Route::post('api/admin/static/{alias}/store', [ItemAdminController::class, 'storeStatic'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/static/{alias}', [ItemAdminController::class, 'getStatic'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
# 全站回存
Route::post('api/admin/restoreAllLockData', [SettingAdminController::class, 'restoreAllLockData'])->middleware(['expired', 'admin']);
# 品牌 Brand

Route::post('api/admin/brand/remove', [BrandAdminController::class, 'remove'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/brand/restore', [BrandAdminController::class, 'restore'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/brand/search', [BrandAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/brand/state', [BrandAdminController::class, 'state'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/brand/store', [BrandAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/brand/{id}', [BrandAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/brand/import', [BrandAdminController::class, 'import'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);

# 產品
Route::post('api/admin/product/export', [ProductAdminController::class, 'export'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/import', [ProductAdminController::class, 'import'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/remove', [ProductAdminController::class, 'remove'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/restore', [ProductAdminController::class, 'restore'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/search', [ProductAdminController::class, 'search'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/state', [ProductAdminController::class, 'state'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/store', [ProductAdminController::class, 'store'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::get('api/admin/product/{id}', [ProductAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);

# 產品分類
Route::post('api/admin/product/category/export', [ProductCategoryAdminController::class, 'export'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/category/ordering', [ProductCategoryAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/product/category/remove', [ProductCategoryAdminController::class, 'remove'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/category/restore', [ProductCategoryAdminController::class, 'restore'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/category/search', [ProductCategoryAdminController::class, 'search'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/category/state', [ProductCategoryAdminController::class, 'state'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/product/category/store', [ProductCategoryAdminController::class, 'store'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::get('api/admin/product/category/tree', [ProductCategoryAdminController::class, 'tree'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::get('api/admin/product/category/{id}', [ProductCategoryAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);

# content type 共通
# 解決方案
# 成功案例
# 最新消息
# 促銷消息
# 01影片
# 大事紀
# 財務資訊
# 重要規章
# 股東專欄
Route::post('api/admin/item/{content_type}/featured', [ItemAdminController::class, 'featuredContent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/{content_type}/ordering', [ItemAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/{content_type}/remove', [ItemAdminController::class, 'removeContent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/{content_type}/restore', [ItemAdminController::class, 'restoreContent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/{content_type}/search', [ItemAdminController::class, 'searchContent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/{content_type}/state', [ItemAdminController::class, 'stateContent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/{content_type}/store', [ItemAdminController::class, 'storeContent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/item/{content_type}/{id}', [ItemAdminController::class, 'getContentItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 內部用 匯入資料
Route::post('api/admin/item/importVideo', [ItemAdminController::class, 'importVideo'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importPromotion', [ItemAdminController::class, 'importPromotion'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importBulletin', [ItemAdminController::class, 'importBulletin'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importCase', [ItemAdminController::class, 'importCase'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importSolution', [ItemAdminController::class, 'importSolution'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importMemorabilia', [ItemAdminController::class, 'importMemorabilia'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importFinance', [ItemAdminController::class, 'importFinance'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importStockHolder', [ItemAdminController::class, 'importStockHolder'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importRule', [ItemAdminController::class, 'importRule'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/item/importUser', [ItemAdminController::class, 'importUser'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/brand/importContact', [BrandAdminController::class, 'importContact'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/brand/importBrandInfo', [BrandAdminController::class, 'importBrandInfo'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);

# 電子報
Route::get('api/admin/newsletter/{id}/publish', [NewsletterAdminController::class, 'publish'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/remove', [NewsletterAdminController::class, 'remove'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/restore', [NewsletterAdminController::class, 'restore'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/search', [NewsletterAdminController::class, 'search'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/state', [NewsletterAdminController::class, 'state'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/store', [NewsletterAdminController::class, 'store'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::get('api/admin/newsletter/{id}', [NewsletterAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);

# 電子報訂閱
Route::post('api/admin/newsletter/subscription/export', [NewsletterSubscriptionAdminController::class, 'export'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/subscription/remove', [NewsletterSubscriptionAdminController::class, 'remove'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/subscription/restore', [NewsletterSubscriptionAdminController::class, 'restore'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/subscription/search', [NewsletterSubscriptionAdminController::class, 'search'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/subscription/state', [NewsletterSubscriptionAdminController::class, 'state'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/newsletter/subscription/store', [NewsletterSubscriptionAdminController::class, 'store'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::get('api/admin/newsletter/subscription/{id}', [NewsletterSubscriptionAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);

# 分類 Category

Route::post('api/admin/category/featured', [CategoryAdminController::class, 'featured'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/category/featured/ordering', [CategoryAdminController::class, 'featuredOrdering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/category/ordering', [CategoryAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/category/remove', [CategoryAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/category/restore', [CategoryAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/category/search', [CategoryAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/category/state', [CategoryAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/category/store', [CategoryAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/category/{id}', [CategoryAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 額外欄位 Extrafield
Route::post('api/admin/extrafield/ordering', [ExtrafieldAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/remove', [ExtrafieldAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/restore', [ExtrafieldAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/search', [ExtrafieldAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/state', [ExtrafieldAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/store', [ExtrafieldAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/extrafield/{id}', [ExtrafieldAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 額外欄位群組 Extrafield Group
Route::post('api/admin/extrafield/group/ordering', [ExtrafieldGroupAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/group/restore', [ExtrafieldGroupAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/group/remove', [ExtrafieldGroupAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/group/search', [ExtrafieldGroupAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/group/state', [ExtrafieldGroupAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/extrafield/group/store', [ExtrafieldGroupAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/extrafield/group/{id}', [ExtrafieldGroupAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 表單 Form
Route::post('api/admin/form/remove', [FormAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/form/store', [FormAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/form/search', [FormAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/form/{id}', [FormAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 項目 Item
//Route::get('api/admin/item/test', [ItemAdminController::class, 'test'])
//    ->middleware(['expired','admin']);
Route::post('api/admin/item/featured', [ItemAdminController::class, 'featured'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/featured/ordering', [ItemAdminController::class, 'featuredOrdering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/ordering', [ItemAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/restore', [ItemAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/remove', [ItemAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/search', [ItemAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/state', [ItemAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/item/store', [ItemAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/item/{id}', [ItemAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 語言 Language
Route::post('api/admin/language/remove', [LanguageAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/language/search', [LanguageAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/language/state', [LanguageAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/language/store', [LanguageAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/language/{id}', [LanguageAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 選單 Menu
Route::post('api/admin/menu/ordering', [MenuAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/menu/remove', [MenuAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/menu/restore', [MenuAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/menu/search', [MenuAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/menu/store', [MenuAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/menu/state', [MenuAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/menu/{id}', [MenuAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 模組 Module
Route::post('api/admin/module/ordering', [ModuleAdminController::class, 'ordering'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/module/remove', [ModuleAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/module/restore', [ModuleAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/module/search', [ModuleAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/module/state', [ModuleAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/module/store', [ModuleAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/module/{id}', [ModuleAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 下拉選單 Option
Route::post('api/admin/option/list', [OptionController::class, 'mergeList'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 全站設定 Setting
Route::post('api/admin/setting/store', [SettingAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/siteInfo', [SettingAdminController::class, 'siteInfo'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/setting', [SettingAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 多網站 Site
Route::post('api/admin/site/remove', [SiteAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/site/restore', [SiteAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/site/search', [SiteAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/site/store', [SiteAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/site/state', [SiteAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/site/{id}', [SiteAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 標籤 Tag
Route::post('api/admin/tag/remove', [TagAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/tag/restore', [TagAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/tag/search', [TagAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/tag/state', [TagAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/tag/store', [TagAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/tag/{id}', [TagAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

/******************* 客戶留言 *******************/
# 新增/編輯 顧客留言
Route::post('api/admin/customer/message/store', [CustomerMessageAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
# 搜尋顧客留言
Route::post('api/admin/customer/message/search', [CustomerMessageAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
# 回存顧客留言
Route::post('api/admin/customer/message/restore', [CustomerMessageAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
# 回覆顧客留言
Route::post('api/admin/customer/message/reply', [CustomerMessageReplyAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
# 取得顧客留言
Route::get('api/admin/customer/message/{id}', [CustomerMessageAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);


/******************* IoT Solution 子站API *******************/
use DaydreamLab\Cms\Controllers\IotSlideshow\Front\IotSlideshowFrontController;
use DaydreamLab\Cms\Controllers\IotEvent\Front\IotEventFrontController;
use DaydreamLab\Cms\Controllers\IotNews\Front\IotNewsFrontController;
use DaydreamLab\Cms\Controllers\IotResource\Front\IotResourceFrontController;
use DaydreamLab\Cms\Controllers\IotSolution\Front\IotSolutionFrontController;
use DaydreamLab\Cms\Controllers\IotTag\Front\IotTagFrontController;

# 首頁
Route::get('api/iot/homepage', [IotSlideshowFrontController::class, 'homepage']);

# 解決方案 前台
Route::get('api/iot/solution/search/option', [IotSolutionFrontController::class, 'optionList']);
Route::post('api/iot/solution/search', [IotSolutionFrontController::class, 'search']);
Route::get('api/iot/solution/{alias}', [IotSolutionFrontController::class, 'getItemByAlias']);

# 原廠資源 前台
Route::post('api/iot/resource/file/download', [IotResourceFrontController::class, 'downloadFile']);
Route::get('api/iot/resource/search/option', [IotResourceFrontController::class, 'optionList']);
Route::post('api/iot/resource/search', [IotResourceFrontController::class, 'search']);
Route::get('api/iot/resource/{alias}', [IotResourceFrontController::class, 'getItemByAlias']);

# 新訊活動 前台
Route::post('api/iot/news/search', [IotNewsFrontController::class, 'searchAll']);
Route::post('api/iot/bulletin/search', [IotNewsFrontController::class, 'search']);
Route::get('api/iot/bulletin/{alias}', [IotNewsFrontController::class, 'getItemByAlias']);
Route::post('api/iot/event/search', [IotEventFrontController::class, 'search']);
Route::get('api/iot/event/{alias}', [IotEventFrontController::class, 'getItemByAlias']);

# 標籤
Route::post('api/iot/tag/items/search', [IotTagFrontController::class, 'searchItems']);

use DaydreamLab\Cms\Controllers\IotCategory\Admin\IotCategoryAdminController;
use DaydreamLab\Cms\Controllers\IotEvent\Admin\IotEventAdminController;
use DaydreamLab\Cms\Controllers\IotIndustry\Admin\IotIndustryAdminController;
use DaydreamLab\Cms\Controllers\IotNews\Admin\IotNewsAdminController;
use DaydreamLab\Cms\Controllers\IotResource\Admin\IotResourceAdminController;
use DaydreamLab\Cms\Controllers\IotSolution\Admin\IotSolutionAdminController;
use DaydreamLab\Cms\Controllers\IotSlideshow\Admin\IotSlideshowAdminController;
use DaydreamLab\Cms\Controllers\IotTag\Admin\IotTagAdminController;

# slideshow 後台
Route::post('api/admin/iot/slideshow/store', [IotSlideshowAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/slideshow/search', [IotSlideshowAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/slideshow/restore', [IotSlideshowAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/slideshow/state', [IotSlideshowAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/slideshow/remove', [IotSlideshowAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/slideshow/{id}', [IotSlideshowAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 新訊 後台
Route::post('api/admin/iot/news/store', [IotNewsAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/news/search', [IotNewsAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/news/restore', [IotNewsAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/news/state', [IotNewsAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/news/remove', [IotNewsAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/news/{id}', [IotNewsAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 活動 後台
Route::post('api/admin/iot/event/store', [IotEventAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/event/search', [IotEventAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/event/restore', [IotEventAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/event/state', [IotEventAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/event/remove', [IotEventAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/event/{id}', [IotEventAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 解決方案 後台
Route::post('api/admin/iot/solution/store', [IotSolutionAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/solution/search', [IotSolutionAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/solution/restore', [IotSolutionAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/solution/state', [IotSolutionAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/solution/remove', [IotSolutionAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/solution/{id}', [IotSolutionAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 原廠資源 後台
Route::post('api/admin/iot/resource/store', [IotResourceAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/resource/search', [IotResourceAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/resource/restore', [IotResourceAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/resource/state', [IotResourceAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/resource/remove', [IotResourceAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/resource/{id}', [IotResourceAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 分類 後台
Route::post('api/admin/iot/category/store', [IotCategoryAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/search', [IotCategoryAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/restore', [IotCategoryAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/state', [IotCategoryAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/remove', [IotCategoryAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/category/getTree', [IotCategoryAdminController::class, 'getTree'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/category/{id}', [IotCategoryAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 大分類 後台
Route::post('api/admin/iot/category/parent/store', [IotCategoryAdminController::class, 'storeParent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/parent/search', [IotCategoryAdminController::class, 'searchParent'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/parent/restore', [IotCategoryAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/parent/state', [IotCategoryAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/parent/remove', [IotCategoryAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/category/parent/{id}', [IotCategoryAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 小分類 後台
Route::post('api/admin/iot/category/child/store', [IotCategoryAdminController::class, 'storeChild'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/child/search', [IotCategoryAdminController::class, 'searchChild'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/child/restore', [IotCategoryAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/child/state', [IotCategoryAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/category/child/remove', [IotCategoryAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/category/child/{id}', [IotCategoryAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 產業
Route::post('api/admin/iot/industry/store', [IotIndustryAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/industry/search', [IotIndustryAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/industry/restore', [IotIndustryAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/industry/state', [IotIndustryAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/industry/remove', [IotIndustryAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/industry/{id}', [IotIndustryAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# 標籤
Route::post('api/admin/iot/tag/store', [IotTagAdminController::class, 'store'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/tag/search', [IotTagAdminController::class, 'search'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/tag/restore', [IotTagAdminController::class, 'restore'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/tag/state', [IotTagAdminController::class, 'state'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::post('api/admin/iot/tag/remove', [IotTagAdminController::class, 'remove'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);
Route::get('api/admin/iot/tag/{id}', [IotTagAdminController::class, 'getItem'])
    ->middleware(['expired','admin', 'restrict-ip:admin']);

# ----------------------------- Curation(主題策產) -----------------------------
Route::post('api/admin/curation/remove', [CurationAdminController::class, 'remove'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/curation/state', [CurationAdminController::class, 'state'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/curation/store', [CurationAdminController::class, 'store'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::post('api/admin/curation/search', [CurationAdminController::class, 'search'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
Route::get('api/admin/curation/{id}', [CurationAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin', 'restrict-ip:admin']);
