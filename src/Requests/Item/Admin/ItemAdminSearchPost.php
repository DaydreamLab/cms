<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\Item\ItemSearchPost;
use Illuminate\Validation\Rule;

class ItemAdminSearchPost extends ItemSearchPost
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
            'state'        => [
                'nullable',
                'integer',
                Rule::in([0, 1, -1, -2])
            ],
            'category_id'  => 'nullable|integer',
            'featured'     => [
                'nullable',
                Rule::in([0, 1])
            ],
            'content_type' => [
                'nullable',
                Rule::in(['article', 'simple-item', 'link', 'slideshow', 'simple-item'])
            ],
            'extension'    => [
                'nullable',
                Rule::in(['item', 'module', 'menu'])
            ],
            'access'       => 'nullable|integer',
            'language'     => [
                'nullable',
                'string',
                Rule::in([
                    '*',
                    'en',
                    'zh-Hant'
                ]),
            ],
            'order_by'     => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'category_id',
                    'featured',
                    'state',
                    'introimage',
                    'image',
                    'description',
                    'hits',
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
        return array_merge($rules, parent::rules());
    }
}
