<?php

namespace DaydreamLab\Cms\Repositories\IotIndustry\Front;

use DaydreamLab\Cms\Models\IotIndustry\Front\IotIndustryFront;
use DaydreamLab\Cms\Repositories\IotIndustry\IotIndustryRepository;

class IotIndustryFrontRepository extends IotIndustryRepository
{
    public function __construct(IotIndustryFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
