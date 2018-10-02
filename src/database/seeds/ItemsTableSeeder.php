<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Item\Item;
use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    public function run()
    {
        Item::create([
            'title'         => '測試文章1',
            'alias'         => 'test1',
            'category_id'   => 1,
            'ordering'      => 1,
            'featured'      => 1,
            'featured_ordering'      => 1,
            'state'         => 1,
            'created_by'    => 1
        ]);

        Item::create([
            'title'         => '測試文章2',
            'alias'         => 'test2',
            'category_id'   => 1,
            'ordering'      => 2,
            'featured'      => 0,
            'state'         => 1,
            'created_by'    => 1
        ]);

        Item::create([
            'title'         => '測試文章3',
            'alias'         => 'test3',
            'category_id'   => 1,
            'ordering'      => 3,
            'featured'      => 1,
            'featured_ordering'   => 2,
            'state'         => 1,
            'created_by'    => 1
        ]);

        Item::create([
            'title'         => '測試文章4',
            'alias'         => 'test4',
            'category_id'   => 1,
            'ordering'      => 4,
            'featured'      => 1,
            'featured_ordering'    => 3,
            'state'         => 1,
            'created_by'    => 1
        ]);

        Item::create([
            'title'         => '測試文章5',
            'alias'         => 'test5',
            'category_id'   => 1,
            'ordering'      => 5,
            'featured'      => 0,
            'state'         => 1,
            'created_by'    => 1
        ]);
    }
}
