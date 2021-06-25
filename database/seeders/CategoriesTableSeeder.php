<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    protected $categoryService;

    public function run()
    {
        $this->categoryService = app(CategoryAdminService::class);
        $data = json_decode(file_get_contents(__DIR__.'/jsons/category.json'), true);
        $this->migrate($data, null);
    }
    
    
    public function migrate($data, $parent)
    {
        foreach ($data as $category) {
            $children = $category['children'];
            unset($category['children']);
            if ($parent) {
                $category['parent_id'] = $parent->id;
            }
            
            $c = $this->categoryService->store(collect($category));
            
            if ($parent) {
                $parent->appendNode($c);
            }

            if (count($children))
            {
                self::migrate($children, $c);
            }
        }
    }
}
