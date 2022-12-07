<?php

namespace DaydreamLab\Cms\Models\NewsletterSubscription;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use DaydreamLab\User\Models\User\User;

class NewsletterSubscription extends BaseModel
{
    use RecordChanger, UserInfo {
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
        'email',
        'contact',
        'state',
        'cancelAt',
        'cancelReason',
        'locked_by',
        'locked_at'
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
        'locked_at' => 'datetime:Y-m-d H:i:s',
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


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }


    public function getCompanyAttribute()
    {
        return ($this->user) ? $this->user->company : null;
    }


    public function getCompanyNameAttribute()
    {
        return ($this->company) ? $this->company->name : '';
    }


    public function getUserNameAttribute()
    {
        return ($this->user) ? $this->user->name : '';
    }


    public function getUserGroupNameAttribute()
    {
        return ($this->user) ? $this->user->groups->first()->title : '';
    }


    public function getUserMobilePhoneAttribute()
    {
        return ($this->user) ? $this->user->fullMobilePhone : '';
    }
}
