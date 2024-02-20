<?php

namespace DaydreamLab\Cms\Requests\IotTag\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class IotTagFrontSearchItemRequest extends CmsSearchRequest
{
    protected $modelName = 'IotTag';

    protected $apiMethod = 'searchIotTag';

    protected $needAuth = false;

    protected $searchKeys = ['title', 'introtext', 'description'];
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
            'tag'       => 'nullable|string',
            'type'      => 'nullable|array',
            'type.*'    => [
                'nullable',
                'string',
                Rule::in([
                    'solution',
                    'resource',
                    'news'
                ])
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
