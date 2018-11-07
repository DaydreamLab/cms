<?php

namespace DaydreamLab\Cms\Requests\Tag\Front;

use DaydreamLab\Cms\Requests\Tag\TagStorePost;

class TagFrontStorePost extends TagStorePost
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
                'title' => 'required|string'
        ];
        return $rules;
    }
}
