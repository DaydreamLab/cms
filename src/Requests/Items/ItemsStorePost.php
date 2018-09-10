<?php

namespace DaydreamLab\Cms\Requests\Items;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class ItemsStorePost extends AdminRequest
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
            'id'            => 'nullable|integer',
            'title'         => 'required|string',
            'state'         => 'required|integer',
            'description'   => 'nullable|string',
        ];
    }
}
