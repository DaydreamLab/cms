<?php

namespace DaydreamLab\Cms\Resources\Tag\Front\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use DaydreamLab\Dddream\Helpers\ResourceHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class TagFrontResource extends JsonResource
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
        return [
            //'id'                        => $this->id,
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'path'                      => $this->path,
            'parent_id'                 => $this->parent_id,
            'ordering'                  => $this->ordering,
            'state'                     => $this->state,
            'description'               => $this->description,
            'content_type'              => $this->content_type,
            'hits'                      => $this->hits,
            'access'                    => $this->access,
            'language'                  => $this->language,
            'metadesc'                  => $this->metadesc,
            'metakeywords'              => $this->metakeywords,
            'params'                    => $this->params,
            'created_at'                => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            'updated_at'                => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_up'                => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_down'              => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
            //'creator'                   => $this->creator,
            //'updater'                   => $this->updater,
            //'locker'                    => $this->locker,
        ];
    }
}
