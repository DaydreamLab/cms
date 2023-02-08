<?php

namespace DaydreamLab\Cms\Resources\Extrafield\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ExtrafieldAdminResource extends JsonResource
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
            'id'                        => $this->id,
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'group_id'                  => $this->group_id,
            'group_title'               => $this->group_title,
            'type'                      => $this->type,
            'state'                     => $this->state,
            'required'                  => $this->required,
            'value'                     => $this->value,
            'description'               => $this->description,
            'params'                    => $this->params,
            'ordering'                  => $this->ordering,
            'access'                    => $this->access,
            'access_title'              => $this->access_title,
            'created_at'                => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            'updated_at'                => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_up'                => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_down'              => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
            'creator'                   => $this->creator,
            'updater'                   => $this->updater,
            'locker'                    => $this->locker,
        ];
    }
}
