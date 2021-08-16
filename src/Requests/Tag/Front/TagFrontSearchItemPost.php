<?php

namespace DaydreamLab\Cms\Requests\Tag\Front;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class TagFrontSearchItemPost extends ListRequest
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
            'type' => [
                'nullable',
                'string',
                Rule::in([
                    'brand',
                    'solution',
                    'case',
                    'course',
                    'file',
                    'news',
                    'video'
                ])
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }
}
