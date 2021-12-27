<?php

namespace DaydreamLab\Cms\Requests\Product\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class ProductAdminExportRequest extends CmsSearchRequest
{
    protected $apiMethod = 'exportProduct';

    protected $modelName = 'Product';

    protected $needAuth = false;
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

        $q = $validated->get('q');
        if ($brand_id = $validated->get('brand_id') ) {
            $q = $q->whereHas('brands', function ($query) use ($brand_id) {
                $query->where('brands_products_maps.brand_id', '=', $brand_id);
            });
        }
        $validated->forget('brand_id');

        if ($validated->get('product_category_id') == '') {
            $validated->forget('product_category_id');
        }

        if ( $validated->get('state') == '' ) {
            $validated->forget('state');
            $validated['q'] = $this->q->whereIn('state', [0, 1]);
        }

        $validated->put('q', $q);

        return $validated;
    }
}
