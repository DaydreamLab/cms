<?php
namespace DaydreamLab\Cms\Models\Category;

use Carbon\Carbon;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;
use Kalnoy\Nestedset\NodeTrait;

class Category extends BaseModel
{
    use NodeTrait;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';

    protected $order = 'asc';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'state',
        'path',
        'state',
        'introimage',
        'introtext',
        'image',
        'description',
        'content_type',
        'extension',
        'hits',
        'access',
        'ordering',
        'language',
        'template',
        'metadesc',
        'metakeywords',
        'params',
        'extrafield_group_id',
        'extrafields',
        'created_by',
        'updated_by',
        'locked_by',
        'locked_at',
        'publish_up',
        'publish_down',
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        '_lft',
        '_rgt',
        'ancestors',
        'viewlevel',
        'viewlevels',
        //'extrafield_group',
        //'extrafield_group_title'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'creator',
        'updater',
        'locker',
        'tree_title',
        'tree_list_title',
        //'viewlevels',
        'access_title',
        'extrafield_group_title'
    ];


    protected $casts = [
        'locked_at'     => 'datetime:Y-m-d H:i:s',
        'extrafields'   => 'array'
    ];


    public function extrafieldGroup()
    {
        return $this->hasOne(ExtrafieldGroup::class, 'id', 'extrafield_group_id');
    }


    public function getAccessTitleAttribute()
    {
        return $this->viewlevel->title ?: null;
    }


    public function getExtrafieldsAttribute($value)
    {
        $value = $value ? $value : json_encode([]);
        $data = [];
        foreach (json_decode($value) as $extra_field)
        {
            $extra_field_data = Extrafield::find($extra_field->id);
            $extra_field_data->value = $extra_field->value ;

            foreach ($extra_field->params as $key => $param)
            {
                $extra_field_data->{$key} = $param->value;
                $this->{$extra_field_data->alias . '_' . $key} = $param->value;
            }

            $data[] = $extra_field_data->toArray();
        }

        return $data;
    }


    public function getExtrafieldGroupTitleAttribute()
    {
        $group = $this->extrafieldGroup()->first();

        return $group ? $group->title : null;
    }


    public function getViewlevelsAttribute()
    {
        return $this->viewlevel()->first()->rules;
    }


    public function viewlevel()
    {
        return $this->hasOne(Viewlevel::class, 'id', 'access');
    }
}