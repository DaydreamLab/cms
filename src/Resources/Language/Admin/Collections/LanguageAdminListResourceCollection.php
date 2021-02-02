<?php

namespace DaydreamLab\Cms\Resources\Language\Admin\Collections;

use DaydreamLab\Cms\Resources\Extrafield\Admin\Models\ExtrafieldAdminResource;
use DaydreamLab\Cms\Resources\Language\Admin\Models\LanguageAdminResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class LanguageAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = LanguageAdminResource::class;

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
