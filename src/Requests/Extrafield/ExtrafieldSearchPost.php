<?php

namespace DaydreamLab\Cms\Requests\Extrafield;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ExtrafieldSearchPost extends ListRequest
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
            'search' => 'nullable|string',
            'state'     => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'group_id'  => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }
}
