<?php

namespace DaydreamLab\Cms\Models\ProductCategory;

use DaydreamLab\Cms\Models\Product\Product;
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


    protected $order_by = 'ordering';

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
        'image',
        'memo',
        'params',
        'state',
        'featured',
        'featured_ordering',
        'ordering',
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
        'params' => 'array',
        'locked_at' => 'datetime:Y-m-d H:i:s',
        'created_at' => 'datetime:Y-m-d H:i:s',
        'updated_at' => 'datetime:Y-m-d H:i:s'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function products()
    {
        return $this->hasMany(Product::class, 'product_category_id', 'id');
    }
}
