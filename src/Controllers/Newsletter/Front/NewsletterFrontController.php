<?php

namespace DaydreamLab\Cms\Controllers\Newsletter\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Services\Newsletter\Front\NewsletterFrontService;
use Throwable;

class NewsletterFrontController extends CmsController
{
    protected $modelName = 'Newsletter';

    public function __construct(NewsletterFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
