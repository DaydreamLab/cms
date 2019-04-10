<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\Item\ItemSearchPost;
use Illuminate\Validation\Rule;

class ItemAdminSearchPost extends ItemSearchPost
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
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'category_id'   => 'nullable|integer',
            'featured'      =>[
                'nullable',
                Rule::in([0,1])
            ],
            'content_type'  => [
                'nullable',
                Rule::in(['article', 'item', 'link', 'menu', 'slideshow', 'timeline'])
            ],
            'extension'     => [
                'nullable',
                Rule::in(['item', 'module', 'menu'])
            ],
            'access'        => 'nullable|integer',
            'language'      => 'nullable|string|min:1|max:2'
        ];
        return array_merge($rules, parent::rules());
    }
}
