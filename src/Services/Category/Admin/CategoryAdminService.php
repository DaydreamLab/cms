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

    protected $modelType = 'Admin';

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


    public function store(Collection $input)
    {
        if (InputHelper::null($input, 'extension')){
            $input->put('extension', 'item');
        }

        if (InputHelper::null($input, 'publish_up')) {
            $input->put('publish_up', now()->toDateTimeString()) ;
        }

        $result = parent::store($input);

        if ($input->get('id')) {
            $item = $this->checkItem(collect(['id' => $input->get('id')]));
        } else {
            $item = $result->refresh();
        }

        $this->setCronJob($input, $item);

        return $result;
    }


    public function search(Collection $input)
    {
        if (InputHelper::null($input, 'extension')) {
            $input->forget('extension');
            $input->put('extension', 'item');
        }

        $limit = $input->get('limit');
        $paginate = $input->get('paginate');

        $input->put('paginate', 0);
        $input->put('limit', 99999999);

        $result = parent::search($input);

        $data = $result->toFlatTree();

        if ($paginate) {
            $this->response = $this->repo->paginate($data, $limit, $input->get('page') ?: 1);
        } else {
            $this->response = $data;
        }

        return $this->response;
    }
}
