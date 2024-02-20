<?php

namespace DaydreamLab\Cms\Requests\NewsletterSubscription\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;

class NewsletterSubscriptionAdminSearchRequest extends CmsSearchRequest
{
    protected $searchKeys = [];

    protected $modelName = 'NewsletterSubscription';

    protected $apiMethod = 'searchNewsletterSubscription';

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
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'newsletter_category'   => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);
        $q = $validated->get('q')
            ->with(['user', 'user.company', 'user.groups', 'newsletterCategories', 'creator', 'updater', 'locker']);

        if ($validated->get('state') == '') {
            $validated->forget('state');
            $q->whereIn('state', [0, 1]);
        }

        if ($category_id = $validated->get('newsletter_category')) {
            $q->whereIn('id', function ($query) use ($category_id) {
                $query->select('subscription_id')
                    ->from('newsletter_subscription_newsletter_category_maps')
                    ->where('newsletter_subscription_newsletter_category_maps.category_id', '=', $category_id);
            });
        }

        if ($search = $validated->get('search')) {
            $q->where(function ($q) use ($search) {
                $q->whereIn('user_id', function ($q) use ($search) {
                    $q->select('id')
                        ->from('users')
                        ->where('email', 'like', '%' . $search . '%')
                        ->orWhere('name', 'like', '%' . $search . '%')
                        ->orWhere('mobilePhone', 'like', '%' . $search . '%');
                })->orWhere(function ($q) use ($search) {
                    $q->whereIn('user_id', function ($q) use ($search) {
                        $q->select('user_id')
                           ->from('users_companies')
                           ->where('name', 'like', '%' . $search . '%');
                    });
                });
            });
        }
        $q->whereNotNull('email');
        $validated->put('q', $q);
        $validated->forget('newsletter_category');

        return $validated;
    }
}
