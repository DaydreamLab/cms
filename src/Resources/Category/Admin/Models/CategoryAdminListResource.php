<?php

namespace DaydreamLab\Cms\Resources\Category\Admin\Models;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryAdminListResource extends JsonResource
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
            'id'                    => $this->id,
            'title'                 => $this->title,
            'tree_title'            => $this->tree_title,
            'content_type'          => $this->content_type,
            'extension'             => $this->extension,
            'state'                 => $this->state,
            'introimage'            => $this->introimage,
            'language'              => $this->language,
            'language_title'        => $this->language_title,
            'access_title'          => $this->access_title,
            'ordering'              => $this->ordering,
        ];
    }
}
