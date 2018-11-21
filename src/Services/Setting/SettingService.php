<?php

namespace DaydreamLab\Cms\Services\Setting;

use DaydreamLab\Cms\Repositories\Setting\SettingRepository;
use DaydreamLab\Cms\Services\Language\LanguageService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class SettingService
{
    protected $type = 'Setting';

    public $status;

    public $response;

    protected $languageService;

    protected $user;

    protected $viewlevels;

    protected $access_ids;

    public function __construct(LanguageService $languageService)
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
        $this->languageService = $languageService;
    }


    public function getItem($locale)
    {

    }
}
