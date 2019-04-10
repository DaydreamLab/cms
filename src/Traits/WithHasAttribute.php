<?php

namespace DaydreamLab\Cms\Traits;

use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldAdmin;
use DaydreamLab\Cms\Models\Extrafield\Admin\ExtrafieldGroupAdmin;

trait WithHasAttribute
{
    public function hasAttribute($attribute)
    {
        return in_array($attribute, $this->fillable);
    }
}