<?php

use Illuminate\Http\Request;

/*
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

Route::post('api/category/search', 'DaydreamLab\Cms\Controllers\Category\Front\CategoryFrontController@search');
Route::post('api/category/search/items', 'DaydreamLab\Cms\Controllers\Category\Front\CategoryFrontController@searchItems');
Route::get('api/category/{alias}', 'DaydreamLab\Cms\Controllers\Category\Front\CategoryFrontController@getItemByAlias');
Route::post('api/form/post', 'DaydreamLab\Cms\Controllers\Form\Front\FormFrontController@store');
Route::post('api/item/search', 'DaydreamLab\Cms\Controllers\Item\Front\ItemFrontController@search');
Route::get('api/item/{alias}', 'DaydreamLab\Cms\Controllers\Item\Front\ItemFrontController@getItemByAlias');
Route::get('api/menu/getTree', 'DaydreamLab\Cms\Controllers\Menu\Front\MenuFrontController@getTree');
Route::get('api/menu/{path}', 'DaydreamLab\Cms\Controllers\Menu\Front\MenuFrontController@getItem')->where('path', '.*');
Route::get('api/module/{alias}', 'DaydreamLab\Cms\Controllers\Module\Front\ModuleFrontController@getItemByAlias');
Route::get('api/setting/{locale}', 'DaydreamLab\Cms\Controllers\Setting\Front\SettingFrontController@getItem');
Route::post('api/tag/search', 'DaydreamLab\Cms\Controllers\Tag\Front\TagFrontController@search');
Route::post('api/tag/search/items', 'DaydreamLab\Cms\Controllers\Tag\Front\TagFrontController@searchItems');
Route::get('api/tag/{alias}', 'DaydreamLab\Cms\Controllers\Tag\Front\TagFrontController@getItemByAlias');



/************************************  後台 API  ************************************/
Route::post('api/admin/category/remove', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/category/state', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/category/store','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/category/search','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@search')
    ->middleware(['expired','admin']);
Route::post('api/admin/category/checkout','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@checkout')
    ->middleware(['expired','admin']);
Route::post('api/admin/category/ordering','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@ordering')
    ->middleware(['expired','admin']);
Route::get('api/admin/category/{id}', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/extrafield/checkout','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@checkout')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/remove', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/state', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/store','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/search','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@search')
    ->middleware(['expired','admin']);
Route::get('api/admin/extrafield/{id}', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@getItem')
    ->middleware(['expired','admin']);


Route::post('api/admin/extrafield/group/checkout','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@checkout')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/remove', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/state', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/store','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/extrafield/group/search','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@search')
    ->middleware(['expired','admin']);
Route::get('api/admin/extrafield/group/{id}', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/form/remove','DaydreamLab\Cms\Controllers\Form\Admin\FormAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/form/store','DaydreamLab\Cms\Controllers\Form\Admin\FormAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/form/search','DaydreamLab\Cms\Controllers\Form\Admin\FormAdminController@search')
    ->middleware(['expired','admin']);
Route::get('api/admin/form/{id}', 'DaydreamLab\Cms\Controllers\Form\Admin\FormAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/item/remove', 'DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/item/state', 'DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/item/store','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/item/search','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@search')
    ->middleware(['expired','admin']);
Route::post('api/admin/item/checkout','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@checkout')
    ->middleware(['expired','admin']);
Route::post('api/admin/item/featured','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@featured')
    ->middleware(['expired','admin']);
Route::post('api/admin/item/featured/ordering','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@featuredOrdering')
    ->middleware(['expired','admin']);
Route::post('api/admin/item/ordering','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@ordering')
    ->middleware(['expired','admin']);
Route::get('api/admin/item/{id}', 'DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/language/remove', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/language/state', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/language/store','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/language/search','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@search')
    ->middleware(['expired','admin']);
Route::get('api/admin/language/{id}', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/menu/remove', 'DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/store','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/state', 'DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/search','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@search')
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/checkout','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@checkout')
    ->middleware(['expired','admin']);
Route::post('api/admin/menu/ordering','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@ordering')
    ->middleware(['expired','admin']);
Route::get('api/admin/menu/{id}', 'DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/module/remove', 'DaydreamLab\Cms\Controllers\Module\Admin\ModuleAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/module/store','DaydreamLab\Cms\Controllers\Module\Admin\ModuleAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/module/state', 'DaydreamLab\Cms\Controllers\Module\Admin\ModuleAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/module/search','DaydreamLab\Cms\Controllers\Module\Admin\ModuleAdminController@search')
    ->middleware(['expired','admin']);
Route::post('api/admin/module/checkout','DaydreamLab\Cms\Controllers\Module\Admin\ModuleAdminController@checkout')
    ->middleware(['expired','admin']);
Route::get('api/admin/module/{id}', 'DaydreamLab\Cms\Controllers\Module\Admin\ModuleAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/option/list', 'DaydreamLab\Cms\Controllers\Option\OptionController@mergeList')
    ->middleware(['expired','admin']);

Route::post('api/admin/setting/store', 'DaydreamLab\Cms\Controllers\Setting\Admin\SettingAdminController@store')
    ->middleware(['expired','admin']);
Route::get('api/admin/setting', 'DaydreamLab\Cms\Controllers\Setting\Admin\SettingAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/site/checkout','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@checkout')
    ->middleware(['expired','admin']);
Route::post('api/admin/site/remove','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/site/store','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/site/state','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/site/search','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@search')
    ->middleware(['expired','admin']);
Route::post('api/admin/site/ordering','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@ordering')
    ->middleware(['expired','admin']);
Route::get('api/admin/site/list','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@getList')
    ->middleware(['expired','admin']);
Route::get('api/admin/site/{id}', 'DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@getItem')
    ->middleware(['expired','admin']);

Route::post('api/admin/tag/remove', 'DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@remove')
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/store','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@store')
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/search','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@search')
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/state','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@state')
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/checkout','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@checkout')
    ->middleware(['expired','admin']);
Route::post('api/admin/tag/ordering','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@ordering')
    ->middleware(['expired','admin']);
Route::get('api/admin/tag/{id}', 'DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@getItem')
    ->middleware(['expired','admin']);
