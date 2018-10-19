<?php

namespace DaydreamLab\Cms\Repositories\Item\Front;

use DaydreamLab\Cms\Repositories\Item\ItemRepository;
use DaydreamLab\Cms\Models\Item\Front\ItemFront;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Repositories\User\Front\UserGroupFrontRepository;
use DaydreamLab\User\Repositories\User\Front\UserGroupMapFrontRepository;


class ItemFrontRepository extends ItemRepository
{
    protected $userGroupRepository;

    protected $userGroupMapRepository;

    public function __construct(ItemFront $model,
                                UserGroupFrontRepository $userGroupRepository,
                                UserGroupMapFrontRepository $userGroupMapRepository)
    {
        $this->userGroupRepository = $userGroupRepository;
        $this->userGroupMapRepository = $userGroupMapRepository;
        parent::__construct($model);
    }


    public function appendParams($items)
    {
        $data = [];
        foreach ($items as $item)
        {

            if (!is_null($item->params) && array_key_exists('extra_fields', $item->params))
            { Helper::show($item->params);
                foreach ($item->params['extra_fields'] as $key => $extra_field)
                {

                    $item->{$key} = $extra_field;
                }
            }
            $data[] = $item;
        }
        return $data;
    }



    public function getItems($limit, $featured, $created_by_ids = null)
    {
        $query = $this->model;
        if ($created_by_ids !== null)
        {
            $query = $query->whereIn('created_by', $created_by_ids);
        }

        $query = $query->where('featured',$featured)
            ->where('content_type', 'article')
            ->orderBy('featured_ordering', 'asc')
            ->limit($limit);

        return $query->get();
    }



    public function getNewsItems($params)
    {
        $data = [];

        $data['all']['featured'] = $this->getItems($params['featured'], 1);
        $data['all']['items']    = $this->getItems($params['items'], 0);

        foreach ($params['creators'] as $creator)
        {
            $group = $this->userGroupRepository->findBy('title', '=', $creator)->first();
            $user_group_map = $this->userGroupMapRepository->findBy('group_id', '=', $group->id);

            $user_ids = [];
            foreach ($user_group_map as $map)
            {
                $user_ids[] = $map->user_id;
            }

            $data[$creator]['featured'] = $this->getItems($params['featured'], 1, $user_ids);
            $data[$creator]['items']    = $this->getItems($params['items'], 0, $user_ids);

        }

        return $data;
    }


    public function getSelectedItems($ids)
    {
        $items = $this->model->whereIn('id', $ids)->get();

        $this->appendParams($items);

        return $items->toArray();
    }


}