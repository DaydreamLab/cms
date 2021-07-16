<?php

namespace DaydreamLab\Cms\Services\Item\Admin;

use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldValue;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\Cms\Services\Item\ItemService;
use Illuminate\Support\Collection;

class ItemAdminService extends ItemService
{
    use CmsCronJob;

    protected $tagAdminService;

    protected $cmsCronJobService;

    protected $categoryAdminService;

    public function __construct(ItemAdminRepository     $repo,
                                TagAdminService         $tagAdminService,
                                CategoryAdminService    $categoryAdminService)
    {
        parent::__construct($repo);
        $this->repo                     = $repo;
        $this->tagAdminService          = $tagAdminService;
        $this->categoryAdminService     = $categoryAdminService;
        $this->cmsCronJobService        = app(CmsCronJobService::class);
    }


    public function addMapping($item, $input)
    {
        $tagIds = $input->get('tagIds') ?: [];
        if (count($tagIds)) {
            $item->tags()->attach($input->get('tagIds'));
        }

        $brands = $input->get('brands') ? $input->get('brands') : [];
        $brand_ids = array_map(function($brand) {
            return $brand['id'];
        }, $brands);
        if (count($brand_ids)) {
            $item->brands()->attach($brand_ids);
        }

        $products = $input->get('products') ? $input->get('products') : [];
        $product_ids = array_map(function($product) {
            return $product['id'];
        }, $products);
        if (count($product_ids)) {
            $item->products()->attach($product_ids);
        }

        $newsletterUserGroupIds = $input->get('newsletterUserGroupIds') ?: [];
        if (count($newsletterUserGroupIds)) {
            $item->newsletterUserGroups()->attach($newsletterUserGroupIds);
        }
    }


    public function modifyMapping($item, $input)
    {
        $tagIds = $input->get('tagIds') ?: [];
        if (count($tagIds)) {
            $item->tags()->sync($tagIds);
        }

        $brands = $input->get('brands') ? $input->get('brands') : [];
        $brand_ids = array_map(function($brand) {
            return $brand['id'];
        }, $brands);
        if (count($brand_ids)) {
            $item->brands()->sync($brand_ids);
        }

        $products = $input->get('products') ? $input->get('products') : [];
        $product_ids = array_map(function($product) {
            return $product['id'];
        }, $products);
        if (count($product_ids)) {
            $item->products()->sync($product_ids);
        }

        $newsletterUserGroupIds = $input->get('newsletterUserGroupIds') ?: [];
        if (count($newsletterUserGroupIds)) {
            $item->newsletterUserGroups()->sync($newsletterUserGroupIds);
        }
    }


    public function search(Collection $input)
    {
        $extension = $input->get('extension') ?: 'item';
        if ($extension == 'item') {
            $content_type = $input->get('content_type') ?: 'article';
        } else {
            $content_type = '';
        }


        if (!InputHelper::null($input, 'category_id')) {
            $category_ids = $this->categoryAdminService->findSubTreeIds($input->get('category_id'));
        } else {
            $categories = $this->categoryAdminService->search(Helper::collect([
                'extension'     => $extension,
                'content_type'  => $content_type,
                'paginate'  => false
            ]));

            $category_ids = $categories->pluck('id');
        }

        $q = $input->get('q');
        $q = $q->whereIn('category_id', $category_ids);
        $input->put('q', $q);
        // Item Search 沒有這兩個 column
        $input->forget(['extension', 'content_type', 'category_id']);

        return parent::search($input);
    }


    public function store(Collection $input)
    {
        if ($input->get('state') == 1
            && InputHelper::null($input, 'publish_up')
        ) {
            $input->put('publish_up', now());
            $input->publish_up = now()->toDateTimeString();
        }

        $tags = $input->get('tags') ? $input->get('tags') : [];
        $tagIds = array_map(function($tag) {
            return $tag['id'];
        }, $tags);
        $input->put('tagIds', $tagIds);

        # 改用其他方法處理額外欄位
        $json_data_field_type = ['multiSelect', 'repeater'];
        $extrafields = $input->get('extrafields') ? : [];
        $input->forget('extrafields');

        $result = parent::store($input);

        # 存入額外欄位
        if ($input->has('id')) {
            $result = $this->find($input->get('id'));
        }
        $item_id = $result->id;

        foreach ($extrafields as $extrafield) {
            $e = Extrafield::where('id', $extrafield['id'])->first();
            $e_v = ExtrafieldValue::where('item_id', $item_id)->where('extrafield_id', $extrafield['id'])->first();
            if (!$e_v) {
                if ( in_array($e->type, $json_data_field_type) ) {
                    $e_v = ExtrafieldValue::create([
                        'extrafield_id' => $extrafield['id'],
                        'item_id' => $item_id,
                        'value' => json_encode($extrafield['value'])
                    ]);
                } else {
                    $e_v = ExtrafieldValue::create([
                        'extrafield_id' => $extrafield['id'],
                        'item_id' => $item_id,
                        'value' => $extrafield['value']
                    ]);
                }
            } else {
                if ( in_array($e->type, $json_data_field_type) ) {
                    $e_v->value = json_encode($extrafield['value']);
                } else {
                    $e_v->value = $extrafield['value'];
                }
                $e_v->save();
            }
        }

        $this->setCronJob($input, $result);

        $this->response = $result;

        return $this->response;
    }
}
