<?php

namespace DaydreamLab\Cms;

use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\ServiceProvider;

class CmsServiceProvider extends ServiceProvider
{

    protected $commands = [
        'DaydreamLab\Cms\Commands\InstallCommand',
        'DaydreamLab\Cms\Commands\CronCommand',
    ];
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([__DIR__. '/constants' => config_path('constants')], 'cms-configs');
        $this->publishes([__DIR__. '/Configs' => config_path()], 'cms-configs');
        $this->publishes([
            __DIR__. '/../resources'             => resource_path(),
            __DIR__. '/../webpack.admin.mix.js'  => base_path().'/webpack.admin.mix.js',
            __DIR__. '/../package.json'          => base_path(). '/package.json'  ,
        ], 'cms-frontend');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->loadRoutesFrom(__DIR__.'/routes/api.php');
        $this->loadRoutesFrom(__DIR__.'/routes/web.php');
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
