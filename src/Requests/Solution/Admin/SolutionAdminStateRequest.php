<?php

namespace DaydreamLab\Cms\Requests\Solution\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStateRequest;

class SolutionAdminStateRequest extends CmsStateRequest
{
    protected $modelName = 'Solution';

    protected $apiMethod = 'stateSolution';
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
            //
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}