<?php

namespace DaydreamLab\Cms\Services\Extrafield\Admin;

use DaydreamLab\Cms\Repositories\Extrafield\Admin\ExtrafieldAdminRepository;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;

class ExtrafieldAdminService extends ExtrafieldService
{
    use LoggedIn;

    protected $modelType = 'Admin';

    protected $extrafiledGroupAdminService;

    protected $search_keys = ['title', 'description'];

    public function __construct(
        ExtrafieldAdminRepository $repo,
        ExtrafieldGroupAdminService  $extrafieldGroupAdminService
    )
    {
        parent::__construct($repo);
        $this->repo = $repo;
        $this->extrafiledGroupAdminService = $extrafieldGroupAdminService;
    }


    public function import(Collection $input)
    {
        $file = $input->get('file');
        $string = file_get_contents($file->path());
        $extrafield_groups = json_decode($string, true);

        foreach ($extrafield_groups as $group) {
            $extrafields = $group['extrafields'];
            unset($group['extrafields']);
            $eg = $this->extrafiledGroupAdminService->store(collect($group));
            foreach ($extrafields as $extrafield) {
                $extrafield['group_id'] = $eg->id;
                $this->store(collect($extrafield));
            }
        }
        $this->response = [];
    }


    public function getItem($id)
    {
        $this->repo->with('group');

        $item = parent::getItem($id)->makeHidden(['group']);

        $item->group_title = $item->group->title;

        return $item;
    }


    public function store(Collection $input)
    {
        $this->extrafiledGroupAdminService->checkItem(collect(['id' => $input->get('group_id')]));

        $input = $this->setStoreDefaultInput($input);

        if ($input->has('extrafields')) {
            $extrafields = $input->get('extrafields');
            $extrafields_data = [];
            foreach ($extrafields as $extrafield) {
                $temp = [];
                $temp['id'] = $extrafield['id'];
                $temp['value'] = $extrafield['value'];
                if (isset($extrafield['params'])) {
                    $temp['params'] = $extrafield['params'];
                } else {
                    $temp['params'] = [];
                }
                $extrafields_data[] = $temp;
            }
            $input->put('extrafields', $extrafields_data);
        }

        //$this->checkAliasExist($input);

        if (InputHelper::null($input, 'id')) {
            return $this->add($input);
        } else {
            return $this->modify($input);
        }
    }

}
