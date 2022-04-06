<?php

namespace DaydreamLab\Cms\Controllers\IotResource\Front;

use DaydreamLab\Cms\Controllers\CmsController;
use DaydreamLab\Cms\Requests\IotResource\Front\IotResourceFrontDownloadRequest;
use DaydreamLab\Cms\Requests\IotResource\Front\IotResourceFrontGetItemRequest;
use DaydreamLab\Cms\Requests\IotResource\Front\IotResourceFrontSearchRequest;
use DaydreamLab\Cms\Resources\IotResource\Front\Collections\IotResourceFrontSearchResourceCollection;
use DaydreamLab\Cms\Resources\IotResource\Front\Models\IotResourceFrontResource;
use DaydreamLab\Cms\Services\IotResource\Front\IotResourceFrontService;
use Throwable;

class IotResourceFrontController extends CmsController
{
    protected $modelName = 'Resource';

    public function __construct(IotResourceFrontService $service)
    {
        parent::__construct($service);
        $this->service = $service;
    }


    public function downloadFile(IotResourceFrontDownloadRequest $request)
    {
        $input = $request->validated();
        try {
            $data = $this->service->downloadFile($input);
        } catch (Throwable $t) {
            $this->handleException($t);
            return $this->response($this->service->status, null);
        }

        if ($this->service->getProvider() == 'azure') {
            $filename = urlencode($input->get('name'));
//            header("Content-Type: {$input->get('contentType')}");
//            header("Content-Length: {$data->getProperties()->getContentLength()}");
//            header("Content-Disposition:attachment; filename={$filename}");
//            fpassthru($data->getContentStream());
            return response()->stream(
                function () use ($data) {
                    fpassthru($data->getContentStream());
                },
                200,
                [
                    "Content-Type" => $input->get('contentType'),
                    "Content-Disposition" => ":attachment; filename={$filename}",
                    "Content-Length" =>  $data->getProperties()->getContentLength(),
                ]
            );
        }
    }


    public function getItemByAlias(IotResourceFrontGetItemRequest $request)
    {
        try {
            $this->service->getItemByAlias(collect(['alias' => $request->route('alias')]));
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotResourceFrontResource::class);
    }


    public function optionList()
    {
        try {
            $this->service->optionList();
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response);
    }


    public function search(IotResourceFrontSearchRequest $request)
    {
        try {
            $this->service->search($request->validated());
        } catch (Throwable $t) {
            $this->handleException($t);
        }

        return $this->response($this->service->status, $this->service->response, [], IotResourceFrontSearchResourceCollection::class);
    }

}
