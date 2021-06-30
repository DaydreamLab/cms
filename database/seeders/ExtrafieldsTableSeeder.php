<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;


class ExtrafieldsTableSeeder extends Seeder
{

    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/fields.json'), true);

        foreach ($data as $field) {
            Extrafield::create($field);
        }
    }


    public function migrate($data, $parent)
    {

    }
}
