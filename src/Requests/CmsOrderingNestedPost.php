<?php

namespace DaydreamLab\Cms\Requests;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class CmsOrderingNestedPost extends AdminRequest
{
    protected $package = 'Cms';

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
            'id'            => 'required|integer',
            'parentId'      => 'nullable|integer',
            'parent_id'     => 'nullable|integer',
            'ordering'      => 'nullable|integer',
        ];

        return array_merge(parent::rules(), $rules);
    }

    public function validated()
    {
        $validated = parent::validated();
        if ($validated->get('parentId')) {
            $validated->put('parent_id', $validated->get('parentId'));
        }

        return $validated;
    }
}
