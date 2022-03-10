<?php
namespace DaydreamLab\Cms\Models\IotSlideshow\Front;

use DaydreamLab\Cms\Models\IotSlideshow\IotSlideshow;

class IotSlideshowFront extends IotSlideshow
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_slideshows';

    protected $model_type = 'front';

    protected $hidden = [
        'id',
        'state',
        'access',
        'ordering',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at'
    ];
}
