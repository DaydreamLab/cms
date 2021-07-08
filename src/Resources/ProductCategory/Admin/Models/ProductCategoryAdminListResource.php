<?php

namespace DaydreamLab\Cms\Resources\ProductCategory\Admin\Models;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductCategoryAdminListResource extends JsonResource
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
            'id'            => $this->id,
            'title'         => $this->title,
            'code'          => ($this->parent) ? $this->parent->code.'-'. $this->code : $this->code,
        ];
    }
}
