<?php
namespace DaydreamLab\Cms\Models\Module\Front;

use DaydreamLab\Cms\Models\Module\Module;

class ModuleFront extends Module
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'modules';


    protected $hidden = [
        'id',
        'category_id',
        'state',
        'description',
        'language',
        'access',
        'params',
        'locked_at',
        'locked_by',
        'created_at',
        'created_by',
        'updated_at',
        'updated_by',
        'publish_up',
        'publish_down',
        'viewlevel',
        'viewlevels',
    ];

}