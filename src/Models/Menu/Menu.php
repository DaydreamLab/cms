<?php
namespace DaydreamLab\Cms\Models\Menu;

use DaydreamLab\JJAJ\Models\BaseModel;
use Kalnoy\Nestedset\NodeTrait;

class Menu extends BaseModel
{
    use NodeTrait;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menus';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'path',
        'category_id',
        'state',
        'description',
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
    ];



}