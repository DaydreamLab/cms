<?php

namespace DaydreamLab\Cms\Requests\Tag;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class TagStorePost extends AdminRequest
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
            'parent_id'     => 'nullable|integer',
            'ordering'      => 'nullable|integer',
            'title'         => 'required|string',
            'alias'         => 'nullable|string',
            'state'         => [
                'required',
                Rule::in([0,1,-1,-2])
            ],
            'description'   => 'nullable|string',
            'hits'          => 'nullable|integer',
            'access'        => 'nullable|integer',
            'language'      => 'nullable|string',
            'metadesc'      => 'nullable|string',
            'metadata'      => 'nullable|string',
            'params'        => 'nullable|string',
            'publish_up'    => 'nullable|datetime',
            'publish_sown'  => 'nullable|datetime',
        ];
    }
}
