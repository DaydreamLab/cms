<?php

namespace DaydreamLab\Cms\Traits\Model;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Helpers\Helper;


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
        $path       = $category ? substr($category->path, strlen('/'.$category->extension.'/')) : null;

        return $path;
    }


    public function getCategoryTitleAttribute()
    {
        $category = $this->category()->first();

        return $category ? $category->title : null;
    }



}