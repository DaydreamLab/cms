<?php

namespace DaydreamLab\Cms\Resources\IotNews\Front\Collections;

use DaydreamLab\Cms\Resources\IotNews\Front\Models\IotNewsFrontSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotNewsFrontSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotNewsFrontSearchResource::class;

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
