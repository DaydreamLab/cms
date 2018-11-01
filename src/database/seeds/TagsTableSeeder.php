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
            'state'         => 1,
            'description'   => '',
            'ordering'      => 1,
            'hits'          => 0,
            'access'        => 2,
            'language'      => 'All',
            'metadesc'      => '',
            'metakeywords'      => '',
            'params'        => '',
            'created_by'    => 1,
            'publish_up'    => null,
            'publish_down'  => null,
            'children'      =>[]
        ]); //最外面

    }
}
