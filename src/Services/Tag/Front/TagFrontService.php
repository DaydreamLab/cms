<?php

namespace DaydreamLab\Cms\Services\Tag\Front;

use DaydreamLab\Cms\Repositories\Tag\Front\TagFrontRepository;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Item\Front\ItemTagMapFrontService;
use DaydreamLab\Cms\Services\Tag\TagService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;

class TagFrontService extends TagService
{
    protected $type = 'TagFront';

    protected $itemFrontService;

    protected $itemTagMapFrontService;

    public function __construct(TagFrontRepository $repo,
                                ItemFrontService $itemFrontService,
                                ItemTagMapFrontService $itemTagMapFrontService)
    {
        $this->itemFrontService = $itemFrontService;
        $this->itemTagMapFrontService = $itemTagMapFrontService;
        parent::__construct($repo);
    }

    public function search(Collection $input)
    {
        $tags =  parent::search($input);

        $items = Collection::make([]);
        if($tags->count())
        {

            foreach ($tags as $tag)
            {
                $tag->hits++;
                $this->update($tag, $tag);

                $maps = $this->itemTagMapFrontService->findBy('tag_id', '=', $tag->id);
                if ($maps->count())
                {
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
                        ]
                    ]));

                    foreach ($tag_items as $tag_item)
                    {
                        if(!$items->contains('id', $tag_item->id))
                        {
                            $items->push($tag_item);
                        }
                    }
                }
            }

            $limit= $input->get('limit') ?: 15;
            $this->response = $this->repo->paginate($items, (int)$limit, '', ['limit' => $limit]);
        }

        return $this->response;
    }

}
