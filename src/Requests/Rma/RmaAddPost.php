<?php

namespace DaydreamLab\Cms\Requests\Rma;

use DaydreamLab\JJAJ\Requests\BaseRequest;
use Illuminate\Validation\Rule;

class RmaAddPost extends BaseRequest
{
    protected $package = 'Cms';

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
            'customer'      => [
                'required',
                'integer',
                Rule::in([0,1,2])
            ],
            'companyName'   => 'required|string',
            'contactName'   => 'required|string',
            'phoneCode'     => 'required|string',
            'phoneNumber'   => 'required|string',
            'phoneExt'      => 'nullable|string',
            'faxCode'       => 'nullable|string',
            'faxMobile'     => 'nullable|string',
            'zipCode'       => 'required|string',
            'address'       => 'required|string',
            'email'         => 'required|email',
            'backEmail'     => 'nullable|email',
            'otherInfo'     => 'nullable|string',
            'brand'         => 'required|string',
            'productModel'  => 'required|string',
            'serialNumber'  => 'required|string',
            'sendWay'       => [
                'required',
                'integer',
                Rule::in([0,1])
            ],
            'objectStatus'  => [
                'required',
                'integer',
                Rule::in([0,1,2,3])
            ],
            'faultId'       => [
                'nullable',
                'integer',
                Rule::in([36,37,38,39,40])
            ],
            'description'   => 'required|string',
            'memo'          => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }
}
