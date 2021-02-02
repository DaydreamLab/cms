<?php

namespace DaydreamLab\Cms\Controllers\Module\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Module\Front\ModuleFrontGetItemByAliasGet;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Cms\Services\Module\Front\ModuleFrontService;

class ModuleFrontController extends CmsController
{
    protected $modelName = 'Module';

    protected $modelType = 'Front';

    public function __construct(ModuleFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItemByAlias(ModuleFrontGetItemByAliasGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItemByAlias(Helper::collect([
            'alias'     => $request->route('alias'),
            'language'  => $request->get('language') != ''
                ? $request->language
                : config('daydreamlab.global.locale')
        ]));

        return $this->response($this->service->status, $this->service->response);
    }
}
