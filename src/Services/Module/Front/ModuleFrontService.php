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


    public function getCategoryItemsModule($params)
    {
        $category       = $this->categoryFrontService->find($params['category_id']);
        $content_type   = $category->content_type;
        $items          = $this->itemFrontService->getCategoriesItems([$params['category_id']]);

        if ($content_type == 'item' || $content_type == 'article')
        {

        }
        elseif ($content_type == 'timeline')
        {
            $data = [];
            foreach ($items as $item)
            {
                $year_value     = $item['year'];
                $year_key       = $year_value;
                $month_value    = $item['month'];
                $month_key      = $month_value;

                if (!array_key_exists($year_key, $data))
                {
                    $data[$year_key] = [];
                }

                if (!array_key_exists($month_key, $data[$year_key]))
                {
                    $data[$year_key][$month_key] = [];
                }

                $temp['title'] = $item['title'];
                $temp['description'] = $item['description'];
                $data[$year_key][$month_key][] = $temp;

                krsort($data[$year_key]);
            }
            krsort($data);

            $items = $data;
        }
        elseif ($content_type == 'slideshow')
        {

        }

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
        if ($module->category->alias == 'module-category-items')
        {
            $items = $this->getCategoryItemsModule($module->params);
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
