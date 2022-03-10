<?php

namespace DaydreamLab\Cms\Repositories\IotSlideshow\Front;

use DaydreamLab\Cms\Models\IotSlideshow\Front\IotSlideshowFront;
use DaydreamLab\Cms\Repositories\IotSlideshow\IotSlideshowRepository;

class IotSlideshowFrontRepository extends IotSlideshowRepository
{
    public function __construct(IotSlideshowFront $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }


    public function all()
    {
        return $this->model->where('state', '=', 1)->get();
    }
}
