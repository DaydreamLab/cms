<?php
namespace DaydreamLab\Cms\Models\Form;

use DaydreamLab\JJAJ\Models\BaseModel;

class Form extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'forms';


    protected $name = 'Form';


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'phone',
        'restaurant',
        'question_type',
        'question',
        'note',
        'created_by',
        'updated_by',
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        'id',
        'created_by',
        'updated_by',
        'created_at',
        'updated_at'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
    ];



}