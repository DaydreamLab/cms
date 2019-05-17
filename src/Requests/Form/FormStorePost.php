<?php

namespace DaydreamLab\Cms\Requests\Form;

use DaydreamLab\JJAJ\Requests\AdminRequest;
use Illuminate\Validation\Rule;
use TimeHunter\LaravelGoogleReCaptchaV3\Validations\GoogleReCaptchaV3ValidationRule;

class FormStorePost extends AdminRequest
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
            'name'          => 'required|string',
            'email'         => 'required|email',
            'phone'         => 'nullable|string',
            'location'      => 'nullable|string',
            'question_type' => 'required|string',
            'description'   => 'required|string',
            'brand'         => [
                'required',
                Rule::in([
                    'orangeshabu',
                    'orangeshabushabu',
                    'extension1byorange',
                    'monecafe',
                    'sakura',
                    'monespa',
                ])
            ],
            'g_recaptcha_response' => [new GoogleReCaptchaV3ValidationRule('contact_us')]
        ];
    }
}
