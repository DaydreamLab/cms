<?php
namespace DaydreamLab\Cms\Models\Category;

use Carbon\Carbon;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\Cms\Traits\WithExtrafield;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;
use Kalnoy\Nestedset\NodeTrait;

class Category extends BaseModel
{
    use NodeTrait, WithAccess, WithLanguage, WithExtrafield,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';

    protected $model_type = 'parent';

    protected $order_by = 'id';

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
        'item_extrafield_group_id',
        'extrafield_group_id',
        'extrafields',
        'extrafields_search',
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
        'extrafields_search',
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
        'access_title',
        'language_title',
        'extrafield_group_title'
    ];


    protected $casts = [
        'extrafields'   => 'array',
        'params'        => 'array',
        'locked_at'     => 'datetime:Y-m-d H:i:s',
        'publish_up'    => 'datetime:Y-m-d H:i:s',
        'publish_down'  => 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function items()
    {
        return $this->hasMany(Item::class, 'category_id', 'id');
    }
}