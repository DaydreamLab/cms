<?php

namespace DaydreamLab\Cms\Requests\Topic\Admin;

use Carbon\Carbon;
use DaydreamLab\Cms\Requests\ComponentBase\CmsStoreRequest;
use Illuminate\Validation\Rule;

class TopicAdminStoreRequest extends CmsStoreRequest
{
    protected $modelName = 'Topic';

    protected $apiMethod = 'storeTopic';
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
            'curationId'    => 'required|integer',
            'title'         => 'required|string',
            'subtitle'      => 'nullable|string',
            'alias'         => 'nullable|string',
            'state'         => ['required', Rule::in([0, 1, -1, -2])],
            'image'         => 'required|array',
            'image.title'    => 'nullable|string',
            'image.subtitle' => 'nullable|string',
            'image.path'     => 'nullable|string',
            'image.link'     => 'nullable|string',
            'image.banner'   => 'nullable|string',
            'color'         => 'required|string',
            'icon'          => 'nullable|string',
            'introTitle'    => 'nullable|string',
            'introtext'     => 'nullable|string',
            'description'   => 'nullable|string',
            'newsId'        => 'nullable|integer',
            'params'        => 'nullable|array',
            'featured'      => ['nullable', Rule::in([0, 1])],
            'ordering'      => 'nullable|integer',
            'featured_ordering' => 'nullable|integer',
            'publish_up'    => 'required|date_format:Y-m-d H:i:s',
            'publish_down'  => 'nullable|date_format:Y-m-d H:i:s',
            'articleIds'    => 'nullable|array',
            'eventIds'      => 'nullable|array',
            'promotionIds'  => 'nullable|array',
            'videoIds'      => 'nullable|array',
        ];

        return array_merge(parent::rules(), $rules);
    }


    public function validated($key = null, $default = null)
    {
        $validated = parent::validated($key, $default);
        if ($validated->get('publish_up')) {
            $validated->put('publish_up', Carbon::parse($validated->get('publish_up'), 'Asia/Taipei')
                ->tz(config('app.timezone'))->toDateTimeString());
        }
        if ($validated->get('publish_down')) {
            $validated->put('publish_down', Carbon::parse($validated->get('publish_down'), 'Asia/Taipei')
                ->tz(config('app.timezone'))->toDateTimeString());
        }

        $validated->put('eventIds', $this->uniqueIds($validated->get('eventIds')));
        $validated->put('articleIds', $this->uniqueIds($validated->get('articleIds')));
        $validated->put('promotionIds', $this->uniqueIds($validated->get('promotionIds')));
        $validated->put('videoIds', $this->uniqueIds($validated->get('videoIds')));

        return $validated;
    }


    public function uniqueIds($inputIds)
    {
        if ($inputIds && is_array($inputIds) && count($inputIds)) {
            return collect($inputIds)->unique()->values()->all();
        }

        return null;
    }
}
