<?php

namespace DaydreamLab\Cms\Requests\ProductCategory\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class ProductCategoryAdminStoreRequest extends CmsStoreRequest
{
    protected $apiMethod = 'storeProductCategory';

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
            'id'                => 'nullable|integer',
            'parent_id'         => 'nullable|integer',
            'title'             => 'required|string',
            'alias'             => 'nullable|string',
            'description'       => 'nullable|string',
            'image'             => 'nullable|string',
            'memo'              => 'nullable|string',
            'params'            => 'nullable|array',
            'ordering'          => 'nullable|integer',
            'state'             => ['nullable', Rule::in([0,1,-1,-2])]
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));

        return $validated;
    }
}
