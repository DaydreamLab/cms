<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Menu\Menu;
use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;
use Kalnoy\Nestedset\Collection;

class MenusTableSeeder extends Seeder
{
    protected $categoryService;

    protected $menuService;

    public function run()
    {
//        $this->categoryService = new CategoryService(new CategoryRepository(new Category()));
//        $this->menuService     = new MenuService(new MenuRepository(new Menu()));
//

        $root = $this->createMenuRoot();

//        $data = json_decode(file_get_contents(__DIR__.'/jsons/menu.json'), true);
//
//        $this->migrate($data, Category::where('extension', 'menu')->first());

    }

    public function migrate($data, $parent)
    {
        $menus = $data['menus'];
        $children = $data['children'];
        unset($data['menus']);
        unset($data['children']);

        $menu_category  = $this->categoryService->store(Collection::make($data));
        $menu_root      = $this->menuService->find(1);

        foreach ($children as $child)
        {
        }

        foreach ($menus as $menu)
        {
            $menu['category_id'] = $menu_category->id;
            $this->menuService->store(Helper::collect($menu));
        }

    }


    public function createMenuRoot()
    {
        $category_root = Category::create( [
            'title'         => 'ROOT',
            'alias'         => 'root',
            'path'          => '',
            'state'         => 1,
            'introimage'    => '',
            'introtext'     => '',
            'image'         => '',
            'ordering'      => 1,
            'description'   => '',
            'extension'     => 'menu',
            'access'        => 5,
            'metadesc'      => '',
            'metakeywords'  => '',
            "extrafields"   => [],
        ]);

        $menu_root = Menu::create([
            'title'         => 'ROOT',
            'alias'         => 'root',
            'path'          => '',
            'category_id'   => $category_root->id,
            'ordering'      => 1,
            'state'         => 1,
            'description'   => '',
            'access'        => 5,
            'language'      => '*',
            'params'        => '',
        ]);
    }


}
