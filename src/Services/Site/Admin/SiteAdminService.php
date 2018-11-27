<?php

namespace DaydreamLab\Cms\Services\Site\Admin;

use DaydreamLab\Cms\Repositories\Site\Admin\SiteAdminRepository;
use DaydreamLab\Cms\Services\Site\SiteService;
use DaydreamLab\JJAJ\Helpers\Helper;
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


    public function getList(Collection $input)
    {
        $result = $this->findBy('state', '=', 1);

        $data = [];
        foreach ($result as $item)
        {
            if (in_array($item->access, $this->access_ids))
            {
                $data[] = $item;
            }
        }

        $this->status = Str::upper(Str::snake($this->type.'GetListSuccess'));
        $this->response = $data;

        return $data;
    }
}
