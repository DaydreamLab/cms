<?php

namespace DaydreamLab\Cms\Services\Setting\Front;

use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use Illuminate\Support\Str;


class SettingFrontService extends SettingService
{
    protected $type = 'Front';

    protected $modelType = 'Front';


    public function __construct(SiteAdminService $siteAdminService)
    {
        parent::__construct($siteAdminService);
    }


    public function getItem($input, $locale = null, $host = null)
    {
        $global = config('daydreamlab.global');

        $site_setting = $this->siteService->findByChain(
            ['sef', 'url'],
            ['=', '='],
            [$locale ?: $global['locale'], $host]
        )->first();

        if($site_setting)
        {
            $data['sitename']       = $site_setting->sitename       ?: $global['sitename'];
            $data['locale']         = $global['locale'];
            $data['custom_header']  = $global['custom_head'];
            $data['custom_body']    = $global['custom_body'];
            $data['custom_footer']  = $global['custom_footer'];

            $this->status   = 'GetItemSuccess';
            $this->response = $data;
        }
        else
        {
            $this->status   = 'ItemNotExist';
            $this->response = null;
        }

        return $this->response;
    }
}
