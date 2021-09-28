<?php

namespace DaydreamLab\Cms\Requests\Form\Front;

use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class FormFrontStorePost extends CmsStoreRequest
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
        $rules = [
            'name'          => 'required|string',
            'email'         => 'required|email',
            'phone'         => 'nullable|string',
            'location'      => 'nullable|string',
            'question_type' => 'required|string',
            'description'   => 'required|string',
            'brand'         => [
                'nullable',
                Rule::in([
                    'orangeshabu',
                    'orangeshabushabu',
                    'extension1byorange',
                    'monecafe',
                    'sakura',
                    'monespa',
                ])
            ],
        ];
        return array_merge(parent::rules(), $rules);
    }
}
