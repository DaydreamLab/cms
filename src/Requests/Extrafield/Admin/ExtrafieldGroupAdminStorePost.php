<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;

class ExtrafieldGroupAdminStorePost extends CmsStoreRequest
{
    protected $apiMethod = 'storeExtrafieldGroup';

    protected $modelName = 'ExtrafieldGroup';
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
            'id'            => 'nullable|integer',
            'title'         => 'required|string',
            'description'   => 'nullable|string',
            'ordering'      => 'nullable|integer',
            'access'        => 'nullable|integer',
            'created_by'    => 'nullable|integer',
        ];
        return array_merge(parent::rules(), $rules);
    }
}
