<?php

namespace DaydreamLab\Cms\Resources\Curation\Front\Models;

use DaydreamLab\Dsth\Helpers\EnumHelper as DsthEnumHelper;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class CurationFrontResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tz = config('daydreamlab.cms.timezone');
        return [
            'title'         => $this->title,
            'alias'         => $this->alias,
            'slideshow'     => $this->slideshow,
            'description'   => $this->description,
            'script'        => $this->script,
            'params'        => $this->params,
            'events'        => $this->events->map(function ($event) {
                $data = [
                    'title' => $event->title,
                    'alias' => $event->alias,
                    'regState'  => $event->regState,
                    'description' => $event->description,
                    'date' => $this->getDateTimeString(
                        $event->sessions->where('canRegistration', 1)->first()->startTime
                    ),
                    'youtube_url' => $this->regState == DsthEnumHelper::CLOSED && $event->type == 'online'
                        ? $event->sessions->where('canRegistration', 1)->first()->link
                        : null
                ];

                return $data;
            }),
            'promotions'    => $this->promotions->map(function ($promotion) {
                return $promotion->only('title', 'alias', 'introimage');
            }),
            'solutions'     => $this->solutions->map(function ($solution) {
                return [
                    'title' => $solution->title,
                    'alias' => $solution->alias,
                    'brands' => $solution->brands->map(function ($brand) {
                        return $brand->only('name', 'alias', 'logo_image');
                    })
                ];
            }),
            'videos'        => $this->videos->map(function ($video) {
                return [
                    'title' => $video->title,
                    'alias' => $video->alias,
                    'youtube_url' => collect($video->extrafields)->filter(function ($extrafield, $key) {
                        return $key ==  'youtube_url';
                    })->first()['value']
                ];
            }),
        ];
    }
}
