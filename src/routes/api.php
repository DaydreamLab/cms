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

    Route::group(['middleware' => ['api', 'auth:api', 'expired', 'admin'], 'prefix' => 'admin'], function (){

        Route::group(['prefix' => 'category'], function (){
            Route::get('tree','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@tree');
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@remove');
            Route::post('state', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@state');
            Route::post('store','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@store');
            Route::post('search','DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@search');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Category\Admin\CategoryAdminController@getItem');
        });


        Route::group(['prefix' => 'language'], function (){
            Route::post('remove', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@remove');
            Route::post('state', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@state');
            Route::post('store','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@store');
            Route::post('search','DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@search');
            Route::get('{id}', 'DaydreamLab\Cms\Controllers\Language\Admin\LanguageAdminController@getItem');
        });


    });
});