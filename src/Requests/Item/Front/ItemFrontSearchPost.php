<?php

namespace DaydreamLab\Cms\Requests\Item\Front;

use DaydreamLab\Cms\Requests\Item\ItemSearchPost;
use Fukuball\Jieba\Finalseg;
use Fukuball\Jieba\Jieba;
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
        ];

        return array_merge($rules, parent::rules());
    }

    public function rulesInput()
    {
        $rulesInput = parent::rulesInput();

//        // 對搜尋關鍵字分詞
//        if ($rulesInput->has('search')) {
//            Jieba::init();
//            Finalseg::init();
//            Jieba::loadUserDict(base_path('user_dict.txt'));
//
//            $cutString = implode(' ', Jieba::cutForSearch($rulesInput->get('search')));
//
//            $rulesInput->put('search', $cutString);
//        }

        return $rulesInput;
    }
}
