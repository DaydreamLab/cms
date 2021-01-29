<?php

namespace DaydreamLab\Cms\Resources\Category\Admin\Models;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryAdminResource extends JsonResource
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
            'tree_title'                => $this->tree_title,
            'alias'                     => $this->alias,
            'parent_id'                 => $this->parent_id,
            'state'                     => $this->state,
            'ordering'                  => $this->ordering,
            'introimage'                => $this->introimage,
            'introtext'                 => $this->introtext,
            'image'                     => $this->image,
            'description'               => $this->description,
            'content_type'              => $this->content_type,
            'extension'                 => $this->extension,
            'hits'                      => $this->hits,
            'access'                    => $this->access,
            'language'                  => $this->language,
            'metadesc'                  => $this->metadesc,
            'metakeywords'              => $this->metakeywords,
            'params'                    => $this->params,
            'item_extrafield_group_id'  => $this->extrafield_group_id,
            'extrafield_group_id'       => $this->extrafield_group_id,
            'extrafields'               => $this->extrafields,
        ];
    }
}
