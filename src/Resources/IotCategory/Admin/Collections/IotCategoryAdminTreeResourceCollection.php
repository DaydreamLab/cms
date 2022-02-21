<?php

namespace DaydreamLab\Cms\Resources\IotCategory\Admin\Collections;

use DaydreamLab\Cms\Resources\IotCategory\Admin\Models\IotCategoryAdminTreeResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class IotCategoryAdminTreeResourceCollection extends BaseResourceCollection
{
    public $collects = IotCategoryAdminTreeResource::class;

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
