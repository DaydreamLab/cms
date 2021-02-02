<?php

namespace DaydreamLab\Cms\Resources\Menu\Admin\Collections;

use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminListResource;
use DaydreamLab\Cms\Resources\Menu\Admin\Models\MenuAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class MenuAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = MenuAdminListResource::class;

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
