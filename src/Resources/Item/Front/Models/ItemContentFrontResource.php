<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Models;

use DaydreamLab\Cms\Models\Item\Item;
use DaydreamLab\JJAJ\Resources\BaseJsonResource;
use Illuminate\Support\Collection;

class ItemContentFrontResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'title'                     => $this->title,
            'alias'                     => $this->alias,
            'category_alias'            => $this->category->alias,
            'category_title'            => $this->category->title,
            'brands'                    => $this->brands->map(function ($b) {
                return $b->only(['alias', 'title', 'logo_image', 'contact']);
            }),
            'publish_up'                => $this->getDateTimeString($this->publish_up),
            'state'                     => $this->state,
            'introimage'                => $this->introimage,
            'introtext'                 => $this->introtext,
            'image'                     => $this->image,
            'description'               => $this->description,
            'link'                      => $this->link,
            'video'                     => $this->video,
            'hits'                      => $this->hits,
            'access'                    => $this->access,
            'language'                  => $this->language,
            'params'                    => $this->params,
            'tags'                      => $this->tags,
            'products'                  => $this->products,
            'extrafields'               => $this->extrafields,
            'prev'                      => $this->previous,
            'next'                      => $this->next
        ];

        if ($this->category->content_type == 'solution') {
            $scId = $this->extrafields['solution_category']['value'];
            $sc = Item::where('id', $scId)->first();
            $data['solutionCategory'] = ['title' => ($sc) ? $sc->title : '', 'alias' => ($sc) ? $sc->alias : ''];

            $data['industryCategory'] = [];
            $ics = $this->extrafields['industry_category']['value'];
            foreach ($ics as $ic) {
                $i = Item::where('id', $ic['id'])->where('state', 1)->first();
                if ($i) {
                    $data['industryCategory'][] = ['title' => $i->title, 'alias' => $i->alias];
                }
            }
        }

        if ( $this->category->content_type == 'case' ) {
            $ic = $this->extrafields['industry_category']['value'];
            $i = Item::where('id', $ic)->first();
            $data['industryCategory'] = ['title' => ($i) ? $i->title : '', 'alias' => ($i) ? $i->alias : ''];
        }

        return $data;
    }
}
