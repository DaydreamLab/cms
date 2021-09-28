<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;

class ItemFrontContentGetItemGet extends CmsGetItemRequest
{
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
        return parent::rules();
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->forget('q');
        $validated->put('alias', $this->route('alias'));
        if ($brand = $this->get('brand')) {
            $validated['brand'] = $brand;
        }

        return $validated;
    }
}
