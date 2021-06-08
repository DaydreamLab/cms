<?php

namespace DaydreamLab\Cms\Requests\Menu\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class MenuAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeMenu';

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
            'id'            => 'nullable|integer',
            'title'         => 'required|string',
            'alias'         => 'nullable|string',
            'category_id'   => 'required|integer',
            'parent_id'     => 'nullable|integer',
            //'host'          => 'required|string',
            'site_id'       => 'nullable|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'description'   => 'nullable|string',
            'ordering'      => 'nullable|integer',
            'language'      => 'required|string',
            'params'        => 'nullable|array',
            'publish_up'    => 'nullable|date',
            'publish_down'  => 'nullable|date',
        ];

        return array_merge( parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        if (!$validated->get('host')) {
            $validated->put('host', $this->getHttpHost());
        }
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));

        return $validated;
    }
}
