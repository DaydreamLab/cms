<?php

namespace DaydreamLab\Cms\Requests\Category\Admin;

use DaydreamLab\Cms\Requests\CmsCheckoutRemovePost;

class CategoryAdminRemovePost extends CmsCheckoutRemovePost
{
    protected $apiMethod = 'deleteCategory';

    protected $modelName = 'Category';
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
            //
        ];
        return array_merge($rules, parent::rules());
    }
}
