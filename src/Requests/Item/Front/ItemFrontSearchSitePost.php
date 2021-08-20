<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ItemFrontSearchSitePost extends ListRequest
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
            'tag'       => 'nullable|string',
            'type'      => [
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


    public function validated()
    {
        $validated = parent::validated();
        $validated->forget('q');
        return $validated;
    }
}