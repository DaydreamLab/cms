<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ItemFrontContentSearchPost extends ListRequest
{
    protected $searchKeys = ['title', 'description'];
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
            'language'      => 'nullable|string|max:5',
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
            'content_type'  => 'nullable|string',
            'brand_alias'   => 'nullable|array',
            'brand_alias.*' => 'required|string',
            'solution_category_alias' => 'nullable|array',
            'solution_category_alias.*' => 'required|string',
            'industry_category_alias' => 'nullable|array',
            'industry_category_alias.*' => 'required|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ( $content_type = $this->route('content_type') ) {
            $validated['content_type'] = $content_type;
            if ( $content_type != 'solution' ) {
                $validated->forget(['solution_category_alias', 'industry_category_alias']);
            }
        }

        return $validated;
    }
}
