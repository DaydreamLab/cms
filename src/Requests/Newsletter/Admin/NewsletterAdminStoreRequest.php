<?php

namespace DaydreamLab\Cms\Requests\Newsletter\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class NewsletterAdminStoreRequest extends AdminRequest
{
    protected $apiMethod = 'storeNewsletter';

    protected $modelName = 'Newsletter';
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
            'newsletter_category_id' => 'required|integer',
            'title'                 => 'required|string',
            'number'                => 'required|string',
            'image'                 => 'nullable|string',
            'description'           => 'nullable|string',
            'url'                   => 'nullable|string',
            'display_topic'         => 'nullable|boolean',
            'information'           => 'required|array',
            'information.*'         => 'nullable|array',
            'information.*.title'   => 'nullable|string',
            'information.*.url'     => 'nullable|string',
            'params'                => 'nullable|array',
            'state'                 => [
                'required',
                Rule::in([0,1])
            ],
            'ordering'              => 'nullable|integer',
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('params', RequestHelper::handleParams($validated->get('params')));

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
