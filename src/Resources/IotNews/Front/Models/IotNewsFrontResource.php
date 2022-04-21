<?php

namespace DaydreamLab\Cms\Resources\IotNews\Front\Models;

use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\Cms\Resources\IotSolution\Front\Collections\IotSolutionFrontSearchResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotNewsFrontResource extends BaseJsonResource
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
            'category'      => '新訊',
            'alias'         => $this->alias,
            'title'         => $this->title,
            'description'   => $this->description,
            'introimage'    => DataHelper::completeImageUrl($this->introimage),
            'introtext'     => $this->introtext,
            'image'         => DataHelper::completeImageUrl($this->image),
            'featured'      => $this->featured,
            'params'        => $this->params,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down),
            'tags'          => $this->tags->map(function ($t) { return $t->only(['alias', 'title']); }),
            'solutions'     => new IotSolutionFrontSearchResourceCollection($this->solutions, false),
            'previous'      => $this->previous,
            'next'          => $this->next
        ];
    }
}