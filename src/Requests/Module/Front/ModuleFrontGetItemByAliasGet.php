<?php

namespace DaydreamLab\Cms\Requests\Module\Front;

use DaydreamLab\Cms\Requests\CmsGetItemGet;

class ModuleFrontGetItemByAliasGet extends CmsGetItemGet
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
        return parent::rules();
    }
}