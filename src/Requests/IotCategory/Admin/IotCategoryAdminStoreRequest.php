<?php

namespace DaydreamLab\Cms\Requests\IotCategory\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class IotCategoryAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'IotCategory';

    protected $apiMethod = 'storeIotCategory';
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
            'id'                    => 'nullable|integer',
            'floor'                 => 'nullable|integer',
            'alias'                 => 'nullable|string',
            'title'                 => 'required|string',
            'description'           => 'nullable|string',
            'state'                 => [ 'required', Rule::in([0, 1, -1, -2]) ],
            'access'                => 'nullable|integer',
            'ordering'              => 'nullable|integer',
            'params'                => 'nullable|array',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',

            'children'              => 'nullable|array',
            'children.*'            => 'nullable|array',
            'children.*.id'         => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
