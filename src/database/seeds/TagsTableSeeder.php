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
            'alias'         => 'tag',
            'path'          => '/tag',
            'state'         => 1,
            'description'   => '',
            'ordering'      => 1,
            'hits'          => 0,
            'access'        => 1,
            'language'      => '*',
            'publish_up'    => null,
            'publish_down'  => null,
            'created_by'    => 1,
            'children'      => [],
        ]); //最外面

    }
}
