<?php
namespace DaydreamLab\Cms\Models\IotResource\Front;

use DaydreamLab\Cms\Models\IotResource\IotResource;

class IotResourceFront extends IotResource
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_resources';

    protected $model_type = 'front';

    protected $order_by = 'publish_up';

    protected $hidden = [
        'id',
        'state',
        'access',
        'locked_by',
        'locked_at',
        'pivot'
    ];
}
