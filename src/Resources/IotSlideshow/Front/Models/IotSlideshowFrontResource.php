<?php

namespace DaydreamLab\Cms\Resources\IotSlideshow\Front\Models;

use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotSlideshowFrontResource extends BaseJsonResource
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
            'alias'         => $this->alias,
            'title'         => $this->title,
            'sub_title'     => $this->sub_title,
            'description'   => $this->description,
            'url'           => $this->url,
            'image'         => DataHelper::completeImageUrl($this->image),
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down)
        ];
    }
}
