<?php

namespace DaydreamLab\Cms\Requests\Option;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class OptionGetListPost extends AdminRequest
{
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
            'types'         => 'nullable|array',
            'types.*'       => [
                'nullable',
                Rule::in([
                    'brand',
                    'product_category',
                    'product_parent_category',
                    'product_child_category',
                    'solution_category',
                    'industry_category',
                    'newsletter_category',
                    'download_file_category',
                    'contract_file_category'
                ])
            ],
            'brand_alias'   => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }
}
