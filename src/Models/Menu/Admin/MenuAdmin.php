<?php
namespace DaydreamLab\Cms\Models\Menu\Admin;

use DaydreamLab\Cms\Models\Menu\Menu;

class MenuAdmin extends Menu
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menus';

    protected $hidden = [
        '_lft',
        '_rgt',
        'category',
        'viewlevels',
        'viewlevel',
        'ancestors',
    ];

}