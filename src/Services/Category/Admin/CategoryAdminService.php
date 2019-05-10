<?php

namespace DaydreamLab\Cms\Services\Category\Admin;

use DaydreamLab\Cms\Models\Item\Admin\ItemAdmin;
use DaydreamLab\Cms\Models\Item\Admin\ItemTagMapAdmin;
use DaydreamLab\Cms\Models\Tag\Admin\TagAdmin;
use DaydreamLab\Cms\Repositories\Category\Admin\CategoryAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemTagMapAdminRepository;
use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Cms\CmsCronJobService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemTagMapAdminService;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\Cms\Traits\Service\CmsCronJob;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class CategoryAdminService extends CategoryService
{
    use CmsCronJob;

    protected $type = 'CategoryAdmin';

    protected $cmsCronJobService, $itemAdminService;

    protected $search_keys = ['title', 'introtext', 'description', 'extrafields_search'];

    public function __construct(CategoryAdminRepository $repo,
                                CmsCronJobService       $cmsCronJobService)
    {
        parent::__construct($repo);
        $this->repo               = $repo;
        $this->cmsCronJobService  = $cmsCronJobService;

        $this->itemAdminService = new ItemAdminService(
            new ItemAdminRepository(new ItemAdmin()),
            new TagAdminService(new TagAdminRepository(new TagAdmin()), $cmsCronJobService),
            new ItemTagMapAdminService(new ItemTagMapAdminRepository(new ItemTagMapAdmin())),
            $this,
            $cmsCronJobService
        );
    }


    public function findSubTreeIds($id)
    {
        return $this->repo->findSubTreeIds($id);
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

        $this->hasPermission($item->access, $this->access_ids);

        return  $this->checkLocked($item);
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
