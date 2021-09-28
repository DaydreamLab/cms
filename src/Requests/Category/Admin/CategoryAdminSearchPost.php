<?php

namespace DaydreamLab\Cms\Requests\Category\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class CategoryAdminSearchPost extends CmsSearchRequest
{
    protected $apiMethod = 'searchCategory';

    protected $modelName = 'Category';
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
            'language'      => 'nullable|string',
            'extension'     => 'nullable|string',
            'created_by'    => 'nullable|integer',
            'access'        => 'nullable|integer',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        if (!$validated->get('extension')) {
            $validated->put('extension', 'item');
        }

        return $validated;
    }
}
