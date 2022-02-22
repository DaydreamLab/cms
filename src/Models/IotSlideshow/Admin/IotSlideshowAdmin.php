<?php
namespace DaydreamLab\Cms\Models\IotSlideshow\Admin;

use DaydreamLab\Cms\Models\IotSlideshow\IotSlideshow;

class IotSlideshowAdmin extends IotSlideshow
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_slideshows';

    protected $model_type = 'admin';
}
