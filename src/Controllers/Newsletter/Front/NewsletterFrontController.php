<?php

namespace DaydreamLab\Cms\Controllers\Newsletter\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Services\CmsService;

class NewsletterFrontController extends CmsController
{
    protected $modelName = 'Newsletter';

    public function __construct(CmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
