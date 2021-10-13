<?php

namespace DaydreamLab\Cms\Resources\Product\Front\Models;

use DaydreamLab\JJAJ\Resources\BaseJsonResource;

class ProductFrontResource extends BaseJsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $product_data = $this->product_data;
        $user = $request->user('api');

        // 非經銷會員將 distributePrice 拔掉
        if ($user) {
            $group = $user->groups()->where('title', '=', '經銷會員')->first();
        } else {
            $group = null;
        };

        if (! $group) {
            foreach ($product_data as &$product) {
                unset($product['distributePrice']);
            }
        }

        return [
            'title'             => $this->title,
            'alias'             => $this->alias,
            'description'       => $this->description,
            'brands'            => $this->brands,
            'category'          => $this->category,
            'product_data'      => $product_data,
            'params'            => $this->params
        ];
    }
}
