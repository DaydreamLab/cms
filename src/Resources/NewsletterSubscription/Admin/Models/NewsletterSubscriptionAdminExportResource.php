<?php

namespace DaydreamLab\Cms\Resources\NewsletterSubscription\Admin\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class NewsletterSubscriptionAdminExportResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tz = $request->user('api')->timezone;
        $category = $this->newsletterCategories->map(function ($n) {
            return $n->title;
        });
        $temp[] = implode(',', $category->toArray());
        return [
            $this->userGroupName,
            $this->companyName,
            $this->userName,
            $this->email,
            $this->userMobilePhone,
            implode(',', $category->toArray())
        ];
    }
}
