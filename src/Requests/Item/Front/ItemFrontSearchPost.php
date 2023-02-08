<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ItemFrontSearchPost extends ListRequest
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
            'year'              => 'nullable|integer',
            'month'             => 'nullable|integer',
            'category_alias'    => 'nullable|array',
            'category_alias.*'  => 'nullable|string',
            'language'          => 'nullable|string|max:5',
            'order_by'      => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'category_id',
                    'featured',
                    'hits',
                    'access',
                    'ordering',
                    'created_at',
                    'updated_at',
                    'created_by',
                    'updated_by',
                ])
            ],
            'split_categories_result'   => [
                'nullable',
                'integer',
                Rule::in([0,1])
            ],
            'tag_alias' => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }

    public function validated()
    {
        $validated = parent::validated();

        if ($tag_alias = $validated->get('tag_alias')) {
            $validated->put('whereHas', [
                [
                    'relation' => 'tags',
                    'callback'  => function ($q) use ($tag_alias) {
                        $q->where('tags.alias', $tag_alias);
                    }
                ]
            ]);
        }

        $validated->forget('tag_alias');

        return $validated;
    }
}
