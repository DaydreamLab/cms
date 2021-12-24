<?php

namespace DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Collections;

use DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Models\NewsletterSubscriptionAdminExportResource;
use DaydreamLab\JJAJ\Resources\BaseResourceCollection;

class NewsletterSubscriptionAdminExportResourceCollection extends BaseResourceCollection
{
    public $collects = NewsletterSubscriptionAdminExportResource::class;
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
