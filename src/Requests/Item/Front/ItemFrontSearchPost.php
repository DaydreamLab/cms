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
            'year'  => 'nullable|integer',
            'month' => 'nullable|integer',
            'limit' => 'nullable|integer'
        ];
        return $rules;
    }
}
