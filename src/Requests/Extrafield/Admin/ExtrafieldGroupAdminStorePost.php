<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class ExtrafieldGroupAdminStorePost extends AdminRequest
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
            'access'        => 'nullable|integer',
            'created_by'    => 'nullable|integer',
        ];
        return array_merge(parent::rules(), $rules);
    }
}
