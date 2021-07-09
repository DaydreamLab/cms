<?php

namespace DaydreamLab\Cms\Requests\Brand\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class BrandAdminStoreRequest extends AdminRequest
{
    protected $apiMethod = 'storeBrand';

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
        $rules = [
            'state'                 => [
                'required',
                Rule::in([0,1])
            ],
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
