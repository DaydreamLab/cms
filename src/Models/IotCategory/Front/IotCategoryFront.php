<?php
namespace DaydreamLab\Cms\Models\IotCategory\Front;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;

class IotCategoryFront extends IotCategory
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'iot_categories';

    protected $model_type = 'front';

    protected $hidden = [
        'id',
        'parent_id',
        '_lft',
        '_rgt',
        'state',
        'access',
        'ordering',
        'params',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down'
    ];
}
