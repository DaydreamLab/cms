<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Item\Admin\ItemAdmin;
use DaydreamLab\Cms\Models\Item\Admin\ItemTagMapAdmin;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Tag\Admin\TagAdmin;
use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemTagMapAdminRepository;
use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemTagMapAdminService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class ItemsTableSeeder extends Seeder
{
    protected $categoryService;

    protected $itemAdminService;

    public function run()
    {
//        $this->categoryService  = new CategoryService(new CategoryRepository(new Category()));
//        $tagAdminService = new TagAdminService(new TagAdminRepository(new TagAdmin()));
//        $itemTagMapAdminService = new ItemTagMapAdminService(new ItemTagMapAdminRepository(new ItemTagMapAdmin()));
//
//        $this->itemAdminService = new ItemAdminService(new ItemAdminRepository(new ItemAdmin()), $tagAdminService,$itemTagMapAdminService);
//
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
            'metadesc'      => '',
            'metakeywords'  => '',
            'params'        => (object)[],
            'extrafields'   => [],
            'children'      => []
        ]);

//        $data = json_decode(file_get_contents(__DIR__.'/jsons/item.json'), true);
//
//
//        $this->migrate($data, Category::where('extension', 'item')->first());


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

            $category = $this->categoryService->store(Helper::collect($category));

            foreach ($items as $item)
            {
                $item['category_id'] = $category->id;
                $this->itemAdminService->store(Helper::collect($item));
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
