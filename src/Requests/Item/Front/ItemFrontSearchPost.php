<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\Cms\Requests\Item\ItemSearchPost;
use DaydreamLab\Cms\Support\Cut;
use Illuminate\Validation\Rule;

class ItemFrontSearchPost extends ItemSearchPost
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
            'year'                    => 'nullable|integer',
            'month'                   => 'nullable|integer',
            'category_alias'          => 'nullable|array',
            'category_alias.*'        => 'nullable|string',
            'language'                => [
                'nullable',
                'string',
                Rule::in([
                    '*',
                    'en',
                    'zh-Hant',
                ]),
            ],
            'order_by'                => [
                'nullable',
                'string',
                Rule::in([
                    'id',
                    'title',
                    'category_id',
                    'featured',
                    'hits',
                    'access',
                    'ordering',
                    'created_at',
                    'updated_at',
                    'created_by',
                    'updated_by',
                ])
            ],
            'split_categories_result' => [
                'nullable',
                'integer',
                Rule::in([0, 1])
            ],
            'page'
        ];

        return array_merge($rules, parent::rules());
    }

    public function rulesInput()
    {
        $rulesInput = parent::rulesInput();

        // for 白痴 appscan 不要拿掉
        $temp1 = $rulesInput->toArray();
        $temp2 = $this->all();
        ksort($temp1);
        ksort($temp2);
        if (json_encode($temp1) != json_encode($temp2)) {
            throw new \Symfony\Component\HttpKernel\Exception\BadRequestHttpException();
        }

        $rulesInput->forget('page');
        // 對搜尋關鍵字分詞
        if ($rulesInput->has('search') && config('cms.item.use_word_segmentation')) {
            $rulesInput->put('search', Cut::cutForSearch($rulesInput->get('search')));
        }

        return $rulesInput;
    }
}
