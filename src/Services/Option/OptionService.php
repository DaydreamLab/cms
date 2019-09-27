<?php

namespace DaydreamLab\Cms\Services\Option;

use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Services\Menu\Admin\MenuAdminService;
use DaydreamLab\Cms\Services\Module\Admin\ModuleAdminService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Services\Asset\Admin\AssetAdminService;
use DaydreamLab\User\Services\User\Admin\UserGroupAdminService;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class OptionService
{
    protected $type = 'Option';

    public $status;

    public $response;

    protected $map = [];

    public function __construct(CategoryAdminService $categoryAdminService,
                                LanguageAdminService $languageAdminService,
                                ViewlevelAdminService $viewlevelAdminService,
                                AssetAdminService $assetAdminService,
                                UserGroupAdminService $groupAdminService,
                                MenuAdminService $menuAdminService,
                                ExtrafieldGroupAdminService $extrafieldGroupAdminService,
                                ModuleAdminService $moduleAdminService,
                                SiteAdminService $siteAdminService)
    {
        $this->map['asset']                 = $assetAdminService;
        $this->map['extension']             = ['item, menu, module'];
        $this->map['extrafield_group']      = $extrafieldGroupAdminService;
        $this->map['item_article_category'] = $categoryAdminService;
        $this->map['item_category']         = $categoryAdminService;
        $this->map['item_content_type']     = ['article', 'item', 'link', 'menu', 'slideshow', 'timeline'];
        $this->map['language']              = $languageAdminService;
        $this->map['menu']                  = $menuAdminService;
        $this->map['menu_category']         = $categoryAdminService;
        $this->map['module']                = $moduleAdminService;
        $this->map['module_category']       = $categoryAdminService;
        $this->map['site']                  = $siteAdminService;
        $this->map['user_group']            = $groupAdminService;
        $this->map['viewlevel']             = $viewlevelAdminService;
    }


    public function mergeList(Collection $input)
    {
        $data = [];

        foreach ($input->get('types') as $type)
        {
            $service = $this->map[$type];

            if ($type == 'asset')
            {
                $data[$type] = $this->getOptionList($service, 'tree');
            }
            elseif ($type == 'extension')
            {
                $data[$type] = $service;
            }
            elseif ($type == 'extrafield_group')
            {
                $data[$type] = $this->getOptionList($service, 'list', [], ['extrafields']);
            }
            elseif ($type == 'item_article_category')
            {
                $data[$type] = $this->getOptionList($service, 'tree', ['extension' => 'item', 'content_type' => 'article']);
            }
            elseif ($type == 'item_category')
            {
                $data[$type] = $this->getOptionList($service, 'tree', ['extension' => 'item']);
            }
            elseif ($type == 'item_content_type')
            {
                $data[$type] = $service;
            }
            elseif ($type == 'language')
            {
                $data[$type] = $this->getOptionList($service, 'list', ['type' => 'content'], ['sef']);
            }
            elseif ($type == 'menu')
            {
                $data[$type] = $this->getOptionList($service, 'tree');
            }
            elseif ($type == 'menu_category')
            {
                $data[$type] = $this->getOptionList($service, 'tree', ['extension' => 'menu']);
            }
            elseif ($type == 'module')
            {
                $data[$type] = $this->getOptionList($service, 'list');
            }
            elseif ($type == 'module_category')
            {
                $data[$type] = $this->getOptionList($service, 'tree', ['extension' => 'module', 'without_root' => 1], ['alias']);
            }
            elseif ($type == 'site')
            {
                $data[$type] = $this->getOptionList($service, 'list', [], ['url']);
            }
            elseif ($type == 'user_group')
            {
                $data[$type] = $this->getOptionList($service, 'tree', ['without_root' => 1]);
            }
            elseif ($type == 'viewlevel')
            {
                $user = Auth::guard('api')->user();
                $data[$type] = $this->getOptionList($service, 'list', ['special_queries' => [['type'=> 'whereIn', 'key' => 'id', 'value' => $user->access_ids]]]);
            }
        }

        $this->status = Str::upper(Str::snake($this->type.'GetListSuccess'));
        $this->response = $data;

        return true;
    }

    /**
     * @param $service CategoryAdminService
     * @param $type string
     * @param array $extra_rules
     * @param array $extra_fields
     * @return mixed
     */
    public function getOptionList($service, $type, $extra_rules = [], $extra_fields = [])
    {
        $default_rules = array_merge($extra_rules, ['paginate' => false]);

        if ($type == 'tree')
        {
            $default_field = array_merge($extra_fields, ['id', 'tree_list_title']);

            return $service->search(Helper::collect($default_rules))//->toFlatTree()
                ->map( function($item, $key) use ($default_field){
                    return $item->only($default_field);
                });
        }
        else
        {
            $default_field = array_merge($extra_fields, ['id', 'title']);
            return $service->search(Helper::collect($extra_rules))
                ->map( function($item, $key) use ($default_field) {
                    return $item->only($default_field);
                });
        }
    }
}
