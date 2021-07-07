<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Validation\Rule;

class ExtrafieldAdminSearchPost extends CmsSearchPost
{
    protected $apiMethod = 'searchExtrafield';

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
            'search' => 'nullable|string',
            'state'     => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'group_id'  => 'nullable|integer'
        ];
        return array_merge(parent::rules(), $rules);
    }
}
