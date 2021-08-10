<?php

namespace DaydreamLab\Cms\Services\Setting\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;

class SettingAdminService extends SettingService
{
    public function __construct(SiteAdminService $siteAdminService)
    {
        parent::__construct($siteAdminService);
    }


    public function getItem($locale = '')
    {
//        $global = config('daydreamlab.global');
        $item = $this->siteService->find(1);
        if ($item) {
            $response = $item->params;
            $response['sitename'] = $item->sitename;
            $response['siteurl'] = $item->url;
            $tz = $this->user->timezone;
            $response['updated_at'] = Carbon::parse($item->updated_at, config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
            $response['updaterName'] = $item->updaterName;
            $this->status = 'GetItemSuccess';
            $this->response = $response;
        } else {
            $this->status   = 'ItemNotExist';
            $this->response = null;
        }

        return $this->response;
    }


    public function siteInfo()
    {
        $item = $this->siteService->find(1);
        if ($item) {
            $this->status = 'GetItemSuccess';
            $this->response = ['sitename' => $item->sitename, 'siteurl' => $item->url];
        } else {
            $this->status   = 'ItemNotExist';
            $this->response = null;
        }

        return $this->response;
    }


    public function store(Collection $input)
    {
        $data = collect([
            'id'        => 1,
            'sitename'  => $input->get('sitename'),
            'params'    => [
                'seo_title'         => $input->get('seo_title'),
                'seo_keyword'       => $input->get('seo_keyword'),
                'seo_description'   => $input->get('seo_description'),
                'fb_fanpage_id'     => $input->get('fb_fanpage_id'),
                'ga'                => $input->get('ga'),
            ]
        ]);

        $result = $this->siteService->store($data);

//        $config = config('daydreamlab.global');
//        $config = array_merge($config, $input->toArray());
//        $tz = $this->user->timezone;
//        $config['updated_at'] = Carbon::parse(now(), config('app.timezone'))->tz($tz)->format('Y-m-d H:i:s');
//        $config['updaterName'] = $this->user->name;
//
//        $file_str = '<?php return [' . PHP_EOL;
//
//        foreach ($config as $key => $value)
//        {
//            if ($input->has($key)) {
//                $output = $input->get("{$key}");
//            }
//            else {
//                $output = $config[$key];
//            }
//
//            $file_str .= '\'' . $key . '\' => ' .  '\'' . $output . '\', '. PHP_EOL;
//        }
//
//        $file_str .= '];';
//
//        $result = File::put(config_path('daydreamlab/global.php'), $file_str);


        if ($result) {
            $this->status = 'UpdateSuccess';
        }
        else {
            $this->status = 'UpdateFail';
        }

        return $this->getItem();
    }
}
