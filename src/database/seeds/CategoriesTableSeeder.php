<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Category\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        Category::create([
            'title'         => 'ROOT',
            'alias'         => 'root',
            'state'         => 1,
            'introimage'    => '',
            'introtext'     => '',
            'image'         => '',
            'description'   => '',
            'extension'     => 'category',
            'order'         => 1,
            'metadesc'      => '',
            'metadata'      => '',
            'created_by'    => 1,
            'children'      =>[
                [
                    'title'         => 'A',
                    'alias'         => 'a',
                    'state'         => 1,
                    'introimage'    => '',
                    'introtext'     => '',
                    'image'         => '',
                    'description'   => '',
                    'extension'     => 'category',
                    'order'         => 1,
                    'metadesc'      => '',
                    'metadata'      => '',
                    'created_by'    => 1,
                    'children'      =>[
                        [
                            'title'         => 'A-1',
                            'alias'         => 'a-1',
                            'state'         => 1,
                            'introimage'    => '',
                            'introtext'     => '',
                            'image'         => '',
                            'description'   => '',
                            'extension'     => 'category',
                            'order'         => 1,
                            'metadesc'      => '',
                            'metadata'      => '',
                            'created_by'    => 1,
                        ],
                        [
                            'title'         => 'A-2',
                            'alias'         => 'a-2',
                            'state'         => 1,
                            'introimage'    => '',
                            'introtext'     => '',
                            'image'         => '',
                            'description'   => '',
                            'extension'     => 'category',
                            'order'         => 2,
                            'metadesc'      => '',
                            'metadata'      => '',
                            'created_by'    => 1,
                        ]
                    ],
                ],
                [
                    'title'         => 'B',
                    'alias'         => 'b',
                    'state'         => 1,
                    'introimage'    => '',
                    'introtext'     => '',
                    'image'         => '',
                    'description'   => '',
                    'extension'     => 'category',
                    'order'         => 1,
                    'metadesc'      => '',
                    'metadata'      => '',
                    'created_by'    => 1,
                    'children'      =>[
                        [
                            'title'         => 'B-1',
                            'alias'         => 'b-1',
                            'state'         => 1,
                            'introimage'    => '',
                            'introtext'     => '',
                            'image'         => '',
                            'description'   => '',
                            'extension'     => 'category',
                            'order'         => 1,
                            'metadesc'      => '',
                            'metadata'      => '',
                            'created_by'    => 1,
                        ],
                        [
                            'title'         => 'B-2',
                            'alias'         => 'B-2',
                            'state'         => 1,
                            'introimage'    => '',
                            'introtext'     => '',
                            'image'         => '',
                            'description'   => '',
                            'extension'     => 'category',
                            'order'         => 2,
                            'metadesc'      => '',
                            'metadata'      => '',
                            'created_by'    => 1,
                        ]
                    ],
                ],
                [
                    'title'         => 'C',
                    'alias'         => 'c',
                    'state'         => 1,
                    'introimage'    => '',
                    'introtext'     => '',
                    'image'         => '',
                    'description'   => '',
                    'extension'     => 'category',
                    'order'         => 1,
                    'metadesc'      => '',
                    'metadata'      => '',
                    'created_by'    => 1,
                    'children'      =>[
                        [
                            'title'         => 'C-1',
                            'alias'         => 'c-1',
                            'state'         => 1,
                            'introimage'    => '',
                            'introtext'     => '',
                            'image'         => '',
                            'description'   => '',
                            'extension'     => 'category',
                            'order'         => 1,
                            'metadesc'      => '',
                            'metadata'      => '',
                            'created_by'    => 1,
                        ],
                        [
                            'title'         => 'C-2',
                            'alias'         => 'c-2',
                            'state'         => 1,
                            'introimage'    => '',
                            'introtext'     => '',
                            'image'         => '',
                            'description'   => '',
                            'extension'     => 'category',
                            'order'         => 2,
                            'metadesc'      => '',
                            'metadata'      => '',
                            'created_by'    => 1,
                        ]
                    ],
                ],

            ],
        ]); //最外面

    }
}
