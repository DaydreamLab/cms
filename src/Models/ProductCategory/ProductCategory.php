<?php

namespace DaydreamLab\Cms\Models\ProductCategory;

use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Models\BaseModel;
use Kalnoy\Nestedset\NodeTrait;

class ProductCategory extends BaseModel
{
    use NodeTrait, RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'product_categories';


    protected $model_type = 'parent';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'code',
        'description',
        'memo',
        'state',
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


    public static function boot()
    {
        self::traitBoot();
    }

}