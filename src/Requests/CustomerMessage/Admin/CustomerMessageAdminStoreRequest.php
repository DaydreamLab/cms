<?php

namespace DaydreamLab\Cms\Requests\CustomerMessage\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class CustomerMessageAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'CustomerMessage';

    protected $apiMethod = 'storeCustomerMessage';
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
            'id'            => 'nullable|string',
            'brandId'       => 'required|integer',
            'name'          => 'required|string',
            'type'          => ['required', Rule::in(['產品詢價', '客訴反應', '合作提案', '技術問題', '零壹課程', '其他'])],
            'status'        => ['required', Rule::in(['待處理', '處理中', '已處理'])],
            'email'         => 'required|email',
            'backupEmail'   => 'nullable|email',
            'phoneCode'     => 'nullable|numeric',
            'phone'         => 'nullable|numeric',
            'extNumber'     => 'nullable|numeric',
            'mobilePhoneCode' => 'nullable|regex:/\+[0-9]+$/',
            'mobilePhone'   => 'required|string',
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
        $validated->put('brand_id', $validated->get('brandId'));
        $validated->forget('brandId');

        return $validated;
    }
}
