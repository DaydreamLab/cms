<?php

namespace DaydreamLab\Cms\Repositories\IotResource\Front;

use DaydreamLab\Cms\Models\IotResource\Front\IotResourceFront;
use DaydreamLab\Cms\Repositories\IotResource\IotResourceRepository;

class IotResourceFrontRepository extends IotResourceRepository
{
    public function __construct(IotResourceFront $model)
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
