<?php
namespace DaydreamLab\Cms\Models\Menu;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Module\Module;
use DaydreamLab\Cms\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;
use Kalnoy\Nestedset\NodeTrait;

class Menu extends BaseModel
{
    use NodeTrait, WithCategory, WithAccess, WithLanguage,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menus';


    protected $order_by = 'ordering';

    protected $order = 'asc';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'ordering',
        'path',
        'host',
        'category_id',
        'state',
        'description',
        'language',
        'params',
        'metadata',
        'metakeywords',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
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
        '_rgt'
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
        'viewlevels',
        'tree_title',
        'category_title',
        'access_title',
        'language_title'
    ];


    protected $casts = [
        'params'   => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();
    }



    public function getParamsAttribute($value)
    {
        $value      = json_decode($value, true);

        $data       = [];
        if (array_key_exists('module_ids', $value))
        {
            $modules    = Module::whereIn('id', $value['module_ids'])->get();
            $modules->map(function ($item, $key) use (&$data){
                $data[] = (object) $item->only('id', 'title');
            });

        }

        $value['module_ids'] = $data;

        return $value;
    }
}