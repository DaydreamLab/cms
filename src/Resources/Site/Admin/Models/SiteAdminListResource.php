<?php

namespace DaydreamLab\Cms\Resources\Site\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class SiteAdminListResource extends BaseJsonResource
{
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
            'language_title'            => $this->languaue_title,
            'state'                     => $this->state,
        ];
    }
}
