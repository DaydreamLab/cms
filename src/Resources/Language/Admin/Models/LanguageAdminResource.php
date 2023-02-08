<?php

namespace DaydreamLab\Cms\Resources\Language\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class LanguageAdminResource extends JsonResource
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
            'type'                      => $this->type,
            'code'                      => $this->code,
            'sef'                       => $this->sef,
            'image'                     => $this->image,
            'state'                     => $this->state,
            'description'               => $this->description,
            'created_at'                => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            'updated_at'                => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            'publish_up'                => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'publish_down'              => $this->getDateTimeString($this->publish_down, config('daydreamlab.cms.timezone')),
            'creator'                   => $this->creator,
            'updater'                   => $this->updater,
        ];
    }
}
