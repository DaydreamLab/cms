<?php

namespace DaydreamLab\Cms\Requests\Brand\Admin;

use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class BrandAdminSearchRequest extends CmsSearchRequest
{
    protected $apiMethod = 'searchBrand';

    protected $modelName = 'Brand';

    protected $searchKeys = ['title', 'title_zhtw', 'description'];
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
            'state'         => [
                'nullable',
                'integer',
                Rule::in([0,1,-1,-2])
            ]
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);

        # 過濾可觀看的品牌
        if (!$this->user()->isSuperUser && $this->user()->isAdmin) {
            $validated->put('q', $validated->get('q')->whereIn('id', $this->user()->brands->pluck('id')));
        }

        if ( $validated->get('state') == '' ) {
            $validated->forget('state');
            $validated['q'] = $this->q->whereIn('state', [0, 1]);
        }

        return $validated;
    }
}
