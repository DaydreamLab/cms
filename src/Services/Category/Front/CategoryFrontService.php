<?php

namespace DaydreamLab\Cms\Services\Category\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class CategoryFrontService extends CategoryService
{

    protected $modelType = 'Front';

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];


    //protected $itemFrontService;

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

        $this->canAccess($item->access, $this->access_ids);

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
        if (InputHelper::null($input, 'content_type')) {
            $input->put('content_type', 'article');
        }

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

        $this->status  = Str::upper(Str::snake($this->type.'SearchItemsSuccess'));
        $this->response = $paginate ? $this->repo->paginate($items, $limit, $input->get('page') ?: 1, []) : $items;

        return $items;
    }

}
