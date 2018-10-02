<?php
namespace DaydreamLab\Cms\Models\Category\Front;

use DaydreamLab\Cms\Models\Category\Category;

class CategoryFront extends Category
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';

    protected $hidden = [
        'parent_id',
        '_lft',
        '_rgt',
        'state',
        'extension',
        'access',
        'created_by',
        'updated_by',
        'ancestors'
    ];
}