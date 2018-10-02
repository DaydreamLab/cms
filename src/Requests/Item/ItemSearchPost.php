<?php

namespace DaydreamLab\Cms\Requests\Item;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ItemSearchPost extends ListRequest
{

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
            'title' => 'nullable|string',
            'state'     => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }
}
