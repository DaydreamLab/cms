<?php

namespace DaydreamLab\Cms\Models\NewsletterSubscription;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;

class NewsletterSubscription extends BaseModel
{
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'newsletter_subscriptions';


    protected $name = 'NewsletterSubscription';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'email'
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


    public static function boot()
    {
        self::traitBoot();
    }


    public function newsletterCategories()
    {
        return $this->belongsToMany(Item::class, 'newsletter_subscription_newsletter_category_maps', 'subscription_id', 'category_id')
            ->withTimestamps();
    }
}