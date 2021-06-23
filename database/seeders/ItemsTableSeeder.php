<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;


class ItemsTableSeeder extends Seeder
{
    protected $categoryService;

    protected $itemAdminService;

    public function run()
    {

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
