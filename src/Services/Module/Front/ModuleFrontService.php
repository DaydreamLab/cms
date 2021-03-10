<?php

namespace DaydreamLab\Cms\Services\Module\Front;

use DaydreamLab\Cms\Models\Menu\Front\MenuFront;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Site\Site;
use DaydreamLab\Cms\Repositories\Module\Front\ModuleFrontRepository;
use DaydreamLab\Cms\Repositories\Site\SiteRepository;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Menu\Front\MenuFrontService;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\Cms\Traits\Service\WithAccessIds;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ModuleFrontService extends ModuleService
{
    use LoggedIn, WithAccessIds;

    protected $type = 'Front';

    protected $itemFrontService;

    protected $categoryFrontService;

    protected $menuFrontService;

    public function __construct(ModuleFrontRepository $repo,
                                CategoryFrontService $categoryFrontService,
                                ItemFrontService $itemFrontService)
    {
        parent::__construct($repo);
        $this->repo                 = $repo;
        $this->itemFrontService     = $itemFrontService;
        $this->categoryFrontService = $categoryFrontService;
    }


    public function getCategoriesModule($params)
    {
        $categories = $this->categoryFrontService->getItemsByIds($params);

        foreach ($categories as $category)
        {
            $category_ids = [$category->id];

            // 取出項目的搜尋條件
            $item_params['category_ids']    = $category_ids;
            $item_params['access_ids']      = $this->getAccessIds();
            $item_params['order_by']        = $params['item_order_by'];
            $item_params['order']           = $params['item_order'];
            $item_params['limit']           = $params['item_count'];

            if ($params['with_items'] == 'self')
            {
                $item_params['category_ids'] = $category_ids;
            }
            elseif ($params['with_items'] == 'children')
            {
                $descendant = $this->categoryFrontService->findDescendantOf($category->id);
                $descendant_ids = $descendant->map(function ($item, $key){
                    return $item->id;
                })->all();

                // 塞入子分類的 ids
                $item_params['category_ids'] = array_merge($category_ids, $descendant_ids);
            }

            $category->items = $this->itemFrontService->getItemsByCategoryIds($item_params);
        }

        if ($params['category_to_tree'])
        {
            $categories = $categories->toTree();
        }

        return $categories;
    }


    public function getCategoriesItemsModule($params)
    {
        $params['access_ids'] = $this->getAccessIds();

        $items = $this->itemFrontService->getCategoriesItemsModule($params);

        return $items;
    }


    public function getItemByAlias(Collection $input)
    {
        $input->put('paginate', false);

        $items = $this->search($input);

        if ($items->count())
        {
            $item = $items->first();

            $item->items = $this->loadModule($item, $input->get('language'));

            $this->response = $item;
            $this->status   = 'GetItemSuccess';
        }
        else
        {
            $this->status = 'ItemNotExist';
            $this->response = null;
        }

        return $this->response;
    }


    public function getMenusModule($params, $language)
    {
        $menu_ids = [];
        foreach ($params['menu_ids'] as $menu)
        {
            $menu_ids[] = $menu->id;
        }
        $this->menuFrontService = app(MenuFrontService::class);
        $menus = $this->menuFrontService->search(Helper::collect([
            'special_queries'   => [
                [
                    'type'  => 'whereIn',
                    'key'   => 'id',
                    'value' => $menu_ids
                ]
            ],
            'language' => $language,
            'paginate'  => false
        ]));

        return $menus;
    }


    public function getSelectedItemsModule($params)
    {
        $params['access_ids'] = $this->getAccessIds();
        $items = $this->itemFrontService->getSelectedItems($params);

        if ($items->count() == 1)
        {
            return $items->first();
        }
        else
        {
            return $items;
        }
    }


    public function loadModule($module, $language = '*')
    {
        $items = [];
        if ($module->category->alias == 'categories-items')
        {
            $items = $this->getCategoriesItemsModule($module->params);
        }
        elseif ($module->category->alias == 'selected-items')
        {
            $items = $this->getSelectedItemsModule($module->params);
        }
        elseif ($module->category->alias == 'categories')
        {
            $items = $this->getCategoriesModule($module->params);
        }
        elseif ($module->category->alias == 'menus')
        {
            $items = $this->getMenusModule($module->params, $language);
        }
        elseif ($module->category->alias == 'search')
        {
            $params_category_ids = $module->params['category_ids'];

            $items = $module->params;
            foreach ( $params_category_ids as $category)
            {
                $category_alias[] = $category->alias;
            }
            $items['category_alias'] = $category_alias;
            unset($items['category_ids']);
        }
        elseif ($module->category->alias == 'advanced-search') {

            $items = $this->categoryFrontService->getItemsByIds($module->params);
        }

        return $items;
    }
}
