<?php

namespace DaydreamLab\Cms\Services\Tag\Front;

use DaydreamLab\Cms\Repositories\Tag\Front\TagFrontRepository;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Services\Tag\TagService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class TagFrontService extends TagService
{
    protected $type = 'Front';

    protected $itemFrontService;


    public function __construct(TagFrontRepository $repo,
                                ItemFrontService $itemFrontService)
    {
        $this->itemFrontService = $itemFrontService;
        parent::__construct($repo);
    }


    public function getRelatedItems($tags)
    {
        $items_data = collect([]);
        foreach ($tags as $tag)
        {
            $items = $tag->items;
            foreach ($items as $item)
            {
                if(!$items_data->contains('id', $item->id))
                {
                    $items_data->push($item);
                }
            }
        }

        return $items_data;
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

        $this->status = 'SearchItemsSuccess';
        $this->response = $paginate ? $this->repo->paginate($items, $limit, $input->get('page') ?: 1, []) : $items;

        return $items;
    }
}
