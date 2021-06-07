<?php

namespace DaydreamLab\Cms\Resources\Extrafield\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ExtrafieldAdminResource extends BaseJsonResource
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
            'alias'                     => $this->alias,
            'group_id'                  => $this->group_id,
            'group_title'               => $this->group->title,
            'type'                      => $this->type,
            'state'                     => $this->state,
            'required'                  => $this->required,
            'value'                     => $this->value,
            'description'               => $this->description,
            'params'                    => $this->params,
            'ordering'                  => $this->ordering,
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
