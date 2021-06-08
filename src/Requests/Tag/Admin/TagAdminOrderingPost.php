<?php

namespace DaydreamLab\Cms\Requests\Tag\Admin;

use DaydreamLab\Cms\Requests\CmsOrderingNestedPost;

class TagAdminOrderingPost extends CmsOrderingNestedPost
{
    protected $apiMethod = 'orderingTag';

    protected $modelName = 'Tag';
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
