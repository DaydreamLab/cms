<?php

namespace DaydreamLab\Cms\Requests\Product\Front;

use DaydreamLab\Cms\Models\ProductCategory\ProductCategory;
use DaydreamLab\Cms\Requests\CmsSearchPost;

class ProductFrontSearchRequest extends CmsSearchPost
{
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
            'brand_id'              => 'nullable|integer',
            'product_category_id'   => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ($brand_id = $validated->get('brand_id') ) {
            $validated['q'] = $this->q->whereHas('brands', function ($query) use ($brand_id) {
                $query->where('brands_products_maps.brand_id', '=', $brand_id);
            });
        }
        $validated->forget('brand_id');

        if ($category_id = $validated->get('product_category_id')) {
            $p_c = ProductCategory::where('id', $category_id)->first();
            $p_c_ids = $p_c->descendants()->get()->map(function ($p) { return $p->id; })->toArray();
            $p_c_ids[] = $p_c->id;
            $validated['q'] = $this->q->whereIn('product_category_id', $p_c_ids);
        }
        $validated->forget('product_category_id');

        return $validated;
    }
}
