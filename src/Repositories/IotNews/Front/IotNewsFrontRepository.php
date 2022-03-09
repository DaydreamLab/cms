<?php

namespace DaydreamLab\Cms\Repositories\IotNews\Front;

use DaydreamLab\Cms\Models\IotNews\Front\IotNewsFront;
use DaydreamLab\Cms\Repositories\IotNews\IotNewsRepository;

class IotNewsFrontRepository extends IotNewsRepository
{
    public function __construct(IotNewsFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }


    public function getPreviousAndNext($item)
    {
        $previous = $this->model
            ->where('state', 1)
            ->where('id', '!=', $item->id)
            ->where('publish_up', '<', $item->publish_up)
            ->orderBy('publish_up', 'desc')
            ->limit(1)
            ->first();

        $next = $this->model
            ->where('state', 1)
            ->where('id', '!=', $item->id)
            ->where('publish_up', '>', $item->publish_up)
            ->orderBy('publish_up', 'asc')
            ->limit(1)
            ->first();

        if ($previous) {
            $data['previous'] = $previous->only(['title', 'alias']);
        } else {
            $data['previous'] = null;
        }

        if ($next) {
            $data['next'] = $next->only(['title', 'alias']);
        } else {
            $data['next'] = null;
        }

        return $data;
    }
}
