<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\Item\ItemFeaturePost;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ItemAdminFeaturePost extends AdminRequest
{
    protected $apiMethod = 'updateItemFeatured';

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
            'ids'       => 'required|array',
            'ids.*'     => 'required|integer',
            'featured'  => [
                'required',
                Rule::in([0,1])
            ]
        ];
        return array_merge(parent::rules(), $rules);
    }
}
