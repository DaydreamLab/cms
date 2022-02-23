<?php

namespace DaydreamLab\Cms\Resources\IotEvent\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotEventAdminResource extends BaseJsonResource
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
            'introimage'        => $this->introimage,
            'introtext'         => $this->introtext,
            'description'       => $this->description,
            'start_date'        => $this->getDateTimeString($this->start_date, $tz),
            'end_date'          => $this->getDateTimeString($this->end_date, $tz),
            'status'            => $this->status,
            'contacts'          => $this->contacts,
            'location'          => $this->location,
            'permission'        => $this->permission,
            'sponsors'          => $this->sponsors,
            'url'               => $this->url,
            'state'             => $this->state,
            'params'            => $this->params,
            'featured'          => $this->featured,
            'featured_ordering' => $this->featured_ordering,
            'locker'            => ($this->locker) ? $this->locker->only(['id', 'uuid', 'name']) : [],
            'locked_at'         => $this->getDateTimeString($this->locked_at, $tz),
            'created_at'        => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'        => $this->getDateTimeString($this->updated_at, $tz),
            'publish_up'        => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'      => $this->getDateTimeString($this->publish_down, $tz)
        ];
    }
}
