<?php

namespace DaydreamLab\Cms\Services\Setting;

use DaydreamLab\Cms\Services\CmsService;
use DaydreamLab\Cms\Services\Site\SiteService;
use Illuminate\Support\Facades\Auth;

class SettingService extends CmsService
{
    protected $modelName = 'Setting';

    protected $modelType = 'Base';

    protected $type = 'Setting';
    
    protected $siteService;
    
    protected $viewlevels;

    protected $access_ids;

    public function __construct(SiteService $siteService)
    {
        $this->siteService = $siteService;
    }
    
}
