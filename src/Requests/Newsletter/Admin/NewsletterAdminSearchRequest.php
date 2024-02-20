<?php

namespace DaydreamLab\Cms\Requests\Newsletter\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class NewsletterAdminSearchRequest extends CmsSearchRequest
{
    protected $apiMethod = 'searchNewsletter';

    protected $modelName = 'Newsletter';
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

        if ($validated->get('state') == '') {
            $validated->forget('state');
            $validated['q'] = $this->q->whereIn('state', [0, 1]);
        }

        if ( $validated->get('newsletter_category') ) {
            $validated->put('newsletter_category_id', $validated->get('newsletter_category'));
            $validated->forget('newsletter_category');
        }

        return $validated;
    }
}
