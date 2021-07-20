<?php

namespace DaydreamLab\Cms\Repositories\CustomerMessage\Admin;

use DaydreamLab\Cms\Models\CustomerMessage\Admin\CustomerMessageAdmin;
use DaydreamLab\Cms\Repositories\CustomerMessage\CustomerMessageRepository;

class CustomerMessageAdminRepository extends CustomerMessageRepository
{
    public function __construct(CustomerMessageAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
