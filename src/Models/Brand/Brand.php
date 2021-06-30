<?php

namespace DaydreamLab\Cms\Models\Brand;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;

class Brand extends BaseModel
{
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'brands';


    protected $model_type = 'parent';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code',
        'alias',
        'title',
        'description',
        'contact_email',
        'business_representitive',
        'logo_image',
        'banner_image',
        'banner_link',
        'metadesc',
        'metakeywords',
        'state',
        'locked_by',
        'locked_at',
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
        'locked_at' => 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function brandContacts()
    {
        return $this->belongsToMany(BrandContact::class, 'brands_contacts_maps', 'brand_id', 'brand_contact_id');
    }


    public function linkedItems()
    {
        return $this->belongsToMany(Item::class, 'brands_items_maps', 'brand_id', 'item_id')
            ->withPivot('content_type');
    }
}