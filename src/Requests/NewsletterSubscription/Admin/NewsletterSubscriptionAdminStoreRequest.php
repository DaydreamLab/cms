<?php

namespace DaydreamLab\Cms\Requests\NewsletterSubscription\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class NewsletterSubscriptionAdminStoreRequest extends CmsStoreRequest
{
    protected $apiMethod = 'storeNewsletterSubscription';

    protected $modelName = 'NewsletterSubscription';
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
            'email'                     => 'nullable|email',
            'newsletterCategoryIds'     => 'nullable|array',
            'newsletterCategoryIds.*'   => 'nullable|integer',
            'state'                 => [
                'required',
                Rule::in([0,1,-1,-2])
            ],
            'contact'                   => 'nullable|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
