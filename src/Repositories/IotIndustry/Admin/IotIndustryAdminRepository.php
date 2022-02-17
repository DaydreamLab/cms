<?php

namespace DaydreamLab\Cms\Repositories\IotIndustry\Admin;

use DaydreamLab\Cms\Models\IotIndustry\Admin\IotIndustryAdmin;
use DaydreamLab\Cms\Repositories\IotIndustry\IotIndustryRepository;

class IotIndustryAdminRepository extends IotIndustryRepository
{
    public function __construct(IotIndustryAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
