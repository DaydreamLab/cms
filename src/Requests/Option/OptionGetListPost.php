<?php

namespace DaydreamLab\Cms\Requests\Option;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class OptionGetListPost extends AdminRequest
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
            'types'      => 'nullable|array',
            'types.*'    => [
                'nullable',
                Rule::in([
                    'brand',
                    'item_category',
                    'item_article_category',
                    'item_content_type',
                    'product_category',
                    'product_parent_category',
                    'product_child_category',
                    'solution_category',
                    'industry_category',
                    'memorabilia_year',
                    'document_type',
                    'company_category',
                    'newsletter_category',
                    'download_file_category',
                    'contract_file_category',
                    'front_user_group',
                    'admin_user_group'
                ])
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }
}
