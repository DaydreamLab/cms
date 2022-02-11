<?php

namespace DaydreamLab\Cms\Resources\Solution\Admin\Collections;

use DaydreamLab\Cms\Resources\Solution\Admin\Models\SolutionAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class SolutionAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = SolutionAdminSearchResource::class;

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
