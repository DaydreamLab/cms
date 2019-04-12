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
            'sef'       => 'zh-TW',
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
            'title'     => '繁體中文',
            'type'      => 'content',
            'code'      => 'zh-TW',
            'sef'       => 'zh-TW',
            'image'     => 'zh_tw',
            'created_by'=> 1
        ]);


        Language::create([
            'title'     => 'English',
            'type'      => 'content',
            'code'      => 'en-GB',
            'sef'       => 'en',
            'image'     => 'en_GB',
            'created_by'=> 1
        ]);
    }
}
