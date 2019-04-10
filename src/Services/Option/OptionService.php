<?php

namespace DaydreamLab\Cms\Services\Option;

use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;

class OptionService
{
    protected $type = 'Option';

    public $status;

    public $response;

    protected $map = [];

    public function __construct(CategoryAdminService $categoryAdminService,
                                LanguageAdminService $languageAdminService,
                                ViewlevelAdminService $viewlevelAdminService)
    {
        $this->map['category']      = $this->map['menuCategory'] = $this->map['moduleCategory'] = $categoryAdminService;
        $this->map['language']      = $languageAdminService;
        $this->map['viewlevel']     = $viewlevelAdminService;
        $this->map['extension']     = ['item', 'menu', 'module'];
        $this->map['content_type']  = ['article', 'item', 'link', 'menu', 'slideshow', 'timeline'];
    }


    public function mergeList(Collection $input)
    {
        $data = [];

        foreach ($input->types as $type)
        {
            $service = $this->map[$type];

            if ($type == 'category')
            {
                $data[$type] = $service->treeList('item');
            }
            elseif ($type == 'language')
            {
                $data[$type] = $service->getTypeList('content');
            }
            elseif ($type == 'viewlevel')
            {
                $data[$type] = $service->getList();
            }
            elseif ($type == 'menuCategory')
            {
                $data[$type] = $service->treeList('menu');;
            }
            elseif ($type == 'moduleCategory')
            {
                $data[$type] = $service->treeList('module');
            }
            elseif ($type == 'extension')
            {
                $data[$type] = $service;
            }
            elseif ($type == 'content_type')
            {
                $data[$type] = $service;
            }
        }

        $this->status = Str::upper(Str::snake($this->type.'GetListSuccess'));
        $this->response = $data;

        return true;
    }

}
