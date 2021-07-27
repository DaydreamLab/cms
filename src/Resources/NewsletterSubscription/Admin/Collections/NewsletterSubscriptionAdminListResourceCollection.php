<?php

namespace DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Collections;

use DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Models\NewsletterSubscriptionAdminListResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class NewsletterSubscriptionAdminListResourceCollection extends BaseResourceCollection
{
    public $collects = NewsletterSubscriptionAdminListResource::class;
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