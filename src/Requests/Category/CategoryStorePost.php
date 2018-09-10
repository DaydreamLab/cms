<?php

namespace DaydreamLab\Cms\Requests\Category;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class CategoryStorePost extends AdminRequest
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
            'parent_id'     => 'nullable|integer',
            'state'         => [
                'required',
                Rule::in([0,1,-1,-2])
            ],
            'introimage'    => 'nullable|string',
            'introtext'     => 'nullable|string',
            'image'         => 'nullable|string',
            'description'   => 'nullable|string',
            'extension'     => 'nullable|string',
            'language'      => 'nullable|string',
            'metadesc'      => 'nullable|string',
            'metadata'      => 'nullable|string',
        ];
    }
}
