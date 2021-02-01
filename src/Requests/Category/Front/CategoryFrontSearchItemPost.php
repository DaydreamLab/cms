<?php

namespace DaydreamLab\Cms\Requests\Category\Front;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class CategoryFrontSearchItemPost extends ListRequest
{

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
        ];

        return array_merge(parent::rules(), $rules);
    }
}
