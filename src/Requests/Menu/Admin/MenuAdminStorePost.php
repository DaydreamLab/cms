<?php

namespace DaydreamLab\Cms\Requests\Menu\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class MenuAdminStorePost extends AdminRequest
{
    protected $apiMethod = 'storeMenu';

    protected $modelName = 'Menu';
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
            'title'         => 'required|string',
            'alias'         => 'nullable|string',
            'category_id'   => 'required|integer',
            'parent_id'     => 'nullable|integer',
            //'host'          => 'required|string',
            'site_id'       => 'nullable|integer',
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-2])
            ],
            'description'   => 'nullable|string',
            'ordering'      => 'nullable|integer',
            'language'      => 'required|string',
            'params'        => 'nullable|array',
            'publish_up'    => 'nullable|date',
            'publish_down'  => 'nullable|date',
        ];

        return array_merge( parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();
        if (!$validated->get('host')) {
            $validated->put('host', $this->getHttpHost());
        }
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
