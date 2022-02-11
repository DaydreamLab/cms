<?php

namespace DaydreamLab\Cms\Repositories\Resource\Front;

use DaydreamLab\Cms\Models\Resource\Front\ResourceFront;
use DaydreamLab\Cms\Repositories\Resource\ResourceRepository;

class ResourceFrontRepository extends ResourceRepository
{
    public function __construct(ResourceFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
