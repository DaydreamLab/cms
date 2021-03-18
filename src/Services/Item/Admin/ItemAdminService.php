<?php

namespace DaydreamLab\Cms\Services\Item\Admin;

use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Services\Item\ItemService;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class ItemAdminService extends ItemService
{
    use CmsCronJob;

    protected $type = 'ItemAdmin';

    protected $tagAdminService;

    protected $itemTagMapAdminService;

    protected $cmsCronJobService;

    protected $categoryAdminService;

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];

    public function __construct(
        ItemAdminRepository $repo,
        TagAdminService $tagAdminService,
        ItemTagMapAdminService $itemTagMapAdminService,
        CategoryAdminService $categoryAdminService,
        CmsCronJobService $cmsCronJobService)
    {
        parent::__construct($repo);
        $this->repo                   = $repo;
        $this->tagAdminService        = $tagAdminService;
        $this->itemTagMapAdminService = $itemTagMapAdminService;
        $this->categoryAdminService   = $categoryAdminService;
        $this->cmsCronJobService      = $cmsCronJobService;
    }


    public function add(Collection $input)
    {
        if ((int) $input->get('featured') == 1) {
            $newest = $this->repo->findNewestFeatured();
            $input->put('featured_ordering', $newest ? $newest->featured_ordering + 1 : 1);
        }

        return parent::add($input);
    }


    public function modify(Collection $input, $diff = false)
    {
        $input_featured = $input->get('featured');
        $item           = $this->checkItem($input->id, $diff);
        // 代表有修改到 featured 值
        if ($item && $item->featured != $input_featured) {
            if ((int) $input_featured == 1) {
                $newest = $this->repo->findNewestFeatured();
                if ($newest) {
                    $input->put('featured_ordering', $newest->featured_ordering++);
                }
            } else {
                $newer = $this->repo->findNewerFeatured($item);
                if ($newer) {
                    $this->repo->updateOrdering($newer, '--');
                    $input->put('featured_ordering', null);
                }
            }
        }

        return parent::modify($input, $diff);
    }

    public function search(Collection $input)
    {
        $extension = $input->get('extension') ?: 'item';

        if ($extension == 'item') {
            $content_type = $input->get('content_type') ?: ['item', 'article', 'link', 'slideshow'];
        } else {
            $content_type = '';
        }

        if ($input->get('category_id')) {
            $category_ids = $this->categoryAdminService->findSubTreeIds($input->category_id);
        } else {
            $categories = $this->categoryAdminService->search(Helper::collect([
                'extension'    => $extension,
                'content_type' => $content_type,
                'paginate'     => false
            ]));

            $category_ids = $categories->map(function ($item, $key) {
                return $item->id;
            });
        }

        $input->put('special_queries', [
                [
                    'type'  => 'whereIn',
                    'key'   => 'category_id',
                    'value' => $category_ids
                ]
            ]
        );

        // Item Search 沒有這兩個 column
        $input->forget('extension');
        $input->forget('content_type');
        // 要撈取包括子分類的東西
        $input->forget('category_id');

        return parent::search($input);
    }


    public function store(Collection $input, $diff = false)
    {
        if (InputHelper::null($input, 'hits')) {
            $input->put('hits', 0);
        }

        if ($input->state == 1 && InputHelper::null($input, 'publish_up')) {
            $input->put('publish_up', now());
            $input->publish_up = now()->toDateTimeString();
        }

        $tags = $input->get('tags') ? $input->get('tags') : [];
        $input->forget('tags');
        // 用於站內搜尋時給資料庫做全文檢索, 在items model中利用mutator做儲存前處理
        $tmp = $input->get('title') . ' ' . $input->get('introtext') . ' ' . $input->get('description');
        $input->put('full_text_search', $tmp);
        unset($tmp);

        $result = parent::store($input, $diff);

        if (gettype($result) == 'boolean') {
            if ($result === true) {
                $item = $this->find($input->id);
            } else {
                // Something error alias重複
                return $this->response;
            }
        } else {
            $item = $this->find($result->id);
        }

        $this->storeTags($tags, $item->id);

        $this->setCronJob($input, $item);

        $this->response = $item;

        return $item;
    }


    public function storeTags($tags = [], $item_id)
    {
        $tag_ids = [];
        foreach ($tags as $tag) {
            if (array_key_exists('id', $tag) && $tag['id'] != '') {
                //$tag_ids[] = $tag['id'];
            } else if (array_key_exists('title', $tag)) {
                $db_tag = $this->tagAdminService->findBy('title', '=', $tag['title'])
                                                ->first();
                if (!$db_tag) {
                    $tag = $this->tagAdminService->store(Helper::collect($tag));
                } else {
                    $tag = $db_tag;
                }
            } else {
                $tag = $this->tagAdminService->store(Helper::collect($tag));
            }

            $tag_ids[] = $tag['id'];
        }

        if (count($tag_ids)) {
            $this->itemTagMapAdminService->storeKeysMap(Helper::collect([
                'item_id' => $item_id,
                'tag_ids' => $tag_ids,
            ]));
        }
    }
}
