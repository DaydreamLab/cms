<?php

namespace DaydreamLab\Cms;

use DaydreamLab\Cms\Listeners\CmsEventSubscriber;
use Illuminate\Foundation\Support\Providers\EventServiceProvider;

class CmsEventServiceProvider extends EventServiceProvider
{
    protected $subscribe = [
        CmsEventSubscriber::class
    ];


    public function boot()
    {
        parent::boot();
    }
}
