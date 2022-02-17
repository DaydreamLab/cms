<?php

namespace DaydreamLab\Cms\Resources\IotIndustry\Admin\Collections;

use DaydreamLab\Cms\Resources\IotIndustry\Admin\Models\IotIndustryAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotIndustryAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotIndustryAdminSearchResource::class;

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
