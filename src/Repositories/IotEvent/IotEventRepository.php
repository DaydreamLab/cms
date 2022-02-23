<?php

namespace DaydreamLab\Cms\Repositories\IotEvent;

use DaydreamLab\Cms\Models\IotEvent\IotEvent;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotEventRepository extends CmsRepository
{
    protected $modelName = 'IotEvent';

    public function __construct(IotEvent $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
