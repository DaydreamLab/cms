<?php

namespace DaydreamLab\Cms\Models\ProductCategory;

use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use Kalnoy\Nestedset\NodeTrait;

class ProductCategory extends BaseModel
{
    use NodeTrait, RecordChanger, UserInfo {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'product_categories';


    protected $model_type = 'parent';


    protected $order_by = 'id';

    protected $order = 'asc';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'description',
        'memo',
        'params',
        'state',
        'ordering',
        'created_by',
        'updated_by'
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        '_lft',
        '_rgt',
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
    ];


    protected $casts = [
        'params' => 'array'
    ];


    public static function boot()
    {
        self::traitBoot();
    }

}