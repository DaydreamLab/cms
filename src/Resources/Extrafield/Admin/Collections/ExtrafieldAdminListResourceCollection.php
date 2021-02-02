<?php

namespace DaydreamLab\Cms\Resources\Extrafield\Admin\Collections;

use DaydreamLab\Cms\Resources\Extrafield\Admin\Models\ExtrafieldAdminResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ExtrafieldAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = ExtrafieldAdminResource::class;

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
