<?php

namespace DaydreamLab\Cms\Requests\Brand\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class BrandAdminStoreRequest extends CmsStoreRequest
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
                Rule::in([0,1,-1,-2])
            ],

            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',

            'contact'                   => 'nullable|array',
            'contact.*'                 => 'nullable|array',
            'contact.*.name'       => 'nullable|string',
            'contact.*.gender'          => 'nullable|string',
            'contact.*.countryCode'     => 'nullable|string',
            'contact.*.phone'           => 'nullable|string',
            'contact.*.extension'       => 'nullable|string',

            'tracking'                  => 'nullable|array',
            'tracking.*'                => 'nullable|array',
            'tracking.*.type'           => 'nullable|string',
            'tracking.*.code'           => 'nullable|string',
            'subBrands'                 => 'nullable|array',
            'subBrands.*'               => 'nullable|string',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);
        $params = RequestHelper::handleParams($validated->get('params'));
        if (!isset($validated->get('params')['subBrands'])) {
            $params['subBrands'] = [];
        }
        $validated->put('params', $params);

        return $validated;
    }
}
