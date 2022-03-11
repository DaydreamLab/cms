<?php

namespace DaydreamLab\Cms\Requests\Setting\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;

class SettingFrontSearchRequest extends CmsGetItemRequest
{
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
        return [
            'url' => 'required|string'
        ];
    }
}
