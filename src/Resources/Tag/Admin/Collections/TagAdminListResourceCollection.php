<?php

namespace DaydreamLab\Cms\Resources\Tag\Admin\Collections;

use DaydreamLab\Cms\Resources\Tag\Admin\Models\TagAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class TagAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = TagAdminListResource::class;

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
