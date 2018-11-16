<?php

namespace DaydreamLab\Cms\Services\Setting\Admin;

use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Str;


class SettingAdminService extends SettingService
{
    protected $type = 'SettingAdmin';

    protected $languageService;


    public function __construct(LanguageAdminService $languageService)
    {
        parent::__construct($languageService);
    }


    public function getItem()
    {
        $global = config('global');

        $this->status   = Str::upper(Str::snake($this->type.'GetItemSuccess'));
        $this->response = $global;

        return $this->response;
    }
}
