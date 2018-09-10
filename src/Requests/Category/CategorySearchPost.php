<?php

namespace DaydreamLab\Cms\Requests\Category;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class CategorySearchPost extends ListRequest
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
            'search'    => 'nullable|string',
            'state'     => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'language'  => 'nullable|string',
            'created_by'=> 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }
}
