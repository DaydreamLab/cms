<?php

namespace DaydreamLab\Cms\Requests\Setting\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class SettingAdminStorePost extends CmsStoreRequest
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
            'sitename'          => 'required|string',
            'siteurl'           => 'nullable|string',
            'seo_title'         => 'nullable|string',
            'seo_keyword'       => 'nullable|string',
            'seo_description'   => 'nullable|string',
            'fb_fanpage_id'     => 'nullable|string',
            'fbFanpageUrl'      => 'nullable|string',
            'lineId'            => 'nullable|string',
            'liffId'            => 'nullable|string',
            'youtubeUrl'        => 'nullable|string',
            'ga'                => 'nullable|string'
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->forget('q');
        return $validated;
    }
}
