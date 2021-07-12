<?php

namespace DaydreamLab\Cms\Resources\Brand\Admin\Collections;

use DaydreamLab\Cms\Resources\Brand\Admin\Models\BrandAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class BrandAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = BrandAdminListResource::class;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
