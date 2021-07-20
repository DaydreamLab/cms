<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Collections;

use DaydreamLab\Cms\Resources\Item\Front\Models\ItemContentFrontListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ItemContentFrontListResourceCollection extends BaseResourceCollection
{
    public $collects = ItemContentFrontListResource::class;

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
