<?php

namespace DaydreamLab\Cms\Models\Topic;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\Cms\Models\Curation\Curation;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Dsth\Models\Event\Event;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use Illuminate\Support\Str;

class Topic extends CmsModel
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
    protected $table = 'topics';


    protected $name = 'Topic';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'curationId',
        'state',
        'subtitle',
        'introtext',
        'description',
        'featured',
        'ordering',
        'params',
        'hits',
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

        static::creating(function ($item) {
            if (!$item->alias) {
                $item->alias = Str::lower(Str::random(8));
            }
            if ($item->state && !$item->publish_up) {
                $item->publish_up = now()->toDateTimeString();
            }
        });

        static::updating(function ($item) {
            if ($item->state && !$item->publish_up) {
                $item->publish_up = now()->toDateTimeString();
            }
        });
    }


    public static function newFactory()
    {
    }


    public function articles()
    {
        return $this->items()->wherePivot('itemType', 'article');
    }


    public function curation()
    {
        return $this->belongsTo(Curation::class, 'curationId', 'id');
    }


    public function events()
    {
        return $this->belongsToMany(Event::class, 'topics_events_maps', 'topicId', 'eventId')
            ->withTimestamps();
    }


    public function items()
    {
        return $this->belongsToMany(Item::class, 'topics_items_maps', 'topicId', 'itemId')
            ->withTimestamps();
    }


    public function promotions()
    {
        return $this->items()->wherePivot('itemType', 'promotion');
    }


    public function videos()
    {
        return $this->items()->wherePivot('itemType', 'video');
    }


    public function getEnabledAttribute()
    {
        return $this->publish_up
            && now()->toDateTimeString() > $this->publish_up
            && (!$this->publish_down || now()->toDateTimeString() < $this->publish_down)
                ? 1 : 0;
    }
}
