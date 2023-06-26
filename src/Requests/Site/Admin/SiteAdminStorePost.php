<?php

namespace DaydreamLab\Cms\Requests\Site\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class SiteAdminStorePost extends CmsStoreRequest
{
    protected $apiMethod = 'storeSite';

    protected $modelName = 'Site';
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
            'url'           => 'required|string',
            'sitename'      => 'required|string',
            'sef'           => 'required|string',
            'params'        => 'nullable|array',
            'state'         => [
                'nullable',
                Rule::in([0,1])
            ],
            'access'        => 'nullable|integer',
            'ordering'      => 'nullable|integer',
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $params = RequestHelper::handleParams($validated->get('params'));
        $params['curationEnabled'] = $params['curationEnabled'] ?? 0;
        $validated->put('params', $params);

        return $validated;
    }
}
