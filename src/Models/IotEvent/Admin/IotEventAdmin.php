<?php
namespace DaydreamLab\Cms\Models\IotEvent\Admin;

use DaydreamLab\Cms\Models\IotEvent\IotEvent;

class IotEventAdmin extends IotEvent
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_events';

    protected $model_type = 'admin';
}
