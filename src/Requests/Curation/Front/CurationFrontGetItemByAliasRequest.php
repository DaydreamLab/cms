<?php

namespace DaydreamLab\Cms\Requests\Curation\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;

class CurationFrontGetItemByAliasRequest extends CmsGetItemRequest
{
    protected $modelName = 'Curation';

    protected $apiMethod = 'getItemByAlias';

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
            //
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('alias', $this->route('alias'));
        $validated->put('state', 1);

        return $validated;
    }
}
