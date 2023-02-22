<?php

namespace DaydreamLab\Cms\Models\Curation;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\Cms\Models\Item\Item;
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
        'params'    => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();

        self::creating(function ($item) {
            if (!$item->alias) {
                $item->alias = Str::lower(Str::random(8));
            }
        });
    }


    public static function newFactory()
    {
    }


    public function events()
    {
        return $this->belongsToMany(Event::class, 'curations_events_maps', 'curationId', 'eventId')
            ->withTimestamps();
    }


    public function items()
    {
        return $this->belongsToMany(Item::class, 'curations_items_maps', 'curationId', 'itemId')
            ->withTimestamps();
    }


    public function promotions()
    {
        return $this->items()->wherePivot('itemType', 'promotion');
    }


    public function solutions()
    {
        return $this->items()->wherePivot('itemType', 'solution');
    }


    public function videos()
    {
        return $this->items()->wherePivot('itemType', 'video');
    }
}
