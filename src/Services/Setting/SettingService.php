<?php

namespace DaydreamLab\Cms\Services\Setting;

use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\Cms\Services\Site\SiteService;

class SettingService extends CmsService
{
    protected $modelName = 'Setting';

    protected $siteService;

    public function __construct(SiteService $siteService)
    {
        $this->siteService = $siteService;
    }
}
