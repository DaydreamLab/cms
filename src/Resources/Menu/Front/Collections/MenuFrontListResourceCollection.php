<?php

namespace DaydreamLab\Cms\Resources\Menu\Front\Collections;

use DaydreamLab\Cms\Resources\Menu\Front\Models\MenuFrontListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class MenuFrontListResourceCollection extends BaseResourceCollection
{
    public $collects = MenuFrontListResource::class;

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
