<?php

namespace DaydreamLab\Cms\Requests\IotResource\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class IotResourceAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'IotResource';

    protected $apiMethod = 'storeIotResource';
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
            'alias'                 => 'nullable|string',
            'title'                 => 'required|string',
            'introimage'            => 'nullable|string',
            'introtext'             => 'nullable|string',
            'images'                => 'nullable|array',
            'images.*'              => 'nullable|string',
            'description'           => 'nullable|string',
            'points'                => 'nullable|array',
            'points.*'              => 'nullable|array',
            'points.*.title'        => 'nullable|string',
            'points.*.description'  => 'nullable|string',
            'video'                 => 'nullable|array',
            'video.title'           => 'nullable|string',
            'video.description'     => 'nullable|string',
            'video.url'             => 'nullable|string',
            'documents'             => 'nullable|array',
            'documents.*'           => 'nullable|array',
            'documents.*.url'       => 'nullable|string',
            'documents.*.category'  => 'nullable|string',
            'documents.*.title'     => 'nullable|string',
            'state'                 => [ 'required', Rule::in([0, 1, -1, -2]) ],
            'access'                => 'nullable|integer',
            'ordering'              => 'nullable|integer',
            'params'                => 'nullable|array',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',

            'categories'            => 'nullable|array',
            'categories.*'          => 'nullable|array',
            'categories.*.id'       => 'nullable|integer',
            'industries'            => 'nullable|array',
            'industries.*'          => 'nullable|array',
            'industries.*.id'       => 'nullable|integer',
            'tags'                  => 'nullable|array',
            'tags.*'                => 'nullable|array',
            'tags.*.id'             => 'nullable|integer',
            'solutions'             => 'nullable|array',
            'solutions.*'           => 'nullable|array',
            'solutions.*.id'        => 'nullable|integer'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
