<?php

namespace DaydreamLab\Cms\Services\Language\Admin;

use DaydreamLab\Cms\Repositories\Language\Admin\LanguageAdminRepository;
use DaydreamLab\Cms\Services\Language\LanguageService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class LanguageAdminService extends LanguageService
{
    protected $type = 'LanguageAdmin';

    protected $search_keys = ['title', 'description'];

    public function __construct(LanguageAdminRepository $repo)
    {
        parent::__construct($repo);
    }


    public function getList(Collection $input)
    {
        $data = $this->findBy('state','=', 1);

        $this->status = Str::upper(Str::snake($this->type.'GetListSuccess'));
        $this->response = $data;

        return $data;
    }


    public function getTypeList($type)
    {
        $items = $this->getList();

        $items = $items->filter(function ($value, $key) use ($type){
            return $value->type == $type;
        });

        $this->response = $items->values();

        return $items->values();
    }

}
