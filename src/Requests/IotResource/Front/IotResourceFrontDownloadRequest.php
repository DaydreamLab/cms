<?php

namespace DaydreamLab\Cms\Requests\IotResource\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;

class IotResourceFrontDownloadRequest extends CmsStoreRequest
{
    protected $modelName = 'IotResource';

    protected $apiMethod = '';

    protected $needAuth = false;
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
            'name'              => 'required|string',
            'blobName'          => 'required|string',
            'contentType'       => 'required|string',
            'extension'         => 'required|string',
            'url'               => 'required|string'
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
