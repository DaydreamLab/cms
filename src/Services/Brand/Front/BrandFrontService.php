<?php

namespace DaydreamLab\Cms\Services\Brand\Front;

use DaydreamLab\Cms\Repositories\Brand\Front\BrandFrontRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use Illuminate\Support\Collection;

class BrandFrontService extends BrandService
{
    public function __construct(BrandFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function getBrandByAlias(Collection $input)
    {
        $brand = $this->findBy('alias', '=', $input->get('alias'))->first();
        $this->status = 'GetItemSuccess';
        $this->response = $brand;

        return $brand;
    }
}
