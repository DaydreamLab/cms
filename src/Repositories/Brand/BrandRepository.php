<?php

namespace DaydreamLab\Cms\Repositories\Brand;

use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Repositories\CmsRepository;

class BrandRepository extends CmsRepository
{
    protected $modelName = 'Brand';

    public function __construct(Brand $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
