<?php
namespace DaydreamLab\Cms\Models\Module;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Models\BaseModel;

class Module extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'modules';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'category_id',
        'state',
        'description',
        'access',
        'language',
        'params',
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
        'category'
    ];


    protected $casts = [
        'params'   => 'array'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }


    public function getCategoryAttribute()
    {
        return $this->category()->first();
    }
}