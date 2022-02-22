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
}
