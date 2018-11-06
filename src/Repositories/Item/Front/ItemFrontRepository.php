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
        $this->userGroupRepository = $userGroupRepository;
        $this->userGroupMapRepository = $userGroupMapRepository;
        $this->categoryFrontRepository = $categoryFrontRepository;
        parent::__construct($model);
    }


    public function appendParams($items)
    {
        $data = [];
        foreach ($items as $item)
        {
            $temp = $item->toArray();
            if (!is_null($item->params) && array_key_exists('extra_fields', $item->params))
            {
                foreach ($item->params['extra_fields'] as $key => $extra_field)
                {

                    $temp[$key] = $extra_field;
                }
            }
            $data[] = $temp;
        }
        return $data;
    }



    public function getItems($category_id, $params, $featured, $created_by_ids = null)
    {
        $limit      = $params['per_page'];
        $order_by   = $params['order_by'];
        $ordering   = $params['ordering'];

        $category_ids   = $this->categoryFrontRepository->findSubTreeIds($category_id);

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


    public function getMenuItems($params)
    {
        $items = $this->model->whereIn('category_id', $params['category_ids'])
                             ->get();
        $categories = $this->categoryFrontRepository->model->whereIn('id', $params['category_ids'])->get();

        foreach ($categories as $category)
        {
            $category->items = [];
            foreach ($category->extrafields as $extrafield)
            {
                if (array_key_exists('alias', $extrafield))
                {
                    $category->{$extrafield['alias']} = $extrafield['value'];

                }
            }
            $category->makeHidden(['extrafields']);
        }


        foreach ($items as $item)
        {
            foreach ($categories as $category)
            {
                $category->makeHidden(['hits', 'created_at', 'creator']);
                if($category->title == $item->category_title)
                {
                    $category->items= array_merge($category->items, array($item->only(['title', 'introtext', 'description'])));
                    break;
                }
            }
        }

        return $categories->toTree();
    }


    public function getNewsItems($params)
    {
        $data = [];

        if ($params['featured']['per_page'] > 0)
        {
            $data['all']['featured'] = $this->getItems($params['category_id'], $params['featured'], 1);
        }

        $data['all']['items'] = $this->getItems($params['category_id'],$params['items'], 0);


        foreach ($params['creators'] as $creator)
        {
            $group = $this->userGroupRepository->findBy('title', '=', $creator)->first();
            $user_group_map = $this->userGroupMapRepository->findBy('group_id', '=', $group->id);

            $user_ids = [];
            foreach ($user_group_map as $map)
            {
                $user_ids[] = $map->user_id;
            }
            if ($params['featured']['per_page'] > 0) {
                $data[$creator]['featured'] = $this->getItems($params['category_id'], $params['featured'], 1, $user_ids);
            }
            $data[$creator]['items']    = $this->getItems($params['category_id'], $params['items'], 0, $user_ids);

        }

        return $data;
    }


    public function getPreviousAndNext($item)
    {
        $previous = $this->model->where('category_id', $item->category_id)
                                ->where('state', 1)
                                ->where('ordering', '<', $item->ordering)
                                ->limit(1)
                                ->first();

        $next     = $this->model->where('category_id', $item->category_id)
                                ->where('state', 1)
                                ->where('ordering', '>', $item->ordering )
                                ->limit(1)
                                ->first();

        if ($previous)
        {
            $data['previous'] = $previous->only(['id','title']);
        }
        else
        {
            $data['previous'] = null;
        }

        if ($next)
        {
            $data['next'] = $next ->only(['id','title']);
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

        $query = $query->orderBy('created_at', 'desc');
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


    public function getSelectedItem($id)
    {
        $items = $this->model->where('id', $id)->get();

        $items = $this->appendParams($items);

        return $items[0];
    }


    public function getSelectedItems($ids)
    {
        $items = $this->model->whereIn('id', $ids)->where('state', 1)->get();

        $this->appendParams($items);

        return $items->toArray();
    }


    public function getTimelineItems($params)
    {
        $items = $this->model->where('state', 1)
                             ->get();

        $items = $this->appendParams($items);

        $data = [];
        foreach ($items as $item)
        {
            $year_value     = $item['year']['value'];
            $year_title     = $item['year']['title'];
            $year_key       = $year_value.$year_title;
            $month_value    = $item['month']['value'];
            $month_title    = $item['month']['title'];
            $month_key      = $month_value.$month_title;

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

        return $data;
    }
}