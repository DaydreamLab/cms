<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Collections;

use DaydreamLab\Cms\Resources\Item\Front\Models\ItemFrontSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ItemFrontSearchResourceCollection extends BaseResourceCollection
{
    public $collects = ItemFrontSearchResource::class;

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
