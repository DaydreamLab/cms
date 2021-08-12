<?php

namespace DaydreamLab\Cms\Resources\Product\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ProductFrontResource extends BaseJsonResource
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
            'product_data'              => $this->product_data
        ];
    }
}
