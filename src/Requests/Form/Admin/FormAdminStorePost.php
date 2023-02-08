<?php

namespace DaydreamLab\Cms\Requests\Form\Admin;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class FormAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeForm';

    protected $modelName = 'Form';
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
            'id'        => 'nullable|integer',
            'note'      => 'nullable|string'
        ];
        return array_merge($rules, parent::rules());
    }
}
