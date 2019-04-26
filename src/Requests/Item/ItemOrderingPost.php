<?php

namespace DaydreamLab\Cms\Requests\Item;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ItemOrderingPost extends AdminRequest
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
        return [
            'id'            => 'required|integer',
            'index_diff'    => 'required|integer',
            'order'         => [
                'required',
                Rule::in(['asc', 'desc'])
            ],
            // Item 有兩種排序所以用 orderingKey 去切割
            'orderingKey'   => [
                'nullable',
                'string',
                Rule::in(['ordering', 'featured_ordering'])
            ]
        ];
    }
}
