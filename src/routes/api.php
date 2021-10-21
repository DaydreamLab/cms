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

/************************************  後台 API  ************************************/
# 品牌 Brand

Route::post('api/admin/brand/remove', [BrandAdminController::class, 'remove'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/brand/restore', [BrandAdminController::class, 'restore'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/brand/search', [BrandAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/brand/state', [BrandAdminController::class, 'state'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/brand/store', [BrandAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/brand/{id}', [BrandAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/brand/import', [BrandAdminController::class, 'import'])
    ->middleware(['expired', 'admin']);

# 產品
Route::post('api/admin/product/import', [ProductAdminController::class, 'import'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/remove', [ProductAdminController::class, 'remove'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/restore', [ProductAdminController::class, 'restore'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/search', [ProductAdminController::class, 'search'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/state', [ProductAdminController::class, 'state'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/store', [ProductAdminController::class, 'store'])
    ->middleware(['expired', 'admin']);
Route::get('api/admin/product/{id}', [ProductAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin']);

# 產品分類
Route::post('api/admin/product/category/ordering', [ProductCategoryAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/product/category/remove', [ProductCategoryAdminController::class, 'remove'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/category/restore', [ProductCategoryAdminController::class, 'restore'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/category/search', [ProductCategoryAdminController::class, 'search'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/category/state', [ProductCategoryAdminController::class, 'state'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/product/category/store', [ProductCategoryAdminController::class, 'store'])
    ->middleware(['expired', 'admin']);
Route::get('api/admin/product/category/tree', [ProductCategoryAdminController::class, 'tree'])
    ->middleware(['expired', 'admin']);
Route::get('api/admin/product/category/{id}', [ProductCategoryAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin']);

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
    ->middleware(['expired','admin']);
Route::post('api/admin/item/{content_type}/ordering', [ItemAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/{content_type}/remove', [ItemAdminController::class, 'removeContent'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/{content_type}/restore', [ItemAdminController::class, 'restoreContent'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/{content_type}/search', [ItemAdminController::class, 'searchContent'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/{content_type}/state', [ItemAdminController::class, 'stateContent'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/{content_type}/store', [ItemAdminController::class, 'storeContent'])
    ->middleware(['expired','admin']);
Route::get('api/admin/item/{content_type}/{id}', [ItemAdminController::class, 'getContentItem'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/importVideo', [ItemAdminController::class, 'importVideo'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/item/importPromotion', [ItemAdminController::class, 'importPromotion'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/item/importBulletin', [ItemAdminController::class, 'importBulletin'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/item/importCase', [ItemAdminController::class, 'importCase'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/item/importSolution', [ItemAdminController::class, 'importSolution'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/item/importMemorabilia', [ItemAdminController::class, 'importMemorabilia'])
    ->middleware(['expired', 'admin']);

# 電子報
Route::get('api/admin/newsletter/{id}/publish', [NewsletterAdminController::class, 'publish'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/remove', [NewsletterAdminController::class, 'remove'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/restore', [NewsletterAdminController::class, 'restore'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/search', [NewsletterAdminController::class, 'search'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/state', [NewsletterAdminController::class, 'state'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/store', [NewsletterAdminController::class, 'store'])
    ->middleware(['expired', 'admin']);
Route::get('api/admin/newsletter/{id}', [NewsletterAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin']);

# 電子報訂閱
Route::post('api/admin/newsletter/subscription/export', [NewsletterSubscriptionAdminController::class, 'export'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/subscription/remove', [NewsletterSubscriptionAdminController::class, 'remove'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/subscription/restore', [NewsletterSubscriptionAdminController::class, 'restore'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/subscription/search', [NewsletterSubscriptionAdminController::class, 'search'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/subscription/state', [NewsletterSubscriptionAdminController::class, 'state'])
    ->middleware(['expired', 'admin']);
Route::post('api/admin/newsletter/subscription/store', [NewsletterSubscriptionAdminController::class, 'store'])
    ->middleware(['expired', 'admin']);
Route::get('api/admin/newsletter/subscription/{id}', [NewsletterSubscriptionAdminController::class, 'getItem'])
    ->middleware(['expired', 'admin']);

# 分類 Category

Route::post('api/admin/category/featured', [CategoryAdminController::class, 'featured'])
    ->middleware(['expired','admin']);
Route::post('api/admin/category/featured/ordering', [CategoryAdminController::class, 'featuredOrdering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/category/ordering', [CategoryAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/category/remove', [CategoryAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/category/restore', [CategoryAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/category/search', [CategoryAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/category/state', [CategoryAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::post('api/admin/category/store', [CategoryAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/category/{id}', [CategoryAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 額外欄位 Extrafield
Route::post('api/admin/extrafield/ordering', [ExtrafieldAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/remove', [ExtrafieldAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/restore', [ExtrafieldAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/search', [ExtrafieldAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/state', [ExtrafieldAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/store', [ExtrafieldAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/extrafield/{id}', [ExtrafieldAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 額外欄位群組 Extrafield Group
Route::post('api/admin/extrafield/group/ordering', [ExtrafieldGroupAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/restore', [ExtrafieldGroupAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/remove', [ExtrafieldGroupAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/search', [ExtrafieldGroupAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/state', [ExtrafieldGroupAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/store', [ExtrafieldGroupAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/extrafield/group/{id}', [ExtrafieldGroupAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 表單 Form
Route::post('api/admin/form/remove', [FormAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/form/store', [FormAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::post('api/admin/form/search', [FormAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::get('api/admin/form/{id}', [FormAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 項目 Item
//Route::get('api/admin/item/test', [ItemAdminController::class, 'test'])
//    ->middleware(['expired','admin']);
Route::post('api/admin/item/featured', [ItemAdminController::class, 'featured'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/featured/ordering', [ItemAdminController::class, 'featuredOrdering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/ordering', [ItemAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/restore', [ItemAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/remove', [ItemAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/search', [ItemAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/state', [ItemAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::post('api/admin/item/store', [ItemAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/item/{id}', [ItemAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 語言 Language
Route::post('api/admin/language/remove', [LanguageAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/language/search', [LanguageAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/language/state', [LanguageAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::post('api/admin/language/store', [LanguageAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/language/{id}', [LanguageAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 選單 Menu
Route::post('api/admin/menu/ordering', [MenuAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/remove', [MenuAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/restore', [MenuAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/search', [MenuAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/store', [MenuAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/state', [MenuAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::get('api/admin/menu/{id}', [MenuAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 模組 Module
Route::post('api/admin/module/ordering', [ModuleAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/module/remove', [ModuleAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/module/restore', [ModuleAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/module/search', [ModuleAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/module/state', [ModuleAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::post('api/admin/module/store', [ModuleAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/module/{id}', [ModuleAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 下拉選單 Option
Route::post('api/admin/option/list', [OptionController::class, 'mergeList'])
    ->middleware(['expired','admin']);

# 全站設定 Setting
Route::post('api/admin/setting/store', [SettingAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/siteInfo', [SettingAdminController::class, 'siteInfo'])
    ->middleware(['expired','admin']);
Route::get('api/admin/setting', [SettingAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 多網站 Site
Route::post('api/admin/site/remove', [SiteAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/site/restore', [SiteAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/site/search', [SiteAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/site/store', [SiteAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::post('api/admin/site/state', [SiteAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::get('api/admin/site/{id}', [SiteAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

# 標籤 Tag
Route::post('api/admin/tag/featured', [TagAdminController::class, 'featured'])
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/featured/ordering', [TagAdminController::class, 'featuredOrdering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/ordering', [TagAdminController::class, 'ordering'])
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/remove', [TagAdminController::class, 'remove'])
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/restore',[TagAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/search', [TagAdminController::class, 'search'])
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/state', [TagAdminController::class, 'state'])
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/store', [TagAdminController::class, 'store'])
    ->middleware(['expired','admin']);
Route::get('api/admin/tag/{id}', [TagAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);

/******************* 客戶留言 *******************/
# 新增/編輯 顧客留言
Route::post('api/admin/customer/message/store', [CustomerMessageAdminController::class, 'store'])
    ->middleware(['expired','admin']);
# 搜尋顧客留言
Route::post('api/admin/customer/message/search', [CustomerMessageAdminController::class, 'search'])
    ->middleware(['expired','admin']);
# 回存顧客留言
Route::post('api/admin/customer/message/restore', [CustomerMessageAdminController::class, 'restore'])
    ->middleware(['expired','admin']);
# 回覆顧客留言
Route::post('api/admin/customer/message/reply', [CustomerMessageReplyAdminController::class, 'store'])
    ->middleware(['expired','admin']);
# 取得顧客留言
Route::get('api/admin/customer/message/{id}', [CustomerMessageAdminController::class, 'getItem'])
    ->middleware(['expired','admin']);
