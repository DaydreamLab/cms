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
        return [
            'types'      => 'nullable|array',
            'types.*'    => [
                'nullable',
                Rule::in([
                    'asset',
                    'extension',
                    'extrafield_group',
                    'item_category',
                    'item_article_category',
                    'item_content_type',
                    'language',
                    'site',
                    'menu',
                    'menu_category',
                    'module',
                    'module_category',
                    'user_group',
                    'viewlevel',
                ])
            ]
        ];
    }
}
