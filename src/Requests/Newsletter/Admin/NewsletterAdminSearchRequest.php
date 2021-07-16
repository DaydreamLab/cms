<?php

namespace DaydreamLab\Cms\Requests\Newsletter\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Validation\Rule;

class NewsletterAdminSearchRequest extends CmsSearchPost
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
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ($validated->get('state') == '') {
            $validated->forget('state');
        }

        return $validated;
    }
}
