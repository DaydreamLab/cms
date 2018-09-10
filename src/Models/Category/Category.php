<?php
namespace DaydreamLab\Cms\Models\Category;

use DaydreamLab\JJAJ\Models\BaseModel;
use Kalnoy\Nestedset\NodeTrait;

class Category extends BaseModel
{
    use NodeTrait;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'categories';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'state',
        'introimage',
        'introtext',
        'image',
        'description',
        'extension',
        'order',
        'language',
        'metadesc',
        'metadata',
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



}