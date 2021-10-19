<?php

namespace DaydreamLab\Cms\Resources\Brand\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;
use DaydreamLab\Media\Resources\File\Front\Collections\FileFrontSearchResourceCollection;

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
        # 過濾 bulletin, promotion, video 是否在品牌頁顯示
        $todo = ['bulletin', 'promotion', 'video'];
        $items = $this->items;
        foreach ($todo as $t) {
            $tempCol = collect($items[$t]);
            $items[$t] = $tempCol->filter(function ($i) { return ($i->extrafields['brand_page_show']['value'] == 1); })->values();
        }

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
            'items'                 => $items,
            'products'              => $this->products,
            'tags'                  => $this->tags,
            'files'                 => (new FileFrontSearchResourceCollection($this->files))->collection
        ];
    }
}
