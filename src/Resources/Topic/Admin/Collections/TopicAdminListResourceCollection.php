<?php

namespace DaydreamLab\Cms\Resources\Topic\Admin\Collections;

use DaydreamLab\Cms\Resources\Topic\Admin\Models\TopicAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class TopicAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = TopicAdminListResource::class;

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
