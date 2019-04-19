<?php

namespace DaydreamLab\Cms\Requests\Category;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class CategoryStorePost extends AdminRequest
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
            'id'                    => 'nullable|integer',
            'title'                 => 'required|string',
            'alias'                 => 'nullable|string',
            'parent_id'             => 'nullable|integer',
            'state'                 => [
                'nullable',
                Rule::in([0,1,-1,-2])
            ],
            'introimage'            => 'nullable|string',
            'introtext'             => 'nullable|string',
            'image'                 => 'nullable|string',
            'description'           => 'nullable|string',
            'content_type'          => 'nullable|string',
            'extension'             => 'nullable|string',
            'hits'                  => 'nullable|integer',
            'access'                => 'nullable|integer',
            'ordering'              => 'nullable|integer',
            'extrafield_group_id'   => 'nullable|integer',
            'extrafields'           => 'nullable|array',
            'extrafields.*'         => 'nullable|array',
            'extrafields.*.id'      => 'required|integer',
            'extrafields.*.value'   => 'required|string',
            'language'              => 'required|string',
            'template'              => 'nullable|string',
            'metadesc'              => 'nullable|string',
            'metakeywords'          => 'nullable|string',
            'params'                => 'nullable|array',
            'publish_up'            => 'nullable|datetime',
            'publish_down'          => 'nullable|datetime',
            'order_by'              => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'state',
                    'image',
                    'access',
                    'language',
                    'ordering',
                    'content_type',
                    'created_at',
                    'updated_at',
                    'created_by',
                    'updated_by',
                ])
            ]
        ];
    }
}
