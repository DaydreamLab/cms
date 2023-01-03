<?php

namespace DaydreamLab\Cms\Requests\Menu\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;
use Illuminate\Support\Facades\Auth;

class MenuFrontGetItemByPathGet extends CmsGetItemRequest
{
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
        $validated->put('alias', $this->route('alias'));
        $validated->put('host', $this->getHttpHost());
        $validated->put('referer', $this->headers->get('referer'));
        $validated->put('user', Auth::guard('api')->user());

        return $validated;
    }
}
