<?php

namespace DaydreamLab\Cms;

use DaydreamLab\Cms\Models\Newsletter\Newsletter;
use DaydreamLab\User\Models\User\User;
use Illuminate\Support\ServiceProvider;

class CmsServiceProvider extends ServiceProvider
{

    protected $commands = [
        'DaydreamLab\Cms\Commands\InstallCommand',
        'DaydreamLab\Cms\Commands\CronCommand',
        'DaydreamLab\Cms\Commands\PublishCommand',
    ];
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([__DIR__. '/constants' => config_path('constants/cms')], 'cms-configs');
        $this->publishes([__DIR__. '/Configs'   => config_path('daydreamlab')], 'cms-configs');

        $this->publishes([
            __DIR__. '/../public/admin'     => public_path('admin'),
            __DIR__. '/../resources/admin'  => resource_path('views/admin'),
        ], 'cms-frontend-admin');

        $this->publishes([
            __DIR__. '/../resources/site'   => resource_path('views/site'),
        ], 'cms-frontend-site');
//
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'cms');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->loadRoutesFrom(__DIR__.'/routes/api.php');
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');

        User::addCustomRelation('newsletters', function (User $user) {

        });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(CmsEventServiceProvider::class);
        $this->commands($this->commands);
    }
}
