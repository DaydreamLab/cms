<?php

namespace DaydreamLab\Cms\Services\Category\Front;

use DaydreamLab\Cms\Models\Item\Front\ItemFront;
use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Repositories\Item\Front\ItemFrontRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\User\Models\User\Front\UserGroupFront;
use DaydreamLab\User\Models\User\Front\UserGroupMapFront;
use DaydreamLab\User\Repositories\User\Front\UserGroupFrontRepository;
use DaydreamLab\User\Repositories\User\Front\UserGroupMapFrontRepository;
use DaydreamLab\User\Services\User\Front\UserGroupFrontService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class CategoryFrontService extends CategoryService
{
    protected $type = 'CategoryFront';

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];


    protected $itemFrontService;

    public function __construct(CategoryFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;

        /*
         * Deal with nested relation bug
         */
        $userGroupFrontService = new UserGroupFrontService(new UserGroupFrontRepository(new UserGroupFront()));

        $this->itemFrontService = new ItemFrontService(
            new ItemFrontRepository(
                new ItemFront(),
                $userGroupFrontService->repo,
                new UserGroupMapFrontRepository(new UserGroupMapFront()),
                $this->repo
            ),
            $this,
            $userGroupFrontService
        );
    }


    public function appendExtrafileds($items)
    {
        return $items->each(function ($value, $key){
            foreach ($value->extrafields as $extrafield)
            {
                if (array_key_exists('alias', $extrafield))
                {
                    $value->{$extrafield['alias']} = $extrafield['value'];
                }
            }
            $value->items = [];
        });
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

        if (!Helper::hasPermission($item->viewlevels, $this->viewlevels))
        {
            $this->status   = Str::upper(Str::snake($this->type.'InsufficientPermission'));
            $this->response = null;
            return false;
        }

        $item->hits++;
        return $item->save();
    }


    public function getItemsByIds($ids)
    {
        $items = $this->repo->getItemsByIds($ids, $this->access_ids);

        return $this->appendExtrafileds($items);
    }


    public function getContentTypeItems($extension = 'item', $type = 'article')
    {
        $items = $this->repo->getContentTypeItems($extension, $type, $this->access_ids);

        return $this->appendExtrafileds($items);
    }


    public function search(Collection $input)
    {
        if (InputHelper::null($input, 'content_type'))
        {
            $input->put('content_type', 'article');
        }

        return parent::search($input);
    }


    public function searchItems(Collection $input, $paginate = true)
    {
        $input->put('paginate', $paginate);
        $limit = $input->get('limit') ?: $this->repo->getModel()->getLimit();

        $categories = $this->search($input);

        $items = $this->getRelatedItems($this->itemFrontService, $categories);

        $this->status  = Str::upper(Str::snake($this->type.'SearchItemsSuccess'));
        $this->response = $paginate ? $this->repo->paginate($items, $limit, 1, []) : $items;

        return $items;
    }

}
