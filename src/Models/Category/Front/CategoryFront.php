<?php
namespace DaydreamLab\Cms\Models\Category\Front;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;

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
        //'extrafields',
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


    public function getExtrafieldsAttribute($value)
    {
        $value = $value ? $value : json_encode([]);
        $data = [];
        foreach (json_decode($value) as $extra_field)
        {
            $extra_field_data = ExtrafieldFront::find($extra_field->id);
            $extra_field_data->value = $extra_field->value ;
            $data[] = $extra_field_data->toArray();
        }


        return $data;
    }
}