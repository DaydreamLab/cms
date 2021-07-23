<?php

namespace DaydreamLab\Cms\Requests\ProductCategory\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ProductCategoryAdminStoreRequest extends AdminRequest
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
            'memo'              => 'nullable|string',
            'params'            => 'nullable|array',
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
