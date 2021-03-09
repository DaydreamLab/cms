<?php

namespace DaydreamLab\Cms\Services\Category\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Traits\Service\WithAccessIds;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class CategoryFrontService extends CategoryService
{
    use LoggedIn, WithAccessIds;

    protected $modelType = 'Front';

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];

    public function __construct(CategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getContentTypeIds($content_type)
    {
        $categories = $this->findByChain(['content_type', 'extension', 'state', 'access'], ['=', '=', '=', '='], [$content_type, 'item', '1', '2']);
        $category_ids = $categories->pluck('id')->all();

        return $category_ids;
    }


    public function getItemsByIds($params)
    {
        $items = $this->repo->getItemsByIds($params, $this->getAccessIds());

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
        foreach ($categories as $category) {
            $items = $items->merge($category->items);
        }

        $this->status  = 'SearchItemsSuccess';
        $this->response = $paginate ? $this->repo->paginate($items, $limit, $input->get('page') ?: 1, []) : $items;

        return $items;
    }

}
