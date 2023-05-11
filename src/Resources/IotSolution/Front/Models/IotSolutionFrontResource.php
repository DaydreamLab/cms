<?php

namespace DaydreamLab\Cms\Resources\IotSolution\Front\Models;

use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\Cms\Resources\IotResource\Front\Collections\IotResourceFrontSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotSolution\Front\Collections\IotSolutionFrontSearchResourceCollection;
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
            'introimage'    => DataHelper::completeImageUrl($this->introimage),
            'introtext'     => $this->introtext,
            'images'        => array_map(function ($i) {
                return DataHelper::completeImageUrl($i);
            }, $this->images),
            'description'   => $this->description,
            'contacts'      => $this->contacts,
            'featured'      => $this->featured,
            'params'        => $this->params,
            'created_at'    => $this->getDateTimeString($this->created_at),
            'updated_at'    => $this->getDateTimeString($this->updated_at),
            'publish_up'    => $this->getDateTimeString($this->publish_up),
            'publish_down'  => $this->getDateTimeString($this->publish_down),
            'creator'       => $this->creator->only(['name']),
            'categories'    => $this->categories->map(function ($c) { return $c->only(['alias', 'title']); }),
            'tags'          => $this->tags->map(function ($t) { return $t->only(['alias', 'title']); }),
            'resources'     => new IotResourceFrontSearchResourceCollection($this->resources, false),
            'related_solutions'  => new IotSolutionFrontSearchResourceCollection($this->relatedSolutions, false),
            'previous'      => $this->previous,
            'next'          => $this->next
        ];
    }
}