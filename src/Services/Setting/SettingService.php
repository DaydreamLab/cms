<?php

namespace DaydreamLab\Cms\Services\Setting;

use DaydreamLab\Cms\Repositories\Setting\SettingRepository;
use DaydreamLab\Cms\Services\Language\LanguageService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Services\BaseService;
use Illuminate\Support\Facades\App;

class SettingService
{
    protected $type = 'Setting';

    public $status;

    public $response;

    protected $languageService;


    public function __construct(LanguageService $languageService)
    {
        $this->languageService = $languageService;
    }


    public function getItem()
    {

    }
}
