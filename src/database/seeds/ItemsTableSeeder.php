<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class ItemsTableSeeder extends Seeder
{
    protected $categoryService;

    protected $itemService;

    public function run()
    {
        $this->categoryService  = new CategoryService(new CategoryRepository(new Category()));
        $this->itemService      = new ItemService(new ItemRepository(new Item()));


        $category_root = Category::create([
            'title'         => 'ROOT',
            'alias'         => 'root',
            'path'          => '',
            'state'         => 1,
            'introimage'    => '',
            'introtext'     => '',
            'image'         => '',
            'description'   => '',
            'extension'     => 'item',
            'ordering'      => 1,
            'access'        => 4,
            'metadesc'      => '',
            'metadata'      => '',
            'created_by'    => 1,
            'children'      =>[]
        ]);

        $data = json_decode(file_get_contents(__DIR__.'/jsons/item.json'), true);


        $this->migrate($data, Category::where('extension', 'item')->first());


//
//        Item::create([
//            'title'         => '測試文章1',
//            'alias'         => 'test1',
//            'category_id'   => 1,
//            'ordering'      => 1,
//            'featured'      => 1,
//            'featured_ordering'      => 1,
//            'state'         => 1,
//            'created_by'    => 1
//        ]);
//
//        Item::create([
//            'title'         => '測試文章2',
//            'alias'         => 'test2',
//            'category_id'   => 1,
//            'ordering'      => 2,
//            'featured'      => 0,
//            'state'         => 1,
//            'created_by'    => 1
//        ]);
//
//        Item::create([
//            'title'         => '測試文章3',
//            'alias'         => 'test3',
//            'category_id'   => 1,
//            'ordering'      => 3,
//            'featured'      => 1,
//            'featured_ordering'   => 2,
//            'state'         => 1,
//            'created_by'    => 1
//        ]);
//
//        Item::create([
//            'title'         => '測試文章4',
//            'alias'         => 'test4',
//            'category_id'   => 1,
//            'ordering'      => 4,
//            'featured'      => 1,
//            'featured_ordering'    => 3,
//            'state'         => 1,
//            'created_by'    => 1
//        ]);
//
//        Item::create([
//            'title'         => '測試文章5',
//            'alias'         => 'test5',
//            'category_id'   => 1,
//            'ordering'      => 5,
//            'featured'      => 0,
//            'state'         => 1,
//            'created_by'    => 1
//        ]);
    }


    public function migrate($data, $parent)
    {
        foreach ($data as $category)
        {
            $childern = $category['children'];
            $items    = $category['items'];
            unset($category['children']);
            unset($category['items']);

            $category = $this->categoryService->store(Collection::make($category));

            foreach ($items as $item)
            {
                $item['category_id'] = $category->id;
                $this->itemService->store(Collection::make($item));
            }

            if ($parent)
            {
                $parent->appendNode($category);
            }

            if (count($childern))
            {
                self::migrate($childern, $category);
            }
        }
    }
}
