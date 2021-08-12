<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\CmsFeaturedPost;

class ItemAdminFeaturePost extends CmsFeaturedPost
{
    protected $apiMethod = 'featuredItem';

    protected $modelName = 'Item';
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
        ];
        return array_merge(parent::rules(), $rules);
    }
}
