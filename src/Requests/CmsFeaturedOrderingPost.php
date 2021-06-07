<?php

namespace DaydreamLab\Cms\Requests;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class CmsFeaturedOrderingPost extends AdminRequest
{
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
        return [
            'id'                => 'required|integer',
            'featuredOrdering'  => 'nullable|integer'
        ];
    }


    public function validated()
    {
        $validated = parent::validated();
        $validated->put('featured_ordering', $validated->get('featuredOrdering') ?: 0);
        $validated->forget('featuredOrdering');

        return $validated;
    }
}
