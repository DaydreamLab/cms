<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Support\Str;
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
        $content_type = $this->route('content_type');
        $parts = explode('_', $content_type);
        $typeString = 'store';
        foreach ($parts as $part) {
            $typeString .= Str::ucfirst($part);
        }
        $this->apiMethod = $typeString;
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
            'category_id'           => 'nullable|integer',
            'state'                 => [
                'required',
                Rule::in([0,1,-1,-2])
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
            'tags.*.id'             => 'required|integer',
            'tags.*.title'          => 'nullable|string',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',

            'products'              => 'nullable|array',
            'products.*'            => 'nullable|array',
            'products.*.id'         => 'required|integer',

            'brands'                => 'nullable|array',
            'brands.*'              => 'nullable|array',
            'brands.*.id'           => 'required|integer',

            'files'                 => 'nullable|array',
            'files.*'               => 'nullable|array',
            'files.*.id'            => 'required|integer',

            'newsletterUserGroupIds'    => 'nullable|array',
            'newsletterUserGroupIds.*'  => 'nullable|integer',
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));

        if ( !$validated->get('id') ) {
            $content_type = $this->route('content_type');
            $validated->put('content_type', $content_type);
            $category = Category::where('content_type', $content_type)->first();
            if (!$category) {
                $validated->put('category_id', 1);
            } else {
                $validated->put('category_id', $category->id);
            }
        }

        if ( $publish_up = $validated->get('publish_up') ) {
            $utc_publish_up = Carbon::parse($publish_up, $this->user('api')->timezone);
            $validated->put('publish_up', $utc_publish_up->tz(config('app.timezone'))->format('Y-m-d H:i:s'));
        }

        if ( $publish_down = $validated->get('publish_down') ) {
            $utc_publish_down = Carbon::parse($publish_down, $this->user('api')->timezone);
            $validated->put('publish_down', $utc_publish_down->tz(config('app.timezone'))->format('Y-m-d H:i:s'));
        }

        return $validated;
    }
}
