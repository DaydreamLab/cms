<?php

namespace DaydreamLab\Cms\Requests\Language;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class LanguageStorePost extends AdminRequest
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
            'code'          => 'required|string',
            'sef'           => 'required|string',
            'state'         => 'required|integer',
            'description'   => 'nullable|string',
            'image'         => 'nullable|string',
            'order'         => 'nullable|integer',
            'metadesc'      => 'nullable|string',
            'metakeywords'  => 'nullable|string',
            'sitename'      => 'nullable|string',
        ];
    }
}
