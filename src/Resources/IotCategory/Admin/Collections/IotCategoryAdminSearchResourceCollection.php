<?php

namespace DaydreamLab\Cms\Resources\IotCategory\Admin\Collections;

use DaydreamLab\Cms\Resources\IotCategory\Admin\Models\IotCategoryAdminSearchResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotCategoryAdminSearchResourceCollection extends BaseResourceCollection
{
    public $collects = IotCategoryAdminSearchResource::class;

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
