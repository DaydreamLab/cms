<?php

namespace DaydreamLab\Cms;

use App\Providers\EventServiceProvider;
use DaydreamLab\Cms\Listeners\CmsEventSubscriber;


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
