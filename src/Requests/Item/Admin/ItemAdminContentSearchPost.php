<?php

namespace DaydreamLab\Cms\Requests\Item\Admin;

use DaydreamLab\Cms\Requests\CmsSearchPost;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class ItemAdminContentSearchPost extends CmsSearchPost
{
    protected $apiMethod = 'searchItem';

    protected $modelName = 'Item';

    protected $searchKeys = ['title'];
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $content_type = $this->route('content_type');
        $parts = explode('_', $content_type);
        $typeString = 'search';
        foreach ($parts as $part) {
            $typeString .= Str::ucfirst($part);
        }
        $this->apiMethod = $typeString;
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
            ],
            'category_id'   => 'nullable|integer',
            'featured'      =>[
                'nullable',
                Rule::in([0,1])
            ],
            'content_type'  => 'nullable|string',
            'extension'     => 'nullable|string',
            'access'        => 'nullable|integer',
            'language'      => 'nullable|string|max:5',
            'order_by'      => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'category_id',
                    'featured',
                    'state',
                    'introimage',
                    'image',
                    'description',
                    'hits',
                    'access',
                    'language',
                    'ordering',
                    'created_at',
                    'updated_at',
                    'created_by',
                    'updated_by',
                ])
            ],
            'brand_id'      => 'nullable|integer',
        ];
        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        if ($content_type = $this->route('content_type') ) {
            $validated->put('content_type', $content_type);
        }

        $q = $validated->get('q');
        if ($brand_id = $validated->get('brand_id') ) {
            $q = $q->whereHas('brands', function ($query) use ($brand_id) {
                $query->where('brands_items_maps.brand_id', '=', $brand_id);
            });
        }
        $validated->forget('brand_id');

        if (in_array($this->route('content_type'), ['solution', 'case', 'bulletin', 'promotion', 'video']))
        # 過濾可觀看的品牌
        if (!$this->user()->isSuperUser && $this->user()->isAdmin) {
            $q = $q->whereHas('brands', function ($q) {
                $q->whereIn('brands_items_maps.brand_id', $this->user()->brands->pluck('id'));
            });
        }

        $validated->put('q', $q);

        if ( $validated->get('category_id') == '' ) {
            $validated->forget('category_id');
        }

        if ( $validated->get('featured') == '' ) {
            $validated->forget('featured');
        }

        if ( $validated->get('language') == '' ) {
            $validated->forget('language');
        }

        if ( $validated->get('state') == '' ) {
            $validated->forget('state');
            $validated['q'] = $this->q->whereIn('state', [0, 1]);
        }

        if ( $validated->get('search') == '' ) {
            $validated->forget('search');
        }

        if ( $validated->get('access') == '' ) {
            $validated->forget('access');
        }

        return $validated;
    }
}
