<?php

namespace DaydreamLab\Cms\Resources\Product\Admin\Collections;

use DaydreamLab\Cms\Resources\Product\Admin\Models\ProductAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ProductAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = ProductAdminListResource::class;
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