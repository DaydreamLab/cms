<?php

namespace DaydreamLab\Cms\Requests\Category;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class CategorySearchItemPost extends ListRequest
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
            'search'        => 'nullable|string',
            'paginate'      => [
                'nullable',
                Rule::in([0,1])
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }
}
