<?php

namespace DaydreamLab\Cms\Resources\Tag\Front\Collections;

use DaydreamLab\Cms\Resources\Tag\Front\Models\TagFrontResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class TagFrontListResourceCollection extends BaseResourceCollection
{
    public $collects = TagFrontResource::class;

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
