<?php

namespace DaydreamLab\Cms\Services\Item\Front;

use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class ItemFrontService extends ItemService
{
    protected $type = 'ItemFront';

    protected $categoryFrontService;

    public function __construct(ItemFrontRepository $repo,
                                CategoryFrontService $categoryFrontService)
    {
        $this->categoryFrontService = $categoryFrontService;
        parent::__construct($repo);
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

            if (!$find_year)
            {
                $obj['year']    = $item_year;
                $obj['month'][] = $item_month;
                $filters[]      = $obj;
            }
        }

        return $filters;
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

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


    public function getItemByAlias(Collection $input)
    {
        $item = $this->search($input);

        if ($item->count())
        {
            $item = $item->first();

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


    public function getMenuItems($params)
    {
        return $this->repo->getMenuItems($params);
    }


    public function getNewsItems($params)
    {
        return $this->repo->getNewsItems($params);
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


    public function getSelectedItem($params)
    {
        return $this->repo->getSelectedItem($params['item_id']);
    }


    public function getSelectedItems($ids)
    {
        return $this->repo->getSelectedItems($ids);
    }


    public function getTimelineItems($params)
    {
        return $this->repo->getTimelineItems($params);
    }


    public function search(Collection $input)
    {
        $special_queries = [];
        if (!InputHelper::null($input, 'special_queries'))
        {
            $special_queries = array_merge($special_queries, $input->special_queries);
        }

        if (!InputHelper::null($input, 'year'))
        {
            $year = $input->year;
            $input->forget('year');
            $obj['type']        = 'whereYear';
            $obj['key']         = 'publish_up';
            $obj['value']       = $year;
            $special_queries[]  = $obj;
        }

        if (!InputHelper::null($input, 'month'))
        {
            $month = $input->month;
            $input->forget('month');
            $obj['type']        = 'whereMonth';
            $obj['key']         = 'publish_up';
            $obj['value']       = $month;
            $special_queries[]  = $obj;
        }

        $categories = $this->categoryFrontService->findBy('content_type', '=', 'article');
        $category_ids = [];
        foreach ($categories as $category)
        {
            $category_ids[] = $category->id;
        }
        $obj['type']        = 'whereIn';
        $obj['key']         = 'category_id';
        $obj['value']       = $category_ids;
        $special_queries[]  = $obj;

        $input->forget('special_queries');
        $input->put('special_queries', $special_queries);
        $input->put('state', 1);

        $items = parent::search($input);

        $data = $this->paginationFormat($items->toArray());

        if (config('cms.item.front.year_month_filter'))
        {
            $data['filter'] = $this->filterYearMonth($data);
        }

        $this->response = $data;

        return $items;
    }


    public function pureSearch(Collection $input)
    {
        return parent::search($input);
    }
}
