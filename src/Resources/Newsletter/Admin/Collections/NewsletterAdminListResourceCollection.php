<?php

namespace DaydreamLab\Cms\Resources\Newsletter\Admin\Collections;

use DaydreamLab\Cms\Resources\Newsletter\Admin\Models\NewsletterAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class NewsletterAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = NewsletterAdminListResource::class;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}