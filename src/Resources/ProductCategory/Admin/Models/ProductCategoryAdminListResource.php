<?php

namespace DaydreamLab\Cms\Resources\ProductCategory\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ProductCategoryAdminListResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tz = $request->user('api')->timezone;
        return [
            'id'                => $this->id,
            'title'             => $this->title,
            'code'              => $this->code,
            'ordering'          => $this->ordering
        ];
    }
}
