<?php

namespace DaydreamLab\Cms\Services\Item\Front;

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


    public function getCategoriesItems($categories_ids)
    {
        $items = $this->repo->getCategoriesItems($categories_ids, $this->access_ids);

        return $this->appendExtrafileds($items);
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


    public function getItemsByCategoryIds($category_ids)
    {
        $items = $this->repo->getItemsByCategoryIds($category_ids, $this->access_ids);

        return $this->appendExtrafileds($items);
    }


    public function getItemByAlias(Collection $input)
    {
        $items = $this->search($input);

        if ($items->count())
        {
            $item = $items->first();

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


    public function getSelectedItems($ids)
    {
        $items = $this->repo->getSelectedItems($ids, $this->access_ids);

        return $this->appendExtrafileds($items);
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

        $categories = $this->categoryFrontService->getContentTypeItems('item', 'article');
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

        $original_items = $items = parent::search($input);

        $data = $this->paginationFormat($items->toArray());

        if (config('cms.item.front.year_month_filter'))
        {
            $data['filter'] = $this->filterYearMonth($data);
        }

        $special_queries_copy = $input->get('special_queries');
        $all['all'] = $data;
        if (config('cms.item.front.creator_group_filter.enabled'))
        {
            foreach (config('cms.item.front.creator_group_filter.groups') as $creator_group)
            {
                $special_queries  =  $special_queries_copy;

                $user_ids = $this->repo->getCreatorGroupUserIds($creator_group);
                $obj['type']        = 'whereIn';
                $obj['key']         = 'created_by';
                $obj['value']       = $user_ids;
                $special_queries[]  = $obj;

                $input->forget('special_queries');
                $input->put('special_queries', $special_queries);

                $items = parent::search($input);

                $paginate_data = $this->paginationFormat($items->toArray());

                if (config('cms.item.front.year_month_filter'))
                {
                    $paginate_data['filter'] = $this->filterYearMonth($paginate_data);
                }
                $all[$creator_group] = $paginate_data;
            }
            $this->response = $all;
        }
        else
        {
            $this->response = $items;
        }

        //event(new Search($input, $this->user));

        return $original_items;
    }


    public function pureSearch(Collection $input)
    {
        return parent::search($input);
    }
}
