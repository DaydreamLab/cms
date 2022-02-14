<?php

namespace DaydreamLab\Cms\Repositories\IotResource;

use DaydreamLab\Cms\Models\IotResource\IotResource;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotResourceRepository extends CmsRepository
{
    protected $modelName = 'Resource';

    public function __construct(IotResource $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
