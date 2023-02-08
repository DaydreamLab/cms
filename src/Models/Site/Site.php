<?php
namespace DaydreamLab\Cms\Models\Site;

use DaydreamLab\Cms\Models\Language\Language;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\Cms\Traits\Model\UserInfo;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\User\Traits\Model\WithAccess;

class Site extends BaseModel
{
    use WithLanguage, WithAccess, UserInfo,
        RecordChanger {
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
        'updated_by',
        'locked_by',
        'locked_at'
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
        'language_title',
        'creator',
        'updater',
        'locker',
    ];


    protected $casts = [
        'locked_at' => 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function language()
    {
        return $this->belongsTo(Language::class, 'sef', 'sef')->where('type', '=', 'content');
    }


    public function getLanguageTitleAttribute()
    {
        $language = $this->language()->first();

        return $language? $language->title : 'Site sef error';
    }

}