<?php

namespace DaydreamLab\Cms\Controllers\Category\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Category\Front\CategoryFrontService;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontRemovePost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontStorePost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontStatePost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontSearchPost;
use DaydreamLab\Cms\Requests\Category\Front\CategoryFrontCheckoutPost;
use Illuminate\Support\Facades\File;


class CategoryFrontController extends BaseController
{
    public function __construct(CategoryFrontService $service)
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


    public function checkout(CategoryFrontCheckoutPost $request)
    {
        $this->service->checkout($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(CategoryFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(CategoryFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(CategoryFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(CategoryFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }

    public function json()
    {

        $jp_data       = json_decode(File::get(storage_path('jp.json')));
        $taichung_data = json_decode(File::get(storage_path('taichung.json')));


//        $counter = 0;
//        foreach ($taichung_data as $protal)
//        {
//            $counter++;
//        }
//        Helper::show($counter);


        $merge = (object)[];
        $merge->definition = $jp_data->definition;
        $merge->portals = [];


        foreach ($jp_data->portals as $jp_p)
        {
            foreach ($taichung_data as $guid => $taichung_p)
            {

                if ($jp_p->guid == $guid)
                {
                    //Helper::show($taichung_p, $jp_p);
                    $jp_p->label = $taichung_p->codename;
                    $merge->portals[] = $jp_p;
                    break;
                }
            }
        }

//        $counter= 0;
//        foreach ($merge->portals as $portal)
//        {
//            $counter++;
//        }
//
//        Helper::show($counter);
        File::put(storage_path('merge.json'), json_encode($merge));

    }
}
