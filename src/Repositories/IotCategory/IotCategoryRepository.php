<?php

namespace DaydreamLab\Cms\Repositories\IotCategory;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotCategoryRepository extends CmsRepository
{
    protected $modelName = 'IotCategory';

    public function __construct(IotCategory $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
