<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Admin;

use DaydreamLab\Cms\Requests\CmsGetItemGet;

class ExtrafieldGroupAdminGetItemGet extends CmsGetItemGet
{
    protected $apiMethod = 'getExtrafieldGroup';

    protected $modelName = 'ExtrafieldGroup';

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