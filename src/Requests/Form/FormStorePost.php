<?php

namespace DaydreamLab\Cms\Requests\Form;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class FormStorePost extends AdminRequest
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
        return [
            'name'          => 'required|string',
            'email'         => 'required|email',
            'phone'         => 'required|string',
            'question_type' => 'required|string',
            'description'   => 'required|string',
        ];
    }
}
