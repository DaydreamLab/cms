<?php

namespace DaydreamLab\Cms\Repositories\IotNews;

use DaydreamLab\Cms\Models\IotNews\IotNews;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotNewsRepository extends CmsRepository
{
    protected $modelName = 'IotNews';

    public function __construct(IotNews $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
