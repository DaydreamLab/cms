<?php

namespace DaydreamLab\Cms\Resources\IotSolution\Admin\Collections;

use DaydreamLab\Cms\Resources\IotSolution\Admin\Models\IotSolutionAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotSolutionAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotSolutionAdminSearchResource::class;

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
