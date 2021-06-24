<?php

namespace DaydreamLab\Cms\Repositories\Brand\Admin;

use DaydreamLab\Cms\Models\Brand\Admin\BrandAdmin;
use DaydreamLab\Cms\Repositories\Brand\BrandRepository;

class BrandAdminRepository extends BrandRepository
{
    public function __construct(BrandAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
