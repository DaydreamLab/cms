<?php

namespace DaydreamLab\Cms\Services\IotResource\Front;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;
use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Repositories\IotResource\Front\IotResourceFrontRepository;
use DaydreamLab\Cms\Services\IotCategory\Front\IotCategoryFrontService;
use DaydreamLab\Cms\Services\IotIndustry\Front\IotIndustryFrontService;
use DaydreamLab\Cms\Services\IotResource\IotResourceService;
use DaydreamLab\JJAJ\Exceptions\InternalServerErrorException;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use DaydreamLab\Media\Traits\Service\AzureBlob;
use Illuminate\Support\Collection;

class IotResourceFrontService extends IotResourceService
{
    use AzureBlob;

    protected $provider;


    public function __construct(IotResourceFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function downloadFile(Collection $input)
    {
        $provider = config('daydreamlab.media.file.provider');
        if ($provider == 'azure') {
            $client = $this->getAzureClient();
            try {
                $blob = $client->getBlob($this->azureContainer, $input->get('blobName'));
            } catch (\Throwable $t) {
                if ($t->getCode() == 404) {
                    throw new NotFoundException('BlobNotFound', 404);
                } else {
                    throw new InternalServerErrorException('BlobError', 500);
                }
            }

            return $blob;
        }
    }


    public function getProvider()
    {
        if (!$this->provider) {
            $this->provider = config('daydreamlab.media.file.provider');
        }

        return $this->provider;
    }


    public function getItemByAlias(Collection $input)
    {
        $item = $this->repo->findBy('alias', '=', $input->get('alias'))->first();
        if (!$item) {
            throw new NotFoundException('ItemNotExist', [
                'alias' => $input->get('alias')
            ], null, $this->modelName);
        }

        $prevAndNext = $this->repo->getPreviousAndNext($item);
        $item->previous = $prevAndNext['previous'];
        $item->next     = $prevAndNext['next'];

        $this->status = 'GetItemSuccess';
        $this->response = $item;
        return $this->response;
    }


    public function optionList()
    {
        $iot_cfs = app(IotCategoryFrontService::class);
        $response['category'] = $iot_cfs->treeList();

        $iot_ifs = app(IotIndustryFrontService::class);
        $response['industry'] = $iot_ifs->frontList()->map(function ($i) {
            $i->count = count($i->resources);
            unset($i->resources);
            unset($i->solutions);
            return $i;
        });

        $this->status = 'getItemSuccess';
        $this->response = $response;
        return $response;
    }


    public function search(Collection $input)
    {
        $categories = $input->get('categories') ? : [];
        if ( count($categories) ) {
            $cats = IotCategory::whereIn('alias', $categories)->get();
            $q = $input->get('q');
            $q = $q->whereHas('categories', function ($query) use ($cats) {
                $query->whereIn('iot_resources_categories_maps.category_id', $cats->map(function ($i) { return $i->id; }));
            });
        }
        $input->forget('categories');

        $industries = $input->get('industries') ? : [];
        if ( count($industries) ) {
            $inds = IotIndustry::whereIn('alias', $industries)->get();
            $q = $input->get('q');
            $q = $q->whereHas('industries', function ($query) use ($inds) {
                $query->whereIn('iot_resources_industries_maps.industry_id', $inds->map(function ($i) { return $i->id; }));
            });
        }
        $input->forget('industries');

        $input->put('state', 1);
        return parent::search($input);
    }
}
