<?php

namespace DaydreamLab\Cms\Requests;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;

class CmsOrderingPost extends AdminRequest
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
            'id'            => 'required|integer',
            'index_diff'    => 'nullable|integer',
            'indexDiff'     => 'nullable|integer',
            'parentId'      => 'nullable|integer',
            'parent_id'     => 'nullable|integer',
        ];
    }

    public function validated()
    {
        $validated = parent::validated();
        if ($validated->get('parentId')) {
            $validated->put('parent_id', $validated->get('parentId'));
        }

        if ($validated->get('index_diff')) {
            $validated->put('indexDiff', $validated->get('index_diff'));
        }

        $validated->forget(['parentId', 'index_diff']);

        return $validated;
    }
}
