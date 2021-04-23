<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ItemAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeItem';

    protected $modelName = 'Item';
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
            'id'                    => 'nullable|integer',
            'title'                 => 'required|string',
            'alias'                 => 'nullable|string',
            'category_id'           => 'required|integer',
            'state'                 => [
                'required',
                Rule::in([0,1])
            ],
            'introimage'            => 'nullable|string',
            'introtext'             => 'nullable|string',
            'image'                 => 'nullable|string',
            'gallery'               => 'nullable|string',
            'description'           => 'nullable|string',
            'video'                 => 'nullable|string',
            'link'                  => 'nullable|string',
            'hits'                  => 'nullable|integer',
            'access'                => 'nullable|integer',
            'featured'              => [
                'nullable',
                Rule::in([0,1])
            ],
            'featured_ordering'     => 'nullable|integer',
            'language'              => 'required|string',
            'metadesc'              => 'nullable|string',
            'metakeywords'          => 'nullable|string',
            //'content_type'  => 'nullable|string',
            'params'                => 'nullable|array',
            'ordering'              => 'nullable|integer',
            'extrafield_group_id'   => 'nullable|integer',
            'extrafields'           => 'nullable|array',
            'extrafields.*'         => 'nullable|array',
            'extrafields.*.id'      => 'required|integer',
            'extrafields.*.value'   => 'nullable',
            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',
            'tags.*.title'          => 'nullable|string',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',
        ];
        return array_merge(parent::rules(), $rules);
    }
}
