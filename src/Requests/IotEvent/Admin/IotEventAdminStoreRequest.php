<?php

namespace DaydreamLab\Cms\Requests\IotEvent\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
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
            'contacts.*.name'       => 'nullable|string',
            'contacts.*.phone'      => 'nullable|string',
            'location'              => 'nullable|string',
            'permission'            => [ 'required', Rule::in(['FREE', 'LIMIT']) ],
            'sponsors'              => 'nullable|array',
            'sponsors.*'            => 'nullable|array',
            'sponsors.*.title'      => 'nullable|string',
            'sponsors.*.logo'       => 'nullable|string',
            'sponsors.*.url'        => 'nullable|string',
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


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
