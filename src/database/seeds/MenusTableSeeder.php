<?php

namespace DaydreamLab\Cms\Database\Seeds;


use DaydreamLab\Cms\Models\Menu\Menu;
use Illuminate\Database\Seeder;

class MenusTableSeeder extends Seeder
{
    public function run()
    {
        Menu::create([
            'title'         => '橘色價值',
            'alias'         => 'home',
            'path'          => '',
            'category_id'   => 12,
            'ordering'      => 1,
            'state'         => 1,
            'description'   => 1,
            'access'        => 2,
            'language'      => 1,
            'params'        => '',
            'created_by'    => 1,
        ]);

    }
}
