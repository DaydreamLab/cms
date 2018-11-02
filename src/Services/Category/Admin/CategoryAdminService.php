<?php

namespace DaydreamLab\Cms\Services\Category\Admin;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Cms\CmsCronJob;
use DaydreamLab\Cms\Repositories\Category\Admin\CategoryAdminRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CategoryAdminService extends CategoryService
{
    protected $type = 'CategoryAdmin';

    protected $cmsCronJobModel;

    public function __construct(CategoryAdminRepository $repo)
    {
        $this->cmsCronJobModel = new CmsCronJob();
        parent::__construct($repo);
    }


    public function filterItems($items, $limit)
    {
        $user = Auth::guard('api')->user();
        $viewlevels = $user->viewlevels;

        // Super User
        if (!in_array(5, $viewlevels))
        {
            $items = $items->filter(function ($value, $key) use ($viewlevels){
                foreach ($viewlevels as $viewlevel)
                {
                    if(in_array($viewlevel, $value->viewlevels))
                    {
                        return $value;
                    }
                }
                return false;
            });
        }

        return $this->repo->paginate($items, $limit);
    }


    public function getItem($id)
    {
        $item = parent::getItem($id);

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
        if (InputHelper::null($input, 'alias')){
            $input->forget('alias');
            $input->put('alias', now()->format('Y-m-d-H-i-ss'));
        }


        if (InputHelper::null($input, 'parent_id')) {
            $input->put('path', '/'.$input->get('alias'));
        }
        else {
            $parent = $this->find($input->parent_id);
            $input->put('path', $parent->path . '/' .$input->get('alias'));
        }


        if (InputHelper::null($input, 'extension')){
            $input->forget('extension');
            $input->put('extension', 'item');
        }


        if (InputHelper::null($input, 'publish_up'))
        {
            $input->forget('publish_up');
            $input->put('publish_up', now());
            $input->publish_up = now()->toDateTimeString();
        }


        if (InputHelper::null($input, 'language')){
            $input->forget('language');
            $input->put('language', 'All');
        }


        if (!InputHelper::null($input, 'description'))
        {
            $desc = $input->description;
            $input->forget('description');
            $input->put('description', nl2br($desc));
        }


        $result = parent::storeNested($input);
        if (gettype($result) == 'boolean')
        {
            if ($result === true)
            {
                $item      = $this->find($input->id);
            }
            else
            {
                // Something error
                return $result;
            }
        }
        else
        {
            $item      = $this->find($result->id);
        }


        if ($input->publish_up > now())
        {
            $this->cmsCronJobModel->create([
                'table'     => 'categories',
                'item_id'   => $item->id,
                'type'      => 'up',
                'time'      => $item->publish_up
            ]);
        }

        if (!InputHelper::null($input, 'publish_down'))
        {
            if ($input->publish_down > now())
            {
                $this->cmsCronJobModel->create([
                    'table'     => 'categories',
                    'item_id'   => $item->id,
                    'type'      => 'down',
                    'time'      => $item->publish_down
                ]);
            }
        }
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
