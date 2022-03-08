<?php

namespace DaydreamLab\Cms\Resources\IotSolution\Front\Models;

use DaydreamLab\Cms\Resources\IotResource\Front\Collections\IotResourceFrontSearchResourceCollection;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class IotSolutionFrontResource extends BaseJsonResource
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
            'params'        => $this->params,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down),
            'creator'       => $this->creator->only(['name']),
            'resources'     => new IotResourceFrontSearchResourceCollection($this->resources, false),
            'categories'    => $this->categories->map(function ($c) { return $c->only(['alias', 'title']); }),
            'tags'          => $this->tags->map(function ($t) { return $t->only(['alias', 'title']); }),
            'previous'      => $this->previous,
            'next'          => $this->next
        ];
    }
}
