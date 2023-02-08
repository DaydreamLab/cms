<?php

namespace DaydreamLab\Cms\Requests\Site\Admin;

use DaydreamLab\Cms\Requests\CmsGetItemGet;

class SiteAdminGetItemGet extends CmsGetItemGet
{
    protected $apiMethod = 'getSite';

    protected $modelName = 'Site';

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
