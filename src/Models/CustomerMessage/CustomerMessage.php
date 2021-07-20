<?php

namespace DaydreamLab\Cms\Models\CustomerMessage;

use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\CmsModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;

class CustomerMessage extends CmsModel
{
    use UserInfo, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'customer_messages';


    protected $name = 'CustomerMessage';

    protected $order_by = 'created_at';

    protected $order = 'desc';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'brand_id',
        'name',
        'type',
        'status',
        'email',
        'backupEmail',
        'phoneCode',
        'phone',
        'extNumber',
        'mobilePhoneCode',
        'mobilePhone',
        'faxCode',
        'fax',
        'city',
        'district',
        'address',
        'zipcode',
        'message',
        'companyName',
        'jobTitle',
        'locked_by',
        'created_by',
        'updated_by',
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


    public static function boot()
    {
        self::traitBoot();

        static::creating(function ($item) {
            if (!$item->mobilePhoneCode) {
                $item->mobilePhoneCode = '+886';
            }
        });
    }


    public function brand()
    {
        return $this->hasOne(Brand::class, 'id', 'brand_id');
    }
}