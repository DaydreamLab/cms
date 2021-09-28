<?php

namespace DaydreamLab\Cms\Requests\Menu\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStateRequest;

class MenuAdminStatePost extends CmsStateRequest
{
    protected $apiMethod = 'stateMenu';

    protected $modelName = 'Menu';
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
