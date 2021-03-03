<?php

namespace DaydreamLab\Cms\Resources\Items\Front\Collections;

use DaydreamLab\Cms\Resources\Items\Front\Models\SearchResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SearchResourceCollection extends ResourceCollection
{
    public $collects = SearchResource::class;
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
