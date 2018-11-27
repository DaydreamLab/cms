<?php

namespace DaydreamLab\Cms\Requests\Site;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class SiteStorePost extends AdminRequest
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
            'url'           => 'required|string',
            'sitename'      => 'required|string',
            'sef'           => 'required|string',
            'metadesc'      => 'nullable|string',
            'metakeywords'  => 'nullable|string',
            'state'         => [
                'nullable',
                Rule::in([0,1])
            ],
            'access'        => 'nullable|integer',
            'ordering'      => 'nullable|integer',
        ];
    }
}
