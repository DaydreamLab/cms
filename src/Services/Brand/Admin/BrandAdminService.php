<?php

namespace DaydreamLab\Cms\Services\Brand\Admin;

use DaydreamLab\Cms\Jobs\ImportBrand;
use DaydreamLab\Cms\Jobs\ImportBrandContact;
use DaydreamLab\Cms\Jobs\ImportBrandInfo;
use DaydreamLab\Cms\Repositories\Brand\Admin\BrandAdminRepository;
use DaydreamLab\Cms\Services\Brand\BrandService;
use DaydreamLab\Cms\Services\Product\ProductService;
use DaydreamLab\Cms\Services\ProductCategory\ProductCategoryService;
use Illuminate\Support\Collection;

class BrandAdminService extends BrandService
{
    protected $productCategoryRepo;

    protected $productCategoryService;

    protected $productService;


    public function __construct(
        BrandAdminRepository $repo,
        ProductCategoryService $productCategoryService,
        ProductService $productService
    ) {
        parent::__construct($repo);
        $this->repo = $repo;
        $this->productCategoryService = $productCategoryService;
        $this->productService = $productService;
    }


    public function addMapping($item, $input)
    {
        $tags = $input->get('tags') ? $input->get('tags') : [];
        $tagIds = array_map(function ($tag) {
            return $tag['id'];
        }, $tags);
        if (count($tagIds)) {
            $item->tags()->attach($tagIds);
        }
        if ($this->user) {
            $item->users()->attach($this->user->id);
        }
    }


    public function import($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filePath = $temp->getRealPath();
        $job = new ImportBrand($filePath, $this->productCategoryService, $this->productService, $this);

        dispatch($job);

        $this->status = 'ImportSuccess';
    }


    public function importBrandInfo($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filePath = $temp->getRealPath();
        $job = new ImportBrandInfo($filePath, $this);

        dispatch($job);

        $this->status = 'ImportSuccess';
    }


    public function importContact($input)
    {
        $file = $input->file('file');
        $temp = $file->move('tmp', $file->hashName());
        $filePath = $temp->getRealPath();
        $job = new ImportBrandContact($filePath, $this);

        dispatch($job);

        $this->status = 'ImportSuccess';
    }


    public function modifyMapping($item, $input)
    {
        if ($input->get('tags') !== null) {
             $tagIds = array_map(function ($tag) {
                return $tag['id'];
             }, $input->get('tags'));
            $item->tags()->sync($tagIds);
        }
    }


    public function removeMapping($item)
    {
        $item->tags()->detach();
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
