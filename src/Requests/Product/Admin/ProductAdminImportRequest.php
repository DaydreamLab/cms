<?php

namespace DaydreamLab\Cms\Requests\Product\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ProductAdminImportRequest extends AdminRequest
{
    protected $apiMethod = 'importProduct';

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
            'file'                  => 'required|file'
        ];

        return array_merge(parent::rules(), $rules);
    }

}
