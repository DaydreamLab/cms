<?php

namespace DaydreamLab\Cms\Repositories\IotCategory\Front;

use DaydreamLab\Cms\Models\IotCategory\Front\IotCategoryFront;
use DaydreamLab\Cms\Repositories\IotCategory\IotCategoryRepository;

class IotCategoryFrontRepository extends IotCategoryRepository
{
    public function __construct(IotCategoryFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
