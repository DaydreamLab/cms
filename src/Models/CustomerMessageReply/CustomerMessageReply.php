<?php

namespace DaydreamLab\Cms\Models\CustomerMessageReply;

use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class CustomerMessageReply extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customer_message_replies';


    protected $name = 'CustomerMessageReply';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'messageId',
        'channels',
        'subject',
        'content',
        'created_by',
        'updated_by'
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
        'channels' => 'array'
    ];

    public static function boot()
    {
        self::traitBoot();
    }
}