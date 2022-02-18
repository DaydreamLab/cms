<?php

namespace DaydreamLab\Cms\Repositories\IotTag;

use DaydreamLab\Cms\Models\IotTag\IotTag;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotTagRepository extends CmsRepository
{
    protected $modelName = 'IotTag';

    public function __construct(IotTag $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
