<?php
namespace DaydreamLab\Cms\Models\IotIndustry\Admin;

use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;

class IotIndustryAdmin extends IotIndustry
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_industries';

    protected $model_type = 'admin';
}
