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
            'color'         => $this->color,
            'icon'          => $this->icon,
            'introTitle'    => $this->introTitle,
            'introtext'     => $this->introtext,
            'description'   => $this->description,
            'newsId'        => $this->newsId,
            'featured'      => $this->featured,
            'ordering'      => $this->ordering,
            'params'        => $this->params,
            'events'        => $this->events->map(function ($event) {
                return $event->only('id', 'title');
            }),
            'promotion'     => $this->promotions->map(function ($promotion) {
                return $promotion->only('id', 'title');
            }),
            'articles'      => $this->articles->map(function ($solution) {
                return $solution->only('id', 'title');
            }),
            'videos'        => $this->videos->map(function ($video) {
                return $video->only('id', 'title');
            }),
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
