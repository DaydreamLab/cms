<?php
namespace DaydreamLab\Cms\Controllers\Category;

use DaydreamLab\Cms\Requests\Category\CategoryOrderingPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Requests\Category\CategoryRemovePost;
use DaydreamLab\Cms\Requests\Category\CategoryStorePost;
use DaydreamLab\Cms\Requests\Category\CategoryStatePost;
use DaydreamLab\Cms\Requests\Category\CategorySearchPost;
use DaydreamLab\Cms\Requests\Category\CategoryCheckoutPost;

class CategoryController extends BaseController
{
    public function __construct(CategoryService $service)
    {
        parent::__construct($service);
    }


    public function getItem($id)
    {
        $this->service->getItem($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function checkout(CategoryCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(CategoryOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


        public function remove(CategoryRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(CategoryStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(CategoryStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(CategorySearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }

}
