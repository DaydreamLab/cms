<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Tag\Tag;
use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    public function run()
    {
        Tag::create([
            'title'         => 'A',
            'alias'         => 'a',
            'path'          => '/a',
            'state'         => 1,
            'description'   => '',
            'ordering'      => 1,
            'hits'          => 0,
            'access'        => 1,
            'language'      => '*',
            'extension'     => 'item',
            'content_type'  => 'article',
            'publish_up'    => null,
            'publish_down'  => null,
            'created_by'    => 1,
            'children'      => [
                [
                    'title'         => 'A1',
                    'alias'         => 'A1',
                    'path'          => '/A1',
                    'state'         => 1,
                    'description'   => '',
                    'ordering'      => 1,
                    'hits'          => 0,
                    'access'        => 1,
                    'language'      => '*',
                    'extension'     => 'item',
                    'content_type'  => 'article',
                    'publish_up'    => null,
                    'publish_down'  => null,
                    'created_by'    => 1,
                    'children'      => [],
                ],
                [
                    'title'         => 'A2',
                    'alias'         => 'A2',
                    'path'          => '/A2',
                    'state'         => 1,
                    'description'   => '',
                    'ordering'      => 2,
                    'hits'          => 0,
                    'access'        => 1,
                    'language'      => '*',
                    'extension'     => 'item',
                    'content_type'  => 'article',
                    'publish_up'    => null,
                    'publish_down'  => null,
                    'created_by'    => 1,
                    'children'      => [],
                ],
                [
                    'title'         => 'A3',
                    'alias'         => 'A3',
                    'path'          => '/A3',
                    'state'         => 1,
                    'description'   => '',
                    'ordering'      => 3,
                    'hits'          => 0,
                    'access'        => 1,
                    'language'      => '*',
                    'extension'     => 'item',
                    'content_type'  => 'article',
                    'publish_up'    => null,
                    'publish_down'  => null,
                    'created_by'    => 1,
                    'children'      => [],
                ]
            ],
        ]);


        Tag::create([
            'title'         => 'B',
            'alias'         => 'b',
            'path'          => '/b',
            'state'         => 1,
            'description'   => '',
            'ordering'      => 2,
            'hits'          => 0,
            'access'        => 1,
            'language'      => '*',
            'extension'     => 'item',
            'content_type'  => 'article',
            'publish_up'    => null,
            'publish_down'  => null,
            'created_by'    => 1,
            'children'      => [
                [
                    'title'         => 'B1',
                    'alias'         => 'b1',
                    'path'          => '/b1',
                    'state'         => 1,
                    'description'   => '',
                    'ordering'      => 1,
                    'hits'          => 0,
                    'access'        => 1,
                    'language'      => '*',
                    'extension'     => 'item',
                    'content_type'  => 'article',
                    'publish_up'    => null,
                    'publish_down'  => null,
                    'created_by'    => 1,
                    'children'      => [],
                ],
                [
                    'title'         => 'B2',
                    'alias'         => 'b2',
                    'path'          => '/b2',
                    'state'         => 1,
                    'description'   => '',
                    'ordering'      => 2,
                    'hits'          => 0,
                    'access'        => 1,
                    'language'      => '*',
                    'extension'     => 'item',
                    'content_type'  => 'article',
                    'publish_up'    => null,
                    'publish_down'  => null,
                    'created_by'    => 1,
                    'children'      => [],
                ],
                [
                    'title'         => 'B3',
                    'alias'         => 'b3',
                    'path'          => '/b3',
                    'state'         => 1,
                    'description'   => '',
                    'ordering'      => 3,
                    'hits'          => 0,
                    'access'        => 1,
                    'language'      => '*',
                    'extension'     => 'item',
                    'content_type'  => 'article',
                    'publish_up'    => null,
                    'publish_down'  => null,
                    'created_by'    => 1,
                    'children'      => [],
                ]
            ],
        ]);

    }
}
