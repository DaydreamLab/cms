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
        'parent_id',
        'path',
        'state',
        'extension',
        'content_type',
        'access',
        'pivot',
        '_lft',
        '_rgt',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'viewlevel'
    ];
}
