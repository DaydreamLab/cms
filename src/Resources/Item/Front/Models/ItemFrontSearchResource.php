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
            'title'             => $this['title'],
            'alias'             => $this['alias'],
            'introtext'         => $this['introtext'],
            'description'       => $this['description'],
            'brands'            => $this['brands'],
            'contentType'       => $this['contentType']
        ];
    }
}
