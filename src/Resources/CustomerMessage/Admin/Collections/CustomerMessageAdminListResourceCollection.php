<?php

namespace DaydreamLab\Cms\Resources\CustomerMessage\Admin\Collections;

use DaydreamLab\Cms\Resources\CustomerMessage\Admin\Models\CustomerMessageAdminResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class CustomerMessageAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = CustomerMessageAdminResource::class;

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
