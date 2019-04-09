<?php

namespace DaydreamLab\Cms\Services\Module\Front;

use DaydreamLab\Cms\Repositories\Module\Front\ModuleFrontRepository;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Module\ModuleService;
use DaydreamLab\JJAJ\Helpers\Helper;

class ModuleFrontService extends ModuleService
{
    protected $type = 'ModuleFront';

    protected $itemFrontService;

    protected $categoryFrontService;

    public function __construct(ModuleFrontRepository $repo,
                                CategoryFrontService $categoryFrontService,
                                ItemFrontService $itemFrontService)
    {
        $this->itemFrontService     = $itemFrontService;
        $this->categoryFrontService = $categoryFrontService;
        parent::__construct($repo);
    }


    public function getCategoriesModule($params)
    {
        $items = [];
        if ($params['with_items'])
        {
            $items = $this->itemFrontService->getItemsByCategoryIds($params['category_ids']);
        }

        $categories = $this->categoryFrontService->getItemsByIds($params['category_ids']);

        foreach ($items as $item)
        {
            foreach ($categories as $category)
            {
                if($category->title == $item->category_title)
                {
                    $category->items = array_merge($category->items, array($item->toArray()));
                    break;
                }
            }
        }

        return $params['toTree'] ? $categories->toTree() : $categories;
    }


    public function getCategoriesItemsModule($params)
    {
        $params['access_ids'] = $this->access_ids;

        $items = $this->itemFrontService->getCategoriesItemsModule($params);

        return $items;
    }


    public function getLatestItemsModule($params)
    {
        $items = $this->itemFrontService->getLatestItemsModule($params);

        return $items;
    }


    public function getSelectedItemsModule($params)
    {
        $items = $this->itemFrontService->getSelectedItems($params['item_ids']);

        if ($items->count() == 1)
        {
            return $items->first();
        }
        else
        {
            return $items;
        }
    }


    public function loadModule($module)
    {
        $items = [];
        if ($module->category->alias == 'module-categories-items')
        {
            $items = $this->getCategoriesItemsModule($module->params);
        }
        elseif ($module->category->alias == 'module-selected-items')
        {
            $items = $this->getSelectedItemsModule($module->params);
        }
        elseif ($module->category->alias == 'module-categories')
        {
            $items = $this->getCategoriesModule($module->params);
        }
        elseif ($module->category->alias == 'module-latest-items')
        {
            $items = $this->getLatestItemsModule($module->params);
        }

        return $items;
    }

}
