<?php

namespace DaydreamLab\Cms\Requests\Brand\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class BrandAdminStoreRequest extends AdminRequest
{
    protected $apiMethod = 'storeBrand';

    protected $modelName = 'Brand';
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
            'id'                        => 'nullable|integer',
            'alias'                     => 'nullable|string',
            'title'                     => 'required|string',
            'title_zhtw'                => 'nullable|string',
            'description'               => 'nullable|string',
            'factory_url'               => 'nullable|string',
            'contact_email'             => 'nullable|string',
            'business_representitive'   => 'nullable|string',
            'logo_image'                => 'nullable|string',
            'banner_image'              => 'nullable|string',
            'banner_link'               => 'nullable|string',
            'params'                    => 'nullable|array',
            'state'                     => [
                'required',
                Rule::in([0,1])
            ],

            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',

            'contact'                   => 'nullable|array',
            'contact.*'                 => 'nullable|array',
            'contact.*.last_name'       => 'nullable|string',
            'contact.*.gender'          => 'nullable|string',
            'contact.*.phone_code'      => 'nullable|string',
            'contact.*.phone_number'    => 'nullable|string',
            'contact.*.phone_extension' => 'nullable|string',

            'tracking'                  => 'nullable|array',
            'tracking.*'                => 'nullable|array',
            'tracking.*.type'           => 'nullable|string',
            'tracking.*.code'           => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));

        return $validated;
    }
}