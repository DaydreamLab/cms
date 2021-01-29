<?php

namespace DaydreamLab\Cms\Resources\Category\Admin\Collections;

use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class CategoryAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = CategoryAdminListResource::class;

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
