<?php

namespace DaydreamLab\Cms\Requests\ProductCategory\Admin;

use DaydreamLab\Cms\Requests\CmsGetItemGet;

class ProductCategoryAdminGetTreeRequest extends CmsGetItemGet
{
    protected $apiMethod = 'getProductCategoryTree';

    protected $modelName = 'ProductCategory';
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
            //
        ];

        return array_merge(parent::rules(), $rules);
    }

}
