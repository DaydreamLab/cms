<?php

namespace DaydreamLab\Cms\Models\Menu;

use DaydreamLab\Cms\Models\Site\Site;
use DaydreamLab\User\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use Illuminate\Support\Str;
use Kalnoy\Nestedset\NodeTrait;

class Menu extends BaseModel
{
    use NodeTrait;
    use WithAccess;
    use WithCategory;
    use WithLanguage;
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menus';


    protected $order_by = '_lft';

    protected $order = 'asc';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'path',
        'host',
        'site_id',
        'category_id',
        'state',
        'description',
        'language',
        'params',
        'ordering',
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
        'language_title',
        'host_title',
    ];


    protected $casts = [
        'params'   => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();

        static::creating(function ($item) {
            if ($item->state && !$item->publish_up) {
                $item->publish_up = now();
            }

            if (!$item->alias) {
                $item->alias = Str::random(8);
            }

            if (!$item->path) {
                $item->path = $item->parent
                    ? $item->parent->path . '/' . $item->alias
                    : '/' . $item->alias;
            }
        });
    }


    public function getHostTitleAttribute()
    {
        $host = $this->host()->first();
        return  $host ? $host->title : 'None';
    }


    public function host()
    {
        return $this->hasOne(Site::class, 'id', 'site_id');
    }
}
