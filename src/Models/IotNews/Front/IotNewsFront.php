<?php
namespace DaydreamLab\Cms\Models\IotNews\Front;

use DaydreamLab\Cms\Models\IotNews\IotNews;

class IotNewsFront extends IotNews
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_news';

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
