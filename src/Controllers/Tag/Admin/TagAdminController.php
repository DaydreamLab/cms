<?php

namespace DaydreamLab\Cms\Controllers\Tag\Admin;

use DaydreamLab\Cms\Requests\Item\ItemOrderingPost;
use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminRemovePost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminStorePost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminStatePost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminSearchPost;
use DaydreamLab\Cms\Requests\Tag\Admin\TagAdminCheckoutPost;


class TagAdminController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Tag';

    protected $modelType = 'Admin';

    public function __construct(TagAdminService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem($id)
    {
        $this->service->canAction('getTag');
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function checkout(TagAdminCheckoutPost $request)
    {
        $this->service->checkout($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function ordering(ItemOrderingPost $request)
    {
        $this->service->canAction('editTag');
        $this->service->ordering($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(TagAdminRemovePost $request)
    {
        $this->service->canAction('deleteTag');
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(TagAdminStatePost $request)
    {
        $this->service->canAction('updateTagState');
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(TagAdminStorePost $request)
    {
        InputHelper::null($request->validated(), 'id') ? $this->service->canAction('addTag')
            : $this->service->canAction('editTag');
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(TagAdminSearchPost $request)
    {
        $this->service->canAction('searchTag');
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
