<?php

namespace DaydreamLab\Cms\Resources\Product\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ProductFrontListResource extends BaseJsonResource
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

            'title'                     => $this->title,
            'alias'                     => $this->alias,


        ];
    }
}
