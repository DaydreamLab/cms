<?php

namespace DaydreamLab\Cms\Requests\Curation\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsGetItemRequest;

class CurationAdminGetItemRequest extends CmsGetItemRequest
{
    protected $modelName = 'Curation';

    protected $apiMethod = 'getCuration';
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
        $q = $validated->get('q');
        $q->with(['topics', 'topics.items', 'topics.events', 'topics.events.sessions']);
        $validated->put('q', $q);

        return $validated;
    }
}
