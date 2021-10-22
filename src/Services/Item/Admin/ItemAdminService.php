<?php

namespace DaydreamLab\Cms\Services\Item\Admin;

use DaydreamLab\Cms\Jobs\ImportBulletin;
use DaydreamLab\Cms\Jobs\ImportCase;
use DaydreamLab\Cms\Jobs\ImportFinance;
use DaydreamLab\Cms\Jobs\ImportMemorabilia;
use DaydreamLab\Cms\Jobs\ImportPromation;
use DaydreamLab\Cms\Jobs\ImportRule;
use DaydreamLab\Cms\Jobs\ImportSolution;
use DaydreamLab\Cms\Jobs\ImportStockHolder;
use DaydreamLab\Cms\Jobs\ImportVideo;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldValue;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
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

    protected $brandService;

    public function __construct(ItemAdminRepository     $repo,
                                TagAdminService         $tagAdminService,
                                CategoryAdminService    $categoryAdminService,
                                BrandService            $brandService)
    {
        parent::__construct($repo);
        $this->repo                     = $repo;
        $this->tagAdminService          = $tagAdminService;
        $this->categoryAdminService     = $categoryAdminService;
        $this->cmsCronJobService        = app(CmsCronJobService::class);
        $this->brandService             = $brandService;
    }


    public function importRule($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportRule($filepath, $this);
        dispatch($job);
    }


    public function importStockHolder($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportStockHolder($filepath, $this);
        dispatch($job);
    }


    public function importFinance($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportFinance($filepath, $this);
        dispatch($job);
    }


    public function importMemorabilia($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportMemorabilia($filepath, $this);
        dispatch($job);
    }


    public function importSolution($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportSolution($filepath, $this, $this->brandService);
        dispatch($job);
    }


    public function importCase($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportCase($filepath, $this, $this->brandService);
        dispatch($job);
    }


    public function importVideo($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportVideo($filepath, $this, $this->brandService);
        dispatch($job);
    }


    public function importPromotion($input)
    {

        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportPromation($filepath, $this, $this->brandService);
        dispatch($job);
    }


    public function importBulletin($input)
    {

        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filepath = $temp->getRealPath();

        $job = new ImportBulletin($filepath, $this, $this->brandService);
        dispatch($job);
    }


    public function addMapping($item, $input)
    {
        $tags = $input->get('tags') ? $input->get('tags') : [];
        $tagIds = array_map(function($tag) {
            return $tag['id'];
        }, $tags);
        if (count($tagIds)) {
            $item->tags()->attach($tagIds);
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

        $files = $input->get('files') ? $input->get('files') : [];
        $files_ids = array_map(function($file) {
            return $file['id'];
        }, $files);
        if (count($files_ids)) {
            $item->files()->attach($files_ids);
        }

        $newsletterUserGroupIds = $input->get('newsletterUserGroupIds') ?: [];
        if (count($newsletterUserGroupIds)) {
            $item->newsletterUserGroups()->attach($newsletterUserGroupIds);
        }
    }


    public function modifyMapping($item, $input)
    {
        if ( $input->get('tags') !== null ) {
            $tagIds = array_map(function($tag) {
                return $tag['id'];
            }, $input->get('tags'));
            $item->tags()->sync($tagIds);
        }

        if ( $input->get('brands') !== null ) {
            $brand_ids = array_map(function($brand) {
                return $brand['id'];
            }, $input->get('brands'));
            $item->brands()->sync($brand_ids);
        }

        if ( $input->get('products') !== null ) {
            $product_ids = array_map(function($product) {
                return $product['id'];
            }, $input->get('products'));
            $item->products()->sync($product_ids);
        }

        if ( $input->get('files') !== null ) {
            $file_ids = array_map(function($file) {
                return $file['id'];
            }, $input->get('files'));
            $item->files()->sync($file_ids);
        }

        $newsletterUserGroupIds = $input->get('newsletterUserGroupIds') ?: [];
        if (count($newsletterUserGroupIds)) {
            $item->newsletterUserGroups()->sync($newsletterUserGroupIds);
        }
    }


    public function removeMapping($item)
    {
        $item->tags()->detach();
        $item->brands()->detach();
        $item->products()->detach();
        $item->files()->detach();
        $item->newsletterUserGroups()->detach();
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

        # 改用其他方法處理額外欄位
        $json_data_field_type = ['multiSelect', 'repeater'];
        $extrafields = $input->get('extrafields') ? : [];
        $input->forget('extrafields');
        $content_type = $input->get('content_type');
        $input->forget('content_type');

        $result = parent::store($input);

        # 存入額外欄位
        if ($input->has('id')) {
            $result = $this->find($input->get('id'));
        }
        $item_id = $result->id;

        foreach ($extrafields as $extrafield) {
            if (isset($extrafield['id'])) {
                $e = Extrafield::where('id', $extrafield['id'])->first();
            } else {
                $e = Extrafield::where('content_type', $content_type)->where('alias', $extrafield['alias'])->first();
            }
            $e_v = ExtrafieldValue::where('item_id', $item_id)->where('extrafield_id', $e->id)->first();
            if (!$e_v) {
                if ( in_array($e->type, $json_data_field_type) ) {
                    $e_v = ExtrafieldValue::create([
                        'extrafield_id' => $e->id,
                        'item_id' => $item_id,
                        'value' => json_encode($extrafield['value'])
                    ]);
                } else {
                    $e_v = ExtrafieldValue::create([
                        'extrafield_id' => $e->id,
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
