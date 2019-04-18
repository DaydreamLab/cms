<?php

namespace DaydreamLab\Cms\Services\Setting;

use DaydreamLab\Cms\Services\Language\LanguageService;
use DaydreamLab\Cms\Services\Site\SiteService;
use Illuminate\Support\Facades\Auth;

class SettingService
{
    protected $type = 'Setting';

    public $status;

    public $response;

    protected $siteService;

    protected $user;

    protected $viewlevels;

    protected $access_ids;

    public function __construct(SiteService $siteService)
    {
        $this->user = Auth::guard('api')->user();
        if ($this->user)
        {
            $this->viewlevels = $this->user->viewlevels;
            $this->access_ids = $this->user->access_ids;
        }
        else
        {
            $this->viewlevels = config('cms.item.front.viewlevels');
            $this->access_ids = config('cms.item.front.access_ids');
        }
        $this->siteService = $siteService;
    }

}
