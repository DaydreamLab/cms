<?php

namespace DaydreamLab\Cms\Requests\Tag\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class TagAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeTag';

    protected $modelName = 'Tag';
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
            'parent_id'     => 'nullable|integer',
            'ordering'      => 'nullable|integer',
            'title'         => 'required|string',
            'alias'         => 'nullable|string',
            'state'         => [
                'nullable',
                Rule::in([0,1,-1,-2])
            ],
            'description'   => 'nullable|string',
            'content_type'     => [
                'nullable',
                Rule::in(['item', 'category', 'product'])
            ],
            'hits'          => 'nullable|integer',
            'access'        => 'nullable|integer',
            'language'      => 'nullable|string',
            'metadesc'      => 'nullable|string',
            'metakeywords'  => 'nullable|string',
            'params'        => 'nullable|string',
            'publish_up'    => 'nullable|date',
            'publish_down'  => 'nullable|date',
        ];
        return array_merge(parent::rules(), $rules);
    }
}
