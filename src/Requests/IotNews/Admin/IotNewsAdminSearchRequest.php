<?php

namespace DaydreamLab\Cms\Requests\IotNews\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class IotNewsAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotNews';

    protected $apiMethod = 'searchIotNews';
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


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
