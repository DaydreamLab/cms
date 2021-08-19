<?php
namespace DaydreamLab\Cms\Models\Item;

use DaydreamLab\Cms\Models\Brand\Brand;
use DaydreamLab\Cms\Models\Product\Product;
use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\JJAJ\Traits\UserInfo;
use DaydreamLab\Cms\Traits\Model\WithCategory;
use DaydreamLab\Cms\Traits\Model\WithLanguage;
use DaydreamLab\Cms\Traits\WithExtrafield;
use DaydreamLab\JJAJ\Models\BaseModel;
use DaydreamLab\JJAJ\Traits\RecordChanger;
use DaydreamLab\Media\Models\File\File;
use DaydreamLab\User\Models\User\UserGroup;
use DaydreamLab\User\Traits\Model\WithAccess;

class Item extends BaseModel
{
    use WithAccess, WithExtrafield, WithCategory, WithLanguage, UserInfo,
        RecordChanger {
        RecordChanger::boot as traitBoot;
    }

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';


    protected $model_type = 'parent';

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
        'introimage',
        'introtext',
        'image',
        'description',
        'video',
        'link',
        'hits',
        'access',
        'featured',
        'featured_ordering',
        'ordering',
        'language',
        'params',
        'extrafield_group_id',
        'extrafields',
        'extrafields_search',
        'locked_by',
        'locked_at',
        'created_by',
        'updated_by',
        'publish_up',
        'publish_down',
    ];

    protected $with = [
        'category',
        'tags',
        'files'
    ];


    /**
     * The attributes that should be hidden for arrays
     *
     * @var array
     */
    protected $hidden = [
        'created_by',
        'updated_by',
        'viewlevels',
        'viewlevel',
        'extrafields_search',
        'extrafield_group_id'
    ];


    /**
     * The attributes that should be append for arrays
     *
     * @var array
     */
    protected $appends = [
        'creator_groups',
        'viewlevels',
        'category_title',
        'category_alias',
        'access_title',
        'language_title',
        //'extrafield_group_title'
    ];


    protected $casts = [
        'params' => 'array',
        'extrafields' => 'array',
        'locked_at' => 'datetime:Y-m-d H:i:s',
        'publish_up' => 'datetime:Y-m-d H:i:s',
        'publish_down' => 'datetime:Y-m-d H:i:s',
    ];


    public static function boot()
    {
        self::traitBoot();

        static::creating(function ($item) {
            if ($item->state && !$item->publish_up) {
                $item->publish_up = now();
            }

            if (!$item->hits) {
                $item->hits = 0;
            }
        });
    }


    public function brands()
    {
        return $this->belongsToMany(Brand::class, 'brands_items_maps', 'item_id', 'brand_id')
            ->withTimestamps();
    }


    public function files()
    {
        return $this->belongsToMany(File::class, 'items_files_maps', 'itemId', 'fileId', 'id', 'id')
            ->withTimestamps();
    }


    public function newsletterUserGroups()
    {
        return $this->belongsToMany(UserGroup::class, 'newsletter_category_user_group_maps', 'category_id', 'group_id')
            ->withTimestamps();
    }


    public function products()
    {
        return $this->belongsToMany(Product::class, 'items_products_maps', 'item_id', 'product_id')
            ->withTimestamps();
    }


    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'items_tags_maps', 'item_id', 'tag_id')
            ->where('state', 1)->withTimestamps();
    }


    public function getCreatorGroupsAttribute()
    {
        $creator = $this->creator()->first();

        if ($creator) {
            return $creator->groups->map(function ($item, $key) {
                return $item->title;
            });
        } else {
            return [];
        }
    }
}
