<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;


class BrandsTableSeeder extends Seeder
{
    protected $brandService;

    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/brand.json'), true);

    }


    public function migrate($data, $parent)
    {

    }
}
