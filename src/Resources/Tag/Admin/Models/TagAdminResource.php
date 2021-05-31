<?php

namespace DaydreamLab\Cms\Resources\Tag\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use DaydreamLab\Dddream\Helpers\ResourceHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class TagAdminResource extends JsonResource
{
    use CmsResource;
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
            'parent_id'                 => $this->parent_id,
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'path'                      => $this->path,
            'state'                     => $this->state,
            'description'               => $this->description,
            'extension'                 => $this->extension,
            'content_type'              => $this->content_type,
            'hits'                      => $this->hits,
            'access'                    => $this->access,
            'language'                  => $this->language,
            'ordering'                  => $this->ordering,
            'featured'                  => $this->featured,
            'featured_ordering'         => $this->featured_ordering,
            'params'                    => $this->params,
            'created_at'                => $this->getDateTimeString($this->created_at, $tz),
            'updated_at'                => $this->getDateTimeString($this->updated_at,$tz),
            'locked_at'                 => $this->getDateTimeString($this->locked_at,$tz),
            'publish_up'                => $this->getDateTimeString($this->publish_up, $tz),
            'publish_down'              => $this->getDateTimeString($this->publish_down, $tz),
            'creatorName'               => $this->creatorName,
            'updaterName'               => $this->updaterName,
            'lockerName'                => $this->lockerName,
        ];
    }
}
