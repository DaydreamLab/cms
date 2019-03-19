<?php
namespace DaydreamLab\Cms\Models\Category\Front;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;
use DaydreamLab\JJAJ\Helpers\Helper;

class CategoryFront extends Category
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';

    protected $hidden = [
        'id',
        'parent_id',
        'ordering',
        'path',
        'state',
        'extension',
        'access',
        'language',
        'params',
        'extrafields',
        'extrafield_group_id',
        'extrafield_group_title',
        'viewlevel',
        'created_by',
        'updated_by',
        'updated_at',
        'locked_by',
        'locked_at',
        '_lft',
        '_rgt',
        'ancestors',
        'updater',
        'locker',
        'tree_title',
        'tree_list_title',
        'access_title',
    ];

}