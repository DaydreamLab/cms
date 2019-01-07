<?php

namespace DaydreamLab\Cms\Requests\Setting;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class SettingStorePost extends AdminRequest
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
            'sitename'      => 'required|string',
            'metadesc'      => 'nullable|string',
            'metakeywords'  => 'nullable|string',
            'locale'        => 'required|string',
            'locale_admin'  => 'required|string',
            'custom_head'   => 'nullable|string',
            'custom_body'   => 'nullable|string',
            'custom_footer' => 'nullable|string',
        ];
    }
}
