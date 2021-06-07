<?php

namespace DaydreamLab\Cms\Requests\Language\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class LanguageAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeLanguage';

    protected $modelName = 'Language';
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
            'id'            => 'nullable|integer',
            'title'         => 'required|string',
            'type'          => 'required|string',
            'code'          => 'required|string',
            'sef'           => 'required|string',
            'state'         => 'required|integer',
            'description'   => 'nullable|string',
            'image'         => 'nullable|string',
            //'order'         => 'nullable|integer',
            //'metadesc'      => 'nullable|string',
            //'metakeywords'  => 'nullable|string',
            //'sitename'      => 'nullable|string',
            //'access'        => 'nullable|integer'
        ];
        return array_merge(parent::rules(), $rules);
    }
}
