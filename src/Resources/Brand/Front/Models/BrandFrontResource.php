<?php

namespace DaydreamLab\Cms\Resources\Brand\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class BrandFrontResource extends BaseJsonResource
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
            'alias'                 => $this->alias,
            'title'                 => $this->title,
            'title_zhtw'            => $this->title_zhtw,
            'description'           => $this->description,
            'factory_url'           => $this->factory_url,
            'contact'               => ($this->contact == null) ? [] : $this->contact,
            'contact_email'         => $this->contact_email,
            'business_representitive' => $this->business_representitive,
            'logo_image'            => $this->logo_image,
            'banner_image'          => $this->banner_image,
            'banner_link'           => $this->banner_link,
            'params'                => $this->params,
            'items'                 => $this->items,
            'products'              => $this->products,
            'tags'                  => $this->tags
        ];
    }
}
