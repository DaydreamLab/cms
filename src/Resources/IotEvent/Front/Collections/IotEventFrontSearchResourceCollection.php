<?php

namespace DaydreamLab\Cms\Resources\IotEvent\Front\Collections;

use DaydreamLab\Cms\Resources\IotEvent\Front\Models\IotEventFrontSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotEventFrontSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotEventFrontSearchResource::class;

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
