<?php

namespace DaydreamLab\Cms\Requests\IotCategory\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;

class IotCategoryAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotCategory';

    protected $apiMethod = 'searchIotCategory';

    protected $searchKeys = ['title'];
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
            'parent_id'             => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
