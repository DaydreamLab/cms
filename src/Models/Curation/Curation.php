<?php

namespace DaydreamLab\Cms\Models\Curation;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Topic\Topic;
use DaydreamLab\Dsth\Models\Event\Event;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use Illuminate\Support\Str;

class Curation extends CmsModel
{
    use UserInfo;
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'curations';


    protected $name = 'Curation';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'state',
        'slideshow',
        'introtext',
        'description',
        'script',
        'isIndex',
        'params',
        'locked_by',
        'created_by',
        'updated_by',
        'locked_at',
    ];


    protected $casts = [
        'slideshow' => 'array',
        'params'    => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();

        self::creating(function ($item) {
            if (!$item->alias) {
                $item->alias = Str::lower(Str::random(8));
            }
            if (!$item->slideshow || (is_array($item->slideshow) && count($item->slideshow) === 0)) {
                $item->slideshow[] = [
                    'title' => '',
                    'subtitle' => '',
                    'path'  => '',
                    'featured' => 0,
                    'link' => '',
                ];
            }
        });
    }


    public static function newFactory()
    {
    }


    public function topics()
    {
        return $this->hasMany(Topic::class, 'curationId', 'id');
    }
}
