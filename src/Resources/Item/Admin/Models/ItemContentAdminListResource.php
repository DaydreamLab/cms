<?php

namespace DaydreamLab\Cms\Resources\Item\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ItemContentAdminListResource extends BaseJsonResource
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
            'id'                        => $this->id,
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'state'                     => $this->state,
            'ordering'                  => $this->ordering,
            'featured'                  => $this->featured,
            'featured_ordering'         => $this->featured_ordering,
            'brands'                    => $this->brands->map(function ($b) {
                return $b->only(['id', 'title']);
            }),
            'extrafields'               => $this->extrafields,
            'created_at'                => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'                => $this->getDateTimeString($this->updated_at, $tz),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, $tz),
            'publish_up'                => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'              => $this->getDateTimeString($this->publish_down, $tz),
            'creatorName'               => $this->creatorName,
            'updaterName'               => $this->updaterName,
            'lockerName'                => $this->lockerName,
            'category'                  => [
                'title' => $this->category->title,
                'alias' => $this->category->alias
            ],
            'locker'                    => ($this->locker) ? $this->locker->only(['id', 'name']) : []
        ];
    }
}
