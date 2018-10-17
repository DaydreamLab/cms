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
        'id',
        'parent_id',
        'ordering',
        'path',
        'state',
        'introimage',
        'introtext',
        'image',
        'description',
        'extension',
        'access',
        'language',
        'content_type',
        'template',
        'metadesc',
        'metadata',
        'params',
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
    ];
}