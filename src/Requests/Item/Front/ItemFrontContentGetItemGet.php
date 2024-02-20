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


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);
        $validated->put('alias', $this->route('alias'));
        if ($brand = $this->get('brand')) {
            $validated['brand'] = $brand;
        }

        $q = $validated->get('q');
        $q->where(function ($q) {
            $q->whereNull('publish_up')
                ->orWhere(function ($q) {
                    $q->where('publish_up', '<', now()->toDateTimeString())
                        ->where(function ($q) {
                            $q->whereNull('publish_down')
                                ->orWhere('publish_down', '>', now()->toDateTimeString());
                        });
                });
        });
        $validated->put('q', $q);

        return $validated;
    }
}
