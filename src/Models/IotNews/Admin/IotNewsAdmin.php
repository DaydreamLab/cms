<?php
namespace DaydreamLab\Cms\Models\IotNews\Admin;

use DaydreamLab\Cms\Models\IotNews\IotNews;

class IotNewsAdmin extends IotNews
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_news';

    protected $model_type = 'admin';
}
