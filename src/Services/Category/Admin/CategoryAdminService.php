<?php

namespace DaydreamLab\Cms\Services\Category\Admin;

use DaydreamLab\Cms\Repositories\Category\Admin\CategoryAdminRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class CategoryAdminService extends CategoryService
{
    use CmsCronJob;

    protected $cmsCronJobService;

    public function __construct(CategoryAdminRepository $repo)
    {
        parent::__construct($repo);
        $this->repo               = $repo;
        $this->cmsCronJobService = app(CmsCronJobService::class);
    }


    public function findSubTreeIds($id)
    {
        return $this->repo->findSubTreeIds($id);
    }


    public function getRoot($extention)
    {
        return $this->repo->getRoot($extention);
    }


    public function store(Collection $input)
    {
        if (!$input->get('extension')) {
            $input->put('extension', 'item');
        }

        $item = parent::store($input);

        $this->setCronJob($input, $item);

        return $item;
    }
}
