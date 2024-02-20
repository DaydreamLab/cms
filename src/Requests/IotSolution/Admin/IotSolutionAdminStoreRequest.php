<?php

namespace DaydreamLab\Cms\Requests\IotSolution\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;

class IotSolutionAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'IotSolution';

    protected $apiMethod = 'storeIotSolution';

    protected $needAuth = false;
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
            'alias'                 => 'nullable|string',
            'title'                 => 'required|string',
            'introimage'            => 'nullable|string',
            'introtext'             => 'nullable|string',
            'images'                => 'nullable|array',
            'images.*'              => 'nullable|string',
            'description'           => 'nullable|string',
            'contacts'              => 'nullable|array',
            'contacts.*'            => 'nullable|array',
            'contacts.*.email'      => 'nullable|string',
            'contacts.*.name'       => 'nullable|string',
            'contacts.*.phone'      => 'nullable|string',
            'state'                 => [ 'required', Rule::in([0, 1, -1, -2]) ],
            'access'                => 'nullable|integer',
            'featured'              => [ 'nullable', Rule::in([0, 1]) ],
            'ordering'              => 'nullable|integer',
            'params'                => 'nullable|array',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',

            'categories'            => 'nullable|array',
            'categories.*'          => 'nullable|array',
            'categories.*.id'       => 'nullable|integer',
            'industries'            => 'nullable|array',
            'industries.*'          => 'nullable|array',
            'industries.*.id'       => 'nullable|integer',
            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',
            'resources'             => 'nullable|array',
            'resources.*'           => 'nullable|array',
            'resources.*.id'        => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

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
