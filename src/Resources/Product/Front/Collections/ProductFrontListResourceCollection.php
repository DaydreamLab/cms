<?php

namespace DaydreamLab\Cms\Resources\Product\Front\Collections;

use DaydreamLab\Cms\Resources\Product\Front\Models\ProductFrontListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ProductFrontListResourceCollection extends BaseResourceCollection
{
    public $collects = ProductFrontListResource::class;

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
