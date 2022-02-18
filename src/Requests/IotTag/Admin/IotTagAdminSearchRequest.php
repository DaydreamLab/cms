<?php

namespace DaydreamLab\Cms\Requests\IotTag\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;

class IotTagAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotTag';

    protected $apiMethod = 'searchIotTag';
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
