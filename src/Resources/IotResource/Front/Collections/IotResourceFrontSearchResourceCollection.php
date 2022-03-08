<?php

namespace DaydreamLab\Cms\Resources\IotResource\Front\Collections;

use DaydreamLab\Cms\Resources\IotResource\Front\Models\IotResourceFrontSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotResourceFrontSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotResourceFrontSearchResource::class;

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
