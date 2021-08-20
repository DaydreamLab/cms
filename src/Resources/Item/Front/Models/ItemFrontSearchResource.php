<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ItemFrontSearchResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title'                     => $this['title'],
            'alias'                     => $this['alias'],
            'description'               => $this['description'],
            'contentType'               => $this['contentType']
        ];
    }
}