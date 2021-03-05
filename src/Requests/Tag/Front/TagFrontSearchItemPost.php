<?php

namespace DaydreamLab\Cms\Requests\Tag\Front;

use DaydreamLab\Cms\Requests\Tag\TagSearchPost;
use Illuminate\Validation\Rule;

class TagFrontSearchItemPost extends TagSearchPost
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
            'order_by'  => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'access',
                    'content_type',
                    'ordering',
                    'created_at',
                    'updated_at',
                    'created_by',
                    'updated_by',
                ])
            ],
            'page' => 'nullable|integer',
        ];
        return array_merge($rules, parent::rules());
    }
}
