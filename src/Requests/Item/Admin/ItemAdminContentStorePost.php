<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ItemAdminContentStorePost extends AdminRequest
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
            'state'                 => [
                'required',
                Rule::in([0,1])
            ],
            'introimage'            => 'nullable|string',
            'introtext'             => 'nullable|string',
            'image'                 => 'nullable|string',
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
            'content_type'          => 'nullable|string',
            'params'                => 'nullable|array',
            'ordering'              => 'nullable|integer',
            'extrafield_group_id'   => 'nullable|integer',
            'extrafields'           => 'nullable|array',
            'extrafields.*'         => 'nullable|array',
            'extrafields.*.id'      => 'nullable|integer',
            'extrafields.*.value'   => 'nullable',
            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',
            'tags.*.title'          => 'nullable|string',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',

            'products'              => 'nullable|array',
            'products.*'            => 'nullable|array',
            'products.*.id'         => 'nullable|integer',

            'brands'                => 'nullable|array',
            'brands.*'              => 'nullable|array',
            'brands.*.id'           => 'nullable|integer'
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));

        if ( $content_type = $this->route('content_type') ) {
            $category = Category::where('content_type', $content_type)->first();
            if (!$category) {
                $validated->put('category_id', 1);
            } else {
                $validated->put('content_type', $content_type);
                $validated->put('category_id', $category->id);
            }
        } else {
            $validated->put('category_id', 1);
        }

        return $validated;
    }
}
