<?php

namespace DaydreamLab\Cms\Requests\CustomerMessage\Front;

use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CustomerMessageFrontStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'CustomerMessage';

    protected $apiMethod = 'storeCustomerMessage';

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
            'brandAlias'    => 'nullable|string',
            'name'          => 'required|string',
            'type'          => ['required', Rule::in(DataHelper::CUSTOMER_MESSAGE_TYPES)],
            'email'         => 'required|email',
            'backupEmail'   => 'nullable|email',
            'phoneCode'     => 'nullable|numeric',
            'phone'         => 'nullable|numeric',
            'extNumber'     => 'nullable|numeric',
            'mobilePhoneCode' => 'nullable|string',
            'mobilePhone'   => 'nullable|string',
            'faxCode'       => 'nullable|numeric',
            'fax'           => 'nullable|numeric',
            'city'          => 'nullable|string',
            'district'      => 'nullable|string',
            'address'       => 'nullable|string',
            'zipcode'       => 'nullable|string',
            'message'       => 'nullable|string',
            'companyName'   => 'nullable|string',
            'jobTitle'      => 'nullable|string',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('email', Str::lower($validated->get('email')));
        $validated->put('status', DataHelper::CUSTOMER_MESSAGE_STATUS[0]);

        return $validated;
    }
}
