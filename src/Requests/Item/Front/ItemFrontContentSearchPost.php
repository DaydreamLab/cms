<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class ItemFrontContentSearchPost extends CmsSearchRequest
{
    protected $searchKeys = ['title', 'description'];

    protected $needAuth = false;
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
            'solution_category_alias'   => 'nullable|array',
            'solution_category_alias.*' => 'required|string',
            'industry_category_alias'   => 'nullable|array',
            'industry_category_alias.*' => 'required|string',
            'search_date'   => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        if ( $content_type = $this->route('content_type') ) {
            $validated['content_type'] = $content_type;
            if ( $content_type != 'solution' && $content_type != 'case' ) {
                $validated->forget(['solution_category_alias', 'industry_category_alias']);
            }
        }
//
        $q = $validated->get('q');
        $q->where(function ($q) {
            $q->whereNull('publish_up')
                ->orWhere(function ($q) {
                    $q->where('publish_up', '<', now()->toDateTimeString())
                        ->where(function ($q) {
                            $q->whereNull('publish_down')
                                ->orWhere('publish_down', '>', now()->toDateTimeString());
                        });
                });
        });
        $validated->put('q', $q);

        return $validated;
    }
}
