<?php

namespace DaydreamLab\Cms\Resources\Topic\Front\Collections;

use DaydreamLab\Cms\Resources\Topic\Front\Models\TopicFrontListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class TopicFrontListResourceCollection extends BaseResourceCollection
{
    public $collects = TopicFrontListResource::class;

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
