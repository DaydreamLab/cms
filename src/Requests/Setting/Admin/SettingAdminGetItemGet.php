<?php

namespace DaydreamLab\Cms\Requests\Setting\Admin;

use DaydreamLab\Cms\Requests\CmsGetItemGet;

class SettingAdminGetItemGet extends CmsGetItemGet
{
    protected $apiMethod = 'getSetting';

    protected $modelName = 'Setting';

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
