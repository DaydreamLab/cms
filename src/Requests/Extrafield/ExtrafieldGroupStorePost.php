<?php

namespace DaydreamLab\Cms\Requests\Extrafield;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ExtrafieldGroupStorePost extends AdminRequest
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
            'description'   => 'nullable|string',
            'access'        => 'nullable|integer',
            'created_by'    => 'nullable|integer',
        ];
    }
}
