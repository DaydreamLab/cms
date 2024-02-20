<?php

namespace DaydreamLab\Cms\Requests\IotEvent\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;

class IotEventAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'IotEvent';

    protected $apiMethod = 'storeIotEvent';
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
            'description'           => 'nullable|string',
            'start_date'            => 'nullable|date_format:Y-m-d H:i:s',
            'end_date'              => 'nullable|date_format:Y-m-d H:i:s',
            'status'                => [ 'required', Rule::in(['UNOPEN', 'OPEN', 'CLOSED', 'INPROGRESS', 'FINISHED', 'EVENTCANCEL']) ],
            'contacts'              => 'nullable|array',
            'contacts.*'            => 'nullable|array',
            'contacts.*.countryCode'=> 'nullable|string',
            'contacts.*.extension'  => 'nullable|string',
            'contacts.*.gender'     => 'nullable|string',
            'contacts.*.name'       => 'nullable|string',
            'contacts.*.phone'      => 'nullable|string',
            'city'                  => 'nullable|string',
            'district'              => 'nullable|string',
            'address'               => 'nullable|string',
            'locationName'          => 'nullable|string',
            'permission'            => [ 'required', Rule::in(['FREE', 'LIMIT']) ],
            'sponsors'              => 'nullable|array',
            'sponsors.*'            => 'nullable|array',
            'sponsors.*.title'      => 'nullable|string',
            'sponsors.*.logo'       => 'nullable|string',
            'sponsors.*.link'       => 'nullable|string',
            'url'                   => 'nullable|string',
            'state'                 => [ 'required', Rule::in([0, 1, -1, -2]) ],
            'access'                => 'nullable|integer',
            'featured'              => [ 'nullable', Rule::in([0, 1]) ],
            'ordering'              => 'nullable|integer',
            'params'                => 'nullable|array',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        if ( $start_date = $validated->get('start_date') ) {
            $utc_start_date = Carbon::parse($start_date, $this->user('api')->timezone);
            $validated->put('start_date', $utc_start_date->tz(config('app.timezone'))->format('Y-m-d H:i:s'));
        }

        if ( $end_date = $validated->get('end_date') ) {
            $utc_end_date = Carbon::parse($end_date, $this->user('api')->timezone);
            $validated->put('end_date', $utc_end_date->tz(config('app.timezone'))->format('Y-m-d H:i:s'));
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
