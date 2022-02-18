<?php

namespace DaydreamLab\Cms\Resources\IotTag\Admin\Collections;

use DaydreamLab\Cms\Resources\IotTag\Admin\Models\IotTagAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotTagAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotTagAdminSearchResource::class;

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
