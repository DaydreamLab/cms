<?php
namespace DaydreamLab\Cms\Models\IotEvent\Front;

use DaydreamLab\Cms\Models\IotEvent\IotEvent;

class IotEventFront extends IotEvent
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_events';

    protected $model_type = 'front';
}
