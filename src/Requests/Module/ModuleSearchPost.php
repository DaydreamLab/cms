<?php

namespace DaydreamLab\Cms\Requests\Module;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ModuleSearchPost extends ListRequest
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
            'search'        => 'nullable|string',
        ];

        return array_merge(parent::rules(), $rules);
    }
}
