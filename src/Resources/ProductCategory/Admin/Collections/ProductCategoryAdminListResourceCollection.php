<?php

namespace DaydreamLab\Cms\Resources\ProductCategory\Admin\Collections;

use DaydreamLab\Cms\Resources\ProductCategory\Admin\Models\ProductCategoryAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ProductCategoryAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = ProductCategoryAdminListResource::class;
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
