<?php

namespace DaydreamLab\Cms\Services\Tag\Front;

use DaydreamLab\Cms\Repositories\Tag\Front\TagFrontRepository;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Item\Front\ItemTagMapFrontService;
use DaydreamLab\Cms\Services\Tag\TagService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class TagFrontService extends TagService
{
    protected $type = 'TagFront';

    protected $itemFrontService;

    protected $itemTagMapFrontService;

    protected $search_keys = ['title'];

    public function __construct(TagFrontRepository $repo,
                                ItemFrontService $itemFrontService,
                                ItemTagMapFrontService $itemTagMapFrontService)
    {
        $this->itemFrontService = $itemFrontService;
        $this->itemTagMapFrontService = $itemTagMapFrontService;
        parent::__construct($repo);
    }


    public function getRelatedItems($tags)
    {
        $tag_ids = $tags->map(function($item, $key){
            return $item->id;
        })->all();

        $maps = $this->itemTagMapFrontService->search(Helper::collect([
            'special_queries' => [
                [
                    'type'  => 'whereIn',
                    'key'   => 'tag_id',
                    'value' => $tag_ids
                ]
            ],
            'paginate'  => false
        ]));

        $map_ids = $maps->map(function($item, $key){
            return $item->item_id;
        })->all();


        $tag_items = $this->itemFrontService->search(Helper::collect([
            'special_queries' => [
                [
                    'type'  => 'whereIn',
                    'key'   => 'id',
                    'value' => $map_ids
                ]
            ],
            'paginate'  => false
        ]));

        $items = collect([]);
        foreach ($tag_items as $tag_item)
        {
            if(!$items->contains('id', $tag_item->id))
            {
                $items->push($tag_item);
            }
        }


        return $items;
    }


    public function search(Collection $input)
    {
        return parent::search($input);
    }


    public function searchItems(Collection $input, $paginate = true)
    {
        $input->put('paginate', $paginate);
        $limit = $input->get('limit') ?: $this->repo->getModel()->getPerPage();

        $tags = $this->search($input);

        $items = $this->getRelatedItems($tags);

        $this->status = Str::upper(Str::snake($this->type . 'SearchItemsSuccess'));
        $this->response = $paginate ? $this->repo->paginate($items, $limit, 1, []) : $items;

        return $items;
    }
}
