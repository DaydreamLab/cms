<?php

namespace DaydreamLab\cms\Requests\Product\Admin;

use DaydreamLab\cms\Requests\cmsFeaturedOrderingRequest;

class ProductAdminFeaturedOrderingRequest extends cmsFeaturedOrderingRequest
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
        $rules =[
            //
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
