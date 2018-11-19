<?php
namespace DaydreamLab\Cms\Models\Language;

use DaydreamLab\JJAJ\Models\BaseModel;

class Language extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'languages';

    protected $order_by = 'id';

    protected $order = 'asc';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'code',
        'sef',
        'image',
        'state',
        'description',
        'metadesc',
        'metakeywords',
        'sitename',
        'order',
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
        'creator',
        'updater'
    ];


    public function getCreatorAttribute()
    {
        return $this->creator();
    }


    public function getUpdaterAttribute()
    {
        return $this->updater();
    }
}