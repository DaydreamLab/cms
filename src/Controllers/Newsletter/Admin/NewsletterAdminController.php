<?php

namespace DaydreamLab\Cms\Controllers\Newsletter\Admin;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Services\CmsService;

class NewsletterAdminController extends CmsController
{
    protected $modelName = 'Newsletter';

    public function __construct(CmsService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }
}
