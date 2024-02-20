<?php

namespace DaydreamLab\Cms\Requests\IotEvent\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsRemoveRequest;

class IotEventAdminRemoveRequest extends CmsRemoveRequest
{
    protected $modelName = 'IotEvent';

    protected $apiMethod = 'removeIotEvent';
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
            //
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
