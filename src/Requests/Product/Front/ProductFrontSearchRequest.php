<?php

namespace DaydreamLab\Cms\Requests\Product\Front;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Requests\CmsSearchPost;

class ProductFrontSearchRequest extends CmsSearchPost
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return parent::authorize();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'brand_alias'              => 'nullable|array',
            'brand_alias.*'            => 'required|string',
            'product_category_alias'   => 'nullable|array',
            'product_category_alias.*' => 'required|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
