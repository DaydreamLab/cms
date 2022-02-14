<?php

namespace DaydreamLab\Cms\Repositories\IoTCategory;

use DaydreamLab\Cms\Models\IoTCategory\IoTCategory;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IoTCategoryRepository extends CmsRepository
{
    protected $modelName = 'IoTCategory';

    public function __construct(IoTCategory $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
