<?php

namespace DaydreamLab\Cms\Requests\Tag\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsFeaturedOrderingRequest;
use function Psy\sh;

class TagAdminFeaturedOrderingPost extends CmsFeaturedOrderingRequest
{
    protected $apiMethod = 'featuredOrderingTag';

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
