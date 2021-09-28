<?php

namespace DaydreamLab\Cms\Requests\Module\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class ModuleAdminStorePost extends CmsStoreRequest
{
    protected $apiMethod = 'storeModule';

    protected $modelName = 'Module';
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
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ],
            'description'   => 'nullable|string',
            'access'        => 'nullable|integer',
            'ordering'      => 'nullable|integer',
            'language'      => 'required|string',
            'params'        => 'nullable|array',
            'publish_up'    => 'nullable|date',
            'publish_down'  => 'nullable|date',
        ];
        return array_merge(parent::rules(), $rules);
    }

    public function validated()
    {
        $validated = parent::validated();

        if ($params = $validated->get('params')) {

            if (array_key_exists('item_ids', $params))
            {
                $items = collect($params['item_ids'])->map(function ($i) {
                    return $i['id'];
                });
                $params['item_ids'] = $items;
            }
            else if(array_key_exists('category_ids', $params))
            {
                $items = collect($params['category_ids'])->map(function ($i) {
                    return $i['id'];
                });
                $params['category_ids'] = $items;
            }
            else if(array_key_exists('menu_ids', $params))
            {
                $items = collect($params['menu_ids'])->map(function ($i) {
                    return $i['id'];
                });
                $params['menu_ids'] = $items;
            }
            $validated->put('params', $params);
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
