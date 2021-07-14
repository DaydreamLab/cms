<?php

namespace DaydreamLab\Cms\Resources\Item\Admin\Collections;

use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminListResource;
use DaydreamLab\Cms\Resources\Item\Admin\Models\ItemContentAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ItemContentAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = ItemContentAdminListResource::class;

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
