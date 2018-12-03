<?php

namespace DaydreamLab\Cms\Services\Category\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Str;

class CategoryFrontService extends CategoryService
{
    protected $type = 'CategoryFront';

    public function __construct(CategoryFrontRepository $repo)
    {
        parent::__construct($repo);
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


    public function getContentTypeItems($extension, $type)
    {
        $items = $this->repo->getContentTypeItems($extension, $type, $this->access_ids);

        return $this->appendExtrafileds($items);
    }
}
