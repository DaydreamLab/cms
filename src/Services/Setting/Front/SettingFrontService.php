<?php

namespace DaydreamLab\Cms\Services\Setting\Front;

use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use Illuminate\Support\Collection;
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
        $item = $this->siteService->search(collect([
            'q' => (new QueryCapsule())->where('sef', $locale ?: 'zh-TW')->where('url', $host)
        ]))->first();

        $item = $item ?: $this->siteService->find(1);

        $response = $item->params;
        $response['sitename'] = $item->sitename;
        $response['siteurl'] = $item->url;

        $this->status = 'GetItemSuccess';
        $this->response = $response;

        return $this->response;
    }


    public function search(Collection $input)
    {
        $url = str_replace( ['http://', 'https://'], '', $input->get('url') );
        $item = $this->siteService->findBy('url', '=', $url)->first();

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
