<?php

namespace DaydreamLab\Cms\Requests\Category\Admin;

use DaydreamLab\Cms\Requests\CmsFeaturedOrderingPost;

class CategoryAdminFeaturedOrderingPost extends CmsFeaturedOrderingPost
{
    protected $apiMethod = 'featuredOrderingCategory';

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
        return [
            'id'                => 'required|integer',
            'featuredOrdering'  => 'nullable|integer'
        ];
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('featured_ordering', $validated->get('featuredOrdering') ?: 0);
        $validated->forget('featuredOrdering');

        return $validated;
    }
}
