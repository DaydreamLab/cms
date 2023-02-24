<?php

namespace DaydreamLab\Cms\Requests\Curation\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class CurationAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'Curation';

    protected $apiMethod = 'storeCuration';
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
            'title'         => 'required|string',
            'alias'         => 'nullable|string',
            'state'         => ['required', Rule::in([0, 1, -1, -2])],
            'slideshow'     => 'nullable|string',
            'introtext'     => 'nullable|string',
            'description'   => 'nullable|string',
            'script'        => 'nullable|string',
            'isIndex'       => ['nullable', Rule::in([0,1])],
            'params'        => 'nullable|string',
            'eventIds'      => 'nullable|array',
            'solutionIds'   => 'nullable|array',
            'promotionIds'  => 'nullable|array',
            'videoIds'      => 'nullable|array',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
