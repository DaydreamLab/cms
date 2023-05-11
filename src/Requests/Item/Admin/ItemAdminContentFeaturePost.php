<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsFeaturedRequest;
use Illuminate\Support\Str;

class ItemAdminContentFeaturePost extends CmsFeaturedRequest
{
    protected $apiMethod = 'featuredItem';

    protected $modelName = 'Item';
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $content_type = $this->route('content_type');
        $parts = explode('_', $content_type);
        $typeString = 'featured';
        foreach ($parts as $part) {
            $typeString .= Str::ucfirst($part);
        }
        $this->apiMethod = $typeString;
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
        ];
        return array_merge(parent::rules(), $rules);
    }
}