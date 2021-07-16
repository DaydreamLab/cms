<?php

namespace DaydreamLab\Cms\Requests\NewsletterSubscription\Front;

use DaydreamLab\Cms\Requests\CmsStoreRequest;

class NewsletterSubscriptionFrontStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'NewsletterSubscription';

    protected $apiMethod = 'storeNewsletterSubscription';
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
            'newsletterCategoriesAlias'   => 'nullable|array',
            'newsletterCategoriesAlias.*' => 'nullable|string',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
