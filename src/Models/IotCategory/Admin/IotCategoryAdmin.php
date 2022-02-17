<?php
namespace DaydreamLab\Cms\Models\IotCategory\Admin;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;

class IotCategoryAdmin extends IotCategory
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_categories';

    protected $model_type = 'admin';
}
