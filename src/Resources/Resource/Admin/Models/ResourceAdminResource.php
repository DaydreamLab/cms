<?php

namespace DaydreamLab\Cms\Resources\Resource\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ResourceAdminResource extends BaseJsonResource
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
            'alias'         => $this->alias,
            'title'         => $this->title,
            'introimage'    => $this->introimage,
            'introtext'     => $this->introtext,
            'images'        => $this->images,
            'description'   => $this->description,
            'points'        => $this->points,
            'video'         => $this->video,
            'documents'     => $this->documents,
            'state'         => $this->state,
            'params'        => $this->params,
            'locker'        => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : [],
            'locked_at'     => $this->getDateTimeString($this->locked_at, $tz),
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'publish_up'    => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'  => $this->getDateTimeString($this->publish_down, $tz)
        ];
    }
}
