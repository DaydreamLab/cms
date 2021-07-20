<?php

namespace DaydreamLab\Cms\Requests\CustomerMessageReply\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class CustomerMessageReplyAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'CustomerMessageReply';

    protected $apiMethod = 'storeCustomerMessageReply';
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
            'messageId'     => 'required|integer',
            'channels'      => 'required|array',
            'channels.*'    => ['required', Rule::in('mail', 'sms')],
            'subject'       => 'required|string',
            'content'       => 'required|string',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
