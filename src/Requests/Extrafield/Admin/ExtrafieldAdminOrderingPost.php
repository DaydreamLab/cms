<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsOrderingRequest;

class ExtrafieldAdminOrderingPost extends CmsOrderingRequest
{
    protected $apiMethod = 'deleteExtrafield';

    protected $modelName = 'Extrafield';
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
}
