<?php

namespace DaydreamLab\Cms\Resources\Item\Admin\Collections;

use DaydreamLab\Cms\Resources\Item\Admin\Models\ItemAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ItemAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = ItemAdminListResource::class;

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
