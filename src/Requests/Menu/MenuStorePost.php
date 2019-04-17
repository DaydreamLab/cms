<?php

namespace DaydreamLab\Cms\Requests\Menu;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class MenuStorePost extends AdminRequest
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
            'alias'         => 'nullable|string',
            'category_id'   => 'required|integer',
            'parent_id'     => 'nullable|integer',
            //'host'          => 'required|string',
            'site_id'       => 'nullable|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'description'   => 'nullable|string',
            'language'      => 'nullable|string',
            'params'        => 'nullable|array',
            'metadata'      => 'nullable|string',
            'metakeywords'  => 'nullable|string',
            'publish_up'    => 'nullable|datetime',
            'publish_down'  => 'nullable|datetime',
        ];
    }
}
