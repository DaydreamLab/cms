<?php

namespace DaydreamLab\Cms\Resources\IotResource\Front\Models;

use DaydreamLab\Cms\Resources\IotSolution\Front\Collections\IotSolutionFrontSearchResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotResourceFrontResource extends BaseJsonResource
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
            'description'   => $this->description,
            'introimage'    => $this->introimage,
            'introtext'     => $this->introtext,
            'images'        => $this->images,
            'points'        => $this->points,
            'video'         => $this->video,
            'documents'     => $this->documents,
            'featured'      => $this->featured,
            'params'        => $this->params,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down),
            'categories'    => $this->categories->map(function ($c) { return $c->only(['alias', 'title']); }),
            'tags'          => $this->tags->map(function ($t) { return $t->only(['alias', 'title']); }),
            'solutions'     => new IotSolutionFrontSearchResourceCollection($this->solutions, false),
            'previous'      => $this->previous,
            'next'          => $this->next
        ];
    }
}
