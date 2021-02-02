<?php

namespace DaydreamLab\Cms\Resources\Site\Admin\Collections;

use DaydreamLab\Cms\Resources\Site\Admin\Models\SiteAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class SiteAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = SiteAdminListResource::class;

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
