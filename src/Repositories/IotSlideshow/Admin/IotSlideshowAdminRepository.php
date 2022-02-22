<?php

namespace DaydreamLab\Cms\Repositories\IotSlideshow\Admin;

use DaydreamLab\Cms\Models\IotSlideshow\Admin\IotSlideshowAdmin;
use DaydreamLab\Cms\Repositories\IotSlideshow\IotSlideshowRepository;

class IotSlideshowAdminRepository extends IotSlideshowRepository
{
    public function __construct(IotSlideshowAdmin $model)
    {
        parent::__construct($model);
        $this->model = $model;
    }
}
