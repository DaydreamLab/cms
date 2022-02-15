<?php

namespace DaydreamLab\Cms\Resources\ProductCategory\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ProductCategoryAdminResource extends BaseJsonResource
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
            'id'            => $this->id,
            'title'         => $this->title,
            'alias'         => $this->alias,
            'description'   => $this->description,
            'image'         => $this->image,
            'memo'          => $this->memo,
            'params'        => $this->params,
            'parent_id'     => $this->parent_id,
            'state'         => $this->state,
            'ordering'      => $this->ordering,
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'     => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'   => $this->creatorName,
            'updaterName'   => $this->updaterName,
            'lockerName'    => $this->lockerName,
            'locker'        => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : []
        ];
    }
}