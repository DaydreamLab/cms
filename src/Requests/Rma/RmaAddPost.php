<?php

namespace DaydreamLab\Cms\Requests\Rma;

use DaydreamLab\JJAJ\Requests\BaseRequest;
use Illuminate\Validation\Rule;

class RmaAddPost extends BaseRequest
{
    protected $package = 'Cms';

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
            'customer'     => [
                'required',
                'integer',
                Rule::in([0,1,2])
            ],
        ];

        return array_merge(parent::rules(), $rules);
    }
}
