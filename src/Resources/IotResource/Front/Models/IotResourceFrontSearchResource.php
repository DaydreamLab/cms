<?php

namespace DaydreamLab\Cms\Resources\IotResource\Front\Models;

use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotResourceFrontSearchResource extends BaseJsonResource
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
            'introimage'    => DataHelper::completeImageUrl($this->introimage),
            'introtext'     => $this->introtext,
            'images'        => array_map(function ($i) {
                return DataHelper::completeImageUrl($i);
            }, $this->images),
            'featured'      => $this->featured,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down),
            'categories'    => $this->categories->map(function ($c) { return $c->only(['alias', 'title']); })
        ];
    }
}