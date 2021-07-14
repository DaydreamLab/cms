<?php

namespace DaydreamLab\Cms\Resources\Product\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ProductAdminListResource extends BaseJsonResource
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
            'alias'             => $this->alias,
            'title'             => $this->title,
            'brand_title'       => $this->brands->map(function($b) {
                return $b->title;
            }),
            'parent_category'   => $this->productCategory->parent->title,
            'category'          => $this->productCategory->title,
            'publish_up'        => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'      => $this->getDateTimeString($this->publish_down, $tz),
        ];
    }
}