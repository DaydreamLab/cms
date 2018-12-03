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

Route::group(['middleware' => ['api'], 'prefix' => 'api'], function () {

    Route::group(['prefix' => 'setting'], function (){
        Route::get('{locale}', 'DaydreamLab\Cms\Controllers\Setting\Front\SettingFrontController@getItem');
    });

    Route::group(['prefix' => 'item'], function (){
        Route::post('search', 'DaydreamLab\Cms\Controllers\Item\Front\ItemFrontController@search');
        Route::get('{alias}', 'DaydreamLab\Cms\Controllers\Item\Front\ItemFrontController@getItemByAlias');
        //Route::get('{id}', 'DaydreamLab\Cms\Controllers\Item\Front\ItemFrontController@getItem');
    });

    Route::group(['prefix' => 'category'], function (){
        Route::get('{id}', 'DaydreamLab\Cms\Controllers\Category\Front\CategoryFrontController@getItem');

    });

    Route::group(['prefix' => 'menu'], function (){
        Route::get('{path}', 'DaydreamLab\Cms\Controllers\Menu\Front\MenuFrontController@getItem')->where('path', '.*');
    });

    Route::group(['prefix' => 'tag'], function (){
        Route::get('search/{id}', 'DaydreamLab\Cms\Controllers\Tag\Front\TagFrontController@search');
    });

    Route::group(['middleware' => ['auth:api', 'expired', 'admin'], 'prefix' => 'admin'], function (){



        Route::group(['prefix' => 'category'], function (){
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@remove');
            Route::post('state', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@state');
            Route::post('store','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@store');
            Route::post('search','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@search');
            Route::post('checkout','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@checkout');
            Route::post('ordering','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@ordering');
            Route::get('tree','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@tree');
            Route::get('tree/{extension}','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@tree');
            Route::get('treeList','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@treeList');
            Route::get('treeList/{extension}','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@treeList');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@getItem');
        });



        Route::group(['prefix' => 'extrafield'], function (){
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@remove');
            Route::post('state', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@state');
            Route::post('store','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@store');
            Route::post('search','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@search');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldAdminController@getItem');

            Route::group(['prefix' => 'group'], function (){
                Route::post('remove', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@remove');
                Route::post('state', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@state');
                Route::post('store','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@store');
                Route::post('search','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@search');
                Route::get('list','DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@getList');
                Route::get('{id}', 'DaydreamLab\Cms\Controllers\Extrafield\Admin\ExtrafieldGroupAdminController@getItem');

            });
        });



        Route::group(['prefix' => 'item'], function (){
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@remove');
            Route::post('state', 'DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@state');
            Route::post('store','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@store');
            Route::post('search','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@search');
            Route::post('checkout','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@checkout');
            Route::post('featured','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@featured');
            Route::post('featured/ordering','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@featuredOrdering');
            Route::post('ordering','DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@ordering');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Item\Admin\ItemAdminController@getItem');
        });



        Route::group(['prefix' => 'language'], function (){
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@remove');
            Route::post('state', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@state');
            Route::post('store','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@store');
            Route::post('search','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@search');
            Route::get('list','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@getList');
            Route::post('list/{type}','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@getTypeList');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@getItem');
        });


        Route::group(['prefix' => 'menu'], function (){
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@remove');
            Route::post('store','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@store');
            Route::post('state', 'DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@state');
            Route::post('search','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@search');
            Route::post('checkout','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@checkout');
            Route::post('ordering','DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@ordering');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Menu\Admin\MenuAdminController@getItem');
        });



        Route::group(['prefix' => 'option'], function (){
            Route::post('list', 'DaydreamLab\Cms\Controllers\Option\OptionController@mergeList');
        });



        Route::group(['prefix' => 'setting'], function (){
            Route::post('store', 'DaydreamLab\Cms\Controllers\Setting\Admin\SettingAdminController@store');
            Route::get('', 'DaydreamLab\Cms\Controllers\Setting\Admin\SettingAdminController@getItem');
        });



        Route::group(['prefix' => 'site'], function (){
            Route::post('remove','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@remove');
            Route::get('list','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@getList');
            Route::post('store','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@store');
            Route::post('state','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@state');
            Route::post('search','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@search');
            Route::post('ordering','DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@ordering');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Site\Admin\SiteAdminController@getItem');
        });



        Route::group(['prefix' => 'tag'], function (){
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@remove');
            Route::post('store','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@store');
            Route::post('search','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@search');
            Route::post('checkout','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@checkout');
            Route::post('ordering','DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@ordering');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Tag\Admin\TagAdminController@getItem');
        });


    });
});