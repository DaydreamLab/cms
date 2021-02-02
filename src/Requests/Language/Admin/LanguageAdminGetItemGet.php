<?php

namespace DaydreamLab\Cms\Requests\Language\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class LanguageAdminGetItemGet extends AdminRequest
{
    protected $apiMethod = 'getLanguage';

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
        return parent::rules();
    }
}
