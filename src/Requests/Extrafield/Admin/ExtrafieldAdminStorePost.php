<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class ExtrafieldAdminStorePost extends CmsStoreRequest
{
    protected $apiMethod = 'storeExtrafield';

    protected $modelName = 'Extrafield';
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
            'alias'         => 'nullable|string',
            'group_id'      => 'required|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'type'          => 'required|string',
            'required'      => 'required|boolean',
            'value'         => 'nullable|string',
            'description'   => 'nullable|string',
            'ordering'      => 'nullable|integer',
            'params'        => 'nullable|array',
            'params.*'      => 'nullable|array',
            'params.*.*'    => 'nullable|array',
            'access'        => 'nullable|integer',
            'ordering'      => 'nullable|integer',
            'created_by'    => 'nullable|integer',
        ];
        return array_merge(parent::rules(), $rules);
    }
}
