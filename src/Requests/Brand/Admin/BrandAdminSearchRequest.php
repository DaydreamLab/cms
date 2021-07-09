<?php

namespace DaydreamLab\Cms\Requests\Brand\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Validation\Rule;

class BrandAdminSearchRequest extends CmsSearchPost
{
    protected $apiMethod = 'searchBrand';

    protected $modelName = 'Brand';
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
