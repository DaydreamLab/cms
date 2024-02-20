<?php

namespace DaydreamLab\Cms\Requests\IotSlideshow\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class IotSlideshowAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'IotSlideshow';

    protected $apiMethod = 'searchIotSlideshow';
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
            'state' => [ 'nullable', Rule::in([0, 1, -1, -2]) ],
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
