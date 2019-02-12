<?php
namespace DaydreamLab\Cms\Models\Tag;

use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\User\Models\Viewlevel\Viewlevel;
use Kalnoy\Nestedset\NodeTrait;

class Tag extends BaseModel
{
    use NodeTrait;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'tags';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'alias',
        'path',
        'state',
        'description',
        'extension',
        'hits',
        'access',
        'language',
        'ordering',
        'metadata',
        'metakeywords',
        'params',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'publish_up',
        'publish_down',
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        'pivot'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'creator',
        'updater',
        'locker',
        'viewlevels',
        'access_title'
    ];


    public function getAccessTitleAttribute()
    {
        return $this->viewlevel->title ?: null;
    }


    public function getViewlevelsAttribute()
    {
        return $this->viewlevel->rules ?: [];
    }


    public function viewlevel()
    {
        return $this->hasOne(Viewlevel::class, 'id', 'access');
    }

}