<?php

namespace DaydreamLab\Cms\Repositories\IotSlideshow;

use DaydreamLab\Cms\Models\IotSlideshow\IotSlideshow;
use DaydreamLab\Cms\Repositories\CmsRepository;

class IotSlideshowRepository extends CmsRepository
{
    protected $modelName = 'IotSlideshow';

    public function __construct(IotSlideshow $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
