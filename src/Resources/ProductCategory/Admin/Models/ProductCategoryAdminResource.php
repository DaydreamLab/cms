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
            'code'          => $this->code,
            'description'   => $this->description,
            'memo'          => $this->memo,
            'params'        => $this->params,
            'parent_id'     => $this->parent_id,
            'state'         => $this->state,
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'     => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'   => $this->creatorName,
            'updaterName'   => $this->updaterName,
            'lockerName'    => $this->lockerName
        ];
    }
}
