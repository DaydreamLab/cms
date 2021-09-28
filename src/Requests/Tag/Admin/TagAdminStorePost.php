<?php

namespace DaydreamLab\Cms\Requests\Tag\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class TagAdminStorePost extends CmsStoreRequest
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
            'params.show_in_search' => ['nullable', Rule::in([0,1])],
            'publish_up'    => 'nullable|date',
            'publish_down'  => 'nullable|date',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $params = RequestHelper::handleParams($validated->get('params'));

        if (!$validated->get('extension')) {
            $validated->put('extension', 'item');
            if (!$validated->get('content_type')) {
                $validated->put('content_type', 'article');
            }
        }

        if ( $publish_up = $validated->get('publish_up') ) {
            $utc_publish_up = Carbon::parse($publish_up, $this->user('api')->timezone);
            $validated->put('publish_up', $utc_publish_up->tz(config('app.timezone'))->format('Y-m-d H:i:s'));
        }

        if ( $publish_down = $validated->get('publish_down') ) {
            $utc_publish_down = Carbon::parse($publish_down, $this->user('api')->timezone);
            $validated->put('publish_down', $utc_publish_down->tz(config('app.timezone'))->format('Y-m-d H:i:s'));
        }

        return $validated;
    }
}
