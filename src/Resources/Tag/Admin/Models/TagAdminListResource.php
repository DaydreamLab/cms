<?php

namespace DaydreamLab\Cms\Resources\Tag\Admin\Models;

use DaydreamLab\Cms\Traits\Resource\CmsResource;
use DaydreamLab\Dddream\Helpers\ResourceHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class TagAdminListResource extends JsonResource
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
