<?php

namespace DaydreamLab\Cms\Services\IotSolution\Front;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;
use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Repositories\IotSolution\Front\IotSolutionFrontRepository;
use DaydreamLab\Cms\Services\IotCategory\Front\IotCategoryFrontService;
use DaydreamLab\Cms\Services\IotIndustry\Front\IotIndustryFrontService;
use DaydreamLab\Cms\Services\IotSolution\IotSolutionService;
use Illuminate\Support\Collection;

class IotSolutionFrontService extends IotSolutionService
{
    public function __construct(IotSolutionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function optionList()
    {
        $iot_cfs = app(IotCategoryFrontService::class);
        $response['category'] = $iot_cfs->treeList();

        $iot_ifs = app(IotIndustryFrontService::class);
        $response['industry'] = $iot_ifs->frontList()->map(function ($i) {
            //$i->resource_count = count($i->resources);
            $i->solution_count = count($i->solutions);
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
                $query->whereIn('iot_solutions_categories_maps.category_id', $cats->map(function ($i) { return $i->id; }));
            });
        }
        $input->forget('categories');

        $industries = $input->get('industries') ? : [];
        if ( count($industries) ) {
            $inds = IotIndustry::whereIn('alias', $industries)->get();
            $q = $input->get('q');
            $q = $q->whereHas('industries', function ($query) use ($inds) {
                $query->whereIn('iot_solutions_industries_maps.industry_id', $inds->map(function ($i) { return $i->id; }));
            });
        }
        $input->forget('industries');

        $input->put('state', 1);
        return parent::search($input);
    }
}
