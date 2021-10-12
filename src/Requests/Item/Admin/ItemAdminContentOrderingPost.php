<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsOrderingRequest;

class ItemAdminContentOrderingPost extends CmsOrderingRequest
{
    protected $apiMethod = 'orderingItem';

    protected $modelName = 'Item';
    
    protected $needAuth = false;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $content_type = $this->route('content_type');
        $parts = explode('_', $content_type);
        $typeString = 'ordering';
        $this->modelName = '';
        foreach ($parts as $part) {
            $this->modelName .= Str::ucfirst($part);
        }
        $this->apiMethod = $typeString.$this->modelName;
        return parent::authorize();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        return $validated;
    }
}
