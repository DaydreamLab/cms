<?php
namespace DaydreamLab\Cms\Models\Item;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Tag\Tag;
use DaydreamLab\JJAJ\Models\BaseModel;

class Item extends BaseModel
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';


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
        'hits',
        'access',
        'featured',
        'featured_ordering',
        'ordering',
        'language',
        'metadesc',
        'metadata',
        'params',
        'lock_by',
        'lock_at',
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
        'tags',
        'category',
    ];


    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }


    public function tag()
    {
        return $this->belongsToMany(Tag::class, 'items_tags_maps', 'item_id', 'tag_id');
    }


    public function getCategoryAttribute()
    {
        return $this->category()->first();
    }


    public function getTagsAttribute()
    {
        return $this->tag()->get();
    }
}