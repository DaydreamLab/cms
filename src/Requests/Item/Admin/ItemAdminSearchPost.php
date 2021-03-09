<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ItemAdminSearchPost extends ListRequest
{
    protected $apiMethod = 'searchItem';

    protected $modelName = 'Item';
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
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'category_id'   => 'nullable|integer',
            'featured'      =>[
                'nullable',
                Rule::in([0,1])
            ],
//            'content_type'  => [
//                'nullable',
//                Rule::in(['article', 'item', 'link', 'menu', 'slideshow', 'timeline'])
//            ],
//            'extension'     => [
//                'nullable',
//                Rule::in(['item', 'module', 'menu'])
//            ],
            'access'        => 'nullable|integer',
            'language'      => 'nullable|string|max:5',
            'order_by'      => [
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
            ],
            'tag_id' => 'nullable|integer'
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ($tag_id = $validated->get('tag_id')) {
            $validated->put('whereHas', [
                [
                    'relation' => 'tags',
                    'callback'  => function ($q) use ($tag_id) {
                        $q->where('tags.id', $tag_id);
                    }
                ]
            ]);
        }

        $validated->forget('tag_id');

        return $validated;
    }
}
