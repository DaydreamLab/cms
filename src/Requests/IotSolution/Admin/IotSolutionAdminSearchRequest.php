<?php

namespace DaydreamLab\Cms\Requests\IotSolution\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class IotSolutionAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotSolution';

    protected $apiMethod = 'searchIotSolution';
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
            'state' => [ 'nullable', Rule::in([0, 1, -1, -2]) ],
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
