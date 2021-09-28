<?php

namespace DaydreamLab\Cms\Requests\Category\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;

class CategoryAdminGetItemGet extends CmsGetItemRequest
{
    protected $apiMethod = 'getCategory';

    protected $modelName = 'Category';

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
