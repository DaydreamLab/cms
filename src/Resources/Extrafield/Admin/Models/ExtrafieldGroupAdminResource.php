<?php

namespace DaydreamLab\Cms\Resources\Extrafield\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ExtrafieldGroupAdminResource extends BaseJsonResource
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
            'id'                        => $this->id,
            'title'                     => $this->title,
            'state'                     => $this->state,
            'extrafields'               => $this->extrafields,
            'description'               => $this->description,
            'access'                    => $this->access,
            'access_title'              => $this->access_title,
            'created_at'                => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'                => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'               => $this->creatorName,
            'updaterName'               => $this->updaterName,
            'lockerName'                => $this->lockerName,
        ];
    }
}
