<?php

namespace DaydreamLab\Cms\Requests\IotSolution\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;

class IotSolutionFrontSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotSolution';

    protected $apiMethod = 'searchIotSolution';

    protected $needAuth = false;
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
            'category'          => 'required|string',
            'industries'        => 'nullable|array',
            'industires.*'      => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
