<?php

namespace DaydreamLab\Cms\Requests\Items\Admin;

use DaydreamLab\Cms\Requests\Items\ItemsRemovePost;

class ItemsAdminRemovePost extends ItemsRemovePost
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
        $rules = [
            //
        ];
        return array_merge($rules, parent::rules());
    }
}
