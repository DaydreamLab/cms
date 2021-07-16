<?php

namespace DaydreamLab\Cms\Services\Brand\Admin;

use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use Illuminate\Support\Collection;

class BrandAdminService extends BrandService
{
    public function __construct(BrandAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function store(Collection $input)
    {
        $result = parent::store($input);

        if ($input->has('id')) {
            $result = $this->find($input->get('id'));
        }

        $this->response = $result;
        return $this->response;
    }
}