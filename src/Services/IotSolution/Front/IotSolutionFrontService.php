<?php

namespace DaydreamLab\Cms\Services\IotSolution\Front;

use DaydreamLab\Cms\Models\IotCategory\IotCategory;
use DaydreamLab\Cms\Models\IotIndustry\IotIndustry;
use DaydreamLab\Cms\Repositories\IotSolution\Front\IotSolutionFrontRepository;
use DaydreamLab\Cms\Services\IotSolution\IotSolutionService;
use Illuminate\Support\Collection;

class IotSolutionFrontService extends IotSolutionService
{
    public function __construct(IotSolutionFrontRepository $repo)
    {
        parent::__construct($repo);
        $this->repo = $repo;
    }


    public function search(Collection $input)
    {
        if ( $category = $input->get('category') ) {
            $cat = IotCategory::where('alias', $category)->first();
            $q = $input->get('q');
            $q = $q->whereHas('categories', function ($query) use ($cat) {
                $query->where('iot_solutions_categories_maps.category_id', '=', $cat->id);
            });
        }
        $input->forget('category');

        if ( $industries = $input->get('industries') ) {
            $ind_ids = [];
            foreach ($industries as $industry) {
                $ind = IotIndustry::where('alias', $industry)->first();
                if ($ind) {
                    $ind_ids[] = $ind->id;
                }
            }

            if ( count($ind_ids) ) {
                $q = $input->get('q');
                $q = $q->whereHas('industries', function ($query) use ($ind_ids) {
                    $query->whereIn('iot_solutions_industries_maps.industry_id', $ind_ids);
                });
            }
        }
        $input->forget('industries');

        $input->put('state', 1);
        return parent::search($input);
    }
}
