<?php

namespace DaydreamLab\Cms\Traits\Model;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Str;


trait WithCategory
{

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }


    public function getCategoryAttribute()
    {
        return $this->category()->first();
    }


    public function getCategoryAliasAttribute()
    {
        $category   = $this->category()->first();
        $path = $category->alias;
        return $path;
    }


    public function getCategoryTitleAttribute()
    {
        $category = $this->category()->first();

        return $category ? $category->title : null;
    }

    public function getParentCategoryAliasAttribute()
    {
        $categoryPath = $this->category()->value('path');
        $withoutItemPath = Str::after($categoryPath, '/item/');
        $parentCategoryPath = Str::beforeLast($withoutItemPath, '/');

        return $parentCategoryPath;
    }


}
