<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;


class ItemsTableSeeder extends Seeder
{
    protected $categoryService;

    protected $itemAdminService;

    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/item.json'), true);
        $this->categoryService = app(CategoryAdminService::class);
        $this->itemAdminService = app(ItemAdminService::class);
        foreach ($data as $category_data) {
            $category = $this->categoryService->findBy('alias', '=', $category_data['alias'])->first();
            foreach ($category_data['item'] as $item_data) {
                $item_data['category_id'] = $category->id;
                $i = $this->itemAdminService->store(collect($item_data));
            }
        }
    }


    public function migrate($data, $parent)
    {

    }
}
