<?php

namespace DaydreamLab\Cms\Requests\IotNews\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class IotNewsAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'IotNews';

    protected $apiMethod = 'storeIotNews';
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
            'image'                 => 'nullable|string',
            'description'           => 'nullable|string',
            'state'                 => [ 'required', Rule::in([0, 1, -1, -2]) ],
            'access'                => 'nullable|integer',
            'featured'              => [ 'nullable', Rule::in([0, 1]) ],
            'ordering'              => 'nullable|integer',
            'params'                => 'nullable|array',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',

            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',
            'solutions'             => 'nullable|array',
            'solutions.*'           => 'nullable|array',
            'solutions.*.id'        => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
