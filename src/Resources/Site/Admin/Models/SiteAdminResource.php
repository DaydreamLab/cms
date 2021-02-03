<?php

namespace DaydreamLab\Cms\Resources\Site\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SiteAdminResource extends JsonResource
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
            'url'                       => $this->url,
            'sitename'                  => $this->sitename,
            'sef'                       => $this->sef,
            'metakeywords'              => $this->metakeywords,
            'metadesc'                  => $this->metadesc,
            'state'                     => $this->state,
            'access'                    => $this->access,
            'ordering'                  => $this->ordering,
            'created_at'                => $this->getDateTimeString($this->created_at, config('daydreamlab.cms.timezone')),
            'updated_at'                => $this->getDateTimeString($this->updated_at, config('daydreamlab.cms.timezone')),
            'locked_at'                 => $this->getDateTimeString($this->locked_at, config('daydreamlab.cms.timezone')),
            'creator'                   => $this->creator,
            'updater'                   => $this->updater,
            'locker'                    => $this->locker,
        ];
    }
}
