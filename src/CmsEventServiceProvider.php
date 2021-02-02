<?php

namespace DaydreamLab\Cms;

use DaydreamLab\Cms\Listeners\CmsEventSubscriber;

class CmsEventServiceProvider extends \Illuminate\Foundation\Support\Providers\EventServiceProvider
{
    protected $subscribe = [
        CmsEventSubscriber::class
    ];


    public function boot()
    {
        parent::boot();
    }
}
