<?php
namespace DaydreamLab\Cms\Models\IotTag\Front;

use DaydreamLab\Cms\Models\IotTag\IotTag;

class IotTagFront extends IotTag
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_tags';

    protected $model_type = 'front';
}
