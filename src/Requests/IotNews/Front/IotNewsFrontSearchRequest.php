<?php

namespace DaydreamLab\Cms\Requests\IotNews\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;

class IotNewsFrontSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotNews';

    protected $apiMethod = 'searchIotNews';

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
            'tags'              => 'nullable|array',
            'tags.*'            => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
