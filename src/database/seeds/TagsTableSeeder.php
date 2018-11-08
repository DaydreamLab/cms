<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Tag\Tag;
use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    public function run()
    {
        Tag::create([
            'title'         => 'ROOT',
            'alias'         => 'root',
            'path'         => '/root',
            'state'         => 1,
            'description'   => '',
            'ordering'      => 1,
            'hits'          => 0,
            'access'        => 5,
            'language'      => 'All',
            'metadesc'      => '',
            'metakeywords'      => '',
            'params'        => '',
            'publish_up'    => null,
            'publish_down'  => null,
            'children'      =>[]
        ]); //最外面

    }
}
