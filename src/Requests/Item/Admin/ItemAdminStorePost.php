<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Helpers\RequestHelper;
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
            'extrafields.*.value'   => 'nullable|string',
            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',
            'tags.*.title'          => 'nullable|string',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));

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
