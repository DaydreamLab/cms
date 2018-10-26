<?php

namespace DaydreamLab\Cms\Requests\Extrafield\Front;

use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldOrderingPost;

class ExtrafieldFrontOrderingPost extends ExtrafieldOrderingPost
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
