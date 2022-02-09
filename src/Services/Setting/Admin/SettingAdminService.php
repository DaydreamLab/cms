<?php

namespace DaydreamLab\Cms\Services\Setting\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Services\Setting\SettingService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class SettingAdminService extends SettingService
{
    public function __construct(SiteAdminService $siteAdminService)
    {
        parent::__construct($siteAdminService);
    }


    public function getItem($locale = '')
    {
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


    public function siteInfo(Request $request)
    {
        $site_id = $request->get('site_id') ? :1;
        $item = $this->siteService->find($site_id);
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
                'fbFanpageUrl'      => $input->get('fbFanpageUrl'),
                'lineId'            => $input->get('lineId'),
                'liffId'            => $input->get('liffId'),
                'youtubeUrl'        => $input->get('youtubeUrl'),
                'podcast'           => $input->get('podcast'),
                'ga'                => $input->get('ga'),
            ]
        ]);

        $result = $this->siteService->store($data);

        if ($result) {
            $this->status = 'UpdateSuccess';
        }
        else {
            $this->status = 'UpdateFail';
        }

        return $this->getItem();
    }


    public function restoreAllLockData(Request $request)
    {
        $db = "Tables_in_".env('DB_DATABASE');
        $tables = array_map(function($t) use ($db) {
            return $t->{$db};
        }, DB::select('SHOW TABLES'));

        $log = [];
        foreach ($tables as $table) {
            if (Schema::hasColumn($table, 'locked_by')) {
                $log[$table] = [];
                $affects = DB::table($table)->where('locked_by', '!=', 0)->get();
                DB::table($table)->where('locked_by', '!=', 0)->update(['locked_by' => 0]);
                foreach ($affects as $affect) {
                    $log[$table][] = $affect->id;
                }
            }
        }

        $this->status = "RestoreSuccess";
        $this->response = $log;
    }
}
