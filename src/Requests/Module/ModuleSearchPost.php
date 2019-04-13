<?php

namespace DaydreamLab\Cms\Requests\Module;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ModuleSearchPost extends ListRequest
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
            'category_id'   => 'nullable|integer',
            'search'        => 'nullable|string',
            'state'     => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'language'      => 'nullable|string|max:5',
            'access'        => 'nullable|integer',
        ];

        return array_merge(parent::rules(), $rules);
    }
}
