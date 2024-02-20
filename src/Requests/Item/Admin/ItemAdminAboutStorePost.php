<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ItemAdminAboutStorePost extends CmsStoreRequest
{
    protected $apiMethod = 'storeAbout';

    protected $modelName = 'Item';

    protected $needAuth = false;

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


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        return $validated;
    }
}
