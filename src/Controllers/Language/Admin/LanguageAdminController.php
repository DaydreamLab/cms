<?php

namespace DaydreamLab\Cms\Controllers\Language\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminRemovePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStorePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminStatePost;
use DaydreamLab\Cms\Requests\Language\Admin\LanguageAdminSearchPost;

class LanguageAdminController extends BaseController
{
    protected $package = 'Cms';

    protected $modelName = 'Language';

    protected $modelType = 'Admin';

    public function __construct(LanguageAdminService $service)
    {
        parent::__construct($service);
    }


    public function getItem($id)
    {
        $this->service->canAction('getLanguage');
        $this->service->getItem($id);

        return $this->response($this->service->status, $this->service->response);
    }


    public function remove(LanguageAdminRemovePost $request)
    {
        $this->service->canAction('deleteLanguage');
        $this->service->remove($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function state(LanguageAdminStatePost $request)
    {
        $this->service->canAction('updateLanguageState');
        $this->service->state($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function store(LanguageAdminStorePost $request)
    {
        InputHelper::null($request->validated(), 'id') ? $this->service->canAction('addLanguage')
            : $this->service->canAction('editLanguage');
        $this->service->store($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(LanguageAdminSearchPost $request)
    {
        $this->service->canAction('searchLanguage');
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
