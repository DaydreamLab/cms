<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use Carbon\Carbon;
use DaydreamLab\Cms\Events\Search;
use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\User\Services\User\Front\UserGroupFrontService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemFrontService extends ItemService
{
    protected $type = 'ItemFront';

    protected $categoryFrontService;

    protected $userGroupFrontService;

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];

    public function __construct(ItemFrontRepository $repo,
                                CategoryFrontService $categoryFrontService,
                                UserGroupFrontService $userGroupFrontService)
    {
        $this->categoryFrontService = $categoryFrontService;
        $this->userGroupFrontService = $userGroupFrontService;

        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function appendExtrafileds($items)
    {
        return $items->each(function ($value, $key){
            foreach ($value->extrafields as $extrafield)
            {
                if (array_key_exists('alias', $extrafield))
                {
                    $value->{$extrafield['alias']} = $extrafield['value'];
                }
            }
            $value->items = [];
        });
    }


    public function filterYearMonth($data)
    {
        $filters = [];
        foreach ($data['data'] as $item)
        {
            $item_publish_up = strtotime($item['publish_up']);
            $item_year       = date('Y', $item_publish_up);
            $item_month      = date('m', $item_publish_up);

            $find_year = false;
            foreach ($filters as $key => $filter)
            {
                if($filter['year'] == $item_year)
                {
                    $find_year  = true;
                    if (in_array($item_month, $filter['month']))
                    {
                        break;
                    }
                    else
                    {
                        $filters[$key]['month'][] = $item_month;
                        break;
                    }
                }
            }

            $obj = [];
            if (!$find_year)
            {
                $obj['year']    = $item_year;
                $obj['month'][] = $item_month;
                $filters[]      = $obj;
            }
        }

        return $filters;
    }


    public function getCategoriesItemsModule($params)
    {
        $result  = $this->repo->getCategoriesItemsModule($params);

        // 代表有分類的切割
        if (gettype($result) == 'array')
        {
            foreach ($result as $key => $items)
            {
                $result[$key] = $this->paginationFormat($items->toArray());

            }
        }
        else
        {
            if ($result->count() > 0)
            {
                $content_type = $result[0]->category->content_type;
                if ($content_type == 'timeline')
                {
                    $data = [];
                    foreach ($result as $item)
                    {
                        foreach ($item->extrafields as $extrafield)
                        {
                            if (array_key_exists('timeline', $extrafield->params) && (int)$extrafield->params['timeline'] == 1)
                            {
                                $time   = Carbon::parse($extrafield->value);
                                $units  = explode('-', $extrafield->params['format']);

                                $this->filterByDatetimeFormat($data, $units, $time, $item);
                            }
                        }
                    }
                    krsort($data);

                    $result = $data;
                }
            }
        }


        return $result;
//        $data = [];
//
//        // 這邊有 featured 和 items
//        foreach ($all as $key => $items)
//        {
//            if ($items->count() > 0)
//            {
//                $content_type = $items[0]->category->content_type;
//                if ($content_type == 'timeline')
//                {
//                    $data = [];
//                    foreach ($items as $item)
//                    {
//                        foreach ($item->extrafields as $extrafield)
//                        {
//                            if (array_key_exists('timeline', $extrafield->params) && (int)$extrafield->params['timeline'] == 1)
//                            {
//                                $time   = Carbon::parse($extrafield->value);
//                                $units  = explode('-', $extrafield->params['format']);
//
//                                $this->filterByDatetimeFormat($data, $units, $time, $item);
//                            }
//                        }
//                    }
//                    krsort($data);
//
//                    $items = $data;
//                }
//            }
//
//            if (($key == 'featured' && (int)$params['featured_paginate']) ||
//                ($key == 'normal' && (int)$params['paginate']))
//            {
//                $data[$key] = $this->paginationFormat($items->toArray());
//            }
//            else
//            {
//                $data[$key] = $items;
//            }
//        }
//
//
//        $this->response = $data;
//
//        return $data;
    }


    public function filterByDatetimeFormat(&$data, $units, $datetime, $item)
    {
        $unit = array_shift($units);
        if (count($units) == 0)
        {   $temp['title'] = $item['title'];
            $temp['description'] = $item['description'];
            $data[(int)$datetime->format($unit)][] = $temp;
            krsort($data);
            return $data;
        }
        else
        {
            if (!array_key_exists($datetime->format($unit), $data))
            {
                $date[$datetime->format($unit)] = [];
            }

            return $this->filterByDatetimeFormat($data[(int)$datetime->format($unit)], $units, $datetime, $item);
        }
    }


    public function getLatestItemsModule($params)
    {
        $data = [];

        $data['all'] = $this->getLatestItems($params, $params['creator_groups'] );

        foreach ($params['creator_groups'] as $creator_group)
        {
            $group = $this->userGroupFrontService->find($creator_group);
            $data[$group->title] = $this->getLatestItems($params, [$creator_group]);
        }
        return $data;
    }


    public function getLatestItems($params, $creator_groups = [])
    {
        $data = [];

        $featured_setting   = $params['featured'];
        $item_setting       = $params['item'];

        if ($featured_setting['limit']  == 0) {
            $data['featured'] = [];
        }
        else {
            $data['featured'] = $this->repo->getLatestItems(1, $params['category_ids'], $featured_setting, $this->access_ids, $creator_groups);
        }

        if ($item_setting['limit']  == 0) {
            $data['items'] = [];
        }
        else {
            $data['items'] = $this->repo->getLatestItems(0, $params['category_ids'], $item_setting, $this->access_ids, $creator_groups);
        }
        
        return $data;
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

        if (!Helper::hasPermission($item->viewlevels, $this->viewlevels))
        {
            $this->status   = Str::upper(Str::snake($this->type.'InsufficientPermission'));
            $this->response = null;
            return false;
        }

        if ($item)
        {
            $prev_and_next  = $this->repo->getPreviousAndNext($item);
            $item->previous =  $prev_and_next['previous'];
            $item->next     =  $prev_and_next['next'];
            $this->response = $item;
            return $item;
        }
        return false;
    }


    public function getItemsByCategoryIds($params)
    {
        $items  = $this->repo->getItemsByCategoryIds($params);
        if ($params['paginate'])
        {
            $items = $this->paginationFormat($items->toArray());
        }

        return $items;
    }


    public function getItemByAlias(Collection $input)
    {
        $items = $this->search($input, false);

        if ($items->count())
        {
            $item = $items->first();
            $item->hits++;
            $this->update($item, $item);

            if (!Helper::hasPermission($item->viewlevels, $this->viewlevels))
            {
                $this->status   = Str::upper(Str::snake($this->type.'InsufficientPermission'));
                $this->response = null;
                return false;
            }

            $prev_and_next  = $this->repo->getPreviousAndNext($item);
            $item->previous =  $prev_and_next['previous'];
            $item->next     =  $prev_and_next['next'];
            $this->status   = Str::upper(Str::snake($this->type.'GetItemSuccess'));
            $this->response = $item;
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'ItemNotExist'));
            $this->response = null;
        }

        return $this->response;
    }


    public function getNext(Collection $input)
    {
        $next_id = $this->repo->getPreviousOrNext($input, false);
        if ($next_id)
        {
            return $this->getItem($next_id);
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'ItemNotExist'));
            $this->response = null;
            return false;
        }
    }


    public function getPrevious(Collection $input)
    {
        $previous_id = $this->repo->getPreviousOrNext($input, true);

        if ($previous_id)
        {
            return $this->getItem($previous_id);
        }
        else
        {
            $this->status = Str::upper(Str::snake($this->type.'ItemNotExist'));
            $this->response = null;
            return false;
        }
    }


    public function getSelectedItems($params)
    {
        $items = $this->repo->getSelectedItems($params);

        return $items;
    }


    public function getSpecialQueries(Collection $input)
    {
        $special_queries = [];
        // 取得後門的 special queries
        if (!InputHelper::null($input, 'special_queries'))
        {
            $special_queries = array_merge($special_queries, $input->get('special_queries'));
        }
        // 取得年份 special queries
        if (!InputHelper::null($input, 'year'))
        {
            $year = $input->year;
            $input->forget('year');
            $obj['type']        = 'whereYear';
            $obj['key']         = 'publish_up';
            $obj['value']       = $year;
            $special_queries[]  = $obj;
        }
        // 取得月份 special queries
        if (!InputHelper::null($input, 'month'))
        {
            $month = $input->month;
            $input->forget('month');
            $obj['type']        = 'whereMonth';
            $obj['key']         = 'publish_up';
            $obj['value']       = $month;
            $special_queries[]  = $obj;
        }

        // 取得文章類型 special queries
        $categories = $this->categoryFrontService->getContentTypeItems();
        $category_ids = $categories->map(function ($item, $key){
            return $item->id;
        });

        $obj['type']        = 'whereIn';
        $obj['key']         = 'category_id';
        $obj['value']       = $category_ids;
        $special_queries[]  = $obj;

        return $special_queries;
    }


    public function search(Collection $input, $paginate = true)
    {
        $input->put('paginate', $paginate);
        $special_queries = $this->getSpecialQueries($input);
        $language = $input->get('language') != '' ? [$input->get('language')] : ['*',config('global.locale')];
        // 如果有傳 category_alias
        if (!InputHelper::null($input, 'category_alias'))
        {
            $category_ids = $this->categoryFrontService->search(Helper::collect([
                'special_queries' => [
                    [
                        'type'  => 'whereIn',
                        'key'   => 'alias',
                        'value' => $input->get('category_alias'),
                    ],
                    [
                        'type'  => 'whereIn',
                        'key'   => 'language',
                        'value' =>  $language
                    ]
                ],

                'paginate'      => false
            ]))->map(function ($item, $key) {
                return $item->id;
            })->all();

            $special_queries[] = [
                'type'  => 'whereIn',
                'key'   => 'category_id',
                'value' => $category_ids
            ];

            $input->forget('category_alias');
        }

        $input->forget('special_queries');
        $input->put('special_queries', $special_queries);
        $input->put('state', 1);

        $original_items = $items = parent::search($input);

        $data = $this->paginationFormat($items->toArray());

        if (config('cms.item.front.year_month_filter'))
        {
            $data['filter'] = $this->filterYearMonth($data);
        }

        $this->response = $items;


        event(new Search($input, $this->user));

        return $original_items;
    }


    public function pureSearch(Collection $input)
    {
        return parent::search($input);
    }
}
