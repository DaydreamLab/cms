<?php

namespace DaydreamLab\Cms\Services\IotSolution\Front;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;
use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Models\IotTag\IotTag;
use DaydreamLab\Cms\Repositories\IotSolution\Front\IotSolutionFrontRepository;
use DaydreamLab\Cms\Resources\IotSolution\Front\Collections\IotSolutionFrontSearchResourceCollection;
use DaydreamLab\Cms\Services\IotCategory\Front\IotCategoryFrontService;
use DaydreamLab\Cms\Services\IotIndustry\Front\IotIndustryFrontService;
use DaydreamLab\Cms\Services\IotSolution\IotSolutionService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Exceptions\NotFoundException;
use Illuminate\Support\Collection;

class IotSolutionFrontService extends IotSolutionService
{
    public function __construct(IotSolutionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
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
            $i->count = count($i->solutions);
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

        $tags = $input->get('tags') ? : [];
        if ( count($tags) ) {
            $tag_models = IotTag::whereIn('alias', $tags)->get();
            $q = $input->get('q');
            $q = $q->whereHas('tags', function ($query) use ($tag_models) {
                $query->whereIn('iot_solutions_tags_maps.tag_id', $tag_models->map(function ($i) { return $i->id; }));
            });
        }
        $input->forget('tags');

        $input->put('state', 1);
        //$input->put('featured', 0);
        $result = parent::search($input);
        $featured = parent::search(collect([
            'state' => 1,
            'featured' => 1,
            'limit' => 0,
            'paginate' => false,
            'q' => new QueryCapsule()
        ]));

        $pagination = $result->toArray();
        unset($pagination['data']);
        $this->response = collect([
            'featured' => (new IotSolutionFrontSearchResourceCollection($featured, false)),
            'items' => (new IotSolutionFrontSearchResourceCollection($result->items(), false)),
            'pagination' => $pagination
        ]);
        return $this->response;
    }
}
