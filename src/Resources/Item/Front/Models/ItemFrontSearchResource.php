<?php

namespace DaydreamLab\Cms\Resources\Item\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ItemFrontSearchResource extends BaseJsonResource
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
            'title'             => $this['title'],
            'alias'             => $this['alias'],
            'introtext'         => $this['introtext'],
            'description'       => strip_tags($this['description']),
            'brands'            => $this['brands'],
            'contentType'       => $this['contentType'],
            'userGroupId'       => $this['userGroupId']
        ];

        if (isset($this['seriesNum'])) {
            $data['seriesNum'] = $this['seriesNum'];
        }

        if ($data['contentType'] == 'file') {
            $data['downloadLink'] = $this['downloadLink'];
            $data['linkType'] = $this['linkType'];
            $data['webLink'] = $this['webLink'];
            $data['size'] = $this['size'];
        }

        return $data;
    }
}
