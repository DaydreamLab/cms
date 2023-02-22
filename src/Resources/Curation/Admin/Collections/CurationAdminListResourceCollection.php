<?php

namespace DaydreamLab\Cms\Resources\Curation\Admin\Collections;

use DaydreamLab\Cms\Resources\Curation\Admin\Models\CurationAdminResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class CurationAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = CurationAdminResource::class;

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
