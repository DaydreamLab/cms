<?php

namespace DaydreamLab\Cms\Repositories\IotTag\Front;

use DaydreamLab\Cms\Models\IotTag\Front\IotTagFront;
use DaydreamLab\Cms\Repositories\IotTag\IotTagRepository;

class IotTagFrontRepository extends IotTagRepository
{
    public function __construct(IotTagFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
