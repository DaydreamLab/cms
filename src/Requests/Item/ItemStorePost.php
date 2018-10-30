<?php

namespace DaydreamLab\Cms\Requests\Item;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class ItemStorePost extends AdminRequest
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
            'state'         => 'required|integer',
            'introimage'    => 'nullable|string',
            'introtext'     => 'nullable|string',
            'image'         => 'nullable|string',
            'description'   => 'nullable|string',
            'video'         => 'nullable|string',
            'link'          => 'nullable|string',
            'hits'          => 'nullable|integer',
            'access'        => 'nullable|integer',
            'featured'      => 'nullable|integer',
            'featured_ordering'  => 'nullable|integer',
            'language'      => 'nullable|string',
            'metadesc'      => 'nullable|string',
            'metadata'      => 'nullable|string',
            'content_type'  => 'nullable|string',
            'params'        => 'nullable|string',
            'ordering'      => 'nullable|integer',
            'extrafields'   => 'nullable|array',
            'extrafields.*' => 'nullable|array',
            'extrafields.*.id'=> 'required|integer',
            'extrafields.*.value'=> 'required|string',
            'tags'          => 'nullable|array',
            'tags.*'        => 'nullable|array',
            'tags.*.id'     => 'nullable|integer',
            'tags.*.title'  => 'nullable|string'
        ];
    }
}
