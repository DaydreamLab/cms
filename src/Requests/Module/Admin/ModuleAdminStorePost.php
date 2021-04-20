<?php

namespace DaydreamLab\Cms\Requests\Module\Admin;

use DaydreamLab\Cms\Requests\Module\ModuleStorePost;
use DaydreamLab\JJAJ\Helpers\Helper;

class ModuleAdminStorePost extends ModuleStorePost
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
            //
        ];
        return array_merge($rules, parent::rules());
    }


    public function rulesInput()
    {
        $rulesInput =  parent::rulesInput();

        $params = $rulesInput->get('params');

        if (isset($params['category_ids'])) {
            $params['category_ids'] = collect($params['category_ids'])->pluck('id')->all();
            if (!isset($params['with_items'])) {
                $params['with_items'] = 'all';
            } else {
                $params['with_items'] = $params['with_items'] ?: 'all';
            }
            $params['order_by'] = 'ordering';
            $params['order'] = 'desc';
        }

        if (isset($params['featured_display'])) {
            $params['featured_display'] = (int) $params['featured_display'];
        }

        if (isset($params['featured_count'])) {
            $params['featured_count'] = (int) $params['featured_count'];
        }

        if (isset($params['item_count'])) {
            $params['item_count'] = (int) $params['item_count'];
        }

        if (isset($params['split_items_by_categories'])) {
            $params['split_items_by_categories'] = (int) $params['split_items_by_categories'];
        }

        if (isset($params['split_items_by_featured'])) {
            $params['split_items_by_featured'] = (int) $params['split_items_by_featured'];
        }

        $rulesInput->put('params', $params);

        return $rulesInput;
    }
}
