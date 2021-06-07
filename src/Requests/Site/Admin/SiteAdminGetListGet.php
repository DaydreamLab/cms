<?php

namespace DaydreamLab\Cms\Requests\Site\Admin;

use DaydreamLab\Cms\Requests\CmsGetItemGet;

class SiteAdminGetListGet extends CmsGetItemGet
{
    protected $apiMethod = 'getSiteList';

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


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('state', 1);
        $validated->put('paginate', 0);

        return $validated;
    }
}
