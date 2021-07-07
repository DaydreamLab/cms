<?php

namespace DaydreamLab\Cms\Requests\Tag\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Validation\Rule;

class TagAdminSearchPost extends CmsSearchPost
{
    protected $apiMethod = 'searchTag';

    protected $modelName = 'Tag';
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
            'state'     => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'access'        => 'nullable|integer',
            'order_by'  => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'access',
                    'content_type',
                    'ordering',
                    'created_at',
                    'updated_at',
                    'created_by',
                    'updated_by',
                ])
            ]
        ];
        return array_merge(parent::rules(), $rules);
    }
}
