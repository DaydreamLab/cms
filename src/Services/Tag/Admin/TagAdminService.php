<?php

namespace DaydreamLab\Cms\Services\Tag\Admin;

use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Services\Tag\TagService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use Illuminate\Support\Collection;

class TagAdminService extends TagService
{
    use CmsCronJob;

    protected $cmsCronJobService;

    public function __construct(TagAdminRepository  $repo,
                                CmsCronJobService   $cmsCronJobService)
    {
        parent::__construct($repo);
        $this->repo                 = $repo;
        $this->cmsCronJobService    = $cmsCronJobService;
    }


    public function removeMapping($item)
    {
        $item->items()->detach();
    }


    public function store(Collection $input)
    {
        $result = parent::store($input);

        $this->setCronJob($input, $result);

        return $result;
    }
}
