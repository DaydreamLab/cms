<?php

namespace DaydreamLab\Cms\Resources\Resource\Admin\Collections;

use DaydreamLab\Cms\Resources\Resource\Admin\Models\ResourceAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ResourceAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = ResourceAdminSearchResource::class;

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
