<?php

namespace DaydreamLab\Cms\Repositories\Item\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Models\Item\Front\ItemFront;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Repositories\User\Front\UserGroupFrontRepository;
use DaydreamLab\User\Repositories\User\Front\UserGroupMapFrontRepository;
use Illuminate\Support\Collection;


class ItemFrontRepository extends ItemRepository
{
    protected $userGroupRepository;

    protected $userGroupMapRepository;

    protected $categoryFrontRepository;

    public function __construct(ItemFront $model,
                                UserGroupFrontRepository $userGroupRepository,
                                UserGroupMapFrontRepository $userGroupMapRepository,
                                CategoryFrontRepository $categoryFrontRepository)
    {
        parent::__construct($model);
        $this->userGroupRepository = $userGroupRepository;
        $this->userGroupMapRepository = $userGroupMapRepository;
        $this->categoryFrontRepository = $categoryFrontRepository;
    }


    public function getCategoriesItemsModule($params)
    {
        $query = $this->model
            ->whereIn('category_id', $this->getParamsIds($params, 'category_ids'))
            ->where('state', 1)
            ->whereIn('access', $params['access_ids'])
            ->orderBy($params['order_by'], $params['order'])
            ->orderBy('publish_up', 'desc');

        return (int)$params['limit'] ? $query->paginate($params['limit']) : $query->get();
    }


    public function getCreatorGroupUserIds($creator_group)
    {
        $group = $this->userGroupRepository->findBy('title', '=', $creator_group)->first();
        $user_group_map = $this->userGroupMapRepository->findBy('group_id', '=', $group->id);

        $user_ids = [];
        foreach ($user_group_map as $map)
        {
            $user_ids[] = $map->user_id;
        }

        return $user_ids;
    }


    public function getItems($category_ids, $params, $featured, $created_by_ids = null)
    {
        $limit      = $params['per_page'];
        $order_by   = $params['order_by'];
        $ordering   = $params['ordering'];

        $ids = [];
        foreach ( $category_ids as $category_id)
        {
            $ids = array_merge($ids, $this->categoryFrontRepository->findSubTreeIds($category_id));
        }

        $query = $this->model->where('state', 1);
        if ($created_by_ids !== null)
        {
            $query = $query->whereIn('created_by', $created_by_ids);
        }

        if (array_key_exists('include_featured',$params) && $params['include_featured'])
        {
            $query = $query->whereIn('featured', [0,1]);
        }
        else
        {
            $query = $query->where('featured',$featured);
        }

        $query = $query->whereIn('category_id', $category_ids);

        $query = $query->orderBy($order_by, $ordering);

        $items = $query->paginate($limit)->toArray();

        $data = [];
        $data['data'] = $items['data'];
        unset($items['data']);
        $data['pagination'] = $items;


        $filters = [];
        foreach ($data['data'] as $item)
        {
            $item_created_at = strtotime($item['created_at']);
            $item_year       = date('Y', $item_created_at);
            $item_month      = date('m', $item_created_at);

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
        $data['filter'] = $filters;

        return $data;
    }


    public function getItemsByCategoryIds($params)
    {
        return $this->model
            ->whereIn('category_id', $params['category_ids'])
            ->where('state', 1)
            ->whereIn('access', $params['access_ids'])
            ->orderBy($params['order_by'], $params['order'])
            ->orderBy('publish_up', 'desc')
            ->paginate($params['limit']);
    }


    public function getLatestItems($featured, $category_ids, $setting, $access_ids, $creator_groups)
    {
        $query = $this->model->where('featured', $featured)
                                ->where('state', 1)
                                ->whereIn('access', $access_ids)
                                ->whereIn('category_id', $category_ids)
                                ->orderBy($setting['order_by'], $setting['ordering'])
                                ->limit($setting['limit']);

        if (count($creator_groups) == 0)
        {
            $items = $query->get();
        }
        else
        {
            $user_maps =  $this->userGroupMapRepository->findBySpecial('whereIn', 'group_id', $creator_groups);
            $user_ids = $user_maps->map(function ($value, $key){
                return $value->id;
            });
            $items = $query->whereIn('created_by', $user_ids)->get();
        }

        return $items;
    }

    public function getPreviousAndNext($item)
    {
        $previous = $this->model->where('category_id', $item->category_id)
                                ->where('state', 1)
                                ->where('id', '!=', $item->id)
                                ->where('publish_up', '>', $item->publish_up)
                                ->orderBy('publish_up', 'asc')
                                ->limit(1)
                                ->first();

        $next     = $this->model->where('category_id', $item->category_id)
                                ->where('state', 1)
                                ->where('id', '!=', $item->id)
                                ->where('publish_up', '<', $item->publish_up )
                                ->orderBy('publish_up', 'desc')
                                ->limit(1)
                                ->first();

        if ($previous)
        {
            $data['previous'] = $previous->only(['title', 'alias']);
        }
        else
        {
            $data['previous'] = null;
        }

        if ($next)
        {
            $data['next'] = $next ->only(['title', 'alias']);
        }
        else
        {
            $data['next'] = null;
        }

       return $data;
    }


    public function getPreviousOrNext(Collection $input, $previous = true)
    {
        $query = $this->model->where('state', 1);

        if ($input->group != 'all')
        {
            $group = $this->userGroupRepository->findBy('title', '=', $input->group)->first();
            $user_group_map = $this->userGroupMapRepository->findBy('group_id', '=', $group->id);

            $user_ids = [];
            foreach ($user_group_map as $map)
            {
                $user_ids[] = $map->user_id;
            }

            $query = $query->whereIn('created_by', $user_ids);
        }
        $query = $query->orderBy('featured_ordering', 'desc');
        $query = $query->orderBy('publish_up', 'desc');
        $items = $query->get();

        $item_key = $items->search(function ($item, $key) use ($input, $previous){
            if ($input->id == $item->id)
            {
                return $item;
            }
            return false;
        });

        if ($item_key)
        {
            if ($previous)
            {
                return $item_key-1 < 0 ? false : $items[$item_key-1]->id;
            }
            else
            {
                return $item_key+1 > $items->count()-1 ? false : $items[$item_key+1]->id;
            }
        }
        else
        {
            return false;
        }

    }


    public function getSelectedItems($params)
    {
        return  $this->model
            ->whereIn('id', $this->getParamsIds($params, 'item_ids'))
            ->where('state', 1)
            ->whereIn('access', $params['access_ids'])
            ->orderBy($params['order_by'], $params['order'])
            ->get();
    }


//    public function getTimelineItems($params)
//    {
//        $items = $this->model->where('state', 1)
//                             ->get();
//
//        $items = $this->appendParams($items);
//
//        $data = [];
//        foreach ($items as $item)
//        {
//            $year_value     = $item['year']['value'];
//            $year_title     = $item['year']['title'];
//            $year_key       = $year_value.$year_title;
//            $month_value    = $item['month']['value'];
//            $month_title    = $item['month']['title'];
//            $month_key      = $month_value.$month_title;
//
//            if (!array_key_exists($year_key, $data))
//            {
//                $data[$year_key] = [];
//            }
//
//            if (!array_key_exists($month_key, $data[$year_key]))
//            {
//                $data[$year_key][$month_key] = [];
//            }
//
//            $temp['title'] = $item['title'];
//            $temp['description'] = $item['description'];
//            $data[$year_key][$month_key][] = $temp;
//            krsort($data[$year_key]);
//        }
//        krsort($data);
//
//        return $data;
//    }
}