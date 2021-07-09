<?php

namespace DaydreamLab\Cms\Requests\Brand\Admin;

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
            'code'                      => 'nullable|integer',
            'alias'                     => 'nullable|string',
            'title'                     => 'required|string',
            'description'               => 'nullable|string',
            'factory_url'               => 'nullable|string',
            'contact_email'             => 'nullable|string',
            'business_representitive'   => 'nullable|string',
            'logo_image'                => 'nullable|string',
            'banner_image'              => 'nullable|string',
            'banner_link'               => 'nullable|string',
            'metadesc'                  => 'nullable|string',
            'metakeywords'              => 'nullable|string',
            'state'                     => [
                'required',
                Rule::in([0,1])
            ],

            'brand_contacts'                    => 'nullable|array',
            'brand_contacts.*'                  => 'nullable|array',
            'brand_contacts.*.first_name'       => 'nullable|string',
            'brand_contacts.*.last_name'        => 'nullable|string',
            'brand_contacts.*.gender'           => 'nullable|string',
            'brand_contacts.*.phone_code'       => 'nullable|string',
            'brand_contacts.*.phone_number'     => 'nullable|string',
            'brand_contacts.*.phone_extension'  => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
