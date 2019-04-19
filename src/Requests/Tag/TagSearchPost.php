<?php

namespace DaydreamLab\Cms\Requests\Tag;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class TagSearchPost extends ListRequest
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
            'order_by'              => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'state',
                    'access',
                    'language',
                    'ordering',
                    'created_at',
                    'updated_at',
                    'created_by',
                    'updated_by',
                ])
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }
}
