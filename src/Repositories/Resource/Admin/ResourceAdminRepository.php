<?php

namespace DaydreamLab\Cms\Repositories\Resource\Admin;

use DaydreamLab\Cms\Models\Resource\Admin\ResourceAdmin;
use DaydreamLab\Cms\Repositories\Resource\ResourceRepository;

class ResourceAdminRepository extends ResourceRepository
{
    public function __construct(ResourceAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
