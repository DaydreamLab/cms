<?php

namespace DaydreamLab\Cms\Requests\Language\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Validation\Rule;

class LanguageAdminSearchPost extends CmsSearchPost
{
    protected $apiMethod = 'searchLanguage';

    protected $modelName = 'Language';
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
            'type'  => [
                'nullable',
                Rule::in(['content', 'system'])
            ]
        ];
        return array_merge(parent::rules(), $rules);
    }
}
