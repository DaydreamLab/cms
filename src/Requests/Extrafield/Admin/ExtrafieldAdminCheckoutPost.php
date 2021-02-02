<?php

namespace DaydreamLab\Cms\Requests\Extrafield;

use DaydreamLab\Cms\Requests\CmsCheckoutRemovePost;

class ExtrafieldAdminCheckoutPost extends CmsCheckoutRemovePost
{
    protected $apiMethod = 'checkoutExtrafield';

    protected $modelName = 'Extrafield';
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
        $rules =  [
        ];
        return array_merge(parent::rules(), $rules);
    }
}
