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
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->loadRoutesFrom(__DIR__.'/routes/api.php');
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->commands($this->commands);
    }
}
