<?php

namespace DaydreamLab\Cms\Services\Setting\Front;

use DaydreamLab\Cms\Services\Language\Front\LanguageFrontService;
use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Str;


class SettingFrontService extends SettingService
{
    protected $type = 'SettingFront';

    protected $languageService;



    public function __construct(LanguageFrontService $languageService)
    {
        parent::__construct($languageService);
    }


    public function getItem($locale)
    {
        $global = config('global');

        $lang_setting = $this->languageService->findByChain(
            ['sef', 'type'],
            ['=', '='],
            [$locale ?: 'tw', 'content']
        )->first();

        if($lang_setting)
        {
            $data['metadesc']       = $lang_setting->metadesc       ?: $global['metadesc'];
            $data['metakeywords']   = $lang_setting->metakeywords   ?: $global['metakeywords'];
            $data['sitename']       = $lang_setting->sitename       ?: $global['sitename'];
            $data['locale']         = $global['locale'];

            $this->status   = Str::upper(Str::snake($this->type.'GetItemSuccess'));
            $this->response = (object)$data;
        }
        else
        {
            $this->status   = Str::upper(Str::snake($this->type.'NotFound'));
            $this->response = null;
        }

        return $this->response;
    }
}
