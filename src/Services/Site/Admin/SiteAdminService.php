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
    protected $modelType = 'Admin';

    protected $search_keys = ['title'];

    public function __construct(SiteAdminRepository $repo)
    {
        parent::__construct($repo);
    }


    public function getItem($id)
    {
        return parent::getItem($id);
    }


    public function getList(Collection $input)
    {
        /**
         * @var $result LengthAwarePaginator
         */
        $result = $this->search(Helper::collect([
            'state'     => 1,
            'paginate'  => false
        ]));


        $data = [];
        foreach ($result as $item)
        {
            $data[] = $item->only('id', 'title', 'url');
        }

        $this->status = 'GetListSuccess';
        $this->response = $data;

        return $data;
    }


    public function ordering(Collection $input)
    {
        return parent::ordering($input);
    }
}
