<?php

namespace DaydreamLab\Cms\Resources\Extrafield\Admin\Collections;

use DaydreamLab\Cms\Resources\Extrafield\Admin\Models\ExtrafieldGroupAdminResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ExtrafieldGroupAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = ExtrafieldGroupAdminResource::class;

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
