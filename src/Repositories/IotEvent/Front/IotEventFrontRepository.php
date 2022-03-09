<?php

namespace DaydreamLab\Cms\Repositories\IotEvent\Front;

use DaydreamLab\Cms\Models\IotEvent\Front\IotEventFront;
use DaydreamLab\Cms\Repositories\IotEvent\IotEventRepository;

class IotEventFrontRepository extends IotEventRepository
{
    public function __construct(IotEventFront $model)
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
