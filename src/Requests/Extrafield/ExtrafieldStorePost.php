<?php

namespace DaydreamLab\Cms\Requests\Extrafield;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ExtrafieldStorePost extends AdminRequest
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
            'group_id'      => 'required|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'type'          => 'required|string',
            'value'         => 'nullable|string',
            'description'   => 'nullable|string',
            'params'        => 'nullable|string',
            'ordering'      => 'nullable|integer'
        ];
    }
}
