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
        $category = $this->productCategory;
        $parent = ($category) ? $category->parent : null;
        return [
            'id'                => $this->id,
            'alias'             => $this->alias,
            'title'             => $this->title,
            'state'             => $this->state,
            'brand_title'       => $this->brand_title,
            'parent_category'   => ($parent) ? $parent->title : '',
            'category'          => ($category) ? $category->title : '',
            'created_at'        => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'        => $this->getDateTimeString($this->updated_at, $tz),
            'publish_up'        => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'      => $this->getDateTimeString($this->publish_down, $tz),
            'locker'            => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : []
        ];
    }
}