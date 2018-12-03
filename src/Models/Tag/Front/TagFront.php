<?php
namespace DaydreamLab\Cms\Models\Tag\Front;

use DaydreamLab\Cms\Models\Tag\Tag;

class TagFront extends Tag
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tags';

    protected $hidden = [
        'id',
        '_lft',
        '_rgt',
        'path',
        'parent_id',
        'ordering',
        'state',
        'description',
        'access',
        'language',
        'locked_by',
        'locked_at',
        'created_by',
        'created_at',
        'updated_at',
        'updated_by',
        'locker',
        'publish_up',
        'publish_down',
        'pivot',
        'viewlevels',
        'access_title',
        'viewlevel',
    ];
}