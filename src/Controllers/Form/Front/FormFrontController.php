<?php

namespace DaydreamLab\Cms\Controllers\Form\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Services\Form\Front\FormFrontService;
use DaydreamLab\Cms\Requests\Form\Front\FormFrontStorePost;

class FormFrontController extends CmsController
{
    protected $modelName = 'Form';

    protected $modelType = 'Front';

    public function __construct(FormFrontService $service)
    {
        parent::__construct($service);
    }


    public function store(FormFrontStorePost $request)
    {
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
