<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class ItemFrontGetNextPost extends AdminRequest
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
        return [
            'id'         =>  'required|integer',
            'group'      =>  'required|string',
        ];
    }
}
