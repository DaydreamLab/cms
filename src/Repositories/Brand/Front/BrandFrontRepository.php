<?php

namespace DaydreamLab\Cms\Repositories\Brand\Front;

use DaydreamLab\Cms\Models\Brand\Front\BrandFront;
use DaydreamLab\Cms\Repositories\Brand\BrandRepository;

class BrandFrontRepository extends BrandRepository
{
    public function __construct(BrandFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
