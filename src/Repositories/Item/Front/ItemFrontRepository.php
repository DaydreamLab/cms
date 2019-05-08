<?php

namespace DaydreamLab\Cms\Repositories\Item\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Models\Item\Front\ItemFront;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Repositories\User\Front\UserGroupFrontRepository;
use DaydreamLab\User\Repositories\User\Front\UserGroupMapFrontRepository;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Request;


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



    public function getCategoriesItems($category_ids, $params, $item_count, $featured, $mixed = false)
    {
        $query = $this->model
            ->whereIn('category_id', $category_ids)
            ->where('state', 1)
            ->whereIn('access', $params['access_ids'])
            ->orderBy($params['item_order_by'], $params['item_order'])
            ->orderBy('publish_up', 'desc');

        $query = !$mixed ? $query->where('featured', $featured) : $query;

        return $item_count ? $query->paginate($item_count) : $query->paginate($this->infinity);
    }


    public function getCategoriesSplitItems($split, $items, $params, $item_count, $featured, $mixed = false)
    {
        if ($split)
        {
            $data['all'] = $items;
            foreach ($this->getParamsIds($params, 'category_ids') as $category_id)
            {
                $category = $this->categoryFrontRepository->find($category_id);
                $data[$category->title] = $this->getCategoriesItems([$category_id], $params, $item_count, $featured, $mixed);
            }
        }
        else
        {
            $data = $items;
        }

        return $data;
    }


    public function getCategoriesItemsModule($params)
    {
        $item_count     = (int)$params['item_count'] ? (int)$params['item_count'] : $this->infinity;
        $category_ids   = $this->getParamsIds($params, 'category_ids');
        $data = [];
        // hide featured
        if ($params['featured_display'] == 0 || $params['featured_display'] == 2)
        {
            $featured = $params['featured_display'] == 0 ? 0 : 1;
            $all_items = $this->getCategoriesItems($category_ids, $params, $item_count, $featured, false);

            $data = $this->getCategoriesSplitItems($params['split_items_by_categories'], $all_items, $params, $item_count, $featured, false);
        }
        // include featured
        elseif ($params['featured_display'] == 1)
        {
            // 不需要置頂
            if ($params['split_items_by_featured'] == 0)
            {
                $all_items = $this->getCategoriesItems($category_ids, $params, $item_count, 0, true);
                $data = $this->getCategoriesSplitItems($params['split_items_by_categories'], $all_items, $params, $item_count, 0, true);
            }
            // 需要置頂
            else
            {
                $featured_count     = $params['featured_count'];
                $featured_items     = $this->getCategoriesItems($category_ids, $params, $featured_count, 1, false);
                $featured_items_ids = $featured_items->map(function ($item){
                    return $item->id;
                });

                $mixed_items = $this->model
                    ->whereIn('category_id', $category_ids)
                    ->whereNotIn('id', $featured_items_ids)
                    ->where('state', 1)
                    ->whereIn('access', $params['access_ids'])
                    ->orderBy($params['item_order_by'], $params['item_order'])
                    ->orderBy('publish_up', 'desc')
                    ->get();

                $request_page   = Request::get('page') == '' ? 1 : Request::get('page');
                $merge_items    = $featured_items->merge($mixed_items);

                $all_items      = $this->paginate($merge_items, $item_count, $request_page, []);

                if ($params['split_items_by_categories'])
                {
                    $featured_counter = 0;
                    $data['all']['featured'] = collect();
                    $data['all']['mixed']    = collect();
                    foreach ($all_items as $item)
                    {
                        if ($item->featured == 1 && $featured_counter < $featured_count)
                        {
                            $data['all']['featured']->push($item);
                            $featured_counter++;
                        }
                        else
                        {
                            $data['all']['mixed']->push($item);
                        }
                    }

                    $data['all']['pagination'] = $this->paginationFormat($all_items->toArray())['pagination'];

                    foreach ($category_ids as $category_id)
                    {
                        $category = $this->categoryFrontRepository->find($category_id);

                        $sub_featured_items     = $this->getCategoriesItems([$category_id], $params, $featured_count, 1, false);
                        $sub_featured_items_ids = $sub_featured_items->map(function ($item){
                            return $item->id;
                        });

                        $sub_mixed_items = $this->model
                            ->whereIn('category_id', [$category_id])
                            ->whereNotIn('id', $sub_featured_items_ids)
                            ->where('state', 1)
                            ->whereIn('access', $params['access_ids'])
                            ->orderBy($params['item_order_by'], $params['item_order'])
                            ->orderBy('publish_up', 'desc')
                            ->get();

                        $sub_merge_items  = $sub_featured_items->merge($sub_mixed_items);

                        $sub_all_items    = $this->paginate($sub_merge_items, $item_count, $request_page, []);

                        $featured_counter = 0;
                        $data[$category->title]['featured'] = collect();
                        $data[$category->title]['mixed']    = collect();
                        foreach ($all_items as $item)
                        {
                            if ($item->featured == 1 && $featured_counter < $featured_count)
                            {
                                $data[$category->title]['featured']->push($item);
                                $featured_counter++;
                            }
                            else
                            {
                                $data[$category->title]['mixed']->push($item);
                            }
                        }

                        $data[$category->title]['pagination'] = $this->paginationFormat($sub_all_items->toArray())['pagination'];
                    }
                }
                else
                {
                    $featured_counter = 0;
                    $data['featured'] = collect();
                    $data['mixed']    = collect();
                    foreach ($all_items as $item)
                    {
                        if ($item->featured == 1 && $featured_counter < $featured_count)
                        {
                            $data['featured']->push($item);
                            $featured_counter++;
                        }
                        else
                        {
                            $data['mixed']->push($item);
                        }
                    }
                    $data['pagination'] = $this->paginationFormat($all_items->toArray())['pagination'];
                }
            }
        }

        return $data;
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


//    public function getItems($category_ids, $params, $featured, $created_by_ids = null)
//    {
//        $limit      = $params['per_page'];
//        $order_by   = $params['order_by'];
//        $ordering   = $params['ordering'];
//
//        $ids = [];
//        foreach ($category_ids as $category_id)
//        {
//            $ids = array_merge($ids, $this->categoryFrontRepository->findSubTreeIds($category_id));
//        }
//
//        $query = $this->model->where('state', 1);
//        if ($created_by_ids !== null)
//        {
//            $query = $query->whereIn('created_by', $created_by_ids);
//        }
//
//        if (array_key_exists('include_featured',$params) && $params['include_featured'])
//        {
//            $query = $query->whereIn('featured', [0,1]);
//        }
//        else
//        {
//            $query = $query->where('featured',$featured);
//        }
//
//        $query = $query->whereIn('category_id', $category_ids);
//
//        $query = $query->orderBy($order_by, $ordering);
//
//        $items = $query->paginate($limit)->toArray();
//
//        $data = [];
//        $data['data'] = $items['data'];
//        unset($items['data']);
//        $data['pagination'] = $items;
//
//
//        $filters = [];
//        foreach ($data['data'] as $item)
//        {
//            $item_created_at = strtotime($item['created_at']);
//            $item_year       = date('Y', $item_created_at);
//            $item_month      = date('m', $item_created_at);
//
//            $find_year = false;
//            foreach ($filters as $key => $filter)
//            {
//                if($filter['year'] == $item_year)
//                {
//                    $find_year  = true;
//                    if (in_array($item_month, $filter['month']))
//                    {
//                        break;
//                    }
//                    else
//                    {
//                        $filters[$key]['month'][] = $item_month;
//                        break;
//                    }
//                }
//            }
//
//            if (!$find_year)
//            {
//                $obj['year']    = $item_year;
//                $obj['month'][] = $item_month;
//                $filters[]      = $obj;
//            }
//        }
//        $data['filter'] = $filters;
//
//        return $data;
//    }


    public function getItemsByCategoryIds($params)
    {
        $query = $this->model
            ->whereIn('category_id', $params['category_ids'])
            ->where('state', 1)
            ->whereIn('access', $params['access_ids'])
            ->orderBy($params['order_by'], $params['order'])
            ->orderBy('publish_up', 'desc');

        return (int)$params['limit'] ? $query->paginate((int)$params['limit']) : $query->paginate($this->infinity);
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


    public function paginationFormat($items)
    {
        $data = [];

        if (array_key_exists('data', $items))
        {
            $data['data'] = $items['data'];
            unset($items['data']);
            $data['pagination'] = $items;
        }
        else
        {
            $data['data'] = $items;
            $data['paginate'] = [];
        }

        return $data;
    }
}