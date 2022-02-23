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
}
