<?php

namespace DaydreamLab\Cms\Requests\IotSolution\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;

class IotSolutionFrontGetItemRequest extends CmsGetItemRequest
{
    protected $modelName = 'IotSolution';

    protected $apiMethod = 'getIotSolution';

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
            //
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
