<?php
namespace DaydreamLab\Cms\Models\Site;

use DaydreamLab\Cms\Models\Language\Language;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;

class Site extends BaseModel
{
    use RecordChanger {
        RecordChanger::boot as traitBoot;
    }
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'sites';

    protected $order = 'asc';

    protected $order_by = 'ordering';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'url',
        'sitename',
        'sef',
        'metakeywords',
        'metadesc',
        'state',
        'access',
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
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'language'
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function language()
    {
        return $this->belongsTo(Language::class, 'sef', 'sef')->where('type', '=', 'content');
    }


    public function getLanguageAttribute()
    {
        return $this->language()->first()->title;
    }

}