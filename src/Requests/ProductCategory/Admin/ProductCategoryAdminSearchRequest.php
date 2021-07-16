<?php

namespace DaydreamLab\Cms\Requests\ProductCategory\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Validation\Rule;

class ProductCategoryAdminSearchRequest extends CmsSearchPost
{
    protected $apiMethod = 'searchProductCategory';

    protected $modelName = 'ProductCategory';
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
        $rules =[
            'id'            => 'nullable|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        if ($validated->get('state') == '') {
            $validated->forget('state');
            $validated['q'] = $this->q->whereIn('state', [0, 1]);
        }

        return $validated;
    }
}
