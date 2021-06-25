<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/category.json'), true);
        $this->migrate($data, null);
    }
    
    
    public function migrate($data, $parent)
    {
        foreach ($data as $category) {
            $children = $category['children'];
            unset($category['children']);
            
            $c = Category::create($category);
            
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
