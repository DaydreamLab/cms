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
        if($tags->count())
        {
            $tag = $tags->first();
            $maps = $this->itemTagMapFrontService->findBy('tag_id', '=', $tag->id);
            if ($maps->count())
            {
                $map_ids = [];
                foreach ($maps as $map)
                {
                    $map_ids[] = $map->item_id;
                }

                $items = $this->itemFrontService->search(Helper::collect([
                    'special_queries' => [
                        [
                            'type'  => 'whereIn',
                            'key'   => 'id',
                            'value' => $map_ids
                        ]
                    ]
                ]));
                $this->response = $items;
            }
        }

        return $this->response;
    }

}
