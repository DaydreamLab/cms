<?php

namespace DaydreamLab\Cms\Services\Tag\Admin;

use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Tag\TagService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Helpers\InputHelper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class TagAdminService extends TagService
{
    protected $type = 'TagAdmin';

    public function __construct(TagAdminRepository $repo)
    {
        parent::__construct($repo);
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
            $input->put('alias', Str::lower(now()->format('Y-m-d-H-i-s')));
        }


        if (InputHelper::null($input, 'parent_id')) {
            $input->put('path', '/'.$input->get('alias'));
        }
        else {
            $parent = $this->find($input->parent_id);
            $input->put('path', $parent->path . '/' .$input->get('alias'));
        }


        if (InputHelper::null($input, 'language')){
            $input->forget('language');
            $input->put('language', 'All');
        }

        return parent::storeNested($input);
    }
}
