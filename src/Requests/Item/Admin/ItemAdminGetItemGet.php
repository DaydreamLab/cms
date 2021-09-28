<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;

class ItemAdminGetItemGet extends CmsGetItemRequest
{
    protected $apiMethod = 'getItem';

    protected $modelName = 'Item';

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
