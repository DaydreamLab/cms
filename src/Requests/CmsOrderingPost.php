<?php

namespace DaydreamLab\Cms\Requests;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class CmsOrderingPost extends AdminRequest
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
            'id'            => 'required|integer',
            'index_diff'    => 'required|integer',
            'order'         => [
                'nullable',
                Rule::in(['asc', 'desc'])
            ]
        ];
    }

    public function validated()
    {
        $validated = parent::validated();

        if (!$validated->get('order')) {
            $validated->put('order', 'asc');
        }

        return $validated;
    }
}
