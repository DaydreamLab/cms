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


    public function getCategoriesItemsModule($params)
    {
        $items = $this->repo->getCategoriesItemsModule($params);

        if ($items->count() > 0)
        {
            $content_type = $items[0]->category->content_type;
            if ($content_type == 'timeline')
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
        }

        //  假如 limit 設定為無限大則不用分頁
        if ((int)$params['limit'])
        {
            $items = $this->paginationFormat($items->toArray());
        }

        return $items;
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

        $data   = $this->paginationFormat($items->toArray());

        return $data;
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

        // 如果有傳 category_alias
        if (!InputHelper::null($input, 'category_alias'))
        {
            $category_ids = $this->categoryFrontService->search(Helper::collect([
                'special_queries' => [
                    [
                        'type'  => 'whereIn',
                        'key'   => 'alias',
                        'value' => $input->get('category_alias'),
                    ]
                ],
                'language'      => $input->get('language') != '' ? $input->get('language') : config('global.locale'),
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

        event(new Search($input, $this->user));

        return $original_items;
    }


    public function pureSearch(Collection $input)
    {
        return parent::search($input);
    }
}
