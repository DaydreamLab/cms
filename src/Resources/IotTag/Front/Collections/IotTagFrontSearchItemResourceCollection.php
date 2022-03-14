<?php

namespace DaydreamLab\Cms\Resources\IotTag\Front\Collections;

use DaydreamLab\Cms\Resources\IotTag\Front\Models\IotTagFrontSearchItemResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotTagFrontSearchItemResourceCollection extends BaseResourceCollection
{
    public $collects = IotTagFrontSearchItemResource::class;

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
