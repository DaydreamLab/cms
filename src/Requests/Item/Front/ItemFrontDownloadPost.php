<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\JJAJ\Requests\BaseRequest;

class ItemFrontDownloadPost extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'alias'    => 'required|string',
            'language' => 'nullable|string'
        ];
    }

    public function rulesInput()
    {
        $rulesInput = parent::rulesInput();

        if (!$rulesInput->has('language')) {
            $rulesInput->put('language', config('global.locale'));
        }

        return $rulesInput;
    }
}
