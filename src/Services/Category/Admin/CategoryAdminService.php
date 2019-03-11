<?php

namespace DaydreamLab\Cms\Services\Category\Admin;

use DaydreamLab\Cms\Repositories\Category\Admin\CategoryAdminRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class CategoryAdminService extends CategoryService
{
    use CmsCronJob;

    protected $type = 'CategoryAdmin';

    protected $cmsCronJobService;

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];

    public function __construct(CategoryAdminRepository $repo,
                                CmsCronJobService       $cmsCronJobService)
    {
        parent::__construct($repo);
        $this->repo               = $repo;
        $this->cmsCronJobService  = $cmsCronJobService;
    }


    public function findSubTreeIds($id)
    {
        return $this->repo->findSubTreeIds($id);
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

        if (!Helper::hasPermission($item->viewlevels, $this->viewlevels))
        {
            $this->status   = Str::upper(Str::snake($this->type.'InsufficientPermission'));
            $this->response = null;
            return false;
        }


        if ($item->locked_by && $item->locked_by != $this->user->id)
        {
            $this->status   = Str::upper(Str::snake($this->type.'IsLocked'));
            $this->response = (object) $this->user->only('email', 'full_name', 'nickname');
            return false;
        }

        $item->locked_by = $this->user->id;
        $item->locked_at = now();

        return $item->save();
    }


    public function store(Collection $input)
    {
        if (InputHelper::null($input, 'extension')){
            $input->put('extension', 'item');
        }

        if (InputHelper::null($input, 'publish_up'))
        {
            $input->put('publish_up', now());
            $input->publish_up = now()->toDateTimeString();
        }


        $result = parent::store($input);

        if (gettype($result) == 'boolean')
        {
            if ($result === true)
            {
                $item  = $this->find($input->id);
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
        if (InputHelper::null($input, 'extension'))
        {
            $input->forget('extension');
            $input->put('extension', 'item');
        }
        return parent::search($input);
    }

}
