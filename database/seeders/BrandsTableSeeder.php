<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Services\Brand\Admin\BrandAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class BrandsTableSeeder extends Seeder
{
    protected $brandService;

    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/brand.json'), true);
        $this->brandService = app(BrandAdminService::class);

        foreach ($data as $brand) {
            $brand['params'] = RequestHelper::handleParams([]);
            $userIds = $brand['user'];
            unset($brand['user']);
            $b = $this->brandService->store(collect($brand));
            $b->users()->attach($userIds);
        }
    }


    public function migrate($data, $parent)
    {

    }
}
