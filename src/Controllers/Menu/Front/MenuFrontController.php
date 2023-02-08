<?php

namespace DaydreamLab\Cms\Controllers\Menu\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Menu\Front\MenuFrontGetItemByPathGet;
use DaydreamLab\Cms\Requests\Menu\Front\MenuFrontGetTreeGet;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Cms\Services\Menu\Front\MenuFrontService;

class MenuFrontController extends CmsController
{
    protected $modelName = 'Menu';

    public function __construct(MenuFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function getItem(MenuFrontGetItemByPathGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItem($request->validated());
//        $this->service->getMenu(Helper::collect([
//            'page'      => $request->get('page'),
//            'category'  => $request->get('category'),
//            'alias'     => $request->route('path'),
//            'host'      => $request->getHttpHost(),
//            'language'  => isset($request->language)
//                ? $request->language
//                : config('daydreamlab.global.locale')
//        ]));

        return $this->response($this->service->status, $this->service->response);
    }


    public function getTree(MenuFrontGetTreeGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getTree(Helper::collect([
            'host'       => $request->getHttpHost(),
            'language'   => isset($request->language)
                ? $request->language
                : config('daydreamlab.global.locale')
        ]));

        return $this->response($this->service->status, $this->service->response);
    }
}
