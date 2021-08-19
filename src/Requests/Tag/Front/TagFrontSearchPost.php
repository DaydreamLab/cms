<?php

namespace DaydreamLab\Cms\Requests\Tag\Front;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class TagFrontSearchPost extends ListRequest
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
            'hot'   => 'nullable|boolean'
        ];
        return array_merge(parent::rules(), $rules);
    }
}
