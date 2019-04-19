<?php

namespace DaydreamLab\Cms\Requests\Module;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ModuleStorePost extends AdminRequest
{
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
        return [
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
            'publish_up'    => 'nullable|datetime',
            'publish_down'  => 'nullable|datetime',
        ];
    }
}
