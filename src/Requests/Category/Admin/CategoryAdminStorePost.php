<?php

namespace DaydreamLab\Cms\Requests\Category\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class CategoryAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeCategory';

    protected $modelName = 'Category';

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
            'parent_id'             => 'nullable|integer',
            'state'                 => ['nullable', Rule::in([0,1,-1,-2])],
            'introimage'            => 'nullable|string',
            'introtext'             => 'nullable|string',
            'image'                 => 'nullable|string',
            'description'           => 'nullable|string',
            'content_type'          => 'nullable|string',
            'extension'             => 'nullable|string',
            'hits'                  => 'nullable|integer',
            'access'                => 'nullable|integer',
            'access'                => 'nullable|integer',
            'ordering'              => 'nullable|integer',
            'featuredg'             => ['nullable', Rule::in([0,1])],
            'featured_ordering'     => 'nullable|integer',
            'item_extrafield_group_id'   => 'nullable|integer',
            'extrafield_group_id'   => 'nullable|integer',
            'extrafields'           => 'nullable|array',
            'extrafields.*'         => 'nullable|array',
            'extrafields.*.id'      => 'required|integer',
            'extrafields.*.value'   => 'required|string',
            'language'              => 'required|string',
            'template'              => 'nullable|string',
            'params'                => 'nullable|array',
            'params.seo'            => 'nullable|array',
            'params.meta'           => 'nullable|array',
            'publish_up'            => 'nullable|date',
            'publish_down'          => 'nullable|date',
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));
        if (!$validated->get('extension')) {
            $validated->put('extension', 'item');
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
