<?php

namespace DaydreamLab\Cms\Resources\IotSolution\Front\Collections;

use DaydreamLab\Cms\Resources\IotSolution\Front\Models\IotSolutionFrontSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotSolutionFrontSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotSolutionFrontSearchResource::class;

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
