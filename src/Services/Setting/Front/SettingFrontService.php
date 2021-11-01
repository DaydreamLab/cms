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

        $item = $this->siteService->find(1);

        if ($item) {
            $response = $item->params;
            $response['sitename'] = $item->sitename;
            $response['siteurl'] = $item->url;
            $this->status = 'GetItemSuccess';
            $this->response = $response;
        } else {
            $this->status   = 'ItemNotExist';
            $this->response = null;
        }

        return $this->response;
    }
}
