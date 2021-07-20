<?php

namespace DaydreamLab\Cms\Resources\CustomerMessageReply\Admin\Collections;

use DaydreamLab\Cms\Resources\CustomerMessageReply\Admin\Models\CustomerMessageReplyAdminResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class CustomerMessageReplyAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = CustomerMessageReplyAdminResource::class;
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
