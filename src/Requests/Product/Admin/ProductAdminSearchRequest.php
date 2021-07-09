<?php

namespace DaydreamLab\Cms\Requests\Product\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Validation\Rule;

class ProductAdminSearchRequest extends CmsSearchPost
{
    protected $apiMethod = 'searchProduct';

    protected $modelName = 'Product';
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
            'id'            => 'nullable|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'brand_id'              => 'nullable|integer',
            'product_category_id'   => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ( $brand_id = $validated->get('brand_id') ) {
            $validated['q'] = $this->q->whereHas('brands', function ($query) use ($brand_id) {
                $query->where('brands_products_maps.brand_id', '=', $brand_id);
            });
        }
        $validated->forget('brand_id');

        return $validated;
    }
}
