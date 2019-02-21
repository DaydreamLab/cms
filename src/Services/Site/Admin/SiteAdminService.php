<?php

namespace DaydreamLab\Cms\Services\Site\Admin;

use DaydreamLab\Cms\Repositories\Site\Admin\SiteAdminRepository;
use DaydreamLab\Cms\Services\Site\SiteService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class SiteAdminService extends SiteService
{
    protected $type = 'SiteAdmin';

    protected $search_keys = ['title'];

    public function __construct(SiteAdminRepository $repo)
    {
        parent::__construct($repo);
    }


    public function getList()
    {
        /**
         * @var $result LengthAwarePaginator
         */
        $result = $this->search(Helper::collect([
            'state' => 1,
            'limit' => 100,
        ]));


        $data = [];
        $items = $result->items();
        foreach ($items as $item)
        {
            $data[] = $item->only('id', 'title', 'url');
        }

        $this->status = Str::upper(Str::snake($this->type.'GetListSuccess'));
        $this->response = $data;

        return $data;
    }
}
