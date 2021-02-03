<?php
namespace DaydreamLab\Cms\Models\Menu\Front;

use DaydreamLab\Cms\Models\Menu\Menu;

class MenuFront extends Menu
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menus';


    protected $hidden = [
        'id',
        'parent_id',
        '_lft',
        '_rgt',
        'state',
        'ordering',
        'path',
        'host',
        'site_id',
        'category_id',
        'access',
        'params',
        'locked_by',
        'locked_at',
        'created_by',
        'created_at',
        'updated_by',
        'updated_at',
        'publish_up',
        'publish_down',
        'category',
        'viewlevels',
        'viewlevel',
        'ancestors',
        'tree_title'
    ];

}
