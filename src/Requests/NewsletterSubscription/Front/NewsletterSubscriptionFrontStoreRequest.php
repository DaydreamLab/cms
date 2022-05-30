<?php

namespace DaydreamLab\Cms\Requests\NewsletterSubscription\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use DaydreamLab\Dsth\Helpers\EnumHelper;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class NewsletterSubscriptionFrontStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'NewsletterSubscription';

    protected $apiMethod = 'storeNewsletterSubscription';

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
            'email'                       => 'nullable|email',
            #'newsletterCategoriesAlias'   => 'nullable|array',
            #'newsletterCategoriesAlias.*' => 'nullable|string',
            'subscribeNewsletter'         => ['required', Rule::in(EnumHelper::BOOLEAN)]
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        $validated->put('email', Str::lower($validated->get('email')));

        return $validated;
    }
}
