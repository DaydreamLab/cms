<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Collections;

use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminListResource;
use DaydreamLab\Cms\Resources\Item\Front\Models\ItemFrontListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ItemFrontListResourceCollection extends BaseResourceCollection
{
    public $collects = ItemFrontListResource::class;

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
