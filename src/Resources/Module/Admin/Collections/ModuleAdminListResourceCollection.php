<?php

namespace DaydreamLab\Cms\Resources\Module\Admin\Collections;

use DaydreamLab\Cms\Resources\Category\Admin\Models\CategoryAdminListResource;
use DaydreamLab\Cms\Resources\Menu\Admin\Models\MenuAdminListResource;
use DaydreamLab\Cms\Resources\Module\Admin\Models\ModuleAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class ModuleAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = ModuleAdminListResource::class;

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
