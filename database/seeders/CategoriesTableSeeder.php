<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $category_root = Category::create([
            'title'         => 'ROOT',
            'alias'         => 'item',
            'path'          => '/item',
            'state'         => 1,
            'introimage'    => '',
            'introtext'     => '',
            'image'         => '',
            'description'   => '',
            'extension'     => 'item',
            'ordering'      => 1,
            'access'        => 1,
            'params'        => [],
            'children'      => [],
            'created_by'    => 1,
        ]);
    }
}
