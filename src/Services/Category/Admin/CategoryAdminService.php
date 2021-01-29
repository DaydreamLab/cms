<?php

namespace DaydreamLab\Cms\Services\Category\Admin;

use DaydreamLab\Cms\Repositories\Category\Admin\CategoryAdminRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use Illuminate\Support\Collection;

class CategoryAdminService extends CategoryService
{
    use CmsCronJob, LoggedIn;

    protected $modelType = 'Admin';

    protected $cmsCronJobService;

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];

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

        if (InputHelper::null($input, 'publish_up'))
        {
            $input->put('publish_up', now()->toDateTimeString()) ;
        }

        $result = parent::store($input);

        if (gettype($result) == 'boolean')
        {
            if ($result === true)
            {
                $item  = $this->find($input->get('id'));
            }
            else
            {
                // Something error 有可能是路徑已經存在
                return $this->response;
            }
        }
        else
        {
            $item      = $this->find($result->id);
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

        return parent::search($input);
    }

}
