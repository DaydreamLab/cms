<?php

namespace DaydreamLab\Cms\Resources\Category\Front\Collections;

use DaydreamLab\Cms\Resources\Category\Front\Models\CategoryFrontResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class CategoryFrontListResourceCollection extends BaseResourceCollection
{
    public $collects = CategoryFrontResource::class;

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
