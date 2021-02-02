<?php

namespace DaydreamLab\Cms\Database\Seeders;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class ModulesTableSeeder extends Seeder
{
    protected $categoryAdminService;

    protected $moduleAdminService;

    public function run()
    {
        $category_root = Category::create([
            'title'         => 'ROOT',
            'alias'         => 'module',
            'path'          => '/module',
            'state'         => 1,
            'introimage'    => '',
            'introtext'     => '',
            'image'         => '',
            'description'   => '',
            'extension'     => 'module',
            'ordering'      => 1,
            'access'        => 1,
            'metadesc'      => '',
            'metakeywords'  => '',
            'extrafields'   => [],
            'params'        => (object)[],
            'created_by'    => 1,
            'children'      => []
        ]);

        $this->categoryAdminService  = app(CategoryAdminService::class);
        $data = json_decode(file_get_contents(__DIR__ . '/jsons/module.json'), true);

        //$this->migrate($data, Category::where('extension', 'module')->first());
    }


    public function migrate($data, $parent)
    {
        foreach ($data as $category)
        {
            $modules    = $category['modules'];
            unset($category['modules']);

            $category['parent_id'] = $parent->id;

            $category = $this->categoryAdminService->store(Helper::collect($category));

            foreach ($modules as $module)
            {
                $module['category_id'] = $category->id;
                $this->moduleAdminService->store(Helper::collect($module));
            }

            if ($parent)
            {
                $parent->appendNode($category);
            }
        }
    }
}
