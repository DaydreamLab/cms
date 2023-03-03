<?php

namespace DaydreamLab\Cms\Resources\Topic\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;
use DaydreamLab\Dsth\Helpers\EnumHelper as DsthEnumHelper;
use Illuminate\Support\Str;

class TopicFrontResource extends BaseJsonResource
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
            'title'         => $this->title,
            'alias'         => $this->alias,
            'subtitle'      => $this->subtitle,
            'image'         => $this->image,
            'icon'          => $this->icon,
            'description'   => $this->description,
            'params'        => $this->params,
            'events'        => $this->events->map(function ($event) {
                $data = [
                    'title' => $event->title,
                    'regState'  => $event->regState,
                    'url'   => Str::lower(config('app.url') . '/product/brand/'
                        . $event->brands->first()->title . '/event/' . $event->alias),
                    'description' => $event->description,
                    'date' => $this->getDateTimeString(
                        $event->sessions->where('canRegistration', 1)->first()->startTime
                    ),
                    'youtube_url' => $this->regState == DsthEnumHelper::CLOSED && $event->type == 'online'
                        ? $event->sessions->where('canRegistration', 1)->first()->link
                        : null
                ];

                if ($event->regState == DsthEnumHelper::FINISHED && $event->type == 'online') {
                    $data['youtube_url'] = $event->registrationType == 'impartial'
                        ? $event->sessions->where('canRegistration', 0)->first()->link
                        : $event->sessions->where('canRegistration', 1)->first()->link;
                } else {
                    $data['youtube_url'] = null;
                }

                return $data;
            }),
            'promotions'    => $this->promotions->map(function ($promotion) {
                return [
                    'title' => $promotion->title,
                    'url'   => config('app.url') . '/news/promotion/' . $promotion->alias,
                    'introimage'    => $promotion->introimage
                ];
            }),
            'articles'      => $this->articles->map(function ($article) {
                $data = [
                    'title' => $article->title,
                    'description' => Str::words(strip_tags($article->description), 10),
                    'url'   => config('app.rul') . '/',
                ];

                if ($article->category->alias == 'bulletin') {
                    $data['url'] = config('app.url') . '/news/bulletin/' . $article->alias;
                } elseif ($article->category->alias == 'solution') {
                    $data['url'] = Str::lower(config('app.url') . '/product/brand/'
                        . $article->brands->first()->title . '/solution/' . $article->alias);
                } elseif ($article->category->alias == 'case') {
                    $data['url'] = Str::lower(config('app.url') . '/product/brand/'
                    . $article->brands->first()->title . '/case/' . $article->alias);
                } else {
                    $data['url'] = '#';
                }
                return $data;
            }),
            'videos'        => $this->videos->map(function ($video) {
                return [
                    'title' => $video->title,
                    'url' =>  config('app.url') . '/video/' . $video->alias,
                    'youtube_url' => collect($video->extrafields)->filter(function ($extrafield, $key) {
                        return $key == 'youtube_url';
                    })->first()['value']
                ];
            }),
        ];
    }
}
