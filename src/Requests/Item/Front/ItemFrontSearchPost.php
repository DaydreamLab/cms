<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\Cms\Requests\Item\ItemSearchPost;

class ItemFrontSearchPost extends ItemSearchPost
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
            'year'              => 'nullable|integer',
            'month'             => 'nullable|integer',
            'category_alias'    => 'nullable|string',
            'language'          => 'nullable|string|max:5',
        ];
        return array_merge($rules, parent::rules());
    }
}
