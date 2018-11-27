<?php
namespace DaydreamLab\Cms\Models\Language;

use DaydreamLab\Cms\Models\Site\Site;
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
        'type',
        'state',
        'description',
//        'metadesc',
//        'metakeywords',
//        'sitename',
//        'site_id',
//        'order',
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
        //'site_title',
        //'creator',
        //'updater'
    ];


    public function getCreatorAttribute()
    {
        return $this->creator();
    }


//    public function getSiteAttribute()
//    {
//        return $this->site()->first();
//    }


//    public function getSiteTitleAttribute()
//    {
//        return $this->site->title;
//    }


    public function getUpdaterAttribute()
    {
        return $this->updater();
    }


//    public function site()
//    {
//        return $this->belongsTo(Site::class, 'site_id', 'id');
//    }
}