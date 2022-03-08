<?php

namespace DaydreamLab\Cms\Resources\IotNews\Front\Models;

use DaydreamLab\Cms\Models\IotNews\Front\IotNewsFront;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotNewsFrontSearchResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'category'      => get_class($this->resource) == IotNewsFront::class ? '新訊' : '活動',
            'alias'         => $this->alias,
            'title'         => $this->title,
            'introimage'    => $this->introimage,
            'introtext'     => $this->introtext,
            'featured'      => $this->featured,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down)
        ];
    }
}
