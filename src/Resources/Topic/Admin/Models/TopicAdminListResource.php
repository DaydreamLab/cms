<?php

namespace DaydreamLab\Cms\Resources\Topic\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;
use Illuminate\Support\Str;

class TopicAdminListResource extends BaseJsonResource
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
            'curationId'                => $this->curationId,
            'curationTitle'             => $this->curation->title,
            'title'                     => $this->title,
            'state'                     => $this->state,
            'subtitle'                  => $this->subtitle,
            'featured'                  => $this->featured,
            'image'                     => $this->image,
            'description'               => Str::words($this->description, 1),
            'created_at'                => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'                => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, $tz),
            'publish_up'                => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'              => $this->getDateTimeString($this->publish_down, $tz),
            'creatorName'               => $this->creatorName,
            'updaterName'               => $this->updaterName,
            'lockerName'                => $this->lockerName,
        ];
    }
}
