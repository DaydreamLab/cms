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
}
