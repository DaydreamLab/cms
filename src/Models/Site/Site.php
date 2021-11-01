<?php
namespace DaydreamLab\Cms\Models\Site;

use DaydreamLab\Cms\Models\Language\Language;
use DaydreamLab\User\Traits\Model\WithAccess;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\JJAJ\Traits\UserInfo;
use DaydreamLab\JJAJ\Models\BaseModel;

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
        'state',
        'access',
        'ordering',
        'params',
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
    ];


    protected $casts = [
        'params' => 'array',
    ];


    public static function boot()
    {
        self::traitBoot();
    }


    public function getLanguageTitleAttribute()
    {
        $language = $this->language()->first();

        return $language? $language->title : 'Site sef error';
    }


    public function getParamsAttribute($params)
    {
        $params = json_decode($params, true);
        if (!isset($params['fb_fanpage_id'])) {
            $params['fb_fanpage_id'] = '';
        }
        if (!isset($params['fbFanpageUrl'])) {
            $params['fbFanpageUrl'] = '';
        }
        if (!isset($params['lineId'])) {
            $params['lineId'] = '';
        }
        if (!isset($params['liffid'])) {
            $params['liffid'] = '';
        }
        if (!isset($params['youtubeUrl'])) {
            $params['youtubeUrl'] = '';
        }

        return $params;
    }


    public function language()
    {
        return $this->belongsTo(Language::class, 'sef', 'sef')->where('type', '=', 'content');
    }
}
