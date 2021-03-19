<?php

namespace DaydreamLab\Cms\Requests\Item;

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class ItemSearchPost extends ListRequest
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
            'search'        => 'nullable|string|max:20',
        ];

        return array_merge(parent::rules(), $rules);
    }
}
