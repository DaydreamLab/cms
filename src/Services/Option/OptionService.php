<?php

namespace DaydreamLab\Cms\Services\Option;

use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Services\Language\Admin\LanguageAdminService;
use DaydreamLab\Cms\Services\Menu\Admin\MenuAdminService;
use DaydreamLab\Cms\Services\Module\Admin\ModuleAdminService;
use DaydreamLab\Cms\Services\ProductCategory\Admin\ProductCategoryAdminService;
use DaydreamLab\Cms\Services\Site\Admin\SiteAdminService;
use DaydreamLab\JJAJ\Database\QueryCapsule;
use DaydreamLab\JJAJ\Traits\LoggedIn;
use DaydreamLab\User\Services\Asset\Admin\AssetAdminService;
use DaydreamLab\User\Services\User\Admin\UserGroupAdminService;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Support\Collection;

class OptionService
{
    use LoggedIn;

    protected $modelName = 'Option';

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
                                ProductCategoryAdminService $productCategoryAdminService,
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
        $this->map['product_category']      = $productCategoryAdminService;
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
            $q = new QueryCapsule();
            $q = $q->where('paginate', 0);
            if ($type == 'asset') {
                $data[$type] = $this->getOptionList($service, 'tree', $q, []);
            } elseif ($type == 'extension') {
                $data[$type] = $service;
            } elseif ($type == 'extrafield_group') {
                $data[$type] = $this->getOptionList($service, 'list', $q, ['extrafields']);
            } elseif ($type == 'item_article_category') {
                $q = $q->where('extension', 'item')->where('content_type', 'article');
                $data[$type] = $this->getOptionList($service, 'tree', $q);
            } elseif ($type == 'item_category') {
                $q = $q->where('extension', 'item');
                $data[$type] = $this->getOptionList($service, 'tree', $q);
            } elseif ($type == 'item_content_type') {
                $data[$type] = $service;
            } elseif ($type == 'language') {
                $q = $q->where('type', 'content');
                $data[$type] = $this->getOptionList($service, 'list', $q, ['sef']);
            } elseif ($type == 'menu') {
                $data[$type] = $this->getOptionList($service, 'tree', $q);
            } elseif ($type == 'menu_category') {
                $q = $q->where('extension', 'menu');
                $data[$type] = $this->getOptionList($service, 'tree', $q);
            } elseif ($type == 'module') {
                $data[$type] = $this->getOptionList($service, 'list', $q);
            } elseif ($type == 'module_category') {
                $q = $q->where('extension', 'module')
                    ->where('title', '!=', 'ROOT');
                $data[$type] = $this->getOptionList($service, 'tree', $q , ['alias']);
            } elseif ($type == 'product_category') {

            } elseif ($type == 'site') {
                $data[$type] = $this->getOptionList($service, 'list', $q, ['url']);
            } elseif ($type == 'user_group') {
                $q = $q->where('title', '!=', 'ROOT');
                $data[$type] = $this->getOptionList($service, 'tree', $q);
            } elseif ($type == 'viewlevel') {
                $user = $this->getUser();
                $q = $q->whereIn('id', $user->accessIds);
                $data[$type] = $this->getOptionList($service, 'list', $q);
            }
        }

        $this->status = 'GetListSuccess';
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
    public function getOptionList($service, $type, $q = null, $extra_fields = [])
    {
        if ($type == 'tree') {
            $default_field = array_merge($extra_fields, ['id', 'tree_list_title']);
            return $service->search(collect(['q' => $q]))//->toFlatTree()
                ->map( function($item, $key) use ($default_field){
                    return $item->only($default_field);
                });
        } else {
            $default_field = array_merge($extra_fields, ['id', 'title']);
            return $service->search(collect(['q' => $q]))
                ->map( function($item, $key) use ($default_field) {
                    return $item->only($default_field);
                });
        }
    }
}
