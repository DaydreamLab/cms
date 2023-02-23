<?php

namespace DaydreamLab\Cms\Requests\Topic\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class TopicAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'Topic';

    protected $apiMethod = 'storeTopic';
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
            'curationId'    => 'required|string',
            'title'         => 'required|string',
            'alias'         => 'nullable|string',
            'state'         => ['required', Rule::in([0, 1, -1, -2])],
            'subtitle'      => 'nullable|string',
            'image'         => 'nullable|string',
            'description'   => 'nullable|string',
            'params'        => 'nullable|string',
            'featured'      => ['nullable', Rule::in([0, 1])],
            'ordering'      => 'nullable|integer',
            'publish_up'    => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'  => 'nullable|date_format:Y-m-d H:i:s',
            'articleIds'    => 'nullable|array',
            'eventIds'      => 'nullable|array',
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
