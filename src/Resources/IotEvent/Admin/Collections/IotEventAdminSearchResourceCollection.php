<?php

namespace DaydreamLab\Cms\Resources\IotEvent\Admin\Collections;

use DaydreamLab\Cms\Resources\IotEvent\Admin\Models\IotEventAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotEventAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotEventAdminSearchResource::class;

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
