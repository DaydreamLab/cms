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
            'children'      => [],
            'created_by'    => 1,
        ]);

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
