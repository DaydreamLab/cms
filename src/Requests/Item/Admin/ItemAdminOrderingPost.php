<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\CmsOrderingPost;
use Illuminate\Validation\Rule;

class ItemAdminOrderingPost extends CmsOrderingPost
{
    protected $apiMethod = 'editItem';

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
            'orderingKey' => ['nullable', Rule::in(['ordering', 'featured_ordering'])]
        ];
        return array_merge($rules, parent::rules());
    }


    public function validated()
    {
        $validated = parent::validated();

        if (!$validated->get('orderingKey')) {
            $validated->put('orderingKey', 'ordering');
        }

        return $validated;
    }
}
