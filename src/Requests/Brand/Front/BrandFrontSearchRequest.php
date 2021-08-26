<?php

namespace DaydreamLab\Cms\Requests\Brand\Front;

use DaydreamLab\Cms\Requests\CmsSearchPost;

class BrandFrontSearchRequest extends CmsSearchPost
{
    protected $searchKeys = ['title', 'title_zhtw', 'description'];

    protected $needAuth = false;
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
            'product_category_alias'   => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
