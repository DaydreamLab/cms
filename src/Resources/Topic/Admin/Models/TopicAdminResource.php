<?php

namespace DaydreamLab\Cms\Resources\Topic\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class TopicAdminResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tz = $request->user('api')->timezone;
        return [
            'id'            => $this->id,
            'curationId'    => $this->curationId,
            'curationTitle' => $this->curation->title,
            'title'         => $this->title,
            'subtitle'      => $this->subtitle,
            'alias'         => $this->alias,
            'state'         => $this->state,
            'image'         => $this->image,
            'banner'        => $this->banner,
            'color'         => $this->color,
            'icon'          => $this->icon,
            'introTitle'    => $this->introTitle,
            'introtext'     => $this->introtext,
            'description'   => $this->description,
            'newsId'        => $this->newsId,
            'featured'      => $this->featured,
            'featured_ordering' => $this->featured_ordering,
            'ordering'      => $this->ordering,
            'params'        => $this->params,
            'events'        => $this->events->map(function ($event) {
                return $event->only('id', 'title');
            }),
            'eventIds'  => $this->events->pluck('id')->all(),
            'promotions'     => $this->promotions->map(function ($promotion) {
                return $promotion->only('id', 'title');
            }),
            'promotionIds'  => $this->promotions->pluck('id')->all(),
            'articles'      => $this->articles->map(function ($solution) {
                return $solution->only('id', 'title');
            }),
            'articleIds'    => $this->articles->pluck('id')->all(),
            'videos'        => $this->videos->map(function ($video) {
                return $video->only('id', 'title');
            }),
            'videoIds'  => $this->videos->pluck('id')->all(),
            'created_at'    => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'    => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'     => $this->getDateTimeString($this->locked_at, $tz),
            'publish_up'    => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'  => $this->getDateTimeString($this->publish_down, $tz),
            'creatorName'   => $this->creatorName,
            'updaterName'   => $this->updaterName,
            'lockerName'    => $this->lockerName,
        ];
    }
}
