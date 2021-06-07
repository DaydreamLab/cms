<?php

namespace DaydreamLab\Cms\Resources\Tag\Admin\Models;

use DaydreamLab\Dddream\Helpers\ResourceHelper;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class TagAdminListResource extends BaseJsonResource
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
            'alias'                     => $this->alias,
            'ordering'                  => $this->ordering,
            'state'                     => $this->state,
            'description'               => $this->description,
            'content_type'              => $this->content_type,
            'extension'                 => $this->extension,
            'hits'                      => $this->hits,
            'access'                    => $this->access,
            'language_title'            => $this->language_title,
        ];
    }
}
