<?php

namespace DaydreamLab\Cms\Controllers\Item\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontGetItemGet;
use DaydreamLab\Cms\Resources\Item\Front\Models\ItemFrontResource;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\Cms\Services\Item\Front\ItemFrontService;
use DaydreamLab\Cms\Requests\Item\Front\ItemFrontSearchPost;

class ItemFrontController extends CmsController
{
    protected $package = 'Cms';

    protected $modelName = 'Item';

    protected $modelType = 'Front';

    public function __construct(ItemFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }

    public function getItemByAlias(ItemFrontGetItemGet $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->getItemByAlias(Helper::collect([
            'alias'     => $request->route('alias'),
            'language'  => $request->get('language') != ''
                ? $request->get('language')
                : config('daydreamlab.global.locale')
        ]));

        return $this->response($this->service->status, new ItemFrontResource($this->service->response));
    }


    public function search(ItemFrontSearchPost $request)
    {
        $this->service->setUser($request->user('api'));
        $this->service->search($request->validated());

        return $this->response($this->service->status, $this->service->response);
    }
}
