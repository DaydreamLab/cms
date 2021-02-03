<?php

namespace DaydreamLab\Cms\Requests\Setting\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class SettingAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'editSetting';

    protected $modelName = 'Setting';
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
            'sitename'      => 'required|string',
            'metadesc'      => 'nullable|string',
            'metakeywords'  => 'nullable|string',
            'locale'        => 'required|string',
            'locale_admin'  => 'required|string',
            'custom_head'   => 'nullable|string',
            'custom_body'   => 'nullable|string',
            'custom_footer' => 'nullable|string',
        ];
        return array_merge(parent::rules(), $rules);
    }
}
