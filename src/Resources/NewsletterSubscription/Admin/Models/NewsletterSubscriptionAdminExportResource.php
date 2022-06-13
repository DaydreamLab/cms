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

        return [
            $this->user
                ? ($this->user->groups->count()
                    ? collect(['一般會員', '經銷會員'])->intersect($this->user->groups->pluck('title'))->first()
                    : '一般會員'
            ) : '非會員',
            $this->companyName,
            $this->userName,
            $this->email,
            $this->userMobilePhone,
            implode(',', $this->newsletterCategories->pluck('title')->all())
        ];
    }
}
