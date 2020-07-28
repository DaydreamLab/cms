<?php
namespace DaydreamLab\Cms\Database\Seeds;

use Illuminate\Database\Seeder;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\Cms\Repositories\Site\Admin\SiteAdminRepository;
use DaydreamLab\Cms\Models\Site\Admin\SiteAdmin;
use DaydreamLab\JJAJ\Helpers\Helper;

class SitesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service = new SiteAdminService(new SiteAdminRepository(new SiteAdmin()));

        $service->store(Helper::collect([
            'title'         => config('app.name').' - 繁體中文',
            'url'           => str_replace('http://', '',str_replace('https://', '', env('APP_URL'))),
            'sitename'      => config('app.name'),
            'sef'           => 'zh-TW',
            'metakeywords'  => '',
            'access'        => 1
        ]));
    }

}
