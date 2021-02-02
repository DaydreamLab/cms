<?php

namespace DaydreamLab\Cms\Requests\Module\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ModuleAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeModule';

    protected $modelName = 'Module';
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
            'category_id'   => 'required|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'description'   => 'nullable|string',
            'access'        => 'nullable|integer',
            'language'      => 'required|string',
            'params'        => 'nullable|array',
            'publish_up'    => 'nullable|date',
            'publish_down'  => 'nullable|date',
        ];
        return array_merge($rules, parent::rules());
    }
}
