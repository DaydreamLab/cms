<?php

namespace DaydreamLab\Cms\Models\Newsletter;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Dsth\Models\Event\Event;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use DaydreamLab\User\Models\User\UserGroup;

class Newsletter extends BaseModel
{
    use RecordChanger, UserInfo {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'newsletters';


    protected $model_type = 'parent';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'newsletter_category_id',
        'title',
        'alias',
        'image',
        'number',
        'description',
        'url',
        'display_topic',
        'information',
        'params',
        'state',
        'ordering',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'publish_up',
        'publish_down'
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
    ];


    protected $casts = [
        'params' => 'array',
        'information' => 'array',
        'locked_at' => 'datetime:Y-m-d H:i:s',
        'publish_up' => 'datetime:Y-m-d H:i:s',
        'publish_down' => 'datetime:Y-m-d H:i:s'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function userGroups()
    {
        return $this->belongsToMany(UserGroup::class, 'newsletter_category_user_group_maps', 'category_id', 'group_id')
            ->withTimestamps();
    }


    public function newsletterCategory()
    {
        return $this->belongsTo(Item::class, 'newsletter_category_id', 'id');
    }


    public function items()
    {
        return $this->belongsToMany(Item::class, 'newsletters_items_maps', 'newsletter_id', 'item_id')
            ->withTimestamps();
    }


    public function events()
    {
        return $this->belongsToMany(Event::class, 'newsletters_events_maps', 'newsletter_id', 'event_id')
            ->withTimestamps();
    }


    public function getItemsAttribute()
    {
        $items = $this->items()->get();
        $data = [];
        foreach ($items as $item) {
            $data[$item->category->content_type][] = $item;
        }

        return $data;
    }


    public function getPromotionAttribute()
    {
        return isset($this->items['promotion']) ? $this->items['promotion'] : [];
    }


    public function getBulletinAttribute()
    {
        return isset($this->items['bulletin']) ? $this->items['bulletin'] : [];
    }


    public function getVideoAttribute()
    {
        return isset($this->items['video']) ? $this->items['video'] : [];
    }
}
