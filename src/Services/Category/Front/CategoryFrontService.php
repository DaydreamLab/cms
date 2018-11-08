<?php

namespace DaydreamLab\Cms\Services\Category\Front;

use DaydreamLab\Cms\Repositories\Category\Front\CategoryFrontRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\JJAJ\Helpers\Helper;

class CategoryFrontService extends CategoryService
{
    protected $type = 'CategoryFront';

    public function __construct(CategoryFrontRepository $repo)
    {
        parent::__construct($repo);
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);
        $item->hits++;
        return $item->save();
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

}
