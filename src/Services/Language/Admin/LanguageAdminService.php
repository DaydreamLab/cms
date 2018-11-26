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
        $result = parent::all();
        $languages = $result->groupBy('sef')->keys();

        $data = [];
        foreach ($languages as $language)
        {
            $temp = [];
            $temp['sef'] = $language;
            if ($temp['sef'] == 'tw')
            {
                $temp['title'] = '繁體中文';
            }
            elseif ($temp['sef'] == 'en')
            {
                $temp['title'] = 'English';
            }
            elseif ($temp['sef'] == 'cn')
            {
                $temp['title'] = '简体中文';
            }
            $data[] = $temp;
        }

        $this->status = Str::upper(Str::snake($this->type.'GetListSuccess'));
        $this->response = $data;

        return $data;
    }
}
