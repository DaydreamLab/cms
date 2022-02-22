<?php

namespace DaydreamLab\Cms\Resources\IotNews\Admin\Collections;

use DaydreamLab\Cms\Resources\IotNews\Admin\Models\IotNewsAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotNewsAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotNewsAdminSearchResource::class;

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
