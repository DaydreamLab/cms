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
            'created_by'=> 5
        ]);


        Language::create([
            'title'     => 'English',
            'type'      => 'system',
            'code'      => 'en-GB',
            'sef'       => 'en',
            'image'     => 'en_GB',
            'created_by'=> 5
        ]);

//        // 集團
//        Language::create([
//            'title'     => '橘色集團 - 繁體中文',
//            'sitename'  => '橘色集團',
//            'site_id'   => 1,
//            'code'      => 'zh-TW',
//            'sef'       => 'tw',
//            'image'     => 'zh_tw',
//            'state'     => 1,
//            'access'    => 9,
//            'created_by'=> 5
//        ]);
//
//        // 大橘
//        Language::create([
//            'title'     => '橘色涮涮屋 - 繁體中文',
//            'sitename'  => '橘色涮涮屋',
//            'site_id'   => 2,
//            'code'      => 'zh-TW',
//            'sef'       => 'tw',
//            'image'     => 'zh_tw',
//            'state'     => 1,
//            'access'    => 10,
//            'created_by'=> 6
//        ]);
//
//        Language::create([
//            'title'     => '橘色涮涮屋 - English',
//            'sitename'  => 'Orange ShabuShabu',
//            'site_id'   => 2,
//            'code'      => 'en-GB',
//            'sef'       => 'en',
//            'image'     => 'en_gb',
//            'state'     => 1,
//            'access'    => 10,
//            'created_by'=> 6
//        ]);
//
//
//        // 小橘
//        Language::create([
//            'title'     => 'Extension 1 by 橘色 - 繁體中文',
//            'sitename'  => 'Extension 1 by 橘色',
//            'site_id'   => 3,
//            'code'      => 'zh-TW',
//            'sef'       => 'tw',
//            'image'     => 'zh_tw',
//            'state'     => 1,
//            'access'    => 11,
//            'created_by'=> 7
//        ]);
//
//
//
//        Language::create([
//            'title'     => 'Extension 1 by 橘色 - 简体中文',
//            'sitename'  => 'Extension 1 by 橘色',
//            'site_id'   => 3,
//            'code'      => 'zh-CN',
//            'sef'       => 'cn',
//            'image'     => 'zh_cn',
//            'state'     => 1,
//            'access'    => 11,
//            'created_by'=> 7
//        ]);
//
//
//        Language::create([
//            'title'     => 'Extension 1 by 橘色 - English',
//            'sitename'  => 'Extension 1 by Orange',
//            'site_id'   => 3,
//            'code'      => 'en-GB',
//            'sef'       => 'en',
//            'image'     => 'en_gb',
//            'state'     => 1,
//            'access'    => 11,
//            'created_by'=> 7
//        ]);

    }
}
