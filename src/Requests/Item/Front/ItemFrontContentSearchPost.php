<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ItemFrontContentSearchPost extends ListRequest
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
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ( $content_type = $this->route('content_type') ) {
            $categories = Category::where('content_type', $content_type)->where('state', 1)->get();
            $category_ids = $categories->map(function ($c) {
                return $c->id;
            })->toArray();
            $validated['q'] = $this->q->whereIn('category_id', $category_ids);
        }

        return $validated;
    }
}
