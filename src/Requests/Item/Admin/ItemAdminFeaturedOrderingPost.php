<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\CmsFeaturedOrderingPost;

class ItemAdminFeaturedOrderingPost extends CmsFeaturedOrderingPost
{
    protected $apiMethod = 'featuredOrderingItem';

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
        return [
            'id'                => 'required|integer',
            'featuredOrdering'  => 'nullable|integer'
        ];
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
