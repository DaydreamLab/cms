<?php

namespace DaydreamLab\Cms\Traits\Model;

use DaydreamLab\Cms\Models\Category\Category;


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


    public function getCategoryTitleAttribute()
    {
        $category = $this->category()->first();

        return $category ? $category->title : null;
    }
}