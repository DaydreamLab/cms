<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Language\Language;
use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{
    public function run()
    {
        Language::create([
            'title'     => 'Chinese(Traditional)',
            'code'      => 'zh-TW',
            'sef'       => 'tw',
            'image'     => 'zh_tw',
            'state'     => 1,
            'order'     => 1,
            'created_by'=> 1,
        ]);

        Language::create([
            'title'     => 'English(en-GB)',
            'code'      => 'en-GB',
            'sef'       => 'en',
            'image'     => 'en_gb',
            'state'     => 1,
            'order'     => 2,
            'created_by'=> 1,
        ]);
    }
}
