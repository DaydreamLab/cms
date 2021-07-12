<?php

namespace DaydreamLab\Cms\Requests\Tag\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class TagAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeTag';

    protected $modelName = 'Tag';
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
            'id'            => 'nullable|integer',
            'parent_id'     => 'nullable|integer',
            'title'         => 'required_without:id|string',
            'alias'         => 'nullable|string',
            'state'         => ['nullable', Rule::in([0,1,-1,-2])],
            'description'   => 'nullable|string',
            'extension'     => 'nullable|string',
            'content_type'  => ['nullable', Rule::in(['article', 'category'])],
            'hits'          => 'nullable|integer',
            'access'        => 'nullable|integer',
            'language'      => 'nullable|string',
            'ordering'      => 'nullable|integer',
            'featured'      => ['nullable', Rule::in([0,1])],
            'featured_ordering' => 'nullable|integer',
            'params'        => 'nullable|array',
            'params.meta'   => 'nullable|array',
            'params.seo'    => 'nullable|array',
            'show_in_search' => ['nullable', Rule::in([0,1])],
            'publish_up'    => 'nullable|date',
            'publish_down'  => 'nullable|date',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $params = RequestHelper::handleParams($validated->get('params'));
        if ($show_in_search = $validated->get('show_in_search')) {
            $params['show_in_search'] = $show_in_search;
        }
        $validated->put('params', $params);
        if (!$validated->get('extension')) {
            $validated->put('extension', 'item');
            if (!$validated->get('content_type')) {
                $validated->put('content_type', 'article');
            }
        }

        return $validated;
    }
}
