<?php

namespace DaydreamLab\Cms\Resources\IotEvent\Front\Models;

use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\Cms\Models\IotEvent\Front\IotEventFront;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotEventFrontSearchResource extends BaseJsonResource
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
            'category'      => get_class($this->resource) == IotEventFront::class ? '活動' : '新訊',
            'alias'         => $this->alias,
            'title'         => $this->title,
            'description'   => $this->description,
            'introimage'    => DataHelper::completeImageUrl($this->introimage),
            'introtext'     => $this->introtext,
            'featured'      => $this->featured,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down)
        ];
    }
}
