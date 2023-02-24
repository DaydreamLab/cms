<?php

namespace DaydreamLab\Cms\Resources\Curation\Front\Models;

use DaydreamLab\Cms\Resources\Topic\Front\Collections\TopicFrontListResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CurationFrontResource extends BaseJsonResource
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
            'title'         => $this->title,
            'alias'         => $this->alias,
            'slideshow'     => $this->slideshow,
            'introtext'     => $this->introtext,
            'description'   => $this->description,
            'params'        => $this->params,
            'topics'        => new TopicFrontListResourceCollection($this->topics, false)
        ];
    }
}
