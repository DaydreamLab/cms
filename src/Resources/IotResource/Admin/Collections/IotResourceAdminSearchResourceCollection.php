<?php

namespace DaydreamLab\Cms\Resources\IotResource\Admin\Collections;

use DaydreamLab\Cms\Resources\IotResource\Admin\Models\IotResourceAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotResourceAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotResourceAdminSearchResource::class;

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
