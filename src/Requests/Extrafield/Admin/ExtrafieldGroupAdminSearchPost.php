<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Admin;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ExtrafieldGroupAdminSearchPost extends ListRequest
{
    protected $apiMethod = 'searchExtrafieldGroup';

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
            'state' => ['nullable', Rule::in([0, 1, -2])]
        ];
        return array_merge(parent::rules(), $rules);
    }
}
