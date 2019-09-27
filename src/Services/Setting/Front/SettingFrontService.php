<?php

namespace DaydreamLab\Cms\Services\Setting\Front;

use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use Illuminate\Support\Str;


class SettingFrontService extends SettingService
{
    protected $type = 'SettingFront';


    public function __construct(SiteAdminService $siteAdminService)
    {
        parent::__construct($siteAdminService);
    }


    public function getItem($locale, $host)
    {
        $global = config('global');

        $site_setting = $this->siteService->findByChain(
            ['sef', 'url'],
            ['=', '='],
            [$locale ?: $global['locale'], $host]
        )->first();

        if($site_setting)
        {
            $data['metadesc']       = $site_setting->metadesc       ?: $global['metadesc'];
            $data['metakeywords']   = $site_setting->metakeywords   ?: $global['metakeywords'];
            $data['sitename']       = $site_setting->sitename       ?: $global['sitename'];
            $data['locale']         = $global['locale'];
            $data['custom_header']  = $global['custom_head'];
            $data['custom_body']    = $global['custom_body'];
            $data['custom_footer']  = $global['custom_footer'];

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
