<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\Item\ItemStorePost;

class ItemAdminStorePost extends ItemStorePost
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

    public function rulesInput()
    {
        $rulesInput = parent::rulesInput();
        $rulesInput['image'] = json_encode($rulesInput['image']);
        return $rulesInput;
    }
}
