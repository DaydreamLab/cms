<?php

namespace DaydreamLab\Cms\Resources\Module\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ModuleAdminResource extends JsonResource
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
            'id'                    => $this->id,
            'title'                 => $this->title,
            'alias'                 => $this->alias,
            'category_id'           => $this->category_id,
            'category_alias'        => $this->category->title,
            'category_title'        => $this->category_title,
            'state'                 => $this->state,
            'description'           => $this->description,
            'access'                => $this->access,
            'access_title'          => $this->access_title,
            'language'              => $this->language,
            'language_title'        => $this->language_title,
            'params'                => $this->params,
            'extrafields'           => $this->extrafields,
            'created_at'            => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            'updated_at'            => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            'locked_at'             => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_up'            => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_down'          => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
            'creator'               => $this->creator,
            'updater'               => $this->updater,
            'locker'                => $this->locker,
        ];
    }
}
