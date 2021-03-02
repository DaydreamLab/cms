<?php

namespace DaydreamLab\Cms\Resources\Items\Front\Collections;

use DaydreamLab\Cms\Resources\Items\Front\Models\ItemResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ItemResourceCollection extends ResourceCollection
{
    public $collects = ItemResource::class;
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
