<?php

namespace DaydreamLab\Cms\Requests\Product\Admin;

use DaydreamLab\Cms\Helpers\RequestHelper;
use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class ProductAdminStoreRequest extends AdminRequest
{
    protected $apiMethod = 'storeProduct';

    protected $modelName = 'Product';
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
            'id'                    => 'nullable|integer',
            'product_category_id'   => 'required|integer',
            'alias'                 => 'nullable|string',
            'title'                 => 'required|string',
            'description'           => 'nullable|string',
            'product_data'              => 'nullable|array',
            'product_data.*'            => 'nullable|array',
            'product_data.*.name'       => 'nullable|string',
            'product_data.*.description'=> 'nullable|string',
            'product_data.*.price'      => 'nullable|integer',
            'files'                 => 'nullable|string',
            'params'                => 'nullable|array',
            'state'                 => [
                'required',
                Rule::in([0,1])
            ],
            'publish_up'            => 'nullable|date_format:Y-m-d H:i:s',
            'publish_down'          => 'nullable|date_format:Y-m-d H:i:s',
            'brands'                => 'nullable|array',
            'brands.*'              => 'nullable|array',
            'brands.*.id'           => 'nullable|integer'
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
