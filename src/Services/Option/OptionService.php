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
        $this->map['category']  = $categoryAdminService;
        $this->map['language']  = $languageAdminService;
        $this->map['viewlevel'] = $viewlevelAdminService;
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

        }

        $this->status = Str::upper(Str::snake($this->type.'GetListSuccess'));
        $this->response = $data;
        return true;
    }

}
