<?php

namespace DaydreamLab\Cms\Controllers\Language\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Language\Front\LanguageFrontService;
use DaydreamLab\Cms\Requests\Language\Front\LanguageFrontRemovePost;
use DaydreamLab\Cms\Requests\Language\Front\LanguageFrontStorePost;
use DaydreamLab\Cms\Requests\Language\Front\LanguageFrontStatePost;
use DaydreamLab\Cms\Requests\Language\Front\LanguageFrontSearchPost;


class LanguageFrontController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Language';

    protected $modelType = 'Front';

    public function __construct(LanguageFrontService $service)
    {
        parent::__construct($service);
    }


    public function getItem($id)
    {
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(LanguageFrontRemovePost $request)
    {
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(LanguageFrontStatePost $request)
    {
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(LanguageFrontStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(LanguageFrontSearchPost $request)
    {
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
