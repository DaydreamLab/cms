<?php

namespace DaydreamLab\Cms\Resources\Brand\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class BrandAdminListResource extends BaseJsonResource
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
            'id'                    => $this->id,
            'code'                  => $this->code,
            'alias'                 => $this->alias,
            'title'                 => $this->title,
            'title_zhtw'            => $this->title_zhtw,
            'description'           => $this->description,
            'state'                 => $this->state,
            'locked_at'             => $this->getDateTimeString($this->locked_at, $tz),
            'created_at'            => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'            => $this->getDateTimeString($this->updated_at, $tz),
            'creatorName'           => $this->creatorName,
            'updaterName'           => $this->updaterName,
            'lockerName'            => $this->lockerName,
            'locker'                => ($this->locker) ? $this->locker->only(['id', 'name']) : []
        ];
    }
}