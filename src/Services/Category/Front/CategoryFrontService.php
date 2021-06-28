<?php

namespace DaydreamLab\Cms\Services\Category\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class CategoryFrontService extends CategoryService
{
    public function __construct(CategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
        //$this->itemFrontService = app(ItemFrontService::class);
    }

    public function getContentTypeIds($content_type)
    {
        $categories = $this->findByChain(['content_type', 'extension', 'state', 'access'], ['=', '=', '=', '='], [$content_type, 'item', '1', '2']);
        $category_ids = [];
        foreach ($categories as $category)
        {
            $category_ids[] = $category->id;
        }

        return $category_ids;
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);
        $item->hits++;

        return $item->save();
    }


    public function getItemsByIds($params)
    {
        $items = $this->repo->getItemsByIds($params, $this->access_ids);

        return $items;
    }


    public function getContentTypeItems($extension = 'item', $type = 'article')
    {
        $items = $this->repo->getContentTypeItems($extension, $type, $this->getAccessIds());

        return $items;
    }


    public function search(Collection $input)
    {

        return parent::search($input);
    }


    public function searchItems(Collection $input, $paginate = true)
    {
        $input->put('paginate', $paginate);
        $limit = $input->get('limit') ?: $this->repo->getModel()->getLimit();

        $categories = $this->search($input);

        $items = collect();
        foreach ($categories as $category)
        {
            $items = $items->merge($category->items);
        }

        $this->status  = 'SearchItemsSuccess';
        $this->response = $paginate ? $this->repo->paginate($items, $limit, $input->get('page') ?: 1, []) : $items;

        return $items;
    }

}
