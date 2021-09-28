<?php

namespace DaydreamLab\Cms\Requests\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class NewsletterSubscriptionAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'NewsletterSubscription';

    protected $apiMethod = 'searchNewsletterSubscription';
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
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'newsletter_category'   => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ($validated->get('state') == '') {
            $validated->forget('state');
            $validated['q'] = $this->q->whereIn('state', [0, 1]);
        }

        if ( $category_id = $validated->get('newsletter_category') ) {
            $validated['q'] = $this->q->whereHas('newsletterCategories', function ($query) use ($category_id) {
                $query->where('newsletter_subscription_newsletter_category_maps.category_id', '=', $category_id);
            });
        }
        $validated->forget('newsletter_category');

        return $validated;
    }
}
