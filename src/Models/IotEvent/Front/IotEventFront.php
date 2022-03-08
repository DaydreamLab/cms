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

    protected $order_by = 'publish_up';

    protected $hidden = [
        'id',
        'state',
        'access',
        'locked_by',
        'locked_at'
    ];
}
