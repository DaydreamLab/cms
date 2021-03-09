<?php

namespace DaydreamLab\Cms\Traits\Model;

use DaydreamLab\Cms\Models\Language\Language;


trait WithLanguage
{
    public function language()
    {
        return $this->hasOne(Language::class, 'sef', 'language')->where('type', '=', 'content');
    }


    public function getLanguageTitleAttribute()
    {
        $language = $this->language()->first();

        return $language ? $language->title : 'All';
    }
}
