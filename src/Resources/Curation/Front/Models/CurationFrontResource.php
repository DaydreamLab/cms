<?php

namespace DaydreamLab\Cms\Resources\Curation\Front\Models;

use DaydreamLab\Cms\Resources\Topic\Front\Collections\TopicFrontListResourceCollection;
use DaydreamLab\Cms\Resources\Topic\Front\Models\TopicFrontListResource;
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
        $featuredTopics = $this->topics->where('featured', 1)->sortBy('publish_up')->values();
        $pastTopics = $this->topics->where('featured', 0)
            ->where('publish_up', '<=', now()->toDateTimeString())
            ->sortBy('publish_up')
            ->values();
        $futureTopics = $this->topics->where('featured', 0)
            ->where('publish_up', '>', now()->toDateTimeString())
            ->sortBy('publish_up')
            ->values();

        return [
            'title'         => $this->title,
            'alias'         => $this->alias,
            'slideshow'     => $this->slideshow,
            'introtext'     => $this->introtext,
            'description'   => $this->description,
            'params'        => $this->params,
            'featureTopics' => new TopicFrontListResource($featuredTopics),
            'pastTopics'    => new TopicFrontListResourceCollection($pastTopics, false),
            'futureTopics'  => new TopicFrontListResourceCollection($futureTopics, false),
        ];
    }
}
