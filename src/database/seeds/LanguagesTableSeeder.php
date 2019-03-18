<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Language\Language;
use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{
    public function run()
    {
        Language::create([
            'title'     => '繁體中文',
            'type'      => 'system',
            'code'      => 'zh-TW',
            'sef'       => 'tw',
            'image'     => 'zh_tw',
            'created_by'=> 1
        ]);


        Language::create([
            'title'     => 'English',
            'type'      => 'system',
            'code'      => 'en-GB',
            'sef'       => 'en',
            'image'     => 'en_GB',
            'created_by'=> 1
        ]);


        Language::create([
            'title'     => env('APP_NAME').' - 繁體中文',
            'sitename'  => env('APP_NAME'),
            'site_id'   => 1,
            'code'      => 'zh-TW',
            'sef'       => 'tw',
            'image'     => 'zh_tw',
            'state'     => 1,
            'access'    => 1,
            'created_by'=> 1
        ]);

    }
}
