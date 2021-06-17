<?php

namespace DaydreamLab\Cms\Requests\Menu\Admin;

use DaydreamLab\Cms\Requests\CmSearchPost;

class MenuAdminSearchPost extends CmSearchPost
{
    protected $apiMethod = 'searchMenu';

    protected $modelName = 'Menu';
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
            'language'      => 'nullable|string',
            'category_id'   => 'nullable|integer',
            'access'        => 'nullable|integer'
        ];
        return array_merge(parent::rules(), $rules);
    }
}
