<?php

namespace DaydreamLab\Cms\Requests\CustomerMessage\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Helpers\DataHelper;
use DaydreamLab\Cms\Requests\ComponentBase\CmsSearchRequest;
use Illuminate\Validation\Rule;

class CustomerMessageAdminSearchRequest extends CmsSearchRequest
{
    protected $modelName = 'CustomerMessage';

    protected $apiMethod = 'searchCustomerMessage';

    protected $searchKeys = ['email', 'name', 'mobilePhone'];
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
            'status'    => ['nullable', Rule::in(DataHelper::CUSTOMER_MESSAGE_STATUS)],
            'type'      => ['nullable', Rule::in(DataHelper::CUSTOMER_MESSAGE_TYPES)],
            'startDate' => 'nullable|date_format:Y-m-d',
            'endDate'   => 'nullable|date_format:Y-m-d',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated()
    {
        $validated = parent::validated();

        $q = $validated->get('q');
        if ($startDate = $validated->get('startDate')) {
            $q = $q->where('created_at', '>=', Carbon::parse($startDate, $this->user()->timezone)
                ->tz(config('app.timezone'))
                ->toDateTimeString());
        }

        if ($endDate = $validated->get('endDate')) {
            $q = $q->where('created_at', '<=', Carbon::parse($endDate, $this->user()->timezone)
                ->tz(config('app.timezone'))
                ->toDateTimeString());
        }
        $validated->put('q', $q);
        $validated->forget(['startDate', 'endDate']);

        return $validated;
    }
}
