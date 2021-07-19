<?php

namespace DaydreamLab\Cms\Resources\Newsletter\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class NewsletterAdminResource extends BaseJsonResource
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
            'description'       => $this->description,

            'created_at'        => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'        => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'         => $this->getDateTimeString($this->locked_at, $tz),
            'publish_up'        => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'      => $this->getDateTimeString($this->publish_down, $tz),
            'creatorName'       => $this->creatorName,
            'updaterName'       => $this->updaterName,
            'lockerName'        => $this->lockerName,
            'locker'            => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : []
        ];
    }
}