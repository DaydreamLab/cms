<?php

namespace DaydreamLab\Cms\Resources\Tag\Front\Models;

use DaydreamLab\Dddream\Helpers\ResourceHelper;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class TagFrontResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $params = $this->params;
        return [
            //'id'                        => $this->id,
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'hot'                       => isset($params['hot']) ? $params['hot'] : 0,
            //'path'                      => $this->path,
            //'parent_id'                 => $this->parent_id,
            //'ordering'                  => $this->ordering,
            //'state'                     => $this->state,
            //'description'               => $this->description,
            //'content_type'              => $this->content_type,
            //'hits'                      => $this->hits,
            //'access'                    => $this->access,
            //'language'                  => $this->language,
            //'params'                    => $this->params,
            //'created_at'                => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            //'updated_at'                => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            //'locked_at'                 => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            //'publish_up'                => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            //'publish_down'              => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
            //'creator'                   => $this->creator,
            //'updater'                   => $this->updater,
            //'locker'                    => $this->locker,
        ];
    }
}
