<?php

namespace DaydreamLab\Cms\Requests\Module\Admin;

use DaydreamLab\Cms\Requests\Module\ModuleSearchPost;
use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ModuleAdminSearchPost extends ListRequest
{
    protected $apiMethod = 'searchModule';

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
            'category_id'   => 'nullable|integer',
            'state'     => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'language'      => 'nullable|string|max:5',
            'access'        => 'nullable|integer',
        ];
        return array_merge($rules, parent::rules());
    }
}
