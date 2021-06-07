<?php

namespace DaydreamLab\Cms\Resources\Site\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class SiteAdminResource extends BaseJsonResource
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
            'url'                       => $this->url,
            'sitename'                  => $this->sitename,
            'sef'                       => $this->sef,
            'state'                     => $this->state,
            'access'                    => $this->access,
            'ordering'                  => $this->ordering,
            'params'                    => $this->params,
            'created_at'                => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'                => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, $tz),
            'creatorName'               => $this->creatorName,
            'updaterName'               => $this->updaterName,
            'lockerName'                => $this->lockerName,
        ];
    }
}
