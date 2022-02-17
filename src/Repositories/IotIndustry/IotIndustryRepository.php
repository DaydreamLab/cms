<?php

namespace DaydreamLab\Cms\Repositories\IotIndustry;

use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotIndustryRepository extends CmsRepository
{
    protected $modelName = 'IotIndustry';

    public function __construct(IotIndustry $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
