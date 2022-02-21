<?php

namespace DaydreamLab\Cms\Requests\IotResource\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class IotResourceAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotResource';

    protected $apiMethod = 'searchIotResource';
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
