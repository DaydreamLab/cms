<?php
namespace DaydreamLab\Cms\Models\Item\Front;

use DaydreamLab\Cms\Models\Category\Front\CategoryFront;
use DaydreamLab\Cms\Models\Extrafield\Front\ExtrafieldFront;
use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\Cms\Models\Tag\Front\TagFront;
use DaydreamLab\JJAJ\Helpers\Helper;

class ItemFront extends Item
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';

    protected $order_by = 'publish_up';

    protected $order = 'desc';

    protected $model_type = 'front';

    protected $hidden = [
        'id',
        'category_id',
        'state',
        'access',
        //'ordering',
        //'featured_ordering',
        //'language',
        //'params',
        'creator_groups',
        'extrafield_group_id',
        //'extrafields',
        'locked_by',
        'locked_at',
        'locker',
        'created_by',
        'updated_by',
        'updated_at',
        'updater',
        'viewlevels',
        'viewlevel',
        'access_title',
        'extrafields_search',
        'extrafield_group_title',
        'full_text_search'
    ];


    public function category()
    {
        return $this->belongsTo(CategoryFront::class, 'category_id', 'id');
    }


    public function tag()
    {
        return $this->belongsToMany(TagFront::class, 'items_tags_maps', 'item_id', 'tag_id');
    }

    /**
     * 用於全站搜尋時查找全文索引scope
     * @param $query
     * @param $searchWord
     * @return mixed
     */
    public function scopeSearch($query, $searchWord)
    {
        if ($this->hasAttribute('full_text_search')) {
            $match = 'MATCH(full_text_search) AGAINST (? IN NATURAL LANGUAGE MODE)';
            return $query->whereRaw($match, [$searchWord])
                         ->orderByRaw($match . ' DESC', [$searchWord]);
        }

        return $query;
    }

    public function getAliasAttribute($value)
    {
        // 對 alias如 aliaska(ak)進行處理變成 Alaska(AK)
        if (preg_match('/([a-zA-Z]*\s*[a-zA-Z]+)\(([a-zA-Z]+)\)/', $value, $matches)) {
            $parts = explode(' ', $matches[1]);
            $upper_parts = [];
            foreach ($parts as $part) {
                $upper_parts[] = ucfirst($part);
            }
            $upper = implode(' ', $upper_parts);
            return ucfirst($upper) . '(' . strtoupper($matches[2]) . ')';
        }

        return $value;
    }

}
