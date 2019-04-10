<?php

namespace DaydreamLab\Cms\Requests\Category\Admin;

use DaydreamLab\Cms\Requests\Category\CategorySearchPost;
use Illuminate\Validation\Rule;

class CategoryAdminSearchPost extends CategorySearchPost
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
        $rules = [
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'id'            => 'nullable|integer',
            'language'      => 'nullable|string',
            'extension'     => 'nullable|string',
            'created_by'    => 'nullable|integer',
            'access'        => 'nullable|integer'
        ];
        return array_merge($rules, parent::rules());
    }
}
