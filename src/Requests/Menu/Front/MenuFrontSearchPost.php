<?php

namespace DaydreamLab\Cms\Requests\Menu\Front;

use DaydreamLab\Cms\Requests\Menu\MenuSearchPost;

class MenuFrontSearchPost extends MenuSearchPost
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
            'language'  => 'nullable|alpha|min:2|max:2',
        ];
        return array_merge($rules, parent::rules());
    }
}
