<?php

namespace DaydreamLab\Cms\Requests\Category\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class CategoryAdminGetItem extends AdminRequest
{
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
        return parent::rules();
    }
}
